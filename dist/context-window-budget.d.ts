export interface ContextWindowBudgetPolicy {
    reminderThresholdTokens: number;
    fallbackReserveTokens: number;
    outputReserveTokens: number;
}
export interface ContextWindowBudgetInput {
    contextWindow: number;
    totalTokens: number;
    explicitRolloverPending: boolean;
    reminderClaimed: boolean;
    fallbackClaimed: boolean;
    policy: ContextWindowBudgetPolicy;
}
export type ContextWindowBudgetDecision = {
    kind: 'continue';
    baseRemainingTokens: number;
    hardRemainingTokens: number;
} | {
    kind: 'remind';
    baseRemainingTokens: number;
    hardRemainingTokens: number;
} | {
    kind: 'fallback';
    hardRemainingTokens: number;
} | {
    kind: 'rollover';
    reason: 'model' | 'hard-limit';
};
/** Resolve one post-step action from host-measured pressure and durable claims. */
export declare function decideContextWindowBudget(input: ContextWindowBudgetInput): ContextWindowBudgetDecision;
