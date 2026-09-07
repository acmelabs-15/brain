---
package: rjm
name: Start Simple
slug: start-simple
kind: pattern
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

# Start Simple

## Definition — verbatim
> "### 6. Start Simple (Gall's Law Lens)" — .claude/skills/review/references/decision-rigor.md:88

## Also called — verbatim
"Gall's Law Lens" — .claude/skills/review/references/decision-rigor.md:88

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 88 | defined here | Checklist section in decision rigor review checking whether designs evolve from working simple systems. |

## Consumes
Proposed architecture designs, system redesigns, or new component specifications.

## Produces
Review findings flagging speculative complexity, premature future-proofing (YAGNI), or monolithic designs lacking an incremental evolutionary path.

## When applied
During Stage-2 decision rigor review when a change proposes a new system or major architectural redesign.

## Sub-concepts
big-bang-cutover

## Part of
decision-rigor

## Implementation status
clean

## Design notes
An architectural design pattern and review lens grounded in Gall's Law, mandating that complex software systems must evolve incrementally from simple, working implementations rather than being designed complex from scratch.
