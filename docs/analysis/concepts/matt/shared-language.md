---
package: matt
name: shared language
slug: shared-language
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shared language

## Definition — verbatim
> "shared language. It's a document that helps agents decode the jargon used in the project." — README.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 115 | defined here | Introduced as a document that decodes project jargon to eliminate agent verbosity |

## Consumes
Project terminology, domain concepts, and system jargon discussed during initial development or grilling sessions.

## Produces
A domain glossary document (such as `CONTEXT.md`) that maps project concepts to concise definitions.

## When applied
At the start of a project or during `/grill-with-docs` to establish common domain terms and prevent agent misalignment.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A shared language document (such as `CONTEXT.md`) bridges the communication gap between humans and coding agents by explicitly defining domain-specific terminology. Giving agents a concise, shared vocabulary prevents verbose explanations, aligns file and variable naming with the domain model, and reduces token consumption during reasoning.
