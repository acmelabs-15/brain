---
package: rjm
name: Lease schema
slug: lease-schema
kind: artifact
package_phase: rjm:ship
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

# Lease schema

## Definition — verbatim
(used, not defined)

> "Lease schema" — .agents/architecture/ADR-090-pr-branch-holder-lease.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 83 | defined here | Defined as the structured comment schema for v2 PR branch holder lease markers. |

## Consumes
Automation ID, holder ID, GitHub actor, branch name, timestamps, base SHA, and operation type.

## Produces
Formatted markdown comments posted to GitHub pull request discussions.

## When applied
Used whenever posting `claim`, `override`, or `release` operations to a PR comment thread.

## Sub-concepts
none

## Part of
holder-lease, pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
The structured YAML and markdown schema for PR holder lease comments. It defines mandatory fields including version, owner, holder, actor, branch, timestamps (acquired, renewed, expires), base SHA, and operation, enabling deterministic parsing by automated agents and tooling.
