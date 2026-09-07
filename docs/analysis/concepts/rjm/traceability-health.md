---
package: rjm
name: Traceability Health
slug: traceability-health
kind: artifact
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Traceability Health

## Definition — verbatim
> "**Traceability Health** - Spec layer coherence metrics" — .claude/agents/retrospective.md:490

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 490 | defined here | Sixth category of retrospective focus areas assessing spec layer coherence and graph metrics. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 22 | defined here | Detailed metrics specification for validating requirements-to-design-to-task coherence. |

## Consumes
Specification artifacts (requirements, designs, tasks) and traceability graph validation script output.

## Produces
Quantitative coherence metrics covering Valid Chains, Orphaned REQs, Orphaned Designs, Broken References, and Untraced Tasks.

## When applied
Evaluated during retrospective analysis whenever sessions modify specification artifacts.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Traceability Health provides quantitative metrics to detect specification drift and broken dependencies. By measuring chain completeness and identifying orphaned requirements or designs, it ensures that implementation work remains provably connected to approved design intent.
