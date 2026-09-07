---
package: rjm
name: custom agents
slug: custom-agents
kind: artifact
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md, sha256: fab4fd29cb1f15e766538ad34b57cf500baf6b46175233c0e265b28024a3e76a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# custom agents

## Definition — verbatim
(used, not defined)

> "Our 18 custom agents in `.github/agents/` were silently rejected without error messages in standard output." — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:32

## Also called — verbatim
"GitHub Copilot Custom Agents" — .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md:203

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md | 32 | used here | Identifies the 18 custom agent markdown files rejected by Copilot CLI 0.0.398+. |

## Consumes
Shared agent template definitions (templates/agents/*.shared.md) and platform generator configuration.

## Produces
Platform-specific agent markdown definitions in .github/agents/*.agent.md.

## When applied
Loaded during GitHub Copilot CLI execution when domain-specific persona delegation is invoked.

## Sub-concepts
none

## Part of
agent-system

## Implementation status
defects: missing-path, doc-drift

## Design notes
Custom agents are repository-defined autonomous agent definitions configured in .github/agents/ for GitHub Copilot CLI, extending built-in platform capabilities with domain-specific personas and role instructions.
