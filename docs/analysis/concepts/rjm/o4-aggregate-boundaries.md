---
package: rjm
name: O4 Aggregate boundaries
slug: o4-aggregate-boundaries
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

# O4 Aggregate boundaries

## Definition — verbatim
> "| **O4 Aggregate boundaries** | Which entities cluster under a single aggregate root that owns their invariants and is the unit of transactional change? Name each aggregate root. |" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 145 | defined here | Fourth prompt in Step 1 ontology elicitation identifying aggregate roots and transactional consistency boundaries. |

## Consumes
Entities and relationships from prompts O1 and O3.

## Produces
Definition of aggregate roots and transactional change boundaries in the OntologyFragment.

## When applied
Evaluated fourth during Step 1 domain ontology elicitation.

## Sub-concepts
none

## Part of
step-1-ontology-elicitation, ontologyfragment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Groups related entities under transactional consistency boundaries governed by aggregate roots, preventing fragmented data mutations and ensuring invariant enforcement in persistence designs.
