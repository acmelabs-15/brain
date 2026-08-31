---
name: choosing-a-skill
description: "Use to navigate the installed skill ecosystem — questions about the tooling itself, not requests to run it. Covers: which skill or command to run for a given job; why a command behaves unexpectedly, including where one command writes its output and where the next one looks for it (/build not finding the plan /plan wrote, AskUserQuestion erroring before it draws); diagnosing a slow or broken symptom to the right workflow rather than the closest-named skill; how to identify skill lineages by folder structure; resolving name collisions between local and plugin skills; where the personas live and how /ship and /webperf fan out; and what order to run skill chains like grilling → to-spec → to-tickets. Do NOT use for: running or walking through a skill the user has already named; authoring a skill (skill-creator); writing CLAUDE.md (writing-for-agents); design vocabulary questions (codebase-design); git branching and release conventions (git-workflow-and-versioning); or listing the installed skill set."
---

# Choosing a skill

The collection installed under `~/.claude/` is a merge of libraries that were never reconciled.
They overlap, they contradict each other, and a few describe behaviour they no longer have. This
file is the routing decision: which one to reach for, which to skip, and what breaks.

Peter's standing preferences are already in context from `~/CLAUDE.md` and are not repeated here.

Whatever a route demands — a measurement before a bottleneck is named, a red loop before a cause, a
collision surfaced before a pick — has to be visible in the reply, not only in your notes. An
unaided agent will state the rule where it reasons and then break it in its first sentence to the
user. Say what you commit to and mark the rest conditional: a numbered list of five skills reads as
five commitments, where one skill plus "the next steps depend on what this shows" is a plan.

## Contents

- **Routing** — matching a skill to the size of the job, and the chains worth running end to end
- **Commands and personas** — the eight lifecycle commands and the four fan-out personas
- **The three lineages** — predicting a skill's behaviour from the library it came from
- **Name collisions** — where a local skill and a plugin skill share a name and differ
- **Where tickets live** — the tracker resolution order the five ticket skills share

## Routing — match the skill to the size of the job

These skills are mostly written as if every task were a feature. Most tasks are not, and the failure
mode is ceremony: an interview, a spec, a ticket breakdown and a five-axis review on a change that
needed twenty minutes. Skipping a skill is a normal decision, not a violation.

| The job | Route |
| --- | --- |
| Answer a question, read code, one-line fix | **Nothing.** Just do it. |
| A contained change you already understand | `test-driven-development`, then commit |
| Something is broken and you don't know why | `diagnosing-bugs` |
| A real feature, spec unclear | `grilling` → `to-spec` → `to-tickets` → `implement-spec` |
| Restructuring a module | `codebase-design` → `improve-codebase-architecture` → `grilling` → `domain-modeling` |
| Enforcing deep-module boundaries in a TS repo | `setup-ts-deep-modules` (installs dependency-cruiser rules) |
| Designing a recurring process to delegate | `loop-me` — a `grilling` variant, below |
| Work bigger than one session | `wayfinder` |
| An in-progress merge conflict | `resolving-merge-conflicts` |
| An `AskUserQuestion` call is itself the deliverable | `ask-user-question` |
| Authoring or editing a skill | `skill-creator` — at `~/Dev/ACMElabs/plugin-kit/skills/skill-creator/`; **not installed**, so the Skill tool cannot invoke it by name (the same-named official-marketplace entry is not installed either). Its tooling runs standalone via Bun. |
| Writing a `CLAUDE.md` or `AGENTS.md` | `writing-for-agents` |

`using-agent-skills` opens with a 16-step "typical sequence for a complete feature". It is an
inventory of the library, not a recommendation — no real task runs all sixteen. Route from the table.

### Running each chain

**`grilling` → `to-spec` → `to-tickets` → `implement-spec`.** `grilling` works a design tree in
rounds, asking the whole **frontier** at once with a recommended answer on each question, then
waiting. It finds facts itself via sub-agents and puts only *decisions* to the user; it is done when
the frontier is empty. `to-spec` then synthesises with no further interview. `to-tickets` cuts
**tracer bullets** with blocking edges. `implement-spec` runs implementer sub-agents across the
ticket frontier in parallel worktrees.

