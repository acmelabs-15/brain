---
package: rjm
name: Documentation Accuracy Report
slug: documentation-accuracy-report
kind: artifact
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/scripts/doc_accuracy.py, sha256: e2a6c5623a7e91beaa30b099757c63e1648f530db3e3d2b4d2281dc34f4cc2f8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Documentation Accuracy Report

## Definition — verbatim
> "# Documentation Accuracy Report" — .claude/skills/doc-accuracy/scripts/doc_accuracy.py:1114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/scripts/doc_accuracy.py | 1114 | defined here | Markdown heading generated for the summary report aggregating gate verdict, coverage, claims, and findings. |

## Consumes
`assessment.json`, `claims.json`, `compilability-findings.json`, and `gate-result.json`.

## Produces
Formatted Markdown report summarizing documentation coverage, claims count, and blocking compilability issues.

## When applied
Generated when `--format markdown` is supplied to `doc_accuracy.py`.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: script-bug, internal-contradiction, doc-drift

## Design notes
The Documentation Accuracy Report is the human-readable Markdown deliverable produced by the doc-accuracy scanner. It consolidates the gate verdict, public symbol coverage metrics, extracted claims counts, and compilability findings into an executive summary for developer review.
