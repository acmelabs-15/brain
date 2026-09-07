---
package: rjm
name: adversarial requirements interview
slug: adversarial-requirements-interview
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

# adversarial requirements interview

## Definition — verbatim
(used, not defined)

> "2. **Run the adversarial requirements interview**: Invoke Skill(skill="requirements-interview") to walk the design tree before any further analysis." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 155 | used here | Invoked at Step 2 to grill the user on user stories, data models, integrations, failure modes, security, and scope boundaries. |

## Consumes
Problem statement, Step 0 answers, and OntologyFragment from Step 1.

## Produces
A structured PRD containing vetted user stories, failure modes, security boundaries, and acceptance criteria.

## When applied
Executed as Step 2 of the /spec lifecycle command pipeline.

## Sub-concepts
none

## Part of
spec-generator, step-2

## Implementation status
defects: missing-path, doc-drift

## Design notes
An aggressive questioning technique executed by the requirements-interview skill that probes edge cases, failure modes, and scope boundaries before technical design, producing a robust PRD grounded in the domain ontology.
