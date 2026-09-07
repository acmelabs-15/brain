---
package: rjm
name: "Asymmetric Upside"
slug: asymmetric-upside
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Asymmetric Upside

## Definition — verbatim
> "### 10. Asymmetric Upside" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 111 | defined here | Thinking model identifying whether a solution can productize, scale into a platform, or generate outsized gains. |

## Consumes
Capability scope, potential commercialization opportunities, and internal platform reuse options.

## Produces
Asymmetric upside scoring and identification of strategic leverage beyond baseline requirements.

## When applied
Applied during strategic dimension evaluation when comparing custom development against packaged commercial software.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift

## Design notes
A strategic evaluation lens in rjm that scores whether an initiative has unbounded positive potential. While commercial SaaS purchases generally have capped upside limited to vendor features, custom-built internal systems may evolve into core platforms or commercial products, providing asymmetric return on engineering investment.
