---
package: rjm
name: Step 1 Ontology elicitation
slug: step-1-ontology-elicitation
kind: technique
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

# Step 1 Ontology elicitation

## Definition — verbatim
> "#### Step 1 Ontology elicitation (domain-driven design)" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 134 | defined here | Defines the sub-step of Step 1 eliciting answers to prompts O1-O7 grounded in domain-driven design before requirements interviewing. |

## Consumes
Problem clarification context, domain background, and reference guidance from `domain-driven-design`.

## Produces
An `OntologyFragment` artifact written to `.agents/specs/ontology/<feature-slug>.md` establishing ubiquitous domain language.

## When applied
Executed during Step 1 (Clarify) once per `/spec` invocation, preceding the Step 2 requirements interview.

## Sub-concepts
o1-entities, o2-ubiquitous-language, o3-relationships, o4-aggregate-boundaries, o5-decision-rules, o6-bounded-context-boundaries, o7-open-ontology-questions

## Part of
step-1

## Implementation status
defects: missing-path, doc-drift

## Design notes
A domain-driven design sub-step that establishes an unambiguous domain ontology before writing requirements, preventing vocabulary drift, mismatched abstractions, and disjoint terminology across specification artifacts.