**`codebase-design` → `improve-codebase-architecture` → `grilling` → `domain-modeling`.** Load
`codebase-design` first: it is pure vocabulary, and it keeps every later suggestion in the same
words. `improve-codebase-architecture` then scans hot spots from `git log`, writes an HTML report to
`$TMPDIR`, and asks which candidate to pursue. It applies the **deletion test**: if deleting a module
makes complexity vanish it was a pass-through; if complexity reappears across N callers it was
earning its keep.

**`diagnosing-bugs`** runs six phases, and Phase 1 *is* the skill: build a **tight loop** that goes
**red** on this specific bug. Its completion criterion is one command you have already run at least
once — red-capable, deterministic, fast, agent-runnable. No red-capable command, no Phase 2.

The gate is on the **hypothesis**, not on the fix. Deferring only the patch while opening with "this
is almost always a race" and a ranked list of four candidates has already lost the phase: the loop
now exists to confirm a theory rather than to find one, and every later observation is read through
it. Name candidate mechanisms as things the loop should force, not as a likelihood ordering.

An intermittent bug makes this sharper, not looser. A one-in-five failure is a **rate to drive to
certainty**, not evidence for a mechanism — a fix that looks right has an 80% chance of appearing to
work on the next load. Drive the rate up until the loop is debuggable — `diagnosing-bugs` treats a
50% flake as workable and 1% as not — rather than catching one failure and reasoning from the single
capture.
Where the environment cannot be driven, say so and stop rather than falling back on reading the code
and reasoning about ordering, which is the failure the phase exists to prevent wearing a fallback's
clothes.

**A performance regression is a diagnosis, not an optimisation.** "Slow since the last deploy"
genuinely matches `performance-optimization`, whose description lists performance regressions as a
trigger — so this is a real collision to resolve rather than a coincidence to dismiss. That skill is
Lineage A: a checklist to consult once you know where the time goes, not a workflow to run at a
symptom. Reaching for it first produces a list of
things that are commonly slow, which is hypothesis-first reasoning wearing a checklist for cover.
Route to `diagnosing-bugs` — it covers performance regressions explicitly — and let the deploy
boundary be the thing you bisect against rather than the cause you assume. Consult the checklist
after the loop localises the problem.

**`wayfinder`** charts a map of decision tickets, one ticket per session. It **plans rather than
does**; the pull to just build the thing is the signal you have reached the edge of the map and
should hand off.

**Callers of `grilling`:** `grill-me` calls it; `grill-with-docs` calls it + `domain-modeling`;
`wait-what` asks for a re-pitch in Simplified Technical English using the repo's `CONTEXT.md`.
`loop-me` is a **variant**, not an alias — same discipline, but its only output is workflow specs in
`workflows/*.md` and it carries its own vocabulary (a **loop** is a recurring pattern worth
delegating; a **workflow** is the spec of one; a **trigger** fires each run; a **checkpoint** is
where a human verifies; a **brief** is the decision-ready summary a checkpoint presents). It reads
`NOTES.md` for the user's world and is done only when an implementer could build the spec without
asking anything.

## Commands and personas

`~/.claude/commands/` holds the only installed commands, Lineage A's lifecycle:
**`/spec` → `/plan` → `/build` → `/test` → `/review` → `/ship`**, with `/code-simplify` and
`/webperf` alongside. Each is a thin entry point that invokes the matching skill with a short brief
— reach for one to get that skill's workflow without describing it. The routing table above still
governs: where the chain is ceremony for the job, skipping it is a normal decision.

- **`/build auto` is the one with real machinery** — it requires a spec at a known path, demands a
  clean `git status`, generates the plan if missing, takes a single approval, then runs every task
  test-driven with one commit each, stopping on a failure or anything irreversible. The rest are
  16–32 lines, except `/ship` (72), which carries the fan-out orchestration described below.
