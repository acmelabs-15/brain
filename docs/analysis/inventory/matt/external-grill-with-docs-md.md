---
package: matt
path: external/grill-with-docs.md
type: external-doc
bytes: 362890
unit: inv-matt-16
deprecated: false
aliases: []
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/grill-with-docs.md

## Purpose — required, verbatim
> "Get interviewed about a plan, and record the decisions." — external/grill-with-docs.md:24

## Design intent — required
Public web documentation and reference guide for the `grill-with-docs` skill published on Matt Pocock's AI Hero website (aihero.dev/skills-grill-with-docs). It addresses the discoverability, architectural context, and failure modes of `grill-with-docs` by providing developers and AI agents with clear guidance on when to reach for single-session grilling over multi-session planning (`wayfinder`), explaining how terms are immediately recorded into `CONTEXT.md` while hard trade-offs become ADRs under `docs/adr/`, diagnosing critical operational failure modes (such as silent file-writing omission in external multi-agent wrappers and question dumping from partial dependency loading), and anchoring `grill-with-docs` as the primary entry point and head of the main build chain (`grill-with-docs → to-spec → to-tickets → implement → code-review`). Without this page, users and coding agents would lack essential documentation regarding prerequisite dependencies (`grilling` and `domain-modeling`), artifact production rules, and downstream workflow integration.

## Phase — required
matt:The Main Flow

## Inputs — required
- Plan or design to be interviewed on: "interviews you about a plan or design until you and the" — external/grill-with-docs.md:25
- Codebase context: "pointed at a codebase." — external/grill-with-docs.md:25 and "A repo, and a change you can settle in one session" — external/grill-with-docs.md:30
- User command invocation: "You invoke this by typing" — external/grill-with-docs.md:28 and "/grill-with-docs" — external/grill-with-docs.md:28
- Multi-context mapping (if configured): "CONTEXT-MAP.md" — external/grill-with-docs.md:33
- Pre-existing glossary: "existing glossary" — external/grill-with-docs.md:61
- Underlying skills: "is one line that delegates to them:" — external/grill-with-docs.md:34, "supplies the interview," — external/grill-with-docs.md:34, and "supplies the writing." — external/grill-with-docs.md:34

## Outputs — required
- Resolved glossary terms in project context file: "CONTEXT.md" — external/grill-with-docs.md:26, "own word for a thing" — external/grill-with-docs.md:37, and ", inline, the moment it resolves" — external/grill-with-docs.md:37
- Architectural Decision Records: "docs/adr/" — external/grill-with-docs.md:33, "A decision passes three gates and it lands as an ADR." — external/grill-with-docs.md:26, and "A decision that is hard to reverse, surprising without context, and a real trade-off" — external/grill-with-docs.md:37
- In-conversation decisions for downstream synthesis: "Hand that same conversation to" — external/grill-with-docs.md:38, "Everything else you decided" — external/grill-with-docs.md:37, and "The conversation, and nowhere else" — external/grill-with-docs.md:37
- Installation command for package managers: "npx skills@latest add mattpocock/skills --skill=grill-with-docs" — external/grill-with-docs.md:24

