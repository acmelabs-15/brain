---
package: rjm
name: _PWSH_PATTERN
slug: pwsh-pattern
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _PWSH_PATTERN

## Definition — verbatim
(used, not defined)

> "_PWSH_PATTERN = re.compile(r\"(?:pwsh|powershell)\s+.*\.ps1(?:\s|$)\", re.IGNORECASE)" — scripts/validation/hook_contracts.py:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/hook_contracts.py | 79 | defines | Regular expression pattern used to identify PowerShell commands and scripts in hook registrations. |

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
defects: doc-drift

## Design notes
A compiled regular expression constant in hook_contracts.py identifying PowerShell script commands rather than a development lifecycle concept.
