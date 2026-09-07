---
package: rjm
name: PR maintenance workflow
slug: pr-maintenance-workflow
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR maintenance workflow

## Definition — verbatim
(used, not defined)

> "PR maintenance workflow" — .agents/architecture/ADR-090-pr-branch-holder-lease.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 62 | used here | Analyzed in caller compatibility matrix as a workflow currently reaching the push helper and enforceable via GitHub Actions IDs. |

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
clean (citing inventory card records defects: none)

## Design notes
PR maintenance workflow is a GitHub Actions automation workflow that updates and maintains pull request branches; it is a CI workflow name rather than an autonomous lifecycle concept, classified as `name-only` per D-023.
