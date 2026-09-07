---
package: rjm
name: VS Code Copilot
slug: vs-code-copilot
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

# VS Code Copilot

## Definition — verbatim
(used, not defined)

> "3. **VS Code Copilot** (`src/vs-code-agents/*.md`)" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 30 | used here | Designated as an agent deployment target generated from shared templates into `src/vs-code-agents/*.md`. |

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
VS Code Copilot is an external IDE extension and agent runtime environment, classified as name-only per D-023.
