---
"@acmelabs/brain": minor
---

setup-brain now proposes `docs/agents/capabilities.md`, the file the protocol's capability check reads, and writes it after your yes. It proposes toolchain checks from `packageManager` and `engines` in `package.json`, a library's skills when an installed plugin is named after a dependency, and the MCP servers in the repo's config files for Claude Code, Codex, Gemini CLI and Antigravity. An existing `capabilities.md` is kept as it is; a re-run lists each proposed row it does not name yet.
