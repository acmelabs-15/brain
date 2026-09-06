---
package: matt
name: failure modes
slug: failure-modes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# failure modes

## Definition — verbatim
> "Adding a hard cap would also conflate two different failure modes: a model that asks too many questions because the plan is genuinely under-specified (working as intended) vs. a model that asks redundant or low-value questions (a prompt-quality issue, not a quantity issue)." — .out-of-scope/question-limits.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/question-limits.md | 14 | defined here | Distinguishes legitimate thorough questioning of under-specified plans from redundant questioning caused by prompt defects. |

## Consumes
Observed patterns of breakdown or inefficiency in agent-human interaction.

## Produces
Categorization that informs whether to fix prompt instructions or rely on user steering.

## When applied
When diagnosing whether an agent behavior reflects genuine problem complexity or skill design defects.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Identifying distinct failure modes prevents superficial fixes (such as arbitrary question counters) from masking underlying prompt quality issues or disrupting necessary deep exploration.
