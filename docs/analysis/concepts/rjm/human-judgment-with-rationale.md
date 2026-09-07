---
package: rjm
name: Human-judgment with rationale
slug: human-judgment-with-rationale
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Human-judgment with rationale

## Definition — verbatim
> "**Human-judgment with rationale.** The literal value `human-judgment`" — .agents/architecture/ADR-065-orchestrator-as-router.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 73 | defined here | Defined as an explicit escape hatch for success_criterion when machine signals cannot evaluate qualitative work. |

## Consumes
Sub-agent deliverables requiring qualitative appraisal and mandatory rationale string.

## Produces
Documented rationale justification awaiting review-panel or human evaluation.

## When applied
Applied in sub-agent frontmatter when task output is inherently subjective (such as drafting an ADR or conducting design review).

## Sub-concepts
none

## Part of
success_criterion

## Implementation status
defects: missing-path

## Design notes
An explicit escape hatch in ADR-065's success_criterion schema that accommodates inherently qualitative tasks (such as ADR drafting or architectural review) without fabricating false machine-checkable signals. It requires a mandatory rationale field explaining why machine evaluation does not apply.
