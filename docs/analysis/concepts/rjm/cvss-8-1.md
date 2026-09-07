---
package: rjm
name: CVSS 8.1
slug: cvss-8-1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CVSS 8.1

## Definition — verbatim
(used, not defined)

> "Supply chain security (CVSS 8.1)" — .agents/projects/v0.4.0/PLAN.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.4.0/PLAN.md | 140 | used here | Cited as the vulnerability severity score for unpinned marketplace supply-chain risks mitigated by SHA pinning. |

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
defects: missing-path, doc-drift

## Design notes
A Common Vulnerability Scoring System (CVSS) quantitative risk score identifying supply chain vulnerability severity rather than an operational lifecycle concept.
