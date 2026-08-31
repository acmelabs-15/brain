# Measured facts, routing behaviour and eval lessons from the founding day — analysis

> **Analysis** · 2026-08-31 · status: current · acmelabs-15/sessions SES-001 and SES-002 · the
> facts ANA-001 and ADR-001/002 rest on that are recorded nowhere else in this repo.

## Question

What did the founding conversation measure or establish that a later conversation would otherwise
re-derive — about how Claude Code resolves skills and commands, about skill frontmatter, about the
session skill's evals and description, and about the toolset's current shape?

## Findings

### Invocation and resolution (Claude Code 2.1.251, measured headless in clean scratch repos)

- **A plugin skill is reachable only namespaced.** `/session` → `/session isn't available in this
  environment.`; `/session-start` → `Unknown command: /session-start`; `/sessions:session start`
  and `/sessions:session-start` run the whole procedure. So a plugin's `commands/` aliases buy a
  `/` menu slot, never brevity (`/sessions:session-start` is longer than `/sessions:session start`).
  Claude Code's own `skills.md` (line 390) says a unique plugin skill also gets the bare form; the
  measurement contradicts it. Recorded in acmelabs-15/sessions `.claude/CLAUDE.md` and PLAN-001
  Part 1 Task 3 (`7bd6782`).
- **A personal skill or command resolves bare** (`~/.claude/commands/plan.md` is `/plan`); a
  personal skill named `session` would *shadow* a plugin's bare name (skills.md line 240) — the
  shim once proposed would have blocked what it meant to provide. This is why ADR-002's open point
  (bare `/session`, `/plan` under a `brain:` namespace) is real.
- **The stale-cache non-cause.** `~/.claude/plugins/cache/ACMElabs/session/0.1.0/` is the
  pre-rename plugin (description still `start | record | end`), not installed, not the reason the
  bare form failed. Delete it (PLAN-001 Part 6 Task 1).
- **`/plan` is claimed twice on this machine**: `~/.claude/commands/plan.md` (personal, bare) and
  the Brain-knowledge-graph plugin's `skills:plan` (`/skills:plan`, its own PLAN notes with
  phase-keyed parts). Peter: the latter is not a design input. Its `installed_plugins.json`
  entry points at a cache directory that does not exist (`plugins/cache/ACMElabs/skills/0.1.0`)
  while its skills still load — from the marketplace source path, presumably; not investigated.

### SKILL.md frontmatter (from Claude Code's docs, via the `claude-code-guide` agent, 2026-08-31)

- The recognised fields: `name`, `description`, `when_to_use`, `argument-hint`, `arguments`,
  `disable-model-invocation`, `user-invocable`, `allowed-tools`, `disallowed-tools`, `model`,
  `effort`, `context`, `agent`, `background`, `hooks`, `paths`, `shell`, `metadata`, `license`,
  `compatibility`. **There is no dependency field** (`dependencies`, `requires`, `skills`, `uses`
  do not exist). Unrecognised keys are **silently ignored** by Claude Code (rejected only by the
  Skills API / claude.ai upload); `claude plugin validate --strict` does not catch them.
- `allowed-tools` cannot scope the Skill tool to one skill (`Skill(x)` is not valid syntax; only
  `Bash(...)` scopes). The documented way one skill reaches another is an instruction in the body
  to call the Skill tool with `skill: <name>`.
- **Skill descriptions are all in context**; a model-invocable skill can be reached from any
  skill without being named. `ask-user-question` sets neither `disable-model-invocation` nor
  `user-invocable`, so its routing was available all along — the decisions written as prose
  bullets that day were a behavioural miss, not a routing gap. Hence the first bullet of
  `~/CLAUDE.md` §1 (2026-08-31) and no "invoke ask-user-question" pointer in the session skill.
- `disable-model-invocation: true` is what keeps Matt Pocock's user-invoked skills out of the
  model's skill list ("thirteen of twenty-two"); every copy under `~/.claude/skills` is ours to
  edit, so the flag can be removed where a procedure must reach a skill (ADR-001 F5(c)).

### The session skill's evals and description (the old layout — history for the redo)

Disclosure measurements on plugin-kit's harness, Sonnet, fixture = env-setup at `c89ae34` with
SES-006 closed, SES-007 open (docs review, README pass done, ADR pass not started) and an
unrecorded `fix(finder)` commit at HEAD: disclosure-1 **35/54**, -2 **36/54**, -3 **37/54**,
-4 **35/54**. Results and transcripts: acmelabs-15/sessions `skills/session/evals/results/`.

Failure clusters, each with what fixed it or did not:

