---
package: rjm
name: programming-advisor
slug: programming-advisor
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/decision-critic/references/rewrite-regression-check.md, sha256: 99924952eb755b00631c90a5aa6d1fded4ea201460304a3d916ba0e9e3384c14}
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# programming-advisor

## Definition — verbatim
> "name: programming-advisor" — .claude/skills/programming-advisor/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/SKILL.md | 4 | used here | Negative trigger routing tactical library and reuse inquiries away from buy-vs-build to programming-advisor. |
| .claude/skills/decision-critic/references/rewrite-regression-check.md | 76 | used here | Referenced as an authority for checking prior art before approving rewrite proposals. |
| .claude/skills/programming-advisor/SKILL.md | 2 | defined here | Defined as an advisor skill evaluating existing libraries, SaaS, and internal prior art to avoid custom coding. |
| .claude/skills/software-engineering-library/SKILL.md | 64 | used here | Negative trigger directing wheel-detection and library search inquiries to programming-advisor. |

## Consumes
Code requirements, feature specifications, and repository codebase context.

## Produces
Prior-art analysis, library recommendations, and reuse feasibility assessments.

## When applied
Activated when contemplating new feature implementations to check for existing solutions before writing code.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: doc-drift, missing-path

## Design notes
programming-advisor is an advisor skill designed to prevent the reinvention of wheels across codebases. By evaluating existing internal utilities, repository code, and external open-source libraries before custom code is written, it encourages reuse and enforces architectural consistency.
