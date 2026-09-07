---
package: rjm
name: SLA fallback
slug: sla-fallback
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SLA fallback

## Definition — verbatim
> "if no architect-tier reviewer ratifies the verdict within 5 business days of the spike report's PR opening, the decision defaults to `keep-as-audit`." — .agents/architecture/ADR-058-agent-eval-discipline.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 202 | defined here | Defines operational policy defaulting unreviewed evaluations to keep-as-audit after 5 business days |
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 312 | defined here | Schema specification for optional recommendation_default field set when the SLA fallback fires |
| .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md | 346 | defined here | Task mitigation requiring implementers to set recommendation to keep-as-audit if architect review is inactive |

## Consumes
Unreviewed spike PR open for more than 5 business days without architect ratification.

## Produces
Default recommendation assignment of `keep-as-audit` with `recommendation_default: "sla-fallback"` in `report.json`.

## When applied
Triggered when 5 business days elapse after PR opening without an architect review response.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
SLA fallback is an operational circuit-breaker pattern that defaults unreviewed evaluation PRs to `keep-as-audit` after 5 business days. In rjm's workflow, this mechanism prevents evaluations from stalling indefinitely in review limbo while ensuring that unverified agents are never prematurely graduated to CI or scrapped without human review.
