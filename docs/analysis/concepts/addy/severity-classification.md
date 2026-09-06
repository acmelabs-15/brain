---
package: addy
name: Severity Classification
slug: severity-classification
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

# Severity Classification

## Definition — verbatim
(used, not defined)
> "## Severity Classification" — agents/security-auditor.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 57 | defines | Section heading introducing the five-tier severity classification table (Critical, High, Medium, Low, Info) mapping risk criteria to required remediation actions. |
| agents/web-performance-auditor.md | 114 | defines | Section heading defining the five-tier severity classification table (Critical, High, Medium, Low, Info) for web performance impact and release gates. |

## Consumes
Identified security vulnerabilities or web performance bottlenecks.

## Produces
Ranked findings with explicit remediation deadlines (e.g., block release vs fix in current sprint).

## When applied
Applied when cataloging and reporting audit findings across security and performance auditor personas.

## Sub-concepts
high, medium, low, info

## Part of
security-audit-report, web-performance-audit

## Implementation status
clean

## Design notes
Severity Classification standardizes audit defect prioritization across distinct auditor personas into five explicit tiers, tying findings directly to concrete release and sprint decisions.