| Cluster | Runs | What was learned |
| --- | --- | --- |
| The reply wrapped in prose instead of the template alone | 5 | "the whole reply" at the template and again at Done-when fixed the closing note (eval 4 → 6/6); a `Departures:` line gave the prose somewhere to go |
| `entry` opened a new session instead of appending to the open one | 2/2 in three iterations | step 7's table said "no open Goal covers the work → open" and the correcting clause sat below it; moving the rule into the table did **not** fix it (disclosure-4 2/7, 4/7) because the join rule needed evidence — that SES-007's own work found the fix — which the fixture's Narrative did not give. The fixture now says so; unmeasured. Lesson: **a rule that keys on a judgement needs a fixture that grounds the judgement** |
| The closing note over 60 words | 4/4 → 0 | fixed by the two "entire reply" statements |
| `references/session-log.md` never read (recall 0/2) | — | no scenario needed it; `expects_references` cleared; the pointer names its two situations |
| An Outcome claiming work the transcript lacks | 1/2 | "only work the log or this transcript shows"; then the attribution rule ("Peter reports … not verified here") |
| Both runs stopped and asked instead of closing (eval 3) | 2/2 | the prompt contradicted the fixture; `close` had no stop condition while `entry` had one — the stop condition was added (`976c5ff`) and the eval's prompt kept the conflict on purpose, with an expectation admitting both correct outcomes |
| The Findings line missed another session's placeholders (eval 1) | 2/2 | step 5 names them now |

Two fixture facts for the redo: eval 4 (leave) measures an act ADR-001 removed; eval 3's premise
(the user claims work the log does not show) is the case the stop condition and the attribution
rule exist for and is worth keeping in the new set. `make-fixture.ts` resets `main` to the pin
with `git switch -C` (`703ff81`); the env-setup clone already carries `main`.

Trigger measurements (`evals/results/trigger/tiers-2/`, 3 runs per query, 23 queries): the
description fired **2/10** should-fire on Haiku, **5/10** on Sonnet; **13/13** hard negatives
declined on both. Every miss is a tool situation in the user's words — "the append says up to
date", "the gate keeps printing NOT ready", "a skeleton for a commit I didn't make", "we just
tagged v0.4.0 — the released marker", "was X actually verified", "stepping away — make sure
nothing slipped", "catch me up", "do the log entry", "three commits without logging". The
description loop (`description-2`) adopted nothing: 6/9 vs 7/9 held-out was one query inside
timeout noise, nine timed-out queries unattributable (plugin-kit T-10). The clause naming those
situations was never tested; the namespaced-form sweep took the description from 1,024 to 1,011
characters by dropping the prefix on three mode words, leaving 13 characters of headroom. The new
description in PLAN-001 Part 1 Task 4 carries those phrases; measure it before keeping it.

### The toolset as it stands (what ADR-002 moves)

`~/.claude/skills` holds 46 skills: 24 from Addy Osmani's agent-skills, 20 from Matt Pocock's
skills, 2 local (`choosing-a-skill`, `ask-user-question` — the latter is also the plugin). Matt's
promoted set on this machine: present and identical — `diagnosing-bugs`, `grill-with-docs`,
`grilling`, `resolving-merge-conflicts`, `wait-what`, `writing-for-agents`, `loop-me`,
`setup-ts-deep-modules`; present with local edits (the CONTEXT.md read rule, ADR location,
domain-modeling routing — `~/.claude/skills/LOCAL-CHANGES.md`) — `code-review`,
`codebase-design`, `domain-modeling`, `implement`, `implement-spec`,
`improve-codebase-architecture`, `research`, `to-spec`, `to-tickets`, `triage`, `wayfinder`,
`grill-me`; **missing** — `ask-matt`, `tdd`, `prototype`, `handoff`, `to-questionnaire`, `wizard`,
`teach`, `setup-matt-pocock-skills`, and his `in-progress`/`misc` buckets. Peter: of the missing,
at most `handoff`, not now (ANA-001 F8). Commands: `build`, `code-simplify`, `plan`, `review`,
`ship`, `spec`, `test`, `webperf`. Agents: `code-reviewer`, `security-auditor`, `test-engineer`,
`web-performance-auditor`. References: `accessibility-checklist`, `definition-of-done`,
`issue-tracker`, `observability-checklist`, `orchestration-patterns`, `performance-checklist`,
`project-docs-conventions`, `security-checklist`, `testing-patterns`. Reference checkouts the
copies drift from: `~/Dev/reference/addy-osmani-agent-skills`, `~/Dev/reference/matt-pocock-skills`
(v1.2.3).

Duplicated shapes found across them (PLAN-001 Part 5 Task 2): the ADR template
(`documentation-and-adrs` vs `domain-modeling/ADR-FORMAT.md`), the spec template
(`spec-driven-development` vs `to-spec`), the ticket shape (`to-tickets` vs
`references/issue-tracker.md`). The plan template had three homes until `session init` stopped
writing `docs/plan/README.md` (`f80af22`); nothing generates a repo's `docs/plan/README.md` now —
`project-docs-conventions` carries the directory-README template to copy.

## Refuted

- "The bare `/session` works interactively when nothing else claims the name" (env-setup ADR-023,
  Consequences) — measured false; superseded by ADR-001/002, not edited.
- "Moving the rehydration walk loses its measurement" — plugin-kit's harness takes `--skill-path`;
  the measurement points at the new home.
- "The stale `session` plugin cache caused the bare-form failure" — it is not installed.

## Unverifiable

- Why the Brain plugin's skills load with a missing cache directory.
- The hop rate of `/plan` → `session` at the top of a real conversation, until the new layout is
  measured.

## Consequences

- PLAN-001 Part 1 Task 4 (the description carries the tool situations); Part 6 Task 2 (the redo
  keeps eval 3's premise, drops eval 4, grounds any judgement rule in the fixture).
- ADR-002's open point on bare names is decided with these facts in hand.
