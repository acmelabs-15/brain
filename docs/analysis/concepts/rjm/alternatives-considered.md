---
package: rjm
name: Alternatives Considered
slug: alternatives-considered
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
  - {path: .claude/skills/review/references/decision-rigor.md, sha256: acaa1778a6530d256a2996600af0674cd8f187af1f7777bf47df70e977233dcb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Alternatives Considered

## Definition — verbatim
> "Does the decision record at least one materially different alternative that was rejected?" — .claude/skills/review/references/decision-rigor.md:67

## Also called — verbatim
alternatives_considered — .claude/skills/observability/schema.json:87

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-TEMPLATE.md | 78 | defined here | Section heading and structured comparison table evaluating options, pros, cons, and rejection reasons. |
| .claude/skills/adr-generator/references/adr-template.md | 88 | defined here | Template section heading mandating comparative trade-off analysis across competing architectural approaches. |
| .claude/skills/observability/schema.json | 87 | defined here | Defines the `alternatives_considered` array schema property within structured decision telemetry records. |
| .claude/skills/review/references/decision-rigor.md | 65 | defined here | Primary analysis focus area in the decision-rigor review axis verifying that rejected options are documented. |

## Consumes
Candidate technical options, trade-off evaluations, and architectural requirements.

## Produces
Documented comparative evaluation tables and telemetry attributes capturing why non-chosen alternatives were rejected.

## When applied
Mandated during specification authoring (ADRs), decision-rigor reviews, and structured event logging.

## Sub-concepts
none

## Part of
adr

## Implementation status
defects: missing-path

## Design notes
Alternatives Considered is a decision-making discipline and structural artifact in rjm requiring that every architectural decision and significant design choice evaluate and document at least one viable rejected alternative. Enforced by both template schemas and the decision-rigor review axis, it guards against confirmation bias and single-solution groupthink by demanding reasoned justifications for why competing alternatives were not chosen.
