---
package: rjm
name: Platform Configs
slug: platform-configs
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Platform Configs

## Definition — verbatim
> "| Platform Configs | `templates/platforms/*.yaml` | Platform-specific settings (model, tools, syntax) |" — CONTRIBUTING.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 159 | defined here | Architectural overview table entry defining platform configuration files in `templates/platforms/`. |

## Consumes
Platform specification requirements, model identifier maps, and tool syntax rules.

## Produces
YAML configuration files governing code generation transformations.

## When applied
Referenced by `build/generate_agents.py` during template generation.

## Sub-concepts
vscode-yaml, copilot-cli-yaml, platform-configuration

## Part of
agent-template-system

## Implementation status
defects: doc-drift

## Design notes
Configuration artifacts that parameterize how shared agent templates are compiled for specific platforms, controlling model strings, file suffixes, and tool mappings.
