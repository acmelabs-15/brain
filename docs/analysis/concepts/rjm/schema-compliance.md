---
package: rjm
name: Schema Compliance
slug: schema-compliance
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Schema Compliance

## Definition — verbatim
> "## BLOCKING: Schema Compliance (read before writing any spec file)" — .claude/skills/spec-generator/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/SKILL.md | 27 | defined here | Establishes a blocking quality gate enforcing canonical frontmatter schema reading and validator execution. |

## Consumes
Spec frontmatter definitions and bundled canonical schema (`references/spec-schemas.md`).

## Produces
Schema-compliant frontmatter with zero enum violations verified by `validate_spec_frontmatter.py`.

## When applied
Applied mandatorily before writing and after emitting every spec artifact in `spec-generator`.

## Sub-concepts
none

## Part of
spec-generator

## Implementation status
clean

## Design notes
Schema Compliance is a blocking quality gate in rjm designed to eliminate enum hallucinations and frontmatter drift by requiring agents to consult the canonical schema file before generation and run deterministic Python validation before reporting completion.
