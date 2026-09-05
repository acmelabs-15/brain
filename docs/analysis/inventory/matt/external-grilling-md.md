---
package: matt
path: external/grilling.md
type: external-doc
bytes: 361073
unit: inv-matt-17
deprecated: false
aliases: []
memo_inputs:
  - {path: external/grilling.md, sha256: a7f0caf032b3ef6b5155abce4f2a3fe6b5ecb72b5f977bb7d88dc112ed72b384}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/grilling.md

## Purpose — required, verbatim
> "The interview other skills run to stress-test a plan." — external/grilling.md:2

## Design intent — required
Serves as the public documentation and catalog landing page for the `grilling` skill on Matt Pocock's AI Hero platform (aihero.dev/skills-grilling). It provides a reference explanation of the core interview loop that stress-tests a plan, decision, or idea before anyone implements it. The page articulates the mechanism around three foundation ideas: modeling the subject as a design tree of branching decisions, batching non-dependent decisions at the frontier into rounds with recommended options, and maintaining an operational division between facts (retrieved autonomously by sub-agents without stalling unrelated questions) and decisions (reserved exclusively for human confirmation). Furthermore, it clarifies the architecture of the skills suite by designating `grilling` as a model-invoked primitive underlying front doors like `grill-me`, `grill-with-docs`, `wayfinder`, and `triage`, while documenting workarounds such as a sequential questioning opt-out via `CLAUDE.md` and guidance against premature implementation. Without this page, developers and autonomous agents using the package would lack the definitive structural explanation of frontier batching, recommendation ergonomics, and primitive-to-wrapper composition.

## Phase — required
cross-phase

## Inputs — required
- Subject plan or idea: "stress-tests a plan, a decision, or an idea before anyone acts on it." — external/grilling.md:25
- Autonomous or manual invocation: "reaches for it on its own when a task fits." — external/grilling.md:28
- Facts retrieved from environment: "to go and find out rather than asking you." — external/grilling.md:35
- User responses to frontier rounds: "Two questions never share a round if one depends on the other;" — external/grilling.md:26
- Global configuration opt-out: "Add this to your global" — external/grilling.md:42
- User confirmation: "it will not act on what you agreed until you confirm you have reached a shared understanding." — external/grilling.md:35

## Outputs — required
- Formatted interview questions with recommendations: "Inside a round every question arrives in a fixed shape:" — external/grilling.md:34
- Confirmation gate agreement: "A confirmation gate exists precisely for this: the skill is not finished when the frontier empties, it is finished when you say the understanding is shared." — external/grilling.md:50
- Artifact outputs produced when run via wrapper skills: "and ADRs as it goes" — external/grilling.md:30
- For pure documentation page: none

## Invokes — required
- command /grilling — external/grilling.md:28
- skill grill-me — external/grilling.md:30
- skill grill-with-docs — external/grilling.md:30
- skill wayfinder — external/grilling.md:30
- skill prototype — external/grilling.md:30
- skill triage — external/grilling.md:46
- skill domain-modeling — external/grilling.md:56
- skill to-spec — external/grilling.md:70
- skill improve-codebase-architecture — external/grilling.md:70
- skill ask-matt — external/grilling.md:70

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `grilling` — external/grilling.md:25 — defined here
- `design tree` — external/grilling.md:25 — defined here
- `round` — external/grilling.md:26 — defined here
- `frontier` — external/grilling.md:26 — defined here
- `facts` — external/grilling.md:35 — defined here
- `decisions` — external/grilling.md:35 — defined here
- `sub-agent` — external/grilling.md:35 — used here
- `shared understanding` — external/grilling.md:35 — used here
- `confirmation gate` — external/grilling.md:50 — defined here
- `primitive` — external/grilling.md:70 — defined here
- `grill-me` — external/grilling.md:30 — used here
- `grill-with-docs` — external/grilling.md:30 — used here
- `wayfinder` — external/grilling.md:30 — used here
- `prototype` — external/grilling.md:30 — used here
- `triage` — external/grilling.md:46 — used here
- `domain-modeling` — external/grilling.md:56 — used here
- `to-spec` — external/grilling.md:70 — used here
- `improve-codebase-architecture` — external/grilling.md:70 — used here
- `ask-matt` — external/grilling.md:70 — used here
- `batch-grill-me` — external/grilling.md:45 — used here
- `CLAUDE.md` — external/grilling.md:42 — used here
- `AGENTS.md` — external/grilling.md:50 — used here
- `CONTEXT.md` — external/grilling.md:30 — used here
- `ADR` — external/grilling.md:39 — used here
- `ADRs` — external/grilling.md:30 — used here
- `decision tickets` — external/grilling.md:30 — used here
- `recommendation` — external/grilling.md:34 — defined here
- `Reference Skills` — external/grilling.md:5 — used here
- `The Main Flow` — external/grilling.md:5 — used here
- `Shaping` — external/grilling.md:5 — used here
- `Upkeep` — external/grilling.md:5 — used here
- `Productivity Skills` — external/grilling.md:5 — used here

## Structure
- # The /grilling Skill
- ## What it does
- ## When to reach for it
- ## The round, the frontier, and who decides
- ## What lives here and what lives in the wrappers
- ## Common questions
- ## It's working if
- ## Where it fits
- ## Install the skills
- ## Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — external/grilling.md:1 — Snapshot of external documentation page that is not directly referenced by relative path from repository source files in sources/matt/.
- doc-drift — external/grilling.md:49 — Premature building defect: "It ran out of questions and started building." — external/grilling.md:49 reported where non-frontier or low-effort models skip the confirmation gate and jump straight to code implementation.
- doc-drift — external/grilling.md:51 — Autonomous self-answering defect: "It answered its own questions instead of asking me." — external/grilling.md:51 occurring when the interview primitive runs within task-resolution frames that models mistake for license to decide autonomously.
- doc-drift — external/grilling.md:58 — Cross-harness dependency loading failure: "A real and unfixed rough edge, reported across" — external/grilling.md:58 harnesses where wrapper skills fail to cause named dependency skills to load at runtime.

## Observations
- The page establishes `grilling` as a primitive: "not a step you schedule: the single source of truth for the interview technique," — external/grilling.md:70, serving as the shared interview mechanism for all composing skills.
- The questioning ergonomics use emoji prefixes so that users can answer full rounds simply by number.
- The frontier concept groups independent questions into rounds, compressing typical sessions from ~13 individual questions into ~3 rounds without sacrificing dependency ordering.
- A global override is officially documented for users who prefer sequential interactions: "When grilling, ask one question at a time." — external/grilling.md:43 in `CLAUDE.md`.
- Explicit question limits are intentionally rejected: "Can I cap the number of questions?" — external/grilling.md:53 and "No, and a cap is deliberately out of scope." — external/grilling.md:54, advising prompt steering or task decomposition instead.
- Documents standalone CLI skill installation: "npx skills@latest add mattpocock/skills --skill=grilling" — external/grilling.md:24.

## Context cost
361073 bytes (~90268 tokens) on disk; 0 files loaded. As a fetched web snapshot of aihero.dev, the vast majority of file size consists of Next.js hydration payload and script bundles rather than markdown content.
