import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Basic configuration - can be extended with caching strategies later
  // For example:
  // - incrementalCache: r2IncrementalCache (for R2 caching)
  // - tagCache: kvTagCache (for KV tag cache)
  // - queue: doQueue (for Durable Objects queue)
});
