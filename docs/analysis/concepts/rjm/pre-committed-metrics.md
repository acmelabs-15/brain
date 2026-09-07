---
package: rjm
name: pre-committed-metrics
slug: pre-committed-metrics
kind: technique
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

# pre-committed-metrics

## Definition — verbatim
> "Check that the threshold and its consequence are written down before the work, not read off whatever number looks good after." — .claude/skills/review/references/decision-rigor.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/decision-rigor.md | 54 | used here | Reference guidance checking that evaluation thresholds are pre-committed before work rather than retrofitted. |

## Consumes
Acceptance criteria, evaluation targets, or success metrics staged in specifications or pull requests.

## Produces
Review findings identifying uncommitted, vague, or retrospectively adjusted success metrics.

## When applied
When a pull request or specification stages acceptance criteria, an eval target, or a success metric.

## Sub-concepts
none

## Part of
decision-rigor

## Implementation status
clean

## Design notes
A decision discipline technique in rjm requiring evaluation thresholds and consequences to be defined before implementation begins, preventing teams from adjusting targets post hoc to match whatever numbers were achieved.
