---
package: rjm
name: A-F domain grading
slug: a-f-domain-grading
kind: technique
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

# A-F domain grading

## Definition — verbatim
(used, not defined)

> "Use for repo-wide A-F domain grading and trend tracking." — .claude/agents/quality-auditor.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 3 | used here | Evaluative scoring methodology assigning letter grades A through F to repository domains. |

## Consumes
Quantitative metrics across architectural layers (test coverage, documentation completeness, lint health).

## Produces
Standardized letter grade (A, B, C, D, or F) for each functional domain in the repository.

## When applied
Applied by the quality auditor and quality-grades skill during repository audits.

## Sub-concepts
none

## Part of
quality-grades

## Implementation status
clean

## Design notes
A standardized letter-grading rubric (A through F) applied across repository functional domains. By collapsing diverse multi-layered metrics into an intuitive evaluation scale, it establishes clear benchmarks for maintainability and prioritizes engineering investment.
