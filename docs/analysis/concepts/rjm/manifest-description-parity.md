---
package: rjm
name: Manifest description parity
slug: manifest-description-parity
kind: gate
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Manifest description parity

## Definition — verbatim
> "plugin descriptions carry component counts" — .claude/skills/ai-agents-generation-and-release/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 110 | used here | Drift gate ensuring description strings and component counts match between .claude and src/copilot-cli plugin manifests. |

## Consumes
Plugin manifests in `.claude` and `src/copilot-cli`.

## Produces
Parity verification status from `build/scripts/check_plugin_manifest_parity.py`.

## When applied
In CI workflows (`validate-generated-agents.yml`, `agent-drift-detection.yml`) when plugin components change.

## Sub-concepts
none

## Part of
phase-3-run-the-drift-gates-locally-before-pushing

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Manifest description parity ensures that metadata descriptions and component counts (skills, commands, agents) remain synchronized between `.claude` and `src/copilot-cli` plugin manifests. Following ADR-092's retirement of version fields in plugin manifests, this gate focuses on descriptive and structural alignment across marketplace targets.
