import type { Context } from '@deepseek-ai/cordis';
import type { Session } from '@deepseek-ai/dsh-session';
export interface ContextRecoveryAnchors {
    sessionId: string;
    messageUuid: string;
}
/** Resolve the canonical Obelisk root-tree session id for one live DSH member. */
export declare function recoverySessionId(ctx: Context, session: Session, signal?: AbortSignal): Promise<string>;
/** Derive root-tree and member-message recovery anchors without waiting for an Obelisk refresh. */
export declare function recoveryAnchors(ctx: Context, session: Session, turn: number, step: number, kind?: 'reasoning' | 'text' | 'tool_use', signal?: AbortSignal): Promise<ContextRecoveryAnchors>;
