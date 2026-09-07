---
package: rjm
name: Supply-chain risk scanner
slug: supply-chain-risk-scanner
kind: role
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Supply-chain risk scanner

## Definition — verbatim
> "**Supply-chain risk scanner** that surfaces vulnerable, outdated, and deprecated" — .claude/agents/dependency-auditor.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 14 | defined here | Core identity definition of the dependency-auditor agent. |
| templates/agents/dependency-auditor.shared.md | 20 | defined here | Core identity definition of the dependency-auditor agent in shared templates. |

## Consumes
Project lockfiles, solution files, and package manifests across .NET, npm, pip/uv, and cargo.

## Produces
Structured dependency audit reports categorizing vulnerabilities by severity and recommending upgrades.

## When applied
Executed weekly on cron, prior to cutting releases, or after major dependency version bumps.

## Sub-concepts
exit-0, exit-1, exit-3, cisa-kev

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
The core identity and operational mandate of the dependency-auditor agent in rjm. It functions strictly as an observational audit and gatekeeping scanner rather than an automated update tool, surfacing supply-chain risk without mutating code or creating auto-merged pull requests.
