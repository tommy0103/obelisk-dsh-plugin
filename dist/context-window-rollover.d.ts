import type { Agent, PreStepDecision } from '@deepseek-ai/dsh-agent';
import type { Context } from '@deepseek-ai/cordis';
import type { Session } from '@deepseek-ai/dsh-session';
import type { ContextWindowBudgetDecision } from './context-window-budget.ts';
import type { PendingRollover } from './context-window-state.ts';
import type { RelatedFile } from './context-window-related-files.ts';
export type ContextRolloverTrigger = {
    kind: 'model';
    rootCallId: string;
} | {
    kind: 'hard-limit';
};
/** Flush one context-window mutation and latch failures until a later pre-step retry. */
export declare function flushContextWindowState(ctx: Context, session: Session): Promise<void>;
/** Retry a previously failed rollover flush before any later request work runs. */
export declare function ensureContextWindowFlushed(ctx: Context, agent: Agent, signal?: AbortSignal): Promise<void>;
declare module '@deepseek-ai/dsh-llm' {
    interface MessageSourceMap {
        'obelisk-context-pressure': {
            kind: 'obelisk-context-pressure';
            phase: 'reminder' | 'fallback';
            generation: number;
        };
        'obelisk-context-handoff': {
            kind: 'obelisk-context-handoff';
            trigger: ContextRolloverTrigger;
            handoffStatus: 'present' | 'missing';
            sessionId: string;
            previousContextMessageUuid: string;
            relatedFiles?: readonly RelatedFile[];
        };
    }
}
export declare function contextPressureMessage(phase: 'reminder' | 'fallback', generation: number): {
    content: {
        type: "text";
        text: string;
    }[];
    source: {
        kind: "obelisk-context-pressure";
        phase: "fallback" | "reminder";
        generation: number;
    };
} & Pick<import("@deepseek-ai/dsh-llm").UserMessage, "role" | "id">;
/** Replace the complete active surface with the model-authored prose handoff. */
export declare function applyExplicitRollover(ctx: Context, agent: Agent, pending: PendingRollover, signal?: AbortSignal): Promise<void>;
/** Replace the complete active surface with a host-authored recovery instruction. */
export declare function applyForcedRollover(ctx: Context, agent: Agent, signal?: AbortSignal): Promise<void>;
/** Apply rollover or add one durable pressure instruction at the pre-step boundary. */
export declare function handlePreStep(ctx: Context, agent: Agent, signal: AbortSignal, budget: ContextWindowBudgetDecision | undefined, next: () => Promise<PreStepDecision>): Promise<PreStepDecision>;
/** Keep the current user turn alive long enough to apply a forced rollover. */
export declare function queueForcedRolloverStep(agent: Agent): void;
