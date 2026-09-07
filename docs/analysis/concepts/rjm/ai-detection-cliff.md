---
package: rjm
name: AI Detection Cliff
slug: ai-detection-cliff
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md, sha256: 51df9b36a717cc5e44165fbb2928f27609494f6c5d6ec05165224a3f300d6b27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI Detection Cliff

## Definition — verbatim
> "# AI Detection Cliff" — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:7
> "The fundamental incompatibility between writing quality and AI detector evasion. A hard empirical finding, not a fixable engineering problem." — .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-ai-detection-cliff.md | 7 | defined here | Defined as the empirical reality that writing quality and AI detector evasion are mutually exclusive and anti-correlated. |

## Consumes
Empirical detector scoring data comparing human and LLM writing across stylistic variations.

## Produces
Architectural boundary advising prompt engineers to abandon detection evasion and optimize strictly for voice quality.

## When applied
When evaluating prompt engineering objectives, stylistic constraints, and AI detection requirements.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The AI Detection Cliff establishes a crucial constraint in prompt engineering: because human writing is erratic at the token level while LLMs consistently select high-probability tokens across their probability surface, a 0.74 score gap exists with no overlap. Attempting to evade detection through additional rules merely introduces new structural regularities that increase detectability while destroying voice quality.
