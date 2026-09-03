// Copyright (C) 2026 tommy0103 and contributors.
// SPDX-License-Identifier: AGPL-3.0-only
import { createHash } from 'node:crypto';
import { isAbsolute, normalize } from 'node:path';
function normalizeObservedCwd(cwd) {
    if (typeof cwd !== 'string' || !cwd.trim() || !isAbsolute(cwd))
        return null;
    return normalize(cwd);
}
/** Return the deterministic project discriminator used by every DeepSeek identity. */
export function deepseekProjectScope(cwd) {
    const normalized = normalizeObservedCwd(cwd) ?? (typeof cwd === 'string' ? cwd : '');
    return createHash('sha256').update('deepseek-cwd-v1\0').update(normalized).digest('hex');
}
/** Return the canonical Obelisk session/member id inside one DeepSeek project scope. */
export function canonicalDeepseekTreeSessionId(nativeSessionId, scope) {
    return `deepseek:${encodeURIComponent(nativeSessionId)}:${scope}`;
}
/** Return one assistant uuid from an already-canonical DeepSeek member id. */
export function canonicalDeepseekAssistantMessageUuid(memberId, turn, step, kind) {
    return `${memberId}:t${turn}:s${step}:${kind}`;
}
/** Return the canonical Obelisk assistant uuid for one DeepSeek tree member. */
export function canonicalDeepseekMemberAssistantMessageUuid(memberNativeSessionId, scope, turn, step, kind) {
    return canonicalDeepseekAssistantMessageUuid(canonicalDeepseekTreeSessionId(memberNativeSessionId, scope), turn, step, kind);
}
