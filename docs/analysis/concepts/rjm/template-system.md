---
package: rjm
name: Template System
slug: template-system
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

# Template System

## Definition — verbatim
> "Agent definitions live in `templates/agents/`. Each file uses YAML frontmatter for platform-specific configuration and markdown for the agent prompt." — docs/architecture.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/architecture.md | 24 | defined here | Section defining the multi-platform agent template architecture and frontmatter configuration model. |

## Consumes
Shared markdown templates with platform-specific frontmatter declarations.

## Produces
Canonical agent definitions compiled by `build/generate_agents.py` into platform runtimes.

## When applied
Applied whenever creating or updating agent instructions to maintain multi-platform parity.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
The single-source-of-truth authoring framework in rjm that allows agent behavior to be defined once in `templates/agents/*.shared.md` and compiled into platform-specific files for Claude Code, GitHub Copilot CLI, and VS Code, preventing manual drift across runtimes.
