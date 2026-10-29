---
"@acmelabs/brain": minor
---

On Claude Code, a `SessionStart` hook gives each session the brain protocol, the full path of the `brain` CLI, and the `brain status` report with the text of `docs/STATUS.md`. It runs at startup, after `/clear`, after a compaction and when you resume a session, and needs `bun` on `PATH`. On resume it gives the path and a new report only, since the session already holds the protocol.
