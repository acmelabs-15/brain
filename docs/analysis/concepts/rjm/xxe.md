---
package: rjm
name: XXE
slug: xxe
kind: name-only
package_phase: none
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

# XXE

## Definition — verbatim
(used, not defined)

> "### CWE-611: XML External Entity (XXE)" — .agents/security/static-analysis-checklist.md:174

## Also called — verbatim
`XML External Entity` — .agents/security/static-analysis-checklist.md:174

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 174 | defined here | Parenthetical abbreviation in section heading for XML External Entity. |

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
clean

## Design notes
XXE is an acronym label for XML External Entity rather than an independent lifecycle concept, classified as name-only per D-023.
