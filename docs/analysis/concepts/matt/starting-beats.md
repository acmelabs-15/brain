---
package: matt
name: starting beats
slug: starting-beats
kind: artifact
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-beats/SKILL.md, sha256: a96abafa2372eede8267d770138b322d6125da8adaa7ccf0a5e08e4ee13ee71e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# starting beats

## Definition — verbatim
> "Write 2–3 candidate **starting beats**, drawn from the raw material. Each is a different entry point into the article." — skills/in-progress/writing-beats/SKILL.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-beats/SKILL.md | 16 | defined here | Offered as 2–3 candidate initial narrative entry points drawn from raw material for user selection. |

## Consumes
Raw material markdown file and settled audience prerequisite concepts.

## Produces
A chosen starting beat written as the opening entry in the article file.

## When applied
Step 2 of writing-beats, before writing any beats to the article document.

## Sub-concepts
none

## Part of
writing-beats

## Implementation status
clean

## Design notes
Starting beats represent alternative initial entry points into an article's narrative arc. By generating 2–3 candidate opening moves that rely strictly on concepts the audience already brings walking in, the author can choose the entry tone and angle while establishing the foundational concepts needed for downstream beats.
