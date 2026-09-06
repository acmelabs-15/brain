---
package: addy
name: "AI coding agents"
slug: ai-coding-agents
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/idea-refine.md, sha256: 25fd41be4f76578f192d00aa50488dc022f4229eefbd6f8ad3c866c034772b91}
  - {path: external/interview-me.md, sha256: e1239cbcb73505255b9fa0f2e9fd296d03201a022bc41b1eded84178f03e73b7}
  - {path: external/observability-and-instrumentation.md, sha256: d08fe21236731d07913a526da8a55314e6c864816cb945aaf6c14de6ffecc4eb}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: external/spec-driven-development.md, sha256: 0c390d029fd44a59cf14303f6a99c0a24d0c67f8e5b5063ba504e3edb2b02e28}
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
  - {path: external/using-agent-skills.md, sha256: f900bb1f69f838528d2fc85316cb851ca19488a22005f1249ec5d5fc059d32c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# AI coding agents

## Definition — verbatim
(used, not defined)

> "Production-grade engineering skills for AI coding agents." — external/using-agent-skills.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/idea-refine.md | 13 | used here | Identified in catalog footer as the primary execution actors targeted by the skills library. |
| external/interview-me.md | 13 | used here | Identified in catalog footer as the primary execution actors targeted by the skills library. |
| external/observability-and-instrumentation.md | 13 | used here | Identified in catalog footer as the primary execution actors targeted by the skills library. |
| external/source-driven-development.md | 13 | used here | Identified in catalog footer as the primary execution actors targeted by the skills library. |
| external/spec-driven-development.md | 13 | used here | Identified in catalog footer as the primary execution actors targeted by the skills library. |
| external/test-driven-development.md | 13 | used here | Identified in catalog footer as the primary execution actors targeted by the skills library. |
| external/using-agent-skills.md | 13 | used here | Identified in catalog footer as the primary execution actors targeted by the skills library. |

## Consumes
Engineering skills, project contextual instructions, and human developer intent.

## Produces
Autonomous software development actions, code changes, tests, and documentation.

## When applied
Applied continuously across all phases when an autonomous LLM-powered tool develops software.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The AI coding agent represents the autonomous or semi-autonomous execution persona for whom the skills library is authored. The entire package exists to constrain, structure, and elevate agent behaviors to senior engineering standards.
