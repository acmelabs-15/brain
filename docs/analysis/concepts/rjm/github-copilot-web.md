---
package: rjm
name: GitHub Copilot (Web)
slug: github-copilot-web
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitHub Copilot (Web)

## Definition — verbatim
(used, not defined)

> "| Capability | Claude Code | Copilot CLI | VS Code Copilot | GitHub Copilot (Web) |" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 186 | used here | Evaluated in the capability matrix as a constrained sandbox environment with single-repo boundaries. |

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
defects: internal-contradiction, missing-path

## Design notes
GitHub Copilot (Web) is an external cloud-based agent execution environment provided by GitHub, classified as name-only per D-023.
