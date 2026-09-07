---
package: rjm
name: Pre-implementation
slug: pre-implementation
kind: phase
package_phase: rjm:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-implementation

## Definition — verbatim
(used, not defined)

> "Skill availability | Pre-implementation | Directory listing, script check | ❌ No gate" — .agents/analysis/002-project-constraints-consolidation.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 109 | used here | Classified as the workflow phase where skill availability, plan steps, and task prerequisites are validated. |

## Consumes
Approved specifications, verified constraints, and task plan outlines.

## Produces
Verified tool/skill availability, decomposed vertical slices, and test-first design.

## When applied
Executed after pre-work and planning, immediately before generating or editing code.

## Sub-concepts
check-skillexists-ps1

## Part of
session-protocol, dev-lifecycle

## Implementation status
defects: missing-path

## Design notes
Pre-implementation is the transitional planning and verification phase bridging concept specification and actual code modification. During pre-implementation, agents verify that required skills, dependencies, and environments exist, preventing wasted effort from attempting execution with missing tools.
