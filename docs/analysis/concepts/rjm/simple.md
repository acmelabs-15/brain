---
package: rjm
name: Simple
slug: simple
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/references/made-to-stick.md, sha256: 5de46c0e87278655616732e8a810a2cbbc642565c3fcd3a9a3c7a43e89177cdd}
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Simple

## Definition — verbatim
(used, not defined)

> "Simple (find the core) before anything else." — .claude/skills/business-strategy/references/made-to-stick.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/made-to-stick.md | 19 | applies | Decision tree rule mandating starting with Simple to find the core message when an audience lacks understanding. |
| docs/diagrams/routing-flowchart.md | 94 | applies | Routing flowchart terminal node classifying single-agent requests without multi-step requirements for simple execution. |

## Consumes
Unstructured communication draft or unrouted agent task description.

## Produces
Single prioritized core truth stripped of competing points, or a simple direct execution routing decision.

## When applied
Applied in communications when the audience does not understand the idea at all, and in routing when an agent task requires only a single agent without complex multi-file workflows.

## Sub-concepts
none

## Part of
success-framework

## Implementation status
clean in .claude/skills/business-strategy/references/made-to-stick.md; defects: missing-path in docs/diagrams/routing-flowchart.md

## Design notes
In rjm, Simple operates both as the foundational element of the SUCCESs communication framework (mandating that an idea be stripped to its single essential truth like a proverb) and as a lifecycle routing classification where tasks requiring only a single agent avoid multi-agent overhead. Without it, messages drown in secondary details and simple execution workflows suffer unnecessary coordination complexity.
