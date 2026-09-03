import { z } from 'zod';
export declare const RELATED_FILE_ROLES: readonly ["spec", "decision", "implementation", "test", "handoff", "other"];
export declare const relatedFileSchema: z.ZodObject<{
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
}, z.core.$strict>;
export type RelatedFile = z.infer<typeof relatedFileSchema>;
/** Reject ambiguous or workspace-escaping references before rollover commits them. */
export declare function validateRelatedFiles(files: unknown): asserts files is readonly RelatedFile[] | undefined;
