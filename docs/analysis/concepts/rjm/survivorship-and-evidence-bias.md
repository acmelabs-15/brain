---
package: rjm
name: Survivorship and Evidence Bias
slug: survivorship-and-evidence-bias
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Survivorship and Evidence Bias

## Definition — verbatim
> "### 3. Survivorship and Evidence Bias" — .claude/skills/review/references/decision-rigor.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 71 | defined here | Checklist section in decision rigor review checking for self-selected evidence and survivorship bias in proposals. |

## Consumes
Citations of external success stories, precedent architectures, or adoption cases used to justify technical decisions.

## Produces
Review findings identifying self-selected evidence samples, missing base rates, or ignored failure cases.

## When applied
During Stage-2 decision rigor review when a decision or ADR cites external success evidence to justify an architectural path.

## Sub-concepts
none

## Part of
decision-rigor

## Implementation status
clean

## Design notes
A critical evaluation checklist in rjm's decision rigor review that detects survivorship and selection bias, ensuring that proposals citing success cases also account for unseen failures that attempted the same strategy.
