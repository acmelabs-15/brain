---
package: matt
path: external/implement.md
type: doc
bytes: 362825
unit: inv-matt-19
deprecated: false
aliases: []
memo_inputs:
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/implement.md

## Purpose — required, verbatim
> "Build a finished spec into code, test-first." — external/implement.md:24

## Design intent — required
Executes implementation for work that has already been decided upstream, consuming a ticket, a spec, or an agreed conversational plan without reopening decisions. Follows a five-beat execution rhythm: identifying seams, driving test-driven development via `/tdd` at those seams, typechecking and running isolated tests iteratively, running the full test suite once, and running `/code-review` before committing to the current branch. Strictly scopes each run to a single ticket (a tracer-bullet vertical slice fitting a single context window) to prevent context degradation and unverified batch changes.

## Phase — required
matt:The Main Flow

## Inputs — required
Issue tracker ticket (e.g. `#42`), finished specification file, or immediate conversational plan; repository branch context; pre-configured tracker credentials from `setup-matt-pocock-skills`.

## Outputs — required
A git commit on the current branch containing code, unit/integration tests, and typecheck verifications for the single ticket or spec slice.

## Invokes — required
- skill to-tickets — external/implement.md:30
- skill setup-matt-pocock-skills — external/implement.md:34
- skill tdd — external/implement.md:39
- skill code-review — external/implement.md:42
- skill to-spec — external/implement.md:72
- skill grill-with-docs — external/implement.md:72
- skill wayfinder — external/implement.md:74
- skill ask-matt — external/implement.md:75

## Invoked by — required
none

## Concepts named — required, verbatim
- `ticket` — external/implement.md:25 — used here
- `spec` — external/implement.md:25 — used here
- `disable-model-invocation` — external/implement.md:28 — used here
- `red-green` — external/implement.md:39 — used here
- `tracer-bullet` — external/implement.md:44 — defined here
- `vertical slices` — external/implement.md:44 — defined here
- `context window` — external/implement.md:44 — used here
- `pre-agreed seams` — external/implement.md:45 — defined here
- `seam` — external/implement.md:46 — defined here
- `main chain` — external/implement.md:71 — defined here

## Structure
- # The /implement Skill — external/implement.md:24
- ## What it does — external/implement.md:24
- ## When to reach for it — external/implement.md:27
- ## Prerequisites — external/implement.md:32
- ## What one run does — external/implement.md:35
- ## Pre-agreed seams — external/implement.md:45
- ## Common questions — external/implement.md:48
- ## It's working if — external/implement.md:62
- ## Where it fits — external/implement.md:70
- ## Related reading — external/implement.md:75
- ## Skill actions — external/implement.md:75

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/implement.md:24: External documentation subtitle defines skill as "Build a finished spec into code, test-first." whereas SKILL.md:3 defines description as "Implement a piece of work based on a spec or set of tickets."
- `missing-path` · external/implement.md:50: Skill lacks tracker lifecycle completion logic, ending at git commit without closing resolved issues or ticking acceptance criteria checkboxes.
- `script-bug` · external/implement.md:56: In-run invocation of `code-review` fails to inspect uncommitted changes when evaluating diffs against HEAD prior to the final commit.
- `script-bug` · external/implement.md:61: Fragile ticket argument parsing causes numeric arguments like `#2` in fresh sessions to resolve against unrelated workspace lists rather than tracker issues.
- `internal-contradiction` · external/implement.md:47: Directs agents to drive TDD at "pre-agreed seams" but provides no mechanism within the skill to actually establish or agree on seams before implementation starts.

## Observations
Enforces a strict one-ticket-per-session rule, rejecting batch processing or parallel subagent fan-outs across ticket queues to maintain context precision. Places `implement` as the fourth stage of the main chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`), directly bridging upstream specifications and test-driven code delivery.

## Context cost
362825 bytes, ~73000 tokens (HTML snapshot including full inline hydration payload).
