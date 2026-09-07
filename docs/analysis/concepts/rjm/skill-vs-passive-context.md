---
package: rjm
name: Skill vs Passive Context
slug: skill-vs-passive-context
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill vs Passive Context

## Definition — verbatim
> "## Skill vs Passive Context" — .agents/governance/SKILL-CREATION-CRITERIA.md:262

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 262 | defined here | Architectural comparison framework evaluating whether knowledge content belongs in passive context or an active skill. |

## Consumes
Content type (reference knowledge vs action), tool access needs, retrieval frequency, and prompt sensitivity.

## Produces
Placement determination routing content to AGENTS.md (passive context) or a dedicated skill.

## When applied
Evaluated prior to authoring any new skill when deciding if static domain knowledge or reference rules should be always-on.

## Sub-concepts
passive-context, token-budget

## Part of
skill-creation-criteria

## Implementation status
defects: doc-drift

## Design notes
A governance decision framework based on Vercel research showing passive context achieves 100% compliance on knowledge tasks versus 79% for skills. It guides developers to place static knowledge in always-on files (AGENTS.md) while reserving skills for multi-step, tool-using procedures.
