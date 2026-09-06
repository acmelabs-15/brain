---
package: addy
name: Code Style
slug: code-style
kind: template
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Code Style

## Definition — verbatim
> "One real code snippet showing your style beats three paragraphs describing it. Include naming conventions, formatting rules, and examples of good output." — skills/spec-driven-development/SKILL.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/spec-driven-development/SKILL.md | 106 | defined here | Fourth core area of a specification providing concrete code snippets and formatting rules. |

## Consumes
Project idioms, linter rules, and representative codebase samples.

## Produces
Exemplary code snippets and conventions embedded within the specification document.

## When applied
When drafting the Code Style section during Phase 1: Specify.

## Sub-concepts
none

## Part of
phase-1-specify

## Implementation status
defects: doc-drift

## Design notes
A core specification section mandating an exemplary code snippet showing naming conventions, idioms, and formatting rules, providing a concrete exemplar for agents rather than abstract descriptive text.
