---
package: rjm
name: Platform Configuration
slug: platform-configuration
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

# Platform Configuration

## Definition — verbatim
> "Platform configurations in `templates/platforms/` control how agents are transformed for each platform." — CONTRIBUTING.md:420

## Also called — verbatim
> "## Platform Configuration" — CONTRIBUTING.md:418

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 418 | defined here | Section heading detailing configuration schema and transformation settings for VS Code and Copilot CLI. |

## Consumes
Target IDE capabilities, model aliases, tool mapping configurations, and invocation syntax requirements.

## Produces
Structured YAML configuration definitions governing agent template compilation.

## When applied
Loaded during agent generation to translate shared agent templates into platform-specific configurations.

## Sub-concepts
vscode-yaml, copilot-cli-yaml, handoffsyntax

## Part of
agent-template-system

## Implementation status
defects: doc-drift

## Design notes
Configuration model separating platform-specific deployment concerns (model strings, output directories, tool mappings, handoff syntax) from platform-agnostic agent prompt instructions.
