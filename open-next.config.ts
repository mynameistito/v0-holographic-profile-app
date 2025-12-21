import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Basic configuration - can be extended with caching strategies later
  // For example:
  // - incrementalCache: r2IncrementalCache (for R2 caching)
  // - tagCache: kvTagCache (for KV tag cache)
  // - queue: doQueue (for Durable Objects queue)
  // Note: The process.env.TURBOPACK warning during build is harmless.
  // It occurs because esbuild replaces process.env.TURBOPACK with a constant,
  // but Turbopack runtime code assigns to it. This doesn't affect functionality.
  // The assignment happens at runtime and works correctly despite the warning.
});
