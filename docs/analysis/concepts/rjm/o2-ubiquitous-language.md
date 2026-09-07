---
package: rjm
name: O2 Ubiquitous language
slug: o2-ubiquitous-language
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

# O2 Ubiquitous language

## Definition — verbatim
> "| **O2 Ubiquitous language** | For each entity from O1, what is the single canonical name the team uses? Record synonyms to retire so two requirements never name one concept two ways. |" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 143 | defined here | Second prompt in Step 1 ontology elicitation establishing canonical names and retired synonyms for all domain entities. |

## Consumes
Entities identified in prompt O1 and team vocabulary.

## Produces
A canonical terminology map with deprecated synonyms to enforce consistent naming across requirements, designs, and code.

## When applied
Evaluated second during Step 1 domain ontology elicitation.

## Sub-concepts
none

## Part of
step-1-ontology-elicitation, ontologyfragment

## Implementation status
defects: missing-path, doc-drift

## Design notes
A domain-driven design prompt fixing exactly one canonical name per domain concept and explicitly recording deprecated synonyms, preventing requirements and architecture from diverging into contradictory naming silos.
