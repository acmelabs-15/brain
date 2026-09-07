---
package: rjm
name: template-based generation system
slug: template-based-generation-system
kind: pattern
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

# template-based generation system

## Definition — verbatim
> "This project uses a **template-based generation system** to maintain agent definitions across multiple platforms (VS Code, Copilot CLI). This ensures consistency while allowing platform-specific customizations." — CONTRIBUTING.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 128 | defines | Defines the multi-platform code generation architecture compiling shared templates into platform targets. |

## Consumes
Shared templates (`templates/agents/*.shared.md`), platform configs, and toolsets.

## Produces
Generated platform manifests in `src/vs-code-agents/` and `src/copilot-cli/agents/`.

## When applied
Applied when building or updating agent artifacts to synchronize changes across IDE platforms.

## Sub-concepts
agent-template-system, platform-configs, generated-files

## Part of
agent-template-system

## Implementation status
defects: internal-contradiction

## Design notes
Code generation design pattern establishing a single source of truth for agent behavior to prevent configuration drift across diverse developer tooling ecosystems.
