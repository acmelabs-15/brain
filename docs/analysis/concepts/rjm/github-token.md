---
package: rjm
name: GITHUB_TOKEN
slug: github-token
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/copilot-cli-setup.md, sha256: 59024c233a64c24d142b282be6874ab91ab23cc063663ad1c4331c54973a9519}
  - {path: scripts/redact_secrets.py, sha256: def1d7ea6d1ac0b380277b817a9ca13a072d1e076ce59e8513eff753691eba61}
  - {path: scripts/validation/run_workflow_local_test.py, sha256: 6ceadf14ac105ae993d87d9d87d125f1bf88a0049f8304925109b7b290106ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GITHUB_TOKEN

## Definition — verbatim
(used, not defined)

> "| 3 (Lowest) | `GITHUB_TOKEN` | CI/CD default token |" — docs/copilot-cli-setup.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/copilot-cli-setup.md | 73 | used here | Listed in the token precedence table as the lowest-priority default CI/CD authentication token. |
| scripts/redact_secrets.py | 45 | defined here | Defined as a secret redaction rule regex identifying standard GitHub token prefixes. |
| scripts/validation/run_workflow_local_test.py | 422 | used here | Included in `_ACT_BUILTIN_SECRETS` set identifying built-in secrets provided automatically in local act environments. |

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
defects: orphan, doc-drift

## Design notes
`GITHUB_TOKEN` is the standard GitHub Actions default token identifier and secret redaction pattern rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
