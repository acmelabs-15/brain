---
package: rjm
name: PowerShell
slug: powershell
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-for-powershell-developers.md, sha256: f2d71106f74fb6e3c542e1154097ec1f81c8b08a58e35d541489901b2b1f7f49}
  - {path: scripts/detect_test_coverage_gaps.py, sha256: 93f4e168b55812e1cb40e9f907fb5c79dab7b5ea84b805bd60453b4a2c6f7a68}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PowerShell

## Definition — verbatim
(used, not defined)

> "Python for PowerShell Developers" — .agents/guides/python-for-powershell-developers.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-for-powershell-developers.md | 1 | used here | Guide title referencing PowerShell as the legacy scripting language being migrated. |
| scripts/detect_test_coverage_gaps.py | 2 | used here | Module docstring describing detection of PowerShell (.ps1) files lacking tests. |

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
defects: internal-contradiction, script-bug

## Design notes
A scripting language name and shell runtime identifier rather than an operational lifecycle concept, classified as `name-only` per D-023.
