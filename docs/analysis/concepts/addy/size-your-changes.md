---
package: addy
name: Size Your Changes
slug: size-your-changes
kind: technique
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

# Size Your Changes

## Definition — verbatim
> "### 5. Size Your Changes" — skills/git-workflow-and-versioning/SKILL.md:111
> "Target ~100 lines per commit/PR. Changes over ~1000 lines should be split." — skills/git-workflow-and-versioning/SKILL.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 111 | defined here | Sets quantitative thresholds for change sizing (~100 lines target, splitting over ~1000 lines). |

## Consumes
Staged diffs, feature implementation scope.

## Produces
Small, reviewable pull requests and commits.

## When applied
During task breakdown, implementation planning, and commit creation.

## Sub-concepts
none

## Part of
git-workflow-and-versioning

## Implementation status
defects: doc-drift, cross-file-contradiction (catalog doc-drift regarding section headings; cross-file contradiction on Ship phase placement vs cross-phase activation)

## Design notes
Sizing changes to ~100 lines per commit/PR maximizes review effectiveness and bisect accuracy, actively preventing the unreviewable multi-thousand line dumps common in unchecked AI coding.
