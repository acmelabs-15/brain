---
package: addy
name: sandboxes
slug: sandboxes
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# sandboxes

## Definition — verbatim
(used, not defined)
> "Treat commits as save points, branches as sandboxes, and history as documentation." — skills/git-workflow-and-versioning/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 10 | used here | Defines git branches as isolated exploration spaces where experimental code does not affect main. |

## Consumes
Git repository branch mechanism, baseline branch (main).

## Produces
Isolated branch environments for testing and implementing features.

## When applied
When starting new features, bug fixes, or exploratory agent experiments.

## Sub-concepts
short-lived-feature-branches, feature-branches

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Git branches act as sandboxes allowing AI agents and engineers to make speculative changes in complete isolation from the production-ready main branch, ensuring failed explorations can be discarded painlessly.
