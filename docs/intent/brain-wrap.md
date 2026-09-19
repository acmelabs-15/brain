# Intent: brain as a wrapper around agent-skills

Confirmed by Peter on 2026-09-19 after an interview of eight questions.

- **Outcome:** brain is one public plugin for Claude Code, Codex CLI, Gemini CLI and
  Antigravity CLI. It carries agent-skills unchanged, adds matt's gap skills, folds
  matt's improvements into brain's own lifecycle skills, keeps a CONTEXT.md glossary
  through domain-modeling, talks plain on every turn, and asks every user decision
  through ask-user-question.
- **User:** anyone who installs it. Peter first, on all four hosts.
- **Why now:** the two earlier takes (branches `lifecycle` and `v2`) rebuilt the
  lifecycle from analysis. This take wraps the shipped packs instead.
- **Success:** one install per host; the same skill catalogue in all four; an addy
  update is a SHA bump and a sync; plain talk is measured by an eval, not assumed.
- **Constraint:** brain never edits a vendored file. Bun only. MIT licence, release
  tags, an install page per host.
- **Out of scope:** rjm; the `lifecycle` and `v2` branches; hosts beyond the four;
  editing addy's or matt's files in place.

## Decisions taken during the interview

| Decision | Answer | Evidence |
|---|---|---|
| Branch base | empty orphan branch `wrap`, worktree `../brain-wrap` | Peter: a completely fresh take |
| How brain carries addy's skills | pin a SHA in `upstream.json`, a Bun sync script copies listed folders into a flat `skills/`; CI fails on drift | `docs/research/RES-001-wrap-layout.md` |
| Plain talk on every turn | one source text, rendered per host: Claude output style with `force-for-plugin`, Gemini context file, an AGENTS.md block written by a brain setup skill for Codex and Antigravity | RES-001 § What each host reads |
| matt's share | gap skills vendored unchanged; improvements from overlapping skills folded into brain's own lifecycle skills | Peter, question 7 |
| ask-user-question | vendored from acmelabs-15/ask-user-question by the same pin and sync; the decision mechanism in every brain skill | it carries Codex and Gemini contracts the other packs lack |
| Who installs | anyone | Peter, question 5 |

## Superseded during the interview

- "Depend on the agent-skills plugin" (question 1). Dropped when the four-host
  constraint arrived: only Claude Code supports plugin dependencies.

## Decisions after the interview

| Decision | Answer | Evidence |
|---|---|---|
| Capability map | six modules: upstream-sync, host-manifests, plain-talk, setup, lifecycle, evals | `CAPABILITY-MAP.md`, approved 2026-09-19 |
| Scope of the wrap | addy's skills, references, agents and hooks are vendored; commands are seeded once and brain-owned | Peter: "not only the Addy skills, also commands, hooks, etc"; the `agent-skills:` namespace in addy's Claude commands |
| Releases and marketplace | changesets and the release workflow copied from acmelabs-15/ask-user-question: tag v<version>, GitHub release, moving latest; the entry in acmelabs-15/marketplace points at ref latest | Peter, 2026-09-19 |
