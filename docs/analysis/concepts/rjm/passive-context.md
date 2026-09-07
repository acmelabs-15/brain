---
package: rjm
name: Passive context
slug: passive-context
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/references/model-context-doctrine.md, sha256: 5a2eaa014a39bd72096176f55872704d4ec5cb4a145785484cf6a615ae5b0be6}
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
  - {path: scripts/validation/passive_context_budget.py, sha256: 1eb3cf2167b042b03dea6986c67b3e87ac6e84062453a3840384ea9d5ff07cff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Passive context

## Definition — verbatim
> "Passive context wins for what the model cannot know (post-cutoff APIs, repo gotchas); pre-trained knowledge belongs in progressive disclosure." — .claude/skills/context-optimizer/SKILL.md:4

## Also called — verbatim
`Passive Context` — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:7
`always-on passive context` — .claude/skills/context-optimizer/references/model-context-doctrine.md:59

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 264 | used here | Recommends placing reference knowledge in passive context rather than active skills based on Vercel research. |
| .claude/skills/context-optimizer/references/model-context-doctrine.md | 59 | used here | Cites Vercel research measuring 100% pass rate for always-on passive context against 53% to 79% for skills. |
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 7 | used here | Classifies skill content as Passive Context when knowledge-heavy with reference data. |
| .claude/skills/context-optimizer/SKILL.md | 4 | defined here | Defines passive context as winning for unlearned repository knowledge while pre-trained knowledge belongs in progressive disclosure. |
| docs/skill-reference.md | 188 | used here | Summarizes context-optimizer capability to evaluate content for Skill vs Passive Context placement. |
| scripts/validation/passive_context_budget.py | 3 | used here | Validates token budgets for passive context files unconditionally loaded into agent context. |

## Consumes
Repository facts, unlearned APIs, gotchas, project rules, and conventions.

## Produces
Always-on system prompt context (`AGENTS.md`, `CLAUDE.md`, `@imports`) loaded without agent decision points.

## When applied
Injected automatically into the model prompt on every turn/session.

## Sub-concepts
token-budget, extract-and-index-pattern, pipe-delimited-format

## Part of
context-optimizer, model-context-doctrine

## Implementation status
defects: doc-drift, missing-path

## Design notes
Information that is unconditionally loaded into an LLM's system prompt (such as `AGENTS.md` or `@imported` rule files) on every interaction turn. By eliminating agent retrieval decisions, it achieves high compliance for critical domain facts, but incurs continuous token overhead that must be constrained by strict token budgets.
