---
package: matt
name: duplication
slug: duplication
kind: pattern
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# duplication

## Definition — verbatim
> "**Duplication** (the same meaning in more than one place) costs maintenance and tokens, and inflates a meaning's prominence on the ladder past its real rank." — skills/productivity/writing-for-agents/SKILL.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 30 | defined here | Lists duplication alongside sediment and sprawl as defects targeted by pruning. |
| external/writing-for-agents.md | 44 | used here | Mentions duplication as a primary defect countered by single-source-of-truth pruning. |
| skills/productivity/writing-for-agents/SKILL.md | 78 | defined here | Defines duplication as expressing the same meaning across multiple locations, inflating its cognitive priority. |

## Consumes
Multiple redundant instructions or definitions across files.

## Produces
Maintenance friction, token bloat, and distorted attention rankings.

## When applied
Targeted for elimination during pruning passes.

## Sub-concepts
none

## Part of
pruning, writing-for-agents

## Implementation status
clean

## Design notes
An anti-pattern where identical instructional semantics are repeated across multiple locations. Beyond inflating token costs, duplication artificially distorts the model's perceived information hierarchy by making repeated concepts appear disproportionately urgent.
