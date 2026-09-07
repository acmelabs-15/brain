---
package: rjm
name: Copilot CLI
slug: copilot-cli
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: scripts/dev/dogfood_copilot_plugin.py, sha256: c9070ffbcff5d39290ffdfe5932104942ab93407904dc5215c89c2fa78f2c98c}
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_copilot_cli.py, sha256: 42c92fa1b72b6b37bd4b7864b19b8d9987761bdcf034129d7cf2e7a40f70a16c}
  - {path: scripts/eval/_copilot_cli_constants.py, sha256: f9b2ba5ce05a132735fe5fb3f29fb101ec98771dc18d6a3ef6e9fc9920ac6c0c}
  - {path: scripts/eval/panels/owner-copilot-cli.json, sha256: 883f252ebff9ef3be47e45e94785d5f1ce172e2a2fa73ac2bfa3ff2b11ab17f2}
  - {path: scripts/validation/validate_argument_hint.py, sha256: dcebf02783a325f6f9bbecd680faf59a4b10fcb221a48721e06358a43f855b4c}
  - {path: templates/README.md, sha256: 3ca91430b1afdd6be6c995f33a4d237ac25e1a419ce3adeb55f8547475644196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Copilot CLI

## Definition — verbatim
(used, not defined)

> "- **Purpose**: Source for Copilot CLI and VS Code agents" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 62 | used here | Identifies Copilot CLI as the compilation target for shared agent templates. |
| .agents/projects/v0.4.0/PLAN.md | 43 | used here | Schedules documentation and Copilot CLI alignment in project extraction phases. |
| .claude/skills/CLAUDE.md | 7 | used here | Directs developers working on Copilot CLI artifacts to review agent-harness-reference first. |
| scripts/dev/dogfood_copilot_plugin.py | 3 | used here | Describes execution of plugin hooks from Copilot CLI installed directories. |
| scripts/eval/_copilot_cli_constants.py | 16 | used here | Defines the provider label constant for Copilot CLI evaluation runs. |
| scripts/eval/_copilot_cli.py | 8 | defined here | Implements provider resolution for the copilot-cli evaluation harness. |
| scripts/eval/panels/owner-copilot-cli.json | 10 | used here | Configures evaluation panel properties for the copilot-cli provider. |
| scripts/eval/README.md | 46 | defined here | Documents the copilot-cli evaluation runner subprocess configuration. |
| scripts/validation/validate_argument_hint.py | 4 | used here | Validates YAML argument hints against Copilot CLI command loader constraints. |
| templates/README.md | 322 | used here | Summarizes feature support and canonical status for the copilot-cli harness. |

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
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path, script-bug

## Design notes
Copilot CLI is an external terminal-based agent platform and evaluation provider, classified as name-only per D-023.
