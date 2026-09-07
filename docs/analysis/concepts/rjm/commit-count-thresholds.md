---
package: rjm
name: Commit Count Thresholds
slug: commit-count-thresholds
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Commit Count Thresholds

## Definition — verbatim
> "### Commit Count Thresholds" — CONTRIBUTING.md:839

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 839 | defined here | Section heading defining advisory commit volume thresholds (10 and 15 commits) triggering needs-split notices. |

## Consumes
The list of git commits associated with an active pull request branch.

## Produces
Advisory PR notices and automated application of the `needs-split` issue label.

## When applied
Evaluated automatically during pull request CI workflows upon branch updates.

## Sub-concepts
none

## Part of
pull-request-guidelines

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Commit Count Thresholds provide an advisory sizing gate in rjm designed to mitigate PR scope creep. Following the removal of hard blocking commit limits (ADR-099, issue #5233), rjm applies warning notices at 10 commits and alert notices at 15 commits alongside a `needs-split` label, encouraging contributors and specialized review agents to perform retrospective split analyses without stranding sandboxed CI workflows.
