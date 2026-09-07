---
package: rjm
name: ruff
slug: ruff
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.3.1/PowerShell-migration.md, sha256: 2bf56db90e63bed0596639e3ae4e0b13f71528454721b4561d580a1d387d6e12}
  - {path: .claude/skills/validation-authority/SKILL.md, sha256: 0b8799627fe980eeb0ca75f7e04440cdadc66e19a715e92c10cc31598282ae9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ruff

## Definition — verbatim
(used, not defined)

> "Adding `ruff` to a Python project. Several existing files fail." — .claude/skills/validation-authority/SKILL.md:122

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.3.1/PowerShell-migration.md | 281 | used here | Cited as the Python linter replacing PSScriptAnalyzer during CI workflow updates. |
| .claude/skills/validation-authority/SKILL.md | 122 | used here | Used in Example 3 illustrating upstream validation authority during tool integration. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean (validation-authority), defects: doc-drift, missing-path (PowerShell-migration.md)

## Design notes
ruff is an external Python static analysis and linting CLI tool identifier cited in CI configuration and validation authority rules rather than an internal lifecycle concept.
