import type { Context } from '@deepseek-ai/cordis';
/** Cordis plugin name used by Loader diagnostics. */
export declare const name = "@obelisk/dsh-obelisk-plugin";
/** The standard DSH skill registry is the plugin's only dependency. */
export declare const inject: string[];
/**
 * Register the plugin-owned skill as a runtime contribution. DSH's standard
 * precedence keeps project skills above it and user-global skills below it.
 */
export declare function apply(ctx: Context): void;
