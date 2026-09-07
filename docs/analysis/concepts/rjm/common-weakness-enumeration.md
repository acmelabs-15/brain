---
package: rjm
name: Common Weakness Enumeration
slug: common-weakness-enumeration
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Common Weakness Enumeration

## Definition — verbatim
(used, not defined)

> "It focuses on common vulnerability patterns defined by CWE (Common Weakness Enumeration)." — .agents/security/static-analysis-checklist.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 5 | used here | Cited in full formal name alongside the CWE acronym to introduce the vulnerability taxonomy. |

## Consumes
Source code, security audit artifacts, vulnerability reports.

## Produces
Formal weakness category classifications across security checklists.

## When applied
Applied when establishing formal taxonomy references for software security weaknesses.

## Sub-concepts
cwe

## Part of
security

## Implementation status
clean

## Design notes
The full formal name for the CWE weakness classification system, cited in security documentation to ground static analysis patterns against industry-standard weakness definitions.