- **`/spec` and `/plan` write where the project says**, not to `SPEC.md` and `tasks/plan.md`.
  Saving a plan elsewhere means passing that path to `/build`, which looks in `tasks/plan.md`.
- **`/code-simplify` routes to the plugin** (see Name collisions) — it verifies between edits; the
  local skill only advises.

**`/ship` and `/webperf` fan out to the personas** in `~/.claude/agents/`: `code-reviewer`,
`security-auditor`, `test-engineer`, `web-performance-auditor`. `/ship` dispatches the first three
**in one assistant turn** so they run in parallel, then merges their reports itself into a GO/NO-GO
with a mandatory rollback plan; `/webperf` runs the fourth alone, in Deep mode when a Lighthouse or
CrUX artifact exists and Quick mode otherwise, labelling unmeasured findings `potential impact`.

**Personas report; the calling command merges.** The fan-out stays flat — a persona wanting a deeper
pass says so in its report, and the command decides. Patterns:
`~/.claude/references/orchestration-patterns.md`. A project-level `.claude/agents/<name>.md`
overrides the user-level copy, so a repo can customise any persona.

## The three lineages

Telling them apart is the fastest way to predict how a skill will behave. 45 of the 46 installed
skills fall into three lineages; the forty-sixth is this one.

### Lineage A — "Agent Skills" (phase-based reference library)

**24 skills**, 180–500 lines, auto-invokable, organised by SDLC phase. **Spot one by** its compound
descriptive name (`security-and-hardening`, `ci-cd-and-automation`) and its length.

**Character:** encyclopedic checklists. Strong on *what to consider*, weak on *what to do next*.

**How to use them:** as **reference you consult**, not workflows you execute. Pull the one relevant
section, apply it, move on. Reading `security-and-hardening` end-to-end before touching an auth handler is a poor trade; reading
its OWASP section is a good one. Judge a candidate by what it produces — advice to apply, or a
procedure that runs — rather than by how long it is; a length is a symptom of the kind, not the test.

**Best of the bunch:** `test-driven-development`, `incremental-implementation`,
`api-and-interface-design`, `security-and-hardening`.

### Lineage B — Matt Pocock family (vocabulary + workflow)

**20 skills**, terse. 12 carry `disable-model-invocation: true` (user-invoked only); the eight that
do not — `grilling`, `diagnosing-bugs`, `codebase-design`, `code-review`, `research`,
`domain-modeling`, `resolving-merge-conflicts`, `writing-for-agents` — can also auto-trigger, and
they include the ones this file routes to most often. **Spot one by**
the `agents/openai.yaml` file in its directory, or its verb-shaped name (`grilling`, `to-tickets`,
`wayfinder`).

**Character:** each one installs a **precise vocabulary** and then runs a **loop** on it. Shorter,
sharper, more opinionated, and they compose — they call each other by name.

**How to use them:** as **workflows you execute**, step by step. These are the ones worth following
literally.

**The vocabulary is the point.** Use these words verbatim in your own output — they are the terms,
where "component", "service", "boundary" and "API" are the generic words they replace:

- **seam** — where you can change behaviour without editing in that place
- **deep module** — a lot of behaviour behind a small interface
- **depth** — leverage at the interface (behaviour exercised per unit of interface learned)
- **frontier** — the set of items whose prerequisites are all settled, so they're takeable now
- **tracer bullet** — a narrow but complete vertical slice through every layer
- **tight loop** — a fast, deterministic pass/fail signal that goes **red** on the actual bug
- **fog of war** — what you can tell is coming but can't yet state precisely
- **push right** — defer the human checkpoint as far as it will go (`loop-me` only; the rest of
  the list recurs across the lineage)

`frontier` recurs in `grilling`, `to-tickets`, `implement-spec`, and `wayfinder`. It is the same
concept in all four. That consistency is deliberate and worth preserving in your own output.

### Lineage C — `ask-user-question` (one tool, in depth)

