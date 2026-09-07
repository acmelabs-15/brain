---
package: rjm
name: thresholds
slug: thresholds
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
  - {path: .claude/skills/code-qualities-assessment/templates/.qualityrc.json, sha256: 31e9d74ee0b0c490d54d9ae9176b111a6b6bd6002550e4881e727afa7e3727d0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# thresholds

## Definition — verbatim
> "thresholds" — .claude/skills/code-qualities-assessment/templates/.qualityrc.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/README.md | 47 | used here | Example configuration showing threshold mappings for maintainability dimensions. |
| .claude/skills/code-qualities-assessment/scripts/assess.py | 451 | used here | Fallback configuration dictionary defining default minimum acceptable quality thresholds. |
| .claude/skills/code-qualities-assessment/templates/.qualityrc.json | 2 | defined here | Configuration schema section declaring baseline minimum scores for code qualities. |

## Consumes
Numerical evaluation scores computed across the five foundational maintainability qualities (cohesion, coupling, encapsulation, testability, nonRedundancy).

## Produces
Pass/fail gate verdict, exiting with code 0 if all scores satisfy configured thresholds or exit code 11 if any score falls below minimum.

## When applied
Applied by assess.py during code quality checks when evaluating target files in absolute mode or new files in regression mode.

## Sub-concepts
none

## Part of
qualityrc-json

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
Thresholds define the minimum numerical scores required across cohesion, coupling, encapsulation, testability, and non-redundancy to pass code quality gates. Without configurable thresholds, quality assessment would either enforce an inflexible one-size-fits-all standard or lack enforceable pass/fail criteria in automated pipelines.
