---
package: addy
name: Naming Conventions
slug: naming-conventions
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Naming Conventions

## Definition — verbatim
> "- Skill directories: `lowercase-hyphen-separated`" — docs/skill-anatomy.md:153

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-anatomy.md | 151 | defines | Specifies naming conventions for skill directories, skill files, supporting files, and shared references. |

## Consumes
File paths and directory structures within the agent-skills repository.

## Produces
Uniform naming across all skill packs, references, and supporting files.

## When applied
When naming skill folders, `SKILL.md` files, or supporting references.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Naming Conventions enforces consistent lowercase hyphenated naming for skill directories and supporting docs while mandating uppercase `SKILL.md`. Standardized naming ensures programmatic discoverability across tools and prevents broken cross-skill linkages due to filesystem casing differences.
