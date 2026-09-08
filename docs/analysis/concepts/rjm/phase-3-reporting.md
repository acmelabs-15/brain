---
package: rjm
name: Phase 3: Reporting
slug: phase-3-reporting
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 3: Reporting

## Definition — verbatim
> "### Phase 3: Reporting" — templates/agents/quality-auditor.shared.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/quality-auditor.shared.md | 74 | defined here | Third phase of the quality auditor process, generating human-readable audit summaries and trend analysis. |

## Consumes
Grading data, gap descriptions, and historical audit reports.

## Produces
Markdown domain quality audit report.

## When applied
Executed after domain grading to generate comprehensive reports and analyze trends against prior audits.

## Sub-concepts
none

## Part of
quality-auditor

## Implementation status
defects: missing-path

## Design notes
The reporting phase converts domain grading metrics and layer scores into structured markdown summaries that highlight critical gaps and compare quality trends over time.
