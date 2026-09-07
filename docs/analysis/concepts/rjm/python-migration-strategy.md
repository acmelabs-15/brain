---
package: rjm
name: Python Migration Strategy
slug: python-migration-strategy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-042-python-migration-strategy.md, sha256: cfab3df343cee127a80f7dc1fb5e9cedc7052c9abe8e684d5f1f9693c0a45e2d}
  - {path: .agents/guides/python-for-powershell-developers.md, sha256: f2d71106f74fb6e3c542e1154097ec1f81c8b08a58e35d541489901b2b1f7f49}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Python Migration Strategy

## Definition — verbatim
> "# ADR-042: Python Migration Strategy" — .agents/architecture/ADR-042-python-migration-strategy.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-042-python-migration-strategy.md | 12 | defined here | Title and governing subject of ADR-042 establishing Python as the primary scripting language. |
| .agents/guides/python-for-powershell-developers.md | 3 | used here | Cited in guide header as the authoritative reference for migrating scripts. |

## Consumes
Legacy PowerShell scripts, cross-platform compatibility requirements, and modern Python tooling (uv, pytest).

## Produces
Standardized Python scripts, test suites, and developer migration guidance.

## When applied
Applied to all new script development and during phased retirement of legacy PowerShell automation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
The architectural transition pattern moving the repository automation surface from Windows-centric PowerShell to cross-platform Python 3, establishing python-first conventions for tooling, virtual environments, and CI testing.
