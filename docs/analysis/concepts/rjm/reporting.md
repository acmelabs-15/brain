---
package: rjm
name: Reporting
slug: reporting
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Reporting

## Definition — verbatim
> "### Phase 3: Reporting" — .claude/agents/quality-auditor.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 69 | defines | Phase 3 of quality auditor workflow compiling markdown and JSON summary reports and updating memories. |

## Consumes
Calculated grades, gap matrices, and trend data from Phase 2 Grading.

## Produces
Markdown audit report, structured JSON results, and updated persistent memory records.

## When applied
Executed following Phase 2 Grading during quality audits.

## Sub-concepts
trend-analysis, gap-tracking

## Part of
quality-auditor

## Implementation status
clean

## Design notes
The synthesis phase in the quality auditor workflow where computed scores and gap analyses are compiled into formal reporting artifacts. It writes human-readable markdown summaries and machine-readable JSON reports, ensuring audit results are shared with stakeholders and persisted for longitudinal tracking.
