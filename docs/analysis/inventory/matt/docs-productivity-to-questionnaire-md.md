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
verified: 2026-09-05 quote-check+coverage
---

# docs/productivity/to-questionnaire.md

## Purpose — required, verbatim
> "`to-questionnaire` turns a decision you can't settle on your own into a **questionnaire**: a Markdown document you hand to the one person who holds what you're missing, for them to fill in async or for the two of you to work through in a meeting." — docs/productivity/to-questionnaire.md:3

## Design intent — required
Documentation page (published at `aihero.dev/skills-to-questionnaire`) describing the `to-questionnaire` user-invoked productivity skill. Explains how to convert an unresolved decision blocked on outside human knowledge into an async discovery questionnaire for a single recipient. Specifies the two-part interview focusing strictly on the send (recipient identity and required answers) rather than the technical subject, avoiding branching logic or multi-recipient sprawl, and producing a structured markdown document (`to-questionnaire-<slug>.md`) that unblocks stalled grilling or planning sessions.

## Phase — required
matt:Productivity

## Inputs — required
User invocation via `/to-questionnaire` in an active conversation (typically continuing from a stalled grilling or planning session); user answers to two interview questions specifying the recipient's role/expertise/relationship and the concrete decisions or facts needed back.

## Outputs — required
Markdown questionnaire document named `to-questionnaire-<slug>.md` written to the current working directory, structured with a purpose line, context section, grouped most-important-first questions with answer stubs, explicit permission to answer "I don't know", and a closing catch-all question.

## Invokes — required
- skill grill-me — docs/productivity/to-questionnaire.md:15
- skill grill-with-docs — docs/productivity/to-questionnaire.md:16
- skill prototype — docs/productivity/to-questionnaire.md:18
- skill to-spec — docs/productivity/to-questionnaire.md:78
- skill ask-matt — docs/productivity/to-questionnaire.md:78

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `to-questionnaire` — docs/productivity/to-questionnaire.md:3 — defined here
- `questionnaire` — docs/productivity/to-questionnaire.md:3 — defined here
- `send` — docs/productivity/to-questionnaire.md:5 — defined here
- `gap` — docs/productivity/to-questionnaire.md:5 — defined here
- `agent` — docs/productivity/to-questionnaire.md:9 — used here
- `grill-me` — docs/productivity/to-questionnaire.md:15 — used here
- `grill-with-docs` — docs/productivity/to-questionnaire.md:16 — used here
- `prototype` — docs/productivity/to-questionnaire.md:18 — used here
- `grilling` — docs/productivity/to-questionnaire.md:20 — used here
- `discovery questionnaire` — docs/productivity/to-questionnaire.md:33 — defined here
- `most-important-first` — docs/productivity/to-questionnaire.md:36 — defined here
- `branching` — docs/productivity/to-questionnaire.md:41 — defined here
- `multi-recipient` — docs/productivity/to-questionnaire.md:41 — defined here
- `session` — docs/productivity/to-questionnaire.md:46 — used here
- `context` — docs/productivity/to-questionnaire.md:46 — used here
- `model` — docs/productivity/to-questionnaire.md:52 — used here
- `ticket` — docs/productivity/to-questionnaire.md:58 — used here
- `OPEN_QUESTIONS.md` — docs/productivity/to-questionnaire.md:64 — used here
- `reach-for-it-anytime standalone` — docs/productivity/to-questionnaire.md:76 — used here
- `to-spec` — docs/productivity/to-questionnaire.md:78 — used here
- `ask-matt` — docs/productivity/to-questionnaire.md:78 — used here

## Structure
- What it does — docs/productivity/to-questionnaire.md:1
- When to reach for it — docs/productivity/to-questionnaire.md:7
- The send, not the subject — docs/productivity/to-questionnaire.md:22
- The document — docs/productivity/to-questionnaire.md:31
- Common questions — docs/productivity/to-questionnaire.md:43
- It's working if — docs/productivity/to-questionnaire.md:66
- Where it fits — docs/productivity/to-questionnaire.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Documents the deliberate rejection of dynamic branching logic and multi-recipient routing in questionnaire generation, reasoning that models planning more than two or three questions ahead of real answers plan poorly. Emphasizes interviewing about the send rather than the subject so the interaction remains bounded (two exchanges only) and does not probe the user on domain knowledge they explicitly lack. Clarifies that the skill has no dedicated ingest phase, relying instead on running in the same conversation so prior grilling context is inherited. Referenced in CHANGELOG.md:42 as the documentation page for the promoted to-questionnaire skill.

## Context cost
7828 bytes, approximately 1800 tokens. Standalone doc; loads no secondary references.
