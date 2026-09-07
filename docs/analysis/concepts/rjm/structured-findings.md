---
package: rjm
name: structured findings
slug: structured-findings
kind: artifact
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

# structured findings

## Definition — verbatim
> "Each axis emits a verdict token (`PASS`, `WARN`, `CRITICAL_FAIL`, or `UNKNOWN`) plus structured findings (severity, category, location, recommendation)." — .claude/skills/review/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 67 | defined here | Defines schema for detailed issues emitted by review axes. |

## Consumes
Code review findings identified by specialized review subagents or AST analysis tools.

## Produces
Formatted issue reports with mandatory `severity`, `category`, `location`, and `recommendation` fields.

## When applied
Emitted following the verdict token for any issue or defect discovered during axis review.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, doc-drift

## Design notes
Structured findings enforce a four-field contract (`severity`, `category`, `location`, `recommendation`) on every defect or issue identified during review. By mandating exact `file:line` locations and concise actionable remediation steps, rjm ensures findings can be validated against PR diff boundaries and easily addressed by developers or automated remediation loops.
