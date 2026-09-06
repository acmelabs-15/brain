---
package: addy
name: Medium
slug: medium
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
  - {path: skills/test-driven-development/SKILL.md, sha256: 440fb3c9b76f4f1b0b564dfbaec19d370beab0167a3e2ab048ce59c5a865ecef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Medium

## Definition — verbatim
> "| **Medium** | Limited impact or requires authenticated access to exploit | Fix in current sprint |" — agents/security-auditor.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 63 | defines | Defines the Medium security severity tier (limited impact, requires authenticated access) with action to fix in the current sprint. |
| agents/web-performance-auditor.md | 120 | defines | Defines the Medium performance severity tier (suboptimal pattern with measurable contained impact) to fix in the current sprint. |
| skills/test-driven-development/SKILL.md | 170 | defines | Defines the Medium test size in the resource model (multi-process OK, localhost only, seconds duration) for API and component tests. |

## Consumes
Moderate-impact defect reports or localhost-scoped test resource requirements.

## Produces
Current sprint remediation tasks or test suite performance classification.

## When applied
Applied when triaging contained defects or categorizing tests that use multiple processes on localhost.

## Sub-concepts
none

## Part of
severity-classification

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Medium has a dual role in addy: as a middle severity tier across auditor roles requiring current-sprint fixes, and as a resource-model test size for tests running against localhost within seconds.
