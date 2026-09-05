---
package: matt
path: external/to-questionnaire.md
type: doc
bytes: 351319
unit: inv-matt-27
deprecated: false
aliases: []
memo_inputs:
  - {path: external/to-questionnaire.md, sha256: 944f39991b6d567415860535866346206cdaa310cffad3c28b14dc036d539e0c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/to-questionnaire.md

## Purpose — required, verbatim
> "Turn open questions into a doc someone else fills in." — external/to-questionnaire.md:24

## Design intent — required
Drafts a structured, static discovery questionnaire when technical planning or specification is blocked on knowledge possessed by an external stakeholder (client, designer, executive, domain specialist). Strictly questions the author about the "send" (who the recipient is and what concrete decisions/facts are required back) rather than attempting to interview them about the unknown subject matter. Sequences questions most-important-first under clear thematic sections with response stubs, gives explicit permission to state "I don't know", and avoids interactive branching or multi-recipient complications.

## Phase — required
matt:Productivity Skills

## Inputs — required
Active conversational context describing the impasse, recipient identity/role, and the concrete decisions or answers needed back from the recipient.

## Outputs — required
A static Markdown questionnaire file (`to-questionnaire-<slug>.md` or similar) written to the local directory, structured with a purpose line, brief context summary, prioritized questions with answer stubs, and an open catch-all section.

## Invokes — required
- skill grill-me — external/to-questionnaire.md:30
- skill grill-with-docs — external/to-questionnaire.md:30
- skill prototype — external/to-questionnaire.md:30
- skill to-spec — external/to-questionnaire.md:74
- skill ask-matt — external/to-questionnaire.md:74

## Invoked by — required
none

## Concepts named — required, verbatim
- `to-questionnaire` — external/to-questionnaire.md:25 — defined here
- `send` — external/to-questionnaire.md:26 — defined here
- `subject` — external/to-questionnaire.md:26 — defined here
- `agent` — external/to-questionnaire.md:28 — used here
- `grilling` — external/to-questionnaire.md:31 — used here
- `discovery questionnaire` — external/to-questionnaire.md:40 — defined here
- `most-important-first` — external/to-questionnaire.md:43 — defined here
- `branching` — external/to-questionnaire.md:48 — defined here
- `multi-recipient` — external/to-questionnaire.md:48 — defined here
- `session` — external/to-questionnaire.md:50 — used here
- `reach-for-it-anytime standalone` — external/to-questionnaire.md:73 — defined here

## Structure
- # The /to-questionnaire Skill — external/to-questionnaire.md:24
- ## What it does — external/to-questionnaire.md:24
- ## When to reach for it — external/to-questionnaire.md:27
- ## The send, not the subject — external/to-questionnaire.md:32
- ## The document — external/to-questionnaire.md:39
- ## Common questions — external/to-questionnaire.md:49
- ## It's working if — external/to-questionnaire.md:64
- ## Where it fits — external/to-questionnaire.md:72
- ## Install the skills — external/to-questionnaire.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · external/to-questionnaire.md:51: Has no automated ingest phase to parse previous grilling notes or conversation transcripts, requiring the author to manually summarize the impasse.
- `other` · external/to-questionnaire.md:53: Restricts questionnaire generation to a single recipient persona, unable to partition questions across multiple stakeholders without running separate skill invocations.
- `other` · external/to-questionnaire.md:55: Output is strictly static Markdown with no support for conditional logic or dependent question skips.
- `other` · external/to-questionnaire.md:59: Lacks automated integration with communication tools (Slack, Linear, Jira), requiring manual copy-paste for delivery.

## Observations
Represents the web documentation snapshot of `/to-questionnaire` from `aihero.dev/skills-to-questionnaire`. Functions as the inverse of `/grill-me`: instead of interviewing the user to clarify their own thoughts, it arms the user with an asynchronous interview tool to extract missing domain facts from third parties.

## Context cost
351319 bytes, ~70500 tokens (HTML snapshot including full inline hydration payload).
