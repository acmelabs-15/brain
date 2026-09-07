---
package: rjm
name: CWE-89
slug: cwe-89
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE-89

## Definition — verbatim
> "Improper neutralization of SQL commands." — .agents/security/static-analysis-checklist.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 70 | defined here | Priority vulnerability section detailing SQL injection query concatenation patterns and parameterized fixes. |
| scripts/security/invoke_security_retrospective.py | 359 | used here | Included in the critical_cwes set to classify SQL injection false negatives as critical severity. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift

## Design notes
`CWE-89` is a Common Weakness Enumeration taxonomy identifier for SQL Injection, classified as `name-only` per D-023.
