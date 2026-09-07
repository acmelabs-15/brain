---
package: rjm
name: Cloud agent
slug: cloud-agent
kind: role
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Cloud agent

## Definition — verbatim
> "### Cloud agent" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:287

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 287 | defined here | Subsection header outlining constraints, sandbox environments, and hook limits for cloud agent execution. |

## Consumes
Default-branch hook configurations, ephemeral Linux sandboxes, and bash commands.

## Produces
Automated cloud-side agent task execution with pre-approved tools and isolated environments.

## When applied
Applied when executing background tasks, pull request automations, or remote agent workflows on GitHub infrastructure.

## Sub-concepts
none

## Part of
agent-harness-reference

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
The headless, cloud-hosted runtime for GitHub Copilot agents, operating under strict constraints (default branch only, pre-approved permissions, no plugin root variables) that differentiate it from local CLI execution.
