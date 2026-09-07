---
package: rjm
name: Check quality grades for degradation
slug: check-quality-grades-for-degradation
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/scripts/check_grade_changes.py, sha256: 8c2d151761ecfea270060dc7f4e9315bbb47eaf90270d208cbca64e87ac19280}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Check quality grades for degradation

## Definition — verbatim
> "Check quality grades for degradation and notify via GitHub issue." — .claude/skills/quality-grades/scripts/check_grade_changes.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/scripts/check_grade_changes.py | 2 | defined here | Module docstring defining the automated degradation check and notification script. |

## Consumes
JSON grades report produced by grade_domains.py and a score threshold parameter.

## Produces
GitHub issue alert and process exit code signaling pass (0) or degradation (1).

## When applied
Run in automated CI or weekly audit workflows following domain grading.

## Sub-concepts
quality-grade-alert, threshold

## Part of
quality-grades

## Implementation status
defects: doc-drift

## Design notes
Automated quality gate in rjm that parses domain grading reports to detect regressions or scores falling below threshold, alerting maintainers via GitHub issues to halt silent quality decay.
