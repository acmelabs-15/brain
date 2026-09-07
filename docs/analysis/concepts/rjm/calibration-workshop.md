---
package: rjm
name: Calibration Workshop
slug: calibration-workshop
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/calibration-examples.md, sha256: 79f51c12b66cb2543069b1a0239227fcd1e864961d5e6e1b8c386a84645103cb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Calibration Workshop

## Definition — verbatim
> "## Calibration Workshop" — .claude/skills/code-qualities-assessment/references/calibration-examples.md:442

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/calibration-examples.md | 442 | defined here | Defines a 4-round team workshop protocol targeting 80%+ consensus on quality scores within ±1 point. |

## Consumes
Reference code examples, quality score rubrics, and independent ratings from multiple reviewers.

## Produces
Calibrated evaluation consensus across team members with documented team-specific benchmark examples.

## When applied
Applied when establishing or recalibrating code maintainability scoring standards across development teams.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
clean

## Design notes
The Calibration Workshop is a four-round collaborative alignment exercise designed to eliminate subjectivity in code reviews. By progressing from independent scoring to discussion, edge-case resolution, and creating localized examples, it achieves 80%+ agreement within ±1 score point across engineers and automated agents.
