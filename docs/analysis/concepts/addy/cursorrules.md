---
package: addy
name: cursorrules
slug: cursorrules
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cursorrules

## Definition — verbatim
(used, not defined)
> "| Root `.cursorrules` | `.cursor/rules/*.mdc` |" — docs/cursor-setup.md:29

## Also called — verbatim
- `.cursorrules` — skills/context-engineering/SKILL.md:75

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/cursor-setup.md | 29 | used here | Listed in the legacy table as a deprecated monolithic file to be replaced by .cursor/rules/*.mdc. |
| skills/context-engineering/SKILL.md | 75 | used here | Listed as an equivalent project rules file pattern for the Cursor tool environment. |

## Consumes
Monolithic project rules, coding conventions, and developer guidelines.

## Produces
Single project-root context file (`.cursorrules`) loaded into all agent sessions in legacy setups.

## When applied
Legacy configuration pattern; superseded by modular `.cursor/rules/*.mdc` and on-demand `.cursor/skills/`.

## Sub-concepts
none

## Part of
- `rules`

## Implementation status
defects: doc-drift, orphan

## Design notes
`.cursorrules` is a legacy single-file configuration pattern in Cursor that consolidated all project instructions into a single root file. Modern setups deprecate it in favor of fine-grained `.cursor/rules/*.mdc` files and on-demand `.cursor/skills/` directories to prevent context window saturation.
