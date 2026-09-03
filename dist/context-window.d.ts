import type { Agent } from '@deepseek-ai/dsh-agent';
import type { Context } from '@deepseek-ai/cordis';
import { type PromptAssembly } from '@deepseek-ai/dsh-system-prompt';
import { type ContextWindowBudgetDecision } from './context-window-budget.ts';
export declare const name = "@obelisk/dsh-obelisk-plugin/context-window";
export declare const inject: string[];
export interface Config {
    /** Defaults to the effective model maxTokens for the current request. */
    reminderThresholdTokens?: number;
    /** Defaults to the effective model maxTokens for the current request. */
    fallbackReserveTokens?: number;
    /** Defaults to the effective model maxTokens for the current request. */
    outputReserveTokens?: number;
}
/** Reject the one known competing automatic surface-pressure owner. */
export declare function assertCompatibleCompaction(ctx: Context): void;
/** Resolve current host pressure without scanning the session log. */
export declare function budgetDecision(ctx: Context, agent: Agent, config: Config, additionalTokens?: number): ContextWindowBudgetDecision | undefined;
/** Restrict one fallback request to the new_context capability and PTC transport. */
export declare function fallbackAssembly(ctx: Context, assembly: PromptAssembly, agent: Agent): PromptAssembly;
/** Register the opt-in prose handoff, pressure policy, and safe-boundary rollover path. */
export declare function apply(ctx: Context, config?: unknown): void;
