---
package: rjm
name: Iteration Paradox
slug: iteration-paradox
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Iteration Paradox

## Definition — verbatim
> "## Incident 3: #1887 Iteration Paradox (69 commits to ship a cost-reducer)" — .claude/skills/ai-agents-failure-archaeology/references/incidents.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 98 | defined here | Chronicled as Incident 3, analyzing the 69-commit PR where a cost-reducing review guard suffered extreme iteration churn. |
| scripts/validation/check_build_gates.py | 55 | used here | Cited in module comments explaining why mandatory exit gates must be statically wired rather than advisory. |
| scripts/validation/check_canonical_citations.py | 15 | used here | Cited in module comments referencing the retrospective on ungrounded mirror claims. |

## Consumes
Autonomous multi-agent PR review workflows, concurrent bot reviews, and ungrounded contract assumptions.

## Produces
Proliferating commit chains, excessive review cycles, and inflated token consumption.

## When applied
Analyzed during PR review design, gate specification, and bot interaction workflows.

## Sub-concepts
push-guard-framework, bot-batching-protocol

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: missing-path

## Design notes
The `Iteration Paradox` describes the pathological dynamic where tooling designed to reduce review rounds inadvertently increases them due to bot concurrency, pagination cliffs, and ungrounded contract assumptions. In rjm, it serves as the foundational justification for mandatory batching, strict pagination, and static build gates.
