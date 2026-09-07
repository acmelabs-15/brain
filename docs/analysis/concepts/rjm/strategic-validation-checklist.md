---
package: rjm
name: Strategic Validation Checklist
slug: strategic-validation-checklist
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

# Strategic Validation Checklist

## Definition — verbatim
> "### Strategic Validation Checklist" — .claude/skills/adr-review/SKILL.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/SKILL.md | 129 | defined here | Section heading introducing the four strategic review lenses applied during principal-level ADR validation. |

## Consumes
ADR drafts, historical context, reversibility analyses, and core/context capability classifications.

## Produces
Evaluations across Chesterton's Fence, Path Dependence, Core vs Context, and Second-System Effect lenses.

## When applied
Applied during Phase 4 Strategic Review to evaluate principal-level architectural implications before approval.

## Sub-concepts
path-dependence, second-system-effect

## Part of
adr-review

## Implementation status
defects: doc-drift, missing-path

## Design notes
A strategic governance checklist in rjm that forces review agents to evaluate high-level architectural risks using four mental models (Chesterton's Fence, Path Dependence, Core vs Context, and Second-System Effect), ensuring decisions are technically sound and strategically aligned.
