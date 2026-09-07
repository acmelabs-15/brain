---
package: rjm
name: Analyst review
slug: analyst-review
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Analyst review

## Definition — verbatim
> "Analyst review (doc-accuracy + golden-principles, then gap check)" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 290 | defined here | Defines the 3-stage analyst review gate executing doc-accuracy, golden-principles, and an adversarial gap check. |

## Consumes
Generated specification artifacts (`REQ-NNN`, `DESIGN-NNN`, `TASK-NNN`, `ADR-NNN`), repository documentation, and architectural standards.

## Produces
Gating review verdict and identified contradictions, principle violations, or ambiguous and untestable requirements.

## When applied
> "Run two skills in sequence before the gap-and-ambiguity check, each gating the spec from advancing to Step 8:" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:290

## Sub-concepts
doc-accuracy, golden-principles, analyst

## Part of
spec-generator

## Implementation status
defects: missing-path, doc-drift

## Design notes
A multi-stage quality gate executed at Step 7 of the specification process that integrates documentation consistency analysis, software engineering design principles, and an adversarial requirements analyst review to ensure specifications are testable and free of contradictions before proceeding to decision critique.
