---
package: matt
path: skills/productivity/to-questionnaire/SKILL.md
type: skill
bytes: 2904
unit: inv-matt-46
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/to-questionnaire/SKILL.md, sha256: b5eb929842ee0e93d867c5e906d183d350f2f2d149eaeaa86967d94d8eda1d3b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/to-questionnaire/SKILL.md

## Purpose — required, verbatim
> "description: Turn a decision you can't fully answer into a questionnaire for someone else to fill in." — skills/productivity/to-questionnaire/SKILL.md:3

## Design intent — required
Provides an interactive workflow that turns an unresolved decision into an asynchronous discovery questionnaire for another person to complete. Guided by the principle "Grill the send, not the subject," it interviews the user only about the send (the recipient's identity/relationship and what specific facts or decisions are needed back), rather than grilling them about facts they cannot know. It then compiles non-compound questions into a structured Markdown questionnaire saved to `to-questionnaire-<slug>.md`.

## Phase — required
matt:productivity

## Inputs — required
User answers during interview exchanges (recipient role, expertise, relationship to user, decisions or facts required).

## Outputs — required
Markdown discovery questionnaire written to `to-questionnaire-<slug>.md` in the current working directory (`skills/productivity/to-questionnaire/SKILL.md:16`).

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:225
- doc docs/productivity/to-questionnaire.md — docs/productivity/to-questionnaire.md:3
- doc skills/productivity/README.md — skills/productivity/README.md:12
- skill skills/engineering/ask-matt/SKILL.md — skills/engineering/ask-matt/SKILL.md:82
- doc docs/engineering/grill-with-docs.md — docs/engineering/grill-with-docs.md:19
- doc CHANGELOG.md — CHANGELOG.md:38

## Concepts named — required, verbatim
- `to-questionnaire` — skills/productivity/to-questionnaire/SKILL.md:2 — defined here
- `disable-model-invocation` — skills/productivity/to-questionnaire/SKILL.md:4 — defined here
- `questionnaire` — skills/productivity/to-questionnaire/SKILL.md:7 — defined here
- `Grill the send, not the subject` — skills/productivity/to-questionnaire/SKILL.md:9 — defined here
- `send` — skills/productivity/to-questionnaire/SKILL.md:9 — defined here
- `gap` — skills/productivity/to-questionnaire/SKILL.md:9 — defined here
- `discovery questionnaire` — skills/productivity/to-questionnaire/SKILL.md:20 — defined here
- `questionnaire-template` — skills/productivity/to-questionnaire/SKILL.md:22 — defined here
- `question-example` — skills/productivity/to-questionnaire/SKILL.md:42 — defined here

## Structure
- `## Document structure` — skills/productivity/to-questionnaire/SKILL.md:18
- `# <Questionnaire title>` — skills/productivity/to-questionnaire/SKILL.md:24
- `## Context` — skills/productivity/to-questionnaire/SKILL.md:30
- `## How to answer` — skills/productivity/to-questionnaire/SKILL.md:34
- `## <Theme heading>` — skills/productivity/to-questionnaire/SKILL.md:38
- `### What load is the system expected to handle at launch?` — skills/productivity/to-questionnaire/SKILL.md:43
- `## Anything else?` — skills/productivity/to-questionnaire/SKILL.md:50

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Emphasizes clear scoping of the question frontier: order questions most-important-first for async efficiency, ensure each question is a single idea with an answer stub, and only provide a "why this matters" line when the question could be misread. Uses pseudo-XML tags `<questionnaire-template>` and `<question-example>` to embed structure without ambiguity.

## Context cost
2904 bytes (~700 tokens).
