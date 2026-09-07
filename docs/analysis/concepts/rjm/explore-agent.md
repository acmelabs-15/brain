---
package: rjm
name: Explore agent
slug: explore-agent
kind: role
package_phase: rjm:Exploration
implementation_in_scope: false
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Explore agent

## Definition — verbatim
> "Delegate to Explore agent(s). The script determines scope and parallelism." — .claude/skills/analyze/SKILL.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/SKILL.md | 105 | used here | Delegated subagent role performing parallel exploration and reconnaissance across the codebase. |

## Consumes
Initial codebase discovery goals and search targets.

## Produces
Summarized file maps, candidate investigation paths, and component structure observations.

## When applied
Invoked in Step 1 (Exploration) when analyze.py initiates codebase reconnaissance.

## Sub-concepts
none

## Part of
analyze

## Implementation status
defects: missing-path

## Design notes
`Explore agent` is a delegated worker role designed to scour repository paths in parallel, returning distilled summaries to the orchestrator agent without ballooning the main context window.
