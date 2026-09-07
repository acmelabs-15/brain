---
package: matt
name: sections
slug: sections
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
  - {path: skills/misc/scaffold-exercises/SKILL.md, sha256: 75f5c9d771606fb9762f16522efc954df11c324f87148d8ff069bce166257de9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sections

## Definition — verbatim
> "- **Sections**: `XX-section-name/` inside `exercises/` (e.g., `01-retrieval-skill-building`)" — skills/misc/scaffold-exercises/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 7 | used here | Listed as a primary structural element of exercise directory structures. |
| skills/misc/scaffold-exercises/SKILL.md | 3 | used here | Specified in skill description as top-level course modules to scaffold. |

## Consumes
Course outline detailing high-level curriculum modules and topic divisions.

## Produces
Numbered directories (`XX-section-name/`) inside `exercises/` containing ordered exercise folders.

## When applied
When scaffolding top-level modules or major subject groupings within a course repository.

## Sub-concepts
none

## Part of
exercise-directory-structures, scaffold-exercises

## Implementation status
clean

## Design notes
Top-level organizational units in educational course repositories. Each section groups related exercises under a zero-padded two-digit numeric prefix and dash-case name within `exercises/`, maintaining curriculum order and scoping module topics.
