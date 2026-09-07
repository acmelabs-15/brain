---
package: rjm
name: Rollback and Kill Criteria
slug: rollback-and-kill-criteria
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

# Rollback and Kill Criteria

## Definition — verbatim
(used, not defined)

> "## Rollback and Kill Criteria" — .agents/architecture/ADR-090-pr-branch-holder-lease.md:265

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 265 | defines | Section heading defining concrete rollback mechanisms and 30-day post-merge kill criteria for PR branch holder lease enforcement. |

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
Section heading in ADR-090 defining objective conditions to revert enforcement or kill the PR branch holder lease implementation during the first 30 days post-merge rather than an independent lifecycle concept.
