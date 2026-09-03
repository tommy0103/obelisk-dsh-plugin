// Copyright (C) 2026 tommy0103 and contributors.
// SPDX-License-Identifier: AGPL-3.0-only
import { canonicalDeepseekMemberAssistantMessageUuid, canonicalDeepseekTreeSessionId, deepseekProjectScope, } from './deepseek-identity.js';
async function rootNativeSessionId(ctx, session, signal) {
    const scope = deepseekProjectScope(session.header.cwd);
    const seen = new Set([session.id]);
    let header = session.header;
    let persisted;
    while (header.parentSession !== undefined) {
        signal?.throwIfAborted();
        const parentId = header.parentSession;
        if (seen.has(parentId))
            throw new Error('context-window: cyclic DSH parentSession lineage');
        seen.add(parentId);
        const live = ctx.sessions.get(parentId);
        if (live !== undefined && deepseekProjectScope(live.header.cwd) === scope) {
            header = live.header;
        }
        else {
            const persistence = ctx.get('sessionPersistence');
            if (persistence === undefined) {
                throw new Error('context-window: persisted parent lineage requires sessionPersistence');
            }
            persisted ??= new Map((await persistence.list(signal)).map(candidate => [
                `${deepseekProjectScope(candidate.cwd)}\0${candidate.id}`,
                candidate,
            ]));
            const stored = persisted.get(`${scope}\0${parentId}`);
            if (stored === undefined) {
                throw new Error(`context-window: parent session ${JSON.stringify(parentId)} is unavailable`);
            }
            header = stored;
        }
        if (deepseekProjectScope(header.cwd) !== scope) {
            throw new Error('context-window: DSH parentSession lineage crosses project scopes');
        }
    }
    return header.id;
}
/** Resolve the canonical Obelisk root-tree session id for one live DSH member. */
export async function recoverySessionId(ctx, session, signal) {
    const scope = deepseekProjectScope(session.header.cwd);
    return canonicalDeepseekTreeSessionId(await rootNativeSessionId(ctx, session, signal), scope);
}
/** Derive root-tree and member-message recovery anchors without waiting for an Obelisk refresh. */
export async function recoveryAnchors(ctx, session, turn, step, kind = 'tool_use', signal) {
    const scope = deepseekProjectScope(session.header.cwd);
    return {
        sessionId: await recoverySessionId(ctx, session, signal),
        messageUuid: canonicalDeepseekMemberAssistantMessageUuid(session.id, scope, turn, step, kind),
    };
}