## Invokes — required
- skill grill-me — external/grill-with-docs.md:25
- command /grill-with-docs — external/grill-with-docs.md:28
- skill wayfinder — external/grill-with-docs.md:30
- skill to-questionnaire — external/grill-with-docs.md:30
- doc SKILL.md — external/grill-with-docs.md:34
- skill grilling — external/grill-with-docs.md:34
- skill domain-modeling — external/grill-with-docs.md:34
- skill to-spec — external/grill-with-docs.md:38
- skill improve-codebase-architecture — external/grill-with-docs.md:50
- skill implement — external/grill-with-docs.md:52
- skill code-review — external/grill-with-docs.md:65
- skill ask-matt — external/grill-with-docs.md:66

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The Main Flow` — external/grill-with-docs.md:5 — used here
- `grill-with-docs` — external/grill-with-docs.md:24 — defined here
- `grill-me` — external/grill-with-docs.md:25 — used here
- `stateful` — external/grill-with-docs.md:26 — used here
- `CONTEXT.md` — external/grill-with-docs.md:26 — used here
- `ADR` — external/grill-with-docs.md:26 — used here
- `/grill-with-docs` — external/grill-with-docs.md:28 — defined here
- `wayfinder` — external/grill-with-docs.md:30 — used here
- `to-questionnaire` — external/grill-with-docs.md:30 — used here
- `greenfield build` — external/grill-with-docs.md:30 — used here
- `single-session planning` — external/grill-with-docs.md:31 — defined here
- `multi-session planning` — external/grill-with-docs.md:31 — defined here
- `CONTEXT-MAP.md` — external/grill-with-docs.md:33 — used here
- `docs/adr/` — external/grill-with-docs.md:33 — used here
- `SKILL.md` — external/grill-with-docs.md:34 — used here
- `grilling` — external/grill-with-docs.md:34 — used here
- `domain-modeling` — external/grill-with-docs.md:34 — used here
- `paper trail` — external/grill-with-docs.md:35 — used here
- `spec` — external/grill-with-docs.md:38 — used here
- `context window` — external/grill-with-docs.md:38 — used here
- `to-spec` — external/grill-with-docs.md:38 — used here
- `glossary` — external/grill-with-docs.md:39 — used here
- `domain language` — external/grill-with-docs.md:39 — used here
- `tickets` — external/grill-with-docs.md:42 — used here
- `spec-driven-development` — external/grill-with-docs.md:44 — used here
- `multi-agent framework` — external/grill-with-docs.md:44 — used here
- `design principles` — external/grill-with-docs.md:50 — used here
- `improve-codebase-architecture` — external/grill-with-docs.md:50 — used here
- `implement` — external/grill-with-docs.md:52 — used here
- `grill-domain-model` — external/grill-with-docs.md:54 — used here
- `main build chain` — external/grill-with-docs.md:64 — used here
- `code-review` — external/grill-with-docs.md:65 — used here
- `ask-matt` — external/grill-with-docs.md:66 — used here

## Structure
- # The /grill-with-docs Skill
- ## Install this skill
- ## What it does
- ## When to reach for it
- ## Prerequisites
- ## The paper trail
- ## Common questions
- ## It's working if
- ## Where it fits
- ## Related reading

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — external/grill-with-docs.md:1 — External documentation snapshot hosted at aihero.dev; not referenced via relative filesystem path by any in-scope repository file in sources/matt/ (repo markdown files cite the live URL instead).
- doc-drift — external/grill-with-docs.md:44 — Documents an unfixed bug where file writing silently fails "when the skill runs inside another orchestration layer" — external/grill-with-docs.md:44 while the interview continues without error.
- doc-drift — external/grill-with-docs.md:46 — Documents dependency loading failure mode where "That is the skill failing to load its two dependencies." — external/grill-with-docs.md:46 (grilling and domain-modeling) causes question dumping without a paper trail.
- doc-drift — external/grill-with-docs.md:54 — Notes that "There is an open suggestion to rename it" — external/grill-with-docs.md:54 to grill-domain-model because the current name is widely seen as misleading.

## Observations
- Public catalog guide: Functions as the public documentation guide for `grill-with-docs` on Matt Pocock's AI Hero website (`aihero.dev/skills-grill-with-docs`).
- Planning scope distinction: Formulates a sharp demarcation between single-session planning and multi-session planning: "The wayfinder split comes down to session count:" — external/grill-with-docs.md:31 "for single-session planning," — external/grill-with-docs.md:31 and "for multi-session planning." — external/grill-with-docs.md:31.
- Immediate persistence: Unlike conversational grilling (`grill-me`), `grill-with-docs` immediately updates `CONTEXT.md` inline as vocabulary settles, while ADRs are strictly gated on three criteria.
- Build chain placement: Positioned as the entry point of the lifecycle: "is the head of the main build chain:" — external/grill-with-docs.md:64 ahead of `to-spec → to-tickets → implement → code-review`.
- Domain vocabulary vs model performance: Notes public debate regarding the utility of domain modeling: "the vocabulary really compresses communication between the humans who share it." — external/grill-with-docs.md:39.

## Context cost
362890 bytes, ~90700 tokens. Static web documentation snapshot; loads no dependencies directly into agent context.
