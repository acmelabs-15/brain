---
package: rjm
name: Absolute mode
slug: absolute-mode
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Absolute mode

## Definition — verbatim
(used, not defined)

> "Two gate modes decide what an exit code means. Absolute mode gates every" — .claude/skills/code-qualities-assessment/scripts/assess.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 12 | used here | Gate mode in assess.py evaluating every assessed file against configured static thresholds, exiting 11 on failure. |

## Consumes
Source code files targeted for assessment and configured numeric quality thresholds from `.qualityrc.json`.

## Produces
Pass/fail gate verdict (exit code 0 on success, exit code 11 on threshold failure) evaluating files against absolute quality baselines.

## When applied
Applied when assessing entire code repositories, directory trees, or new files lacking a prior git revision to compare against.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
Absolute mode enforces fixed maintainability standards across all evaluated files. Unlike regression mode, which evaluates score deltas against a git merge base to accommodate legacy debt, absolute mode tests files directly against configured static thresholds, preventing code from landing unless all five quality dimensions meet baseline expectations.
