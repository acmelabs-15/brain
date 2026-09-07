---
package: rjm
name: ReportWriter
slug: reportwriter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ReportWriter

## Definition — verbatim
(used, not defined)

> "class ReportWriter:" — scripts/eval/_report_writer.py:380

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 28 | defined here | Component rendering REPORT.md and report.json output artifacts. |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 135 | defined here | Task row specifying ReportWriter rendering and atomic file writing. |
| scripts/eval/_report_writer.py | 380 | defined here | Class definition implementing report rendering and disk serialization. |
| scripts/eval/eval-agent-vs-baseline.py | 58 | used here | Imported to write final markdown and JSON report outputs. |

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
defects: doc-drift, exit-code-mismatch, missing-path, script-bug

## Design notes
ReportWriter is a Python class identifier rendering evaluation results into REPORT.md and report.json artifacts, classified as name-only per D-023.
