---
"@acmelabs/brain": minor
---

setup-brain now prepares a repo for the brain workspace. It checks for bun first, and writes `docs/agents/workspace.md` and a `docs/STATUS.md` seed beside `docs/agents/domain.md`. For Codex it writes the brain protocol block beside the plain-talk block. A re-run keeps the repo's folder paths and `max_parallel`, and never rewrites `docs/STATUS.md`. `setup-brain --check` reports drift and writes nothing.
