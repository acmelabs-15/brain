---
package: rjm
name: Zimmermann 7-question checklist
slug: zimmermann-7-question-checklist
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Zimmermann 7-question checklist

## Definition — verbatim
(used, not defined)

> "| **Phase 1** | Independent review | Each agent reviews ADR using [Zimmermann 7-question checklist](references/zimmermann-review-guidance.md) |" — .claude/skills/adr-review/SKILL.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 95 | used here | Specified as the review checklist each agent applies during Phase 1 independent review of an ADR. |

## Consumes
Draft Architecture Decision Records.

## Produces
Structured critique evaluations covering decision drivers, options, consequences, and compliance.

## When applied
Applied by reviewing agents during Phase 1 independent ADR evaluation.

## Sub-concepts
none

## Part of
multi-agent-debate

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural evaluation framework codified from Olaf Zimmermann's ADR review guidance, structuring independent agent critique around seven standardized questions addressing problem statement, decision scope, alternatives, rationale, consequences, and review hygiene.
