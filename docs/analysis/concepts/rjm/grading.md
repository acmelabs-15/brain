---
package: rjm
name: Grading
slug: grading
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

# Grading

## Definition — verbatim
> "### Phase 2: Grading" — .claude/agents/quality-auditor.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 63 | defines | Phase 2 of quality auditor workflow running grading scripts and assessing architectural layers. |

## Consumes
Discovered assets, file inventories, and grading rubrics from the discovery phase.

## Produces
Computed domain quality scores, layer-specific evaluations, and identified quality gaps.

## When applied
Executed immediately following Phase 1 Discovery during quality audits.

## Sub-concepts
a-f-domain-grading, quality-grades

## Part of
quality-auditor

## Implementation status
clean

## Design notes
The evaluation phase in the quality auditor workflow following discovery. It executes scoring algorithms against discovered files and layers, computing objective letter grades and cataloging compliance gaps across the repository.
