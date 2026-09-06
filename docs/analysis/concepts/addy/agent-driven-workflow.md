---
package: addy
name: Agent-driven workflow
slug: agent-driven-workflow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Agent-driven workflow

## Definition — verbatim
> "- **Agent-driven workflow:** skills are selected automatically via the built-in `skill` tool and a project-local `AGENTS.md` that you write for your own repository." — docs/opencode-setup.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/opencode-setup.md | 9 | defined here | Definition of autonomous skill invocation guided by AGENTS.md rules and tool calling. |

## Consumes
User intent in conversation and project `AGENTS.md` instructions.

## Produces
Automatic skill selection and workflow execution without manual slash command invocations.

## When applied
When using agents with tool-calling capabilities (e.g. OpenCode) configured with project AGENTS.md rules.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: [missing-path] in docs/opencode-setup.md regarding per-skill installs and command directory

## Design notes
In agent-driven workflows, the coding agent inspects incoming requests and autonomously activates the matching skill workflow via internal tools and AGENTS.md heuristics, contrasting with explicit command-driven invocation.
