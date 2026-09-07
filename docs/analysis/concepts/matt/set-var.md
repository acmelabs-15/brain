---
package: matt
name: set_var
slug: set-var
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# set_var

## Definition — verbatim
> "set_var NAME VALUE sets a GitHub Actions repo variable (non-secret)." — skills/engineering/wizard/template.sh:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/SKILL.md | 35 | defined here | Cited as a library helper function for configuring non-secret GitHub Actions repository variables. |
| skills/engineering/wizard/template.sh | 157 | defined here | Function that configures a repository variable via gh variable set, falling back to a skip list if gh is unready. |

## Consumes
A variable name, value string, and an authenticated `gh` CLI environment.

## Produces
A configured GitHub Actions repository variable set via `gh variable set`.

## When applied
When configuring public repository variables for CI/CD pipelines during wizard execution.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A bash helper function in the wizard template library that automates setting non-secret GitHub Actions variables using the GitHub CLI (`gh variable set`), with graceful degradation to a skip list and manual instructions if `gh` is unavailable or unauthenticated.
