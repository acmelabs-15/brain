---
"@acmelabs/brain": minor
---

The plain-talk text follows the install's scope. Antigravity gets it as an always-on plugin rule, `rules/talk-plain.md`. `setup-brain` writes the block into the Codex global `AGENTS.md` once per machine and no longer touches a repo's `AGENTS.md`, `CLAUDE.md` or `GEMINI.md`. brain carries its own `AGENTS.md` with the repo rules and the block, imported from `.claude/CLAUDE.md` and listed for Gemini in `.gemini/settings.json`.