**1 skill**, and the only one here about a *tool call* rather than a phase of work. **Spot it by**
being the sole entry with a `references/` directory beside `SKILL.md` and `examples.md`.

**Character:** a composition guide opening with a **Gotchas** block — tool behaviours that defy a
reasonable guess, which is why they sit inline there rather than behind a pointer. Two decide most
calls: `(Recommended)` on the first option's label is the *entire* recommendation mechanism (there is
no `recommended` field, and prose around the call never reaches the reader), and a call whose
question texts or option labels collide is rejected before the dialog draws.

**How to use it:** read the Gotchas when composing any call that matters, then walk its numbered
steps — whether to ask at all, one call or a sequence, question text, options, the one
recommendation, what you have not checked, layout. Its `references/` files are disclosed behind
pointers; open the one you need.

## Name collisions with installed plugins

Several plugin skills share names with local ones and do **different** things. Disambiguate before
invoking.

**A bare name in this table is ambiguous by construction.** `code-review` names a local skill *and*
is the prefix of the plugin's `code-review:code-review`; `code-simplification` and
`code-simplifier:code-simplifier` are different artifacts with near-identical names. Reaching one of
these by its unqualified name, or comparing it only against same-lineage neighbours like
`code-review-and-quality`, resolves an easier question than the one in front of you and lands on the
wrong side without ever noticing the fork. Name both candidates in full, qualified form before
picking. Note also that `code-review:reviewer` is the plugin's internal sub-agent, not the plugin
skill — meeting it is a sign you are inside the right namespace and still have not found
`code-review:code-review`.

| Ask | Local skill | Plugin skill | Which to use |
| --- | --- | --- | --- |
| "review this" | `code-review` — two fixed axes (Standards + Spec), parallel sub-agents, Fowler smell baseline; wants an originating issue or spec, and skips the Spec axis without one | `code-review:code-review` — resolves a named scope (PR ref, branch, diff range or path), plans one row per review cell, then dedupes, ranks and triages, reporting the cells it never reached | Local when there is a spec to review against, since that is the axis it adds. Plugin otherwise, and whenever coverage of what went unreviewed matters. Both take a branch diff — the plugin is not repo-only. |
| "simplify this" | `code-simplification` — a reference that advises | `code-simplifier:code-simplifier` — agent that runs tests between each edit and reverts breakage | **Plugin.** It verifies; the local one only advises. |
| "research this" | `research` — background agent, primary sources, writes a Markdown file | `skills:research` — heavyweight PRD + ANALYSIS pipeline | **Local**, unless the user explicitly wants the `skills@ACMElabs` pipeline. |

The `skills@ACMElabs` plugin also ships a complete parallel lifecycle — `/plan`, `/research`,
`/decisions`, `/spec`, `/build`, `/review`, `/end` — built around a Brain knowledge graph with
JIRA sync and formal gates. **Pick one track per project and stay on it** — the local skills are the
lighter track, the plugin the heavyweight, high-ceremony one.

## Where tickets live

Five skills create or read tickets — `code-review`, `to-spec`, `to-tickets`, `triage`, `wayfinder`.
They resolve the tracker the same way, first hit wins: the repo's own `docs/agents/issue-tracker.md`;
then the repo's evident convention (an existing labelling scheme, a numbered docs series tickets
plainly belong to, a `CLAUDE.md` naming where work items live); then the local-markdown default in
`~/.claude/references/issue-tracker.md` — one file per ticket under
`.scratch/<feature-slug>/issues/<NN>-<slug>.md`, blockers first, each declaring what blocks it.

That reference also carries the canonical triage roles (`needs-triage`, `needs-info`,
`ready-for-agent`, `ready-for-human`, `wontfix`) and, for `wayfinder`, the local-markdown form of
every wayfinding operation — map, child ticket, blocking, frontier query.

Ask which tracker a repo uses only when the answer changes what you would write and the first two
steps leave it open. Otherwise take the default and say where you saved things.
