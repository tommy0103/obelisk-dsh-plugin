import type { SessionEvent } from '@deepseek-ai/dsh-session';
import { z } from 'zod';
declare const candidateSchema: z.ZodObject<{
    rootCallId: z.ZodString;
    handoff: z.ZodString;
    relatedFiles: z.ZodArray<z.ZodObject<{
        path: z.ZodString;
        reason: z.ZodString;
        role: z.ZodEnum<{
            spec: "spec";
            decision: "decision";
            implementation: "implementation";
            test: "test";
            handoff: "handoff";
            other: "other";
        }>;
    }, z.core.$strict>>;
    turn: z.ZodNumber;
    step: z.ZodNumber;
}, z.core.$strict>;
export type PendingRollover = z.infer<typeof candidateSchema>;
declare const stateSchema: z.ZodObject<{
    generation: z.ZodNumber;
    calls: z.ZodRecord<z.ZodString, z.ZodObject<{
        rootCallId: z.ZodString;
        handoff: z.ZodString;
        relatedFiles: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            reason: z.ZodString;
            role: z.ZodEnum<{
                spec: "spec";
                decision: "decision";
                implementation: "implementation";
                test: "test";
                handoff: "handoff";
                other: "other";
            }>;
        }, z.core.$strict>>;
        turn: z.ZodNumber;
        step: z.ZodNumber;
    }, z.core.$strict>>;
    rootCalls: z.ZodRecord<z.ZodString, z.ZodObject<{
        turn: z.ZodNumber;
        step: z.ZodNumber;
    }, z.core.$strict>>;
    ptcCalls: z.ZodRecord<z.ZodString, z.ZodObject<{
        rootCallId: z.ZodString;
        handoff: z.ZodString;
        relatedFiles: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            reason: z.ZodString;
            role: z.ZodEnum<{
                spec: "spec";
                decision: "decision";
                implementation: "implementation";
                test: "test";
                handoff: "handoff";
                other: "other";
            }>;
        }, z.core.$strict>>;
        turn: z.ZodNumber;
        step: z.ZodNumber;
    }, z.core.$strict>>;
    ptcSettled: z.ZodRecord<z.ZodString, z.ZodObject<{
        rootCallId: z.ZodString;
        handoff: z.ZodString;
        relatedFiles: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            reason: z.ZodString;
            role: z.ZodEnum<{
                spec: "spec";
                decision: "decision";
                implementation: "implementation";
                test: "test";
                handoff: "handoff";
                other: "other";
            }>;
        }, z.core.$strict>>;
        turn: z.ZodNumber;
        step: z.ZodNumber;
    }, z.core.$strict>>;
    pending: z.ZodOptional<z.ZodObject<{
        rootCallId: z.ZodString;
        handoff: z.ZodString;
        relatedFiles: z.ZodArray<z.ZodObject<{
            path: z.ZodString;
            reason: z.ZodString;
            role: z.ZodEnum<{
                spec: "spec";
                decision: "decision";
                implementation: "implementation";
                test: "test";
                handoff: "handoff";
                other: "other";
            }>;
        }, z.core.$strict>>;
        turn: z.ZodNumber;
        step: z.ZodNumber;
    }, z.core.$strict>>;
    reminderClaimed: z.ZodBoolean;
    fallbackClaimed: z.ZodBoolean;
}, z.core.$strict>;
export type ContextWindowState = z.infer<typeof stateSchema>;
declare module '@deepseek-ai/dsh-session-projection/types' {
    interface SessionProjectionStateMap {
        obeliskContextWindow: ContextWindowState;
    }
}
/** Fold existing native tool facts and committed handoff sources into rollover state. */
export declare const contextWindowProjectionDefinition: {
    key: "obeliskContextWindow";
    stateVersion: number;
    stateSchema: z.ZodObject<{
        generation: z.ZodNumber;
        calls: z.ZodRecord<z.ZodString, z.ZodObject<{
            rootCallId: z.ZodString;
            handoff: z.ZodString;
            relatedFiles: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                reason: z.ZodString;
                role: z.ZodEnum<{
                    spec: "spec";
                    decision: "decision";
                    implementation: "implementation";
                    test: "test";
                    handoff: "handoff";
                    other: "other";
                }>;
            }, z.core.$strict>>;
            turn: z.ZodNumber;
            step: z.ZodNumber;
        }, z.core.$strict>>;
        rootCalls: z.ZodRecord<z.ZodString, z.ZodObject<{
            turn: z.ZodNumber;
            step: z.ZodNumber;
        }, z.core.$strict>>;
        ptcCalls: z.ZodRecord<z.ZodString, z.ZodObject<{
            rootCallId: z.ZodString;
            handoff: z.ZodString;
            relatedFiles: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                reason: z.ZodString;
                role: z.ZodEnum<{
                    spec: "spec";
                    decision: "decision";
                    implementation: "implementation";
                    test: "test";
                    handoff: "handoff";
                    other: "other";
                }>;
            }, z.core.$strict>>;
            turn: z.ZodNumber;
            step: z.ZodNumber;
        }, z.core.$strict>>;
        ptcSettled: z.ZodRecord<z.ZodString, z.ZodObject<{
            rootCallId: z.ZodString;
            handoff: z.ZodString;
            relatedFiles: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                reason: z.ZodString;
                role: z.ZodEnum<{
                    spec: "spec";
                    decision: "decision";
                    implementation: "implementation";
                    test: "test";
                    handoff: "handoff";
                    other: "other";
                }>;
            }, z.core.$strict>>;
            turn: z.ZodNumber;
            step: z.ZodNumber;
        }, z.core.$strict>>;
        pending: z.ZodOptional<z.ZodObject<{
            rootCallId: z.ZodString;
            handoff: z.ZodString;
            relatedFiles: z.ZodArray<z.ZodObject<{
                path: z.ZodString;
                reason: z.ZodString;
                role: z.ZodEnum<{
                    spec: "spec";
                    decision: "decision";
                    implementation: "implementation";
                    test: "test";
                    handoff: "handoff";
                    other: "other";
                }>;
            }, z.core.$strict>>;
            turn: z.ZodNumber;
            step: z.ZodNumber;
        }, z.core.$strict>>;
        reminderClaimed: z.ZodBoolean;
        fallbackClaimed: z.ZodBoolean;
    }, z.core.$strict>;
    init: () => ContextWindowState;
    apply: (state: NoInfer<{
        generation: number;
        calls: Record<string, {
            rootCallId: string;
            handoff: string;
            relatedFiles: {
                path: string;
                reason: string;
                role: "spec" | "decision" | "implementation" | "test" | "handoff" | "other";
            }[];
            turn: number;
            step: number;
        }>;
        rootCalls: Record<string, {
            turn: number;
            step: number;
        }>;
        ptcCalls: Record<string, {
            rootCallId: string;
            handoff: string;
            relatedFiles: {
                path: string;
                reason: string;
                role: "spec" | "decision" | "implementation" | "test" | "handoff" | "other";
            }[];
            turn: number;
            step: number;
        }>;
        ptcSettled: Record<string, {
            rootCallId: string;
            handoff: string;
            relatedFiles: {
                path: string;
                reason: string;
                role: "spec" | "decision" | "implementation" | "test" | "handoff" | "other";
            }[];
            turn: number;
            step: number;
        }>;
        reminderClaimed: boolean;
        fallbackClaimed: boolean;
        pending?: {
            rootCallId: string;
            handoff: string;
            relatedFiles: {
                path: string;
                reason: string;
                role: "spec" | "decision" | "implementation" | "test" | "handoff" | "other";
            }[];
            turn: number;
            step: number;
        } | undefined;
    }>, event: SessionEvent) => ContextWindowState;
};
export {};
