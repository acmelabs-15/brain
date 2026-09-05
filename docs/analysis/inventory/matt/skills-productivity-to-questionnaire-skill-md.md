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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/to-questionnaire/SKILL.md

## Purpose — required, verbatim
> "Turn a decision you can't fully answer into a questionnaire for someone else to fill in." — skills/productivity/to-questionnaire/SKILL.md:3

## Design intent — required
Productivity skill that converts an unresolved decision blocked on outside human knowledge into a targeted discovery questionnaire. It addresses the failure mode where a user stalls during planning or grilling because key requirements or constraints exist only in someone else's head. By grilling the user about the "send" (who the recipient is and what decisions/facts are needed back) in two single exchanges rather than probing the technical subject itself, it drafts a concise markdown questionnaire (`to-questionnaire-<slug>.md`) ordered most-important-first to resolve the knowledge gap async or in a meeting.

## Phase — required
matt:Productivity

## Inputs — required
User invocation via `/to-questionnaire`; user responses to two interview exchanges: recipient's role, expertise, and relationship to the user (step 1), and specific decisions or facts the user needs back (step 2).

## Outputs — required
Markdown questionnaire file written to `to-questionnaire-<slug>.md` in the current working directory, following the embedded `<questionnaire-template>`.

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:225
- doc skills/productivity/README.md — skills/productivity/README.md:12
- doc CHANGELOG.md — CHANGELOG.md:38
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:82
- doc docs/productivity/to-questionnaire.md — docs/productivity/to-questionnaire.md:3
- doc docs/engineering/grill-with-docs.md — docs/engineering/grill-with-docs.md:19

## Concepts named — required, verbatim
- `to-questionnaire` — skills/productivity/to-questionnaire/SKILL.md:2 — defined here
- `questionnaire` — skills/productivity/to-questionnaire/SKILL.md:7 — defined here
- `Grill the send, not the subject` — skills/productivity/to-questionnaire/SKILL.md:9 — defined here
- `send` — skills/productivity/to-questionnaire/SKILL.md:9 — defined here
- `gap` — skills/productivity/to-questionnaire/SKILL.md:9 — defined here
- `discovery questionnaire` — skills/productivity/to-questionnaire/SKILL.md:20 — defined here
- `most-important-first` — skills/productivity/to-questionnaire/SKILL.md:20 — defined here
- `questionnaire-template` — skills/productivity/to-questionnaire/SKILL.md:22 — defined here
- `Context` — skills/productivity/to-questionnaire/SKILL.md:30 — defined here
- `How to answer` — skills/productivity/to-questionnaire/SKILL.md:34 — defined here
- `question-example` — skills/productivity/to-questionnaire/SKILL.md:42 — defined here
- `Anything else?` — skills/productivity/to-questionnaire/SKILL.md:50 — defined here

## Structure
- Document structure — skills/productivity/to-questionnaire/SKILL.md:18
- Context — skills/productivity/to-questionnaire/SKILL.md:30
- How to answer — skills/productivity/to-questionnaire/SKILL.md:34
- Anything else? — skills/productivity/to-questionnaire/SKILL.md:50

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Implements user-invoked workflow with `disable-model-invocation: true`. The 3-step sequence has explicit completion criteria for each step ("Done when..."), following the completion criteria discipline taught in `writing-for-agents`. The skill limits interaction to two distinct interview exchanges targeting the send before authoring the document, preventing interview drift.

## Context cost
2904 bytes, 55 lines, approximately 650 tokens.
