---
package: addy
name: High
slug: high
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
  - {path: agents/web-performance-auditor.md, sha256: 0928b1cf8103262a364bce0c1fc689a918852e2275441f1b2e687adfa1e607e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# High

## Definition — verbatim
> "| **High** | Exploitable with some conditions, significant data exposure | Fix before release |" — agents/security-auditor.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 62 | defines | Defines the High security severity tier (conditional exploitability, significant data exposure) with mandatory action to fix before release. |
| agents/web-performance-auditor.md | 119 | defines | Defines the High performance severity tier (likely degrades Core Web Vitals or causes significant slowdown) requiring remediation before release. |

## Consumes
Findings that cause significant data exposure, conditional exploitability, or probable Core Web Vital degradation.

## Produces
A pre-release gate finding requiring resolution before code reaches production.

## When applied
Applied when triaging vulnerabilities or performance defects that fall just below Critical but still threaten release readiness.

## Sub-concepts
none

## Part of
severity-classification

## Implementation status
clean

## Design notes
High serves as a pre-release quality gate tier across addy's audit personas, ensuring that significant issues that do not reach catastrophic critical status are still fixed prior to release.
