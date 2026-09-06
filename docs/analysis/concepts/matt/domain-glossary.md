---
package: matt
name: domain glossary
slug: domain-glossary
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md, sha256: 8f60cf9bf19f1ee8cc09a15c2e06e1d7a9cb51f79d9a273dd9b20b8a2a494f80}
  - {path: skills/engineering/to-spec/SKILL.md, sha256: 43ad9cf318e5e7d3d1fa360253a37021796dc87a0c2e595ad262661a10f85088}
  - {path: skills/engineering/to-tickets/SKILL.md, sha256: 5c9fba69845c2519b9b35b9af42ae5142c21f8ca15ac2123dc2722002c8058ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# domain glossary

## Definition — verbatim
(used, not defined)
> "Use the project's domain glossary vocabulary throughout the spec, and respect any ADRs in the area you're touching." — skills/engineering/to-spec/SKILL.md:13
> "Ticket titles and descriptions should use the project's domain glossary vocabulary, and respect ADRs in the area you're touching." — skills/engineering/to-tickets/SKILL.md:21

## Also called — verbatim
> "- **Soft dependency** (`diagnose`, `tdd`, `improve-codebase-architecture`): reference "the project's domain glossary" and "ADRs in the area you're touching" in vague prose only." — .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md:8

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0001-explicit-setup-pointer-only-for-hard-dependencies.md | 8 | used here | Cited as optional project documentation referenced in vague prose by soft dependencies |
| skills/engineering/to-spec/SKILL.md | 13 | used here | Instructs specification writing to adhere to ubiquitous domain glossary vocabulary |
| skills/engineering/to-tickets/SKILL.md | 21 | used here | Mandates ticket titles and descriptions use project domain glossary vocabulary |

## Consumes
Repository ubiquitous language documents, typically maintained in root `CONTEXT.md` or scoped context files.

## Produces
Consistent domain terminology throughout specs, ticket titles, issues, and code identifiers.

## When applied
When drafting specs, creating tickets, or exploring codebases to ensure concepts align with ubiquitous language.

## Sub-concepts
none

## Part of
domain-doc-layout

## Implementation status
clean

## Design notes
The ubiquitous language dictionary (instantiated in `CONTEXT.md`) establishing authoritative definitions, relationships, and naming conventions for domain concepts. Referenced across engineering skills to ensure specs, tickets, and implementation code adhere to unambiguous, consistent terminology.
