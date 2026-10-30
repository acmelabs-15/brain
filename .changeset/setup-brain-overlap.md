---
"@acmelabs/brain": minor
---

setup-brain now reports where a hand-written `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` repeats the rules that brain's protocol carries, or the facts that `docs/agents/capabilities.md` holds. It lists each line as covered, moved or orphan. It removes only the `AGENTS.md` sections you pick, keeps their orphan lines, and writes that change as a commit of its own. When other people commit to the repo, it recommends report-only. It never edits `CLAUDE.md` or `GEMINI.md`. `capabilities.md` also takes a toolchain check that `AGENTS.md` names with its version, such as `` `bun --version` (1.4.4 or later) ``.
