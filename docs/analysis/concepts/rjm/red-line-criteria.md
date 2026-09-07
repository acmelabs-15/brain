---
package: rjm
name: "Red line criteria"
slug: red-line-criteria
kind: gate
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/SKILL.md, sha256: 51ab60206739563c53683a976bc1c1c94fe21229452a6820fc0b126729d2e0a7}
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Red line criteria

## Definition — verbatim
> "<output>Red line criteria (Never Build / Never Buy)</output>" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 100 | defined here | Phase 1 output specification requiring identification of hard Never Build and Never Buy boundary constraints. |
| .claude/skills/buy-vs-build-framework/SKILL.md | 98 | defined here | Phase 1 deliverable establishing absolute operational boundaries that immediately short-circuit analysis. |

## Consumes
Organizational policies, regulatory mandates, security constraints, and core intellectual property definitions.

## Produces
Explicit Never Build or Never Buy boundary rules that eliminate unviable options prior to financial modeling.

## When applied
Evaluated during Phase 1 (Classify) of buy-vs-build analysis to instantly eliminate prohibited options.

## Sub-concepts
never-build, never-buy

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-doc, missing-path

## Design notes
A critical front-door gating mechanism in rjm's sourcing framework. By establishing absolute, non-negotiable organizational boundaries (such as regulatory compliance or core IP protection) early in the analysis, red line criteria prevent wasted effort evaluating options that the organization could never legitimately adopt.
