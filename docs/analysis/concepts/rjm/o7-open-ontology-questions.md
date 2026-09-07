---
package: rjm
name: O7 Open ontology questions
slug: o7-open-ontology-questions
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

# O7 Open ontology questions

## Definition — verbatim
> "| **O7 Open ontology questions** | What concepts are still ambiguous or contested? Record them as open questions rather than guessing a wrong abstraction (CVA: the greatest risk is the wrong abstraction). |" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 148 | defined here | Seventh prompt in Step 1 ontology elicitation recording unresolved ambiguities as explicit open questions. |

## Consumes
Ambiguities, contradictions, or missing consensus discovered during ontology elicitation.

## Produces
A list of open conceptual questions in the OntologyFragment preventing speculative abstractions.

## When applied
Evaluated seventh during Step 1 domain ontology elicitation.

## Sub-concepts
none

## Part of
step-1-ontology-elicitation, ontologyfragment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Prevents premature generalization by explicitly cataloging unresolved conceptual ambiguities rather than inventing brittle abstractions, adhering to the principle that the greatest architectural risk is the wrong abstraction.
