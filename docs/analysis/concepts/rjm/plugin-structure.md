---
package: rjm
name: Plugin Structure
slug: plugin-structure
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plugin Structure

## Definition — verbatim
> "The project distributes agents through two native marketplace manifests, one per CLI runtime." — docs/architecture.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/architecture.md | 71 | defined here | Defines the marketplace manifest layout and distribution architecture for Claude Code and Copilot CLI plugins. |

## Consumes
Compiled agent definitions, slash commands, lifecycle hooks, and marketplace manifests.

## Produces
Native marketplace packages (claude-agents, project-toolkit) installable via plugin installation commands.

## When applied
Applied during plugin packaging, distribution, and runtime installation across platforms.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The packaging and distribution architecture in rjm that organizes agents, skills, hooks, and commands into marketplace manifests tailored to host runtimes (.claude-plugin/marketplace.json and .github/plugin/marketplace.json), isolating incompatible features per platform.
