---
package: rjm
name: Fishbone
slug: fishbone
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/retrospective/scripts/run_retrospective.py, sha256: 7bef09acd131cbf5a9bbe725c86d14b2024da5828e639f81d0d02cbdcf4e1d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Fishbone

## Definition — verbatim
> "## Fishbone Analysis" — .claude/skills/retrospective/references/frameworks.md:210

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 210 | defined here | Root cause diagram template organizing contributing factors into six agent-specific categories. |
| .claude/skills/retrospective/scripts/run_retrospective.py | 10 | used here | Cited in docstring as an interpretive diagnostic activity authored by the agent or reviewer. |
| .claude/skills/retrospective/SKILL.md | 4 | used here | Cited in skill description as a core diagnostic framework for multi-factor failures. |

## Consumes
Complex multi-factor failure events identified during retrospective execution.

## Produces
Categorized breakdown of contributing factors across Prompt, Tools, Context, Dependencies, Sequence, and State.

## When applied
Applied during Phase 1 (Generate Insights) when diagnosing complex failures with multiple interacting factors.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: internal-contradiction in .claude/skills/retrospective/SKILL.md; clean in .claude/skills/retrospective/references/frameworks.md and scripts/run_retrospective.py

## Design notes
Fishbone adapts Ishikawa diagramming to autonomous agent systems by establishing six tailored causal categories: Prompt, Tools, Context, Dependencies, Sequence, and State. This structure allows investigators to isolate whether a failure stemmed from prompt ambiguity, inadequate tool support, stale context, or orchestration order.
