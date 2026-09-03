import type { RelatedFile } from './context-window-related-files.ts';
export declare const CONTEXT_WINDOW_OBELISK_SCOPE = "Scope Obelisk recovery to the supplied `session_id` and use `context(message_uuid)` at the previous-window boundary; do not search global history or other sessions.";
/** Stable model guidance for prose handoff and scoped Obelisk recovery. */
export declare const CONTEXT_WINDOW_GUIDANCE: string;
export declare const CONTEXT_WINDOW_REMINDER: string;
export declare const CONTEXT_WINDOW_FALLBACK: string;
/** Render the only model-visible message retained across an explicit rollover. */
export declare function renderContextHandoff(sessionId: string, messageUuid: string, handoff: string, relatedFiles?: readonly RelatedFile[]): string;
/** Render a host-authored recovery message when the model did not produce a handoff. */
export declare function renderMissingContextHandoff(sessionId: string, messageUuid: string): string;
