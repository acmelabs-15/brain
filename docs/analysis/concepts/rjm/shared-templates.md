---
package: rjm
name: Shared Templates
slug: shared-templates
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shared Templates

## Definition — verbatim
> "### Source 2: Shared Templates (`templates/agents/*.shared.md`)" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 60 | defined here | Establishes `templates/agents/*.shared.md` as the shared source generating Copilot CLI and VS Code agents. |
| CONTRIBUTING.md | 158 | defined here | Designates Shared Templates as the single source of truth for multi-platform agent behavior. |

## Consumes
Baseline agent definitions, common instructions, and role guidelines.

## Produces
Generated agent files for Copilot CLI (`src/copilot-cli/agents/*.agent.md`) and VS Code Copilot (`src/vs-code-agents/*.md`).

## When applied
Edited by contributors whenever modifying agent behavior across non-Claude platforms.

## Sub-concepts
none

## Part of
two-source-agent-template-architecture

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A template artifact and repository subsystem located at `templates/agents/*.shared.md` that serves as the single source of truth for agent behavior across non-Claude platforms, compiled automatically during pre-commit.
