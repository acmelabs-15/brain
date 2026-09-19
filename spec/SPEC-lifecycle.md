# Spec: lifecycle

Module `lifecycle` of `CAPABILITY-MAP.md`. Depends on `upstream-sync` and `setup`, both
built. Status: draft for review, 2026-09-19.

## Objective

brain's six stages behave the same in four hosts and carry the best of both packs:
addy's discipline, matt's improvements where the research found them, the glossary step,
and one question at a time through the question tool.

The shape follows agent-skills: commands are the entry points, skills are the discipline
(Peter, 2026-09-19). Claude Code and Gemini CLI get the commands. Codex and Antigravity
users call the skills by name, as addy's own docs accept, and the README maps each
command to its skills.

Where matt improves an addy skill, the improvement is folded into one combined skill
seeded from addy's text under addy's name. The vendored copy leaves the take-list, so one
text carries the stage and every host routes to it. `sync --report` shows addy's later
changes for a hand merge.

Users: everyone who installs brain. Every decision below traces to `docs/intent/brain-wrap.md`
and the research notes RES-002 to RES-004.

## The stages

| Stage | Command | Combined skill, seeded under addy's name | What is folded in, from RES-002 |
|---|---|---|---|
| Define | `spec` | `interview-me`; `spec-driven-development` | interview: one question per call through ask-user-question, matt's frontier as the order, facts fetched by a sub-agent while the round goes on, domain-modeling after each round, want-versus-should probe kept, the confidence number and predict-three test replaced by the frontier-empty test and an explicit yes; spec: a seam step after the assumptions list, User Stories, Out of scope and Prior-art tests added to the template, glossary words, the prototype detour through `prototype` and `handoff` when a question needs a runnable answer |
| Plan | `plan` | `planning-and-task-breakdown` | a prefactor task first when the read finds one; the wide-refactor rule, expand then migrate in batches then contract; the three approval questions, granularity, edges, merge or split, through the question tool; glossary words; paths and files kept (conflict 1) |
| Build | `build` | `incremental-implementation`; `test-driven-development` | seams asked through the question tool before the first test; the deep-module vocabulary of `codebase-design`; the tautological-test anti-pattern; a mockability reference; glossary words in test names; refactor inside the loop (conflict 2); commit per slice; review at the end; `build auto` runs one plan approval, then a clean context per task (conflict 5) |
| Verify | `test` | `debugging-and-error-recovery` | matt's feedback-loop gate as Phase 1 with the ten loop constructions and the tighten step; secrets redacted first; three to five ranked falsifiable hypotheses shown to the user; tagged logs, one variable at a time, the performance branch; the regression test only at a correct seam; cleanup lines; a bug with no loop stops and asks for what a loop needs (conflict 4); the human-in-the-loop script shipped beside the skill |
| Review | `review` | `code-review-and-quality` | Step 0: fixed point, three-dot diff, ref and non-empty check, spec lookup order, standards files; five axes as parallel sub-agents, each with the diff and its section, under a 400-word cap; scope creep as a correctness finding; the twelve Fowler smells in the architecture brief; repo standard over baseline, tooling-enforced rules skipped; one merged ranked list and one verdict (conflict 3); severity labels plus a hard-violation or judgement-call tag |
| Ship | `ship` | none; addy's `shipping-and-launch` stays vendored | no matt overlap |
| Routing | none | `using-agent-skills` | the phase-boundary tree and the smart-zone rule as a reference; stateful interview when a repo is present; `setup-brain` named as the precondition; the two on-ramps in the tree |

`constraints`, `webperf` and `code-simplify` stay addy's commands with only the namespace
changed. `context-engineering`, `source-driven-development`, `doubt-driven-development`,
`frontend-ui-engineering`, `api-and-interface-design`, `browser-testing-with-devtools`,
`code-simplification`, `security-and-hardening`, `performance-optimization`,
`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`,
`documentation-and-adrs`, `observability-and-instrumentation`, `shipping-and-launch`,
`constraint-driven-development`, `idea-refine` and `using-agent-skills`' siblings stay vendored
and unchanged.

## brain-owned skills beside the combined ones

| Skill | Origin | State after this module |
|---|---|---|
| `ask-user-question` | seeded from Peter's repo | the decision mechanism every stage names; its rewrite is the proposed `question` module |
| `triage` | seeded from matt | the five documented defects fixed; grilling replaced by the interview rules; labels created in the tracker on first use; the agent brief keeps addy's files list |
| `wayfinder` | seeded from matt | same fixes; one question per call through the question tool (Peter); the map hands off to `spec` |
| `setup-brain` | brain | gains one tracker question, GitHub, GitLab or local markdown, local by default, and writes `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md` through its script |
| `domain-modeling`, `wait-what`, `writing-for-agents`, `codebase-design`, `prototype`, `handoff` | vendored from matt | unchanged |

