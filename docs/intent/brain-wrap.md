# Intent: brain as a wrapper around agent-skills

Confirmed by Peter on 2026-09-19 after an interview of eight questions.

- **Outcome:** brain is one public plugin for Claude Code, Codex CLI, Gemini CLI and
  Antigravity CLI. It carries agent-skills unchanged where no improvement applies, and where
  one does, enhances the addy skill under its own name (amended 2026-09-19, see below), adds matt's gap skills, keeps a CONTEXT.md glossary
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
| Capability map | six modules: upstream-sync, host-manifests, plain-talk, setup, lifecycle, evals | `spec/CAPABILITY-MAP.md`, approved 2026-09-19 |
| Scope of the wrap | addy's skills, references, agents and hooks are vendored; commands are seeded once and brain-owned | Peter: "not only the Addy skills, also commands, hooks, etc"; the `agent-skills:` namespace in addy's Claude commands |
| Releases and marketplace | changesets and the release workflow copied from acmelabs-15/ask-user-question: tag v<version>, GitHub release, moving latest; the entry in acmelabs-15/marketplace points at ref latest | Peter, 2026-09-19 |

## Lifecycle decisions, 2026-09-19

| Decision | Answer | Evidence |
|---|---|---|
| Entry points | commands as the entry points, skills as the discipline, as agent-skills does; Codex and Antigravity call skills by name | Peter: "should follow agent-skills lead" |
| Unit of integration | the improvement, not the skill: enhance an addy skill or combine skills into a new one; the best decision, not the easiest | Peter, verbatim in the session log |
| How an improvement is folded | one combined skill, seeded from addy's text under addy's name, matt's parts and the decisions folded in; the vendored copy leaves the take-list; sync --report tracks addy's later changes | Peter, after a written comparison of the three shapes |
| ask-user-question | evaluated like any other pack: kept, merged, split or improved; not pulled in as is | Peter; research RES-004 |
| Paths and a snippet in specs and tasks | stay, addy's way | conflict 1 |
| Refactor step | inside the red-green-refactor loop, addy's way | conflict 2 |
| Review result | five axes as parallel sub-agents, merged into one ranked list and one verdict | conflict 3 |
| Bug with no reproduction | stop, list the attempts, ask for what a feedback loop needs | conflict 4 |
| Multi-task build | one plan approval, then a clean context per task | conflict 5, after a re-pitch |
| More of matt | codebase-design, prototype and handoff vendored; triage and wayfinder wait for research RES-003 | Peter |
| Settled by standing rules | one question per call through the user-question tool; matt's frontier orders the questions; the spec and plan live in the repo, addy's tasks files, no tracker; commit per slice | Peter's CLAUDE.md and the setup spec |
| On-ramps | triage and wayfinder come in as brain-owned skills seeded from matt's text: the five documented defects fixed, grilling replaced by brain's interview and question rules, labels created on first use; setup-brain gains one tracker question with local markdown as the default; wayfinder asks one question at a time through the question tool | Peter, 2026-09-19, on RES-003 |
| ask-user-question ownership | seeded from acmelabs-15/ask-user-question at 6e9d8a7 and brain-owned from then; its final shape follows RES-004 | Peter, 2026-09-19 |
| ask-user-question shape | standalone skill, pointed at from the combined interview skill and every stage; rewritten from the 24 artifact files of Peter's repo, which he judges better than the skill they produced; proposed as a seventh module, question | Peter, 2026-09-19, on RES-004 |
| Router name | the routing skill is named using-brain, seeded from addy's using-agent-skills; every other agent-skills mention in brain-owned files names addy's pack and stays | Peter, 2026-09-19 |
