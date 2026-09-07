---
package: rjm
name: OntologyFragment
slug: ontologyfragment
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/requirements-interview/SKILL.md, sha256: 346b3ef376ecb63eeaaf31870494a19d3bf7ab00499526efb21084bdc76af4cc}
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OntologyFragment

## Definition — verbatim
> "write the seven answers to `.agents/specs/ontology/<feature-slug>.md`, where `<feature-slug>` is the kebab-case feature name (the same slug the spec-generator uses for `REQ-NNN-{slug}.md`)." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/requirements-interview/SKILL.md | 31 | used here | Optional input read before interview to use O2 canonical names in questions and carry into PRD. |
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 150 | defined here | Defined as output artifact of Step 1 containing seven O1-O7 domain modeling answers written to `.agents/specs/ontology/<feature-slug>.md`. |
| .claude/skills/spec-generator/SKILL.md | 108 | used here | Input passed to Step 6 specifying the single source of truth for domain entities and canonical vocabulary. |

## Consumes
Elicited domain answers covering O1 entities, O2 ubiquitous language, O3 relationships, O4 aggregate boundaries, O5 decision rules, O6 bounded contexts, O7 open questions.

## Produces
Durable domain modeling file at `.agents/specs/ontology/<feature-slug>.md`.

## When applied
Generated in `/spec` Step 1, consumed in requirements interview (Step 2) and spec generation (Step 6).

## Sub-concepts
none

## Part of
spec-generator

## Implementation status
defects: doc-drift, missing-path

## Design notes
A domain modeling artifact establishing canonical ubiquitous language, invariants, and aggregate boundaries before specifications are generated. It acts as the single source of truth for domain vocabulary across all downstream requirements and tests.
