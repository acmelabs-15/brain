---
package: matt
name: issue_dependencies_summary.blocked_by
slug: issue-dependencies-summary-blocked-by
kind: name-only
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# issue_dependencies_summary.blocked_by

## Definition — verbatim
(used, not defined)

> "GitHub reports `issue_dependencies_summary.blocked_by` (open blockers only, the live gate)." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 42 | used here | Names the API response field returned by GitHub indicating count of open blocking dependencies. |

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
A JSON field in GitHub's REST/GraphQL response representing the count of open blockers for an issue, serving as technical API schema rather than a lifecycle concept.
