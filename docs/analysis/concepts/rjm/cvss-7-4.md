---
package: rjm
name: CVSS 7.4
slug: cvss-7-4
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

# CVSS 7.4

## Definition — verbatim
(used, not defined)

> "addresses the security review finding (CVSS 7.4)" — .agents/projects/v0.4.0/PLAN.md:492

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.4.0/PLAN.md | 492 | used here | Common Vulnerability Scoring System rating cited in security requirements mandating SHA pinning in CI workflow templates. |

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
`CVSS 7.4` is a specific Common Vulnerability Scoring System numerical severity rating cited in ADR-045 planning documents rather than an autonomous software lifecycle concept, classified as `kind: name-only` per D-023.
