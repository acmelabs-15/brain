---
package: matt
name: Multi-context repo
slug: multi-context-repo
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Multi-context repo

## Definition — verbatim
> "Multi-context repo (presence of `CONTEXT-MAP.md` at the root):" — skills/engineering/setup-matt-pocock-skills/domain.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/domain.md | 26 | used here | Describes the directory layout and documentation rules for repositories containing multiple bounded domain contexts. |

## Consumes
Monorepo or multi-domain codebase structure.

## Produces
A hierarchical domain documentation layout featuring root CONTEXT-MAP.md, system-wide docs/adr/, and per-context src/<context>/CONTEXT.md and src/<context>/docs/adr/.

## When applied
Applied when configuring large repositories or monorepos where multiple distinct bounded contexts operate under separate domain models.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An architectural pattern for complex codebases or monorepos where multiple bounded contexts coexist. A top-level CONTEXT-MAP.md coordinates navigation across contexts, while each sub-domain maintains its own local glossary and context-specific architectural decisions.
