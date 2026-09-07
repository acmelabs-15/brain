---
package: rjm
name: mergeStateStatus
slug: mergestatestatus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# mergeStateStatus

## Definition — verbatim
(used, not defined)

> "1. **Branch up to date with `main`**. `mergeStateStatus != BEHIND`." — docs/autonomous-pr-monitor.md:60
> "4. **`mergeStateStatus` is an executable merge state**." — docs/autonomous-pr-monitor.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 60 | used here | GitHub GraphQL status field inspected to ensure a pull request branch is not behind main and reflects an executable merge state. |

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
defects: missing-path, internal-contradiction

## Design notes
`mergeStateStatus` is a GitHub GraphQL API field identifier representing pull request mergeability state rather than an independent lifecycle concept.
