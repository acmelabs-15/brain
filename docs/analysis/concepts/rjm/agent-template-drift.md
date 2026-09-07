---
package: rjm
name: Agent template drift
slug: agent-template-drift
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

# Agent template drift

## Definition — verbatim
> "templates edited without regen (or vice versa)" — .claude/skills/ai-agents-generation-and-release/SKILL.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 106 | used here | Drift gate checking whether templates/agents were edited without regenerating platform agent files. |

## Consumes
`templates/agents/*.shared.md` and derived agent files under `src/copilot-cli/agents/` and `src/vs-code-agents/`.

## Produces
Pass/fail validation status from `build/generate_agents.py --validate`.

## When applied
During local pre-push checks and CI workflows (`validate-generated-agents.yml`).

## Sub-concepts
none

## Part of
phase-3-run-the-drift-gates-locally-before-pushing

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Agent template drift is a dedicated verification gate in rjm enforcing consistency between canonical shared agent templates (`templates/agents/*.shared.md`) and derived platform agent files (`src/copilot-cli/agents/` and `src/vs-code-agents/`). It prevents discrepancies between platform agent capabilities and ensures that any prompt or parameter changes propagate universally.