## Commands

The nine seeded Claude command files and the nine TOML files carry the same composition:
call the stage's combined skill by its `brain:` name, then the stage's orchestration, as
addy's commands do today. `build auto` is the one command with new mechanics: after one
plan approval it hands each task to a sub-agent with the task text, the spec section and
the build skill name, in a clean context, and stops on a failed test, a spec gap or a
one-way step. On a host without sub-agents the command says to clear between tasks.

## Standing rules every combined skill states once

- A decision that is the user's goes through the host's user-question tool, one question per
  call, composed with the `ask-user-question` skill. Small reversible choices stay with the
  agent and are stated with their reason.
- Domain words come from `CONTEXT.md` through `docs/agents/domain.md`; a missing term is a
  gap for `domain-modeling`.
- The spec and the plan live in the repo: `spec/` or `SPEC.md`, `tasks/plan.md`,
  `tasks/todo.md`. A tracker, when setup chose one, holds issues, not the plan.

## Tech Stack

Bun 1.4.0 for the two checks; skills and commands are Markdown and TOML.

## Commands

```
bun run sync -- --report                 # what addy changed in a seeded skill or command since its seed
bun run lifecycle:check                  # every skill reference in a command or skill resolves; user-invoked flags agree across hosts
bun run check                            # all gates, lifecycle:check included
```

## Project Structure

```
.claude/commands/*.md                    nine commands, brain-owned
commands/*.toml                          nine commands for Gemini and Antigravity, brain-owned
skills/<addy name>/                      combined skills, seeded, brain-owned: interview-me, spec-driven-development,
                                         planning-and-task-breakdown, incremental-implementation, test-driven-development,
                                         debugging-and-error-recovery, code-review-and-quality, using-agent-skills
skills/debugging-and-error-recovery/scripts/hitl-loop.template.sh
references/brain/mockability.md          adapted from matt's tdd mocking notes, MIT
references/brain/phase-boundaries.md     adapted from matt's ask-matt reference, MIT
scripts/lifecycle/check-refs.ts
scripts/lifecycle/__tests__/check-refs.test.ts
upstream.json                            except list on the skills take; seed list per combined skill
```

## Code Style

Skills: addy's anatomy, Overview, When to Use, Process, Common Rationalizations, Red Flags,
Verification, kept where the seed has it; matt's parts folded into the matching section, not
appended at the end. Plain sentences, one rule stated once, no em-dashes. Every combined
skill's frontmatter keeps addy's `name`; the `description` names the folded triggers.

## Testing Strategy

- `check-refs.ts`, `bun:test`: parses every command and skill for `brain:<name>` and
  `Skill tool with "<name>"` references and fails on one that does not resolve to
  `skills/<name>/SKILL.md`; checks that a skill with `disable-model-invocation: true` also
  has `policy.allow_implicit_invocation: false` in `agents/openai.yaml`, and the reverse.
- The behaviour of the combined skills is the `evals` module's job: one case per stage.
- `sync -- --report` must run clean after the seeds, then report addy's later changes.

## Boundaries

- **Always:** seed before editing; fold a matt part into the section it belongs to; state a
  rule once; run `lifecycle:check` in CI; keep addy's skill names.
- **Ask first:** a folded rule that contradicts a decision in `docs/intent/brain-wrap.md`;
  a new skill name; a change to a stage's command name.
- **Never:** edit a vendored skill; keep both a combined skill and its vendored original; put
  the composition only in a command file where Codex cannot see it.

## Success Criteria

1. `lifecycle:check` exits 0: every reference resolves and every user-invoked flag agrees across hosts.
2. `sync -- --check` exits 0 with the eight combined skills absent from the vendored set, and `sync -- --report` lists no change at the seed commit.
3. In Claude Code, `/brain:spec`, `/brain:plan`, `/brain:build`, `/brain:test`, `/brain:review` each invoke their combined skill. Verified by the `evals` module's lifecycle cases.
4. In Codex, `$interview-me` runs the combined interview and asks through `request_user_input`, one question per call. Manual, recorded on the Codex install page.
5. Every conflict in RES-002 has one rule in one combined skill, and the other rule is absent from brain's catalogue.

## Proposed change to the capability map

A seventh module, `question`: the rewrite of `ask-user-question` from the 24 artifact files
in Peter's repo, with a short description, evidence per rule, honest host limits, and
brain's rules folded in. It depends on nothing and `lifecycle` points at it by name, so it
can be built before or after this module. Research note RES-005 is being written for it.

## Open Questions

1. `build auto` in Gemini and Antigravity: neither has a documented sub-agent tool in the
   docs read so far. The command says to clear between tasks there. Unverified until run.
2. Whether Claude Code lets a combined skill's `scripts/` file be executed from the plugin
   cache with the plugin root variable, as `setup-brain` assumes. The setup run settles it.
