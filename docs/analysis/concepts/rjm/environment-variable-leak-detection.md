---
package: rjm
name: Environment Variable Leak Detection
slug: environment-variable-leak-detection
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Environment Variable Leak Detection

## Definition — verbatim
> "### Environment Variable Leak Detection" — .claude/agents/devops.md:365

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/devops.md | 365 | defined here | Heading defining pre-commit regex scanning scripts to detect secrets and hardcoded environment assignments. |

## Consumes
Local files across PowerShell scripts (`.ps1`), YAML configurations (`.yml`, `.yaml`), and JSON configs.

## Produces
Warning alerts surfacing matched file paths and line numbers with potential secret leaks.

## When applied
Run locally before committing configuration files to version control.

## Sub-concepts
none

## Part of
local-ci-simulation

## Implementation status
defects: missing-path

## Design notes
A pre-commit security scanning technique in rjm. Using regex patterns targeting passwords, API keys, and hardcoded `$env` variable assignments across scripts and workflow manifests, it prevents developers and agents from inadvertently committing secrets into repositories.
