---
package: rjm
name: Decision Rigor Review Task
slug: decision-rigor-review-task
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Decision Rigor Review Task

## Definition — verbatim
> "# Decision Rigor Review Task" — .claude/skills/review/references/decision-rigor.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 8 | defined here | Document title and role prompt heading defining the review task for evaluating decision reasoning quality. |

## Consumes
Staged Architecture Decision Records, design review documents, or non-obvious technical choices in a pull request.

## Produces
Evaluations of decision quality, findings on hidden assumptions or biases, and a review verdict (PASS, WARN, CRITICAL_FAIL).

## When applied
During Stage-2 pull request review when an ADR or design review document is staged, or when the PR description argues for a non-obvious technical choice.

## Sub-concepts
pre-committed-metrics, assumptions-and-claims, survivorship-and-evidence-bias, start-simple, decision-quality-assessment, overall-decision-rigor-score

## Part of
review

## Implementation status
clean

## Design notes
A Stage-2 canonical review axis task in rjm that audits the reasoning behind architectural decisions, stress-testing assumptions, alternatives, failure modes, and survivorship bias to ensure choices are defensible.
