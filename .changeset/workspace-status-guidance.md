---
"@acmelabs/brain": minor
---

Move status and session-recovery instructions into the workspace document. Startup and resume follow that procedure, and setup updates installed copies while retaining each repo's settings.

**Breaking:** remove the standalone status skill, including skill-only invocation on Codex and Antigravity. Ask for status in chat or follow the workspace procedure instead. Claude Code keeps `/brain:status` as a thin command, Gemini keeps `/status`, and the `brain status` CLI is unchanged.
