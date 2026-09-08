---
package: rjm
name: CWE-699 Categories and High-Priority CWEs
slug: cwe-699-categories-and-high-priority-cwes
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CWE-699 Categories and High-Priority CWEs

## Definition — verbatim
> "#### CWE-699 Categories and High-Priority CWEs" — templates/agents/security.shared.md:208

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/security.shared.md | 208 | defined here | Taxonomy section cataloging high-priority CWE categories aligned with OWASP Top 10. |

## Consumes
Code changes, inputs, auth mechanisms, and resource handlers under review.

## Produces
Categorized vulnerability findings mapped to CWE identifiers and severity ratings.

## When applied
Used during static analysis and vulnerability scanning of code changes.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: missing-path, doc-drift

## Design notes
A structured security taxonomy mapping CWE-699 software development categories (Injection, Authentication, Access Control, Cryptography, Input Validation, Resource Management) to OWASP standards for systematic vulnerability auditing.
