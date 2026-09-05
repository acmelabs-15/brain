---
package: matt
path: docs/productivity/to-questionnaire.md
type: doc
bytes: 7828
unit: inv-matt-9
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/to-questionnaire.md, sha256: 875abaef1ed5842ca5f008956288192341b48e4e71904ef4151a56560c3c58eb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/productivity/to-questionnaire.md

## Purpose — required, verbatim
> "`to-questionnaire` turns a decision you can't settle on your own into a **questionnaire**: a Markdown document you hand to the one person who holds what you're missing, for them to fill in async or for the two of you to work through in a meeting." — docs/productivity/to-questionnaire.md:3

## Design intent — required
Produces a static, non-branching discovery questionnaire for external stakeholders (clients, executives, domain experts) when technical or product planning hits an impasse on missing outside knowledge. Interviews the author strictly about the recipient relationship and the concrete decisions needed back, rather than inquiring about the unknown subject matter, organizing questions most-important-first under themed headings with answer stubs.

## Phase — required
matt:productivity

## Inputs — required
Active conversational context (or topic description), target recipient identity and relationship, and the explicit list of decisions or facts required from the recipient.

## Outputs — required
Markdown questionnaire document named `to-questionnaire-<slug>.md` written to the current working directory.

## Invokes — required
- doc grill-me — docs/productivity/to-questionnaire.md:15
- doc grill-with-docs — docs/productivity/to-questionnaire.md:16
- doc prototype — docs/productivity/to-questionnaire.md:18
- doc to-spec — docs/productivity/to-questionnaire.md:78
- doc ask-matt — docs/productivity/to-questionnaire.md:78

## Invoked by — required
- doc CHANGELOG.md — CHANGELOG.md:42

## Concepts named — required, verbatim
- `questionnaire` — docs/productivity/to-questionnaire.md:3 — defined here
- `send` — docs/productivity/to-questionnaire.md:5 — defined here
- `gap` — docs/productivity/to-questionnaire.md:5 — defined here
- `agent` — docs/productivity/to-questionnaire.md:9 — used here
- `grilling` — docs/productivity/to-questionnaire.md:20 — used here
- `discovery questionnaire` — docs/productivity/to-questionnaire.md:33 — defined here
- `most-important-first` — docs/productivity/to-questionnaire.md:36 — defined here
- `branching` — docs/productivity/to-questionnaire.md:41 — defined here
- `multi-recipient` — docs/productivity/to-questionnaire.md:41 — defined here
- `session` — docs/productivity/to-questionnaire.md:46 — used here
- `context` — docs/productivity/to-questionnaire.md:46 — used here
- `model` — docs/productivity/to-questionnaire.md:52 — used here
- `ticket` — docs/productivity/to-questionnaire.md:58 — used here
- `rounds` — docs/productivity/to-questionnaire.md:61 — used here
- `reach-for-it-anytime standalone` — docs/productivity/to-questionnaire.md:76 — defined here

## Structure
- ## What it does — docs/productivity/to-questionnaire.md:1
- ## When to reach for it — docs/productivity/to-questionnaire.md:7
- ## The send, not the subject — docs/productivity/to-questionnaire.md:22
- ## The document — docs/productivity/to-questionnaire.md:31
- ## Common questions — docs/productivity/to-questionnaire.md:43
- ## It's working if — docs/productivity/to-questionnaire.md:66
- ## Where it fits — docs/productivity/to-questionnaire.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contrasts with `grill-me` on the axis of knowledge ownership: `grill-me` interrogates the user to surface internal knowledge, whereas `to-questionnaire` packages inquiries to extract missing knowledge from external third parties. Deliberately eschews dynamic question branching or multi-recipient partitioning in favor of focused, single-recipient static documents.

## Context cost
7828 bytes (~1957 tokens).
