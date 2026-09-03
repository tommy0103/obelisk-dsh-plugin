export type DeepseekAssistantMessageKind = 'reasoning' | 'text' | 'tool_use';
/** Return the deterministic project discriminator used by every DeepSeek identity. */
export declare function deepseekProjectScope(cwd: unknown): string;
/** Return the canonical Obelisk session/member id inside one DeepSeek project scope. */
export declare function canonicalDeepseekTreeSessionId(nativeSessionId: string, scope: string): string;
/** Return one assistant uuid from an already-canonical DeepSeek member id. */
export declare function canonicalDeepseekAssistantMessageUuid(memberId: string, turn: unknown, step: unknown, kind: DeepseekAssistantMessageKind): string;
/** Return the canonical Obelisk assistant uuid for one DeepSeek tree member. */
export declare function canonicalDeepseekMemberAssistantMessageUuid(memberNativeSessionId: string, scope: string, turn: unknown, step: unknown, kind: DeepseekAssistantMessageKind): string;
