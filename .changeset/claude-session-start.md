---
"@acmelabs/brain": minor
---

On Claude Code, a `SessionStart` hook gives each session the brain protocol, the full path of the `brain` CLI, and the `brain status` report with the text of `docs/STATUS.md`. It runs at startup, after `/clear` and after a compaction, and needs `bun` on `PATH`.
