---
package: rjm
name: CWE patterns
slug: cwe-patterns
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CWE patterns

## Definition — verbatim
(used, not defined)

> "| **security** | Vulnerability assessment | Threat modeling, OWASP, CWE patterns |" — templates/AGENTS.md:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/AGENTS.md | 176 | used here | Listed as a core vulnerability assessment domain and reference taxonomy for the security agent. |

## Consumes
Code changes, architectural specifications, and threat models.

## Produces
Security vulnerability findings categorized by standardized CWE weakness identifiers.

## When applied
Applied during security review and vulnerability assessment by the security agent.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
CWE patterns refer to the Common Weakness Enumeration taxonomy used by the security agent during vulnerability assessments to systematically identify and classify software weakness patterns (e.g. injection, memory corruption, path traversal).
