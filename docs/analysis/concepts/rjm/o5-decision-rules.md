---
package: rjm
name: O5 Decision rules
slug: o5-decision-rules
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

# O5 Decision rules

## Definition — verbatim
> "| **O5 Decision rules** | What domain rules or invariants must hold, and which entity or aggregate root enforces each? These trace forward to design decision rules. |" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 146 | defined here | Fifth prompt in Step 1 ontology elicitation recording domain business rules and invariants mapped to enforcing entities. |

## Consumes
Domain business requirements and aggregate roots from O4.

## Produces
A catalog of domain invariants and enforcing entities that trace directly into design decision rules and CI completeness checks.

## When applied
Evaluated fifth during Step 1 domain ontology elicitation.

## Sub-concepts
none

## Part of
step-1-ontology-elicitation, ontologyfragment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Elicits domain invariants and attributes them to specific aggregates, ensuring that business rules are formalized early and verified for end-to-end traceability into design specifications.
