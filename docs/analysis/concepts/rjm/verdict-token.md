---
package: rjm
name: verdict token
slug: verdict-token
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# verdict token

## Definition — verbatim
> "Each axis emits a verdict token (`PASS`, `WARN`, `CRITICAL_FAIL`, or `UNKNOWN`) plus structured findings (severity, category, location, recommendation)." — .claude/skills/review/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 67 | defined here | Defines standardized output tokens emitted by each review axis. |

## Consumes
Evaluation and analysis results from an executed review axis or quality gate.

## Produces
Standardized uppercase token (`PASS`, `WARN`, `CRITICAL_FAIL`, `UNKNOWN`) emitted at the conclusion of axis evaluation.

## When applied
Emitted at the end of each review axis output before findings merging.

## Sub-concepts
none

## Part of
review, verdict-library

## Implementation status
defects: missing-path, doc-drift

## Design notes
Verdict tokens establish an unambiguous, enumerated set of outcomes (`PASS`, `WARN`, `CRITICAL_FAIL`, `UNKNOWN`) for every evaluated review axis. In rjm, restricting review results to machine-parseable tokens enables deterministic aggregation through `merge_verdicts` and prevents vague or conversational agent assessments from obfuscating merge readiness.
