---
package: rjm
name: Exploration
slug: exploration
kind: phase
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Exploration

## Definition — verbatim
> "Gather codebase structure, dependencies, patterns" — .claude/skills/analyze/references/strategy-ooda-loop.md:32

## Also called — verbatim
"Phase 1: Exploration (Step 1)" — .claude/skills/analyze/SKILL.md:103

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 28 | defined here | Designated as Step 1 mapped to get_step_guidance(step == 1). |
| .claude/skills/analyze/references/strategy-ooda-loop.md | 32 | defined here | Aligned with the Observe stage of the OODA loop to gather structure and patterns. |
| .claude/skills/analyze/scripts/analyze.py | 6 | defined here | Documented in docstring as step 1 processing Explore sub-agent results. |
| .claude/skills/analyze/SKILL.md | 103 | defined here | Executed as Phase 1 where the agent dispatches subagents or gathers codebase context. |

## Consumes
Target repository, analysis scope prompt.

## Produces
Initial structural survey, file listings, dependency map, and potential problem areas.

## When applied
At the initiation of codebase analysis (Step 1).

## Sub-concepts
none

## Part of
phase-map

## Implementation status
defects: exit-code-mismatch, missing-path, orphan

## Design notes
Phase 1 of rjm's multi-step analysis workflow, mapping conceptually to the Observe phase of the OODA loop. It gathers high-level structural inventory and broad context before committing to focused investigation paths.
