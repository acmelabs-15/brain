---
package: rjm
name: threshold
slug: threshold
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/scripts/check_grade_changes.py, sha256: 8c2d151761ecfea270060dc7f4e9315bbb47eaf90270d208cbca64e87ac19280}
  - {path: scripts/compute_health_status.py, sha256: 6eaa6186909dcbe2e368395148b24f0b3968685da7f351143d3378094749a863}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# threshold

## Definition — verbatim
> "class Threshold:" — scripts/compute_health_status.py:38

## Also called — verbatim
> "--threshold" — .claude/skills/quality-grades/scripts/check_grade_changes.py:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/scripts/check_grade_changes.py | 31 | defined here | Command-line parameter setting the score threshold below which a domain is flagged as degraded. |
| scripts/compute_health_status.py | 38 | defined here | Dataclass defining warning and error boundary thresholds for metric health status evaluation. |

## Consumes
Numerical metrics, domain quality scores, system health measurements.

## Produces
Classification boundaries determining whether components pass, trigger warnings, or fail.

## When applied
During quality degradation checks and aggregate system health status evaluations.

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
defects: doc-drift, script-bug, missing-path

## Design notes
A metric boundary technique in rjm establishing quantitative thresholds to objectively classify component health and trigger automated remediation.
