---
package: matt
name: writing-great-skills
slug: writing-great-skills
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: true
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# writing-great-skills

## Definition — verbatim
> "It was called `writing-great-skills` until v1.1. The rename tracks what it always was underneath: almost none of it is skill-specific." — docs/productivity/writing-for-agents.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 7 | defined here | Notes the pre-v1.1 name of writing-for-agents before recognizing its scope applied beyond skills. |
| external/ask-matt.md | 59 | used here | Changelog reference documenting the rename of writing-great-skills to writing-for-agents. |
| external/writing-for-agents.md | 27 | used here | Explains historical origins and skill mechanics separation upon renaming to writing-for-agents. |
| external/writing-for-agents.md | 47 | used here | Clarifies in FAQ that writing-great-skills was renamed in v1.1 without backward-compatible aliases. |

## Consumes
Draft agent instructions or skill files.

## Produces
Polished skill files conforming to agent-writing standards.

## When applied
Used prior to version 1.1 before being superseded by `writing-for-agents`.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
The original name of the `writing-for-agents` reference skill. It was renamed in v1.1 when practitioners realized that guidelines on information hierarchy, leading words, and pruning applied universally to all agent-facing text (such as AGENTS.md, specifications, and tickets) rather than just skill definitions.
