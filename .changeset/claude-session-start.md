---
"@acmelabs/brain": minor
---

On Claude Code, a `SessionStart` hook gives each session the brain protocol, the full path of the `brain` CLI, and the `brain status` report with the text of `docs/STATUS.md`. It runs whenever a session starts: at startup, after `/clear`, after a compaction, and when you resume or fork a session. It needs `bun` on `PATH`. On resume and on a fork it gives the path and a new report only, since the session already holds the protocol.
