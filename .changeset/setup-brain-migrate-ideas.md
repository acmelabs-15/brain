---
"@acmelabs/brain": minor
---

setup-brain's migrate mode turns a brain 0.8 repo's intent docs into ideas. setup-brain asks, one doc per question, which files in `docs/intent/` become ideas; each one it picks moves with `git mv` to `docs/ideas/IDEA-NNN-<name>.md` and gains frontmatter only. It also asks whether to remove setup-brain 0.8's `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md`, and removes them with `git rm` only after a yes.
