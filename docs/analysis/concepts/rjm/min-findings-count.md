---
package: rjm
name: min_findings_count
slug: min-findings-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# min_findings_count

## Definition — verbatim
(used, not defined)

> "(one-sided) on findings count where the fixture sets `min_findings_count`." — scripts/eval/README.md:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-reviewer-asymmetry.py | 122 | used here | Fixture attribute checked to conditionally inject findings array requirement into prompt. |
| scripts/eval/README.md | 191 | defined here | Documented as fixture parameter triggering Mann-Whitney U testing on continuous findings counts. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
An evaluation fixture schema field specifying the minimum required findings count triggering Mann-Whitney U continuous testing, classified as name-only per D-023.
