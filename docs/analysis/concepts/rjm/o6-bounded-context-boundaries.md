---
package: rjm
name: O6 Bounded-context boundaries
slug: o6-bounded-context-boundaries
kind: checklist
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

# O6 Bounded-context boundaries

## Definition — verbatim
> "| **O6 Bounded-context boundaries** | Which bounded context does this work live in? Where does its model stop and another context's model begin (the seam that needs translation)? |" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:147

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 147 | defined here | Sixth prompt in Step 1 ontology elicitation defining bounded context borders and model translation seams. |

## Consumes
System architecture overview and feature domain model.

## Produces
Specification of the current bounded context boundary and explicit translation seams to external contexts.

## When applied
Evaluated sixth during Step 1 domain ontology elicitation.

## Sub-concepts
none

## Part of
step-1-ontology-elicitation, ontologyfragment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Explicitly bounds the domain model within a cohesive context, identifying where translations across context boundaries must occur to prevent leaky abstractions.
