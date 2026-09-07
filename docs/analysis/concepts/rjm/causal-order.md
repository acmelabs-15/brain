---
package: rjm
name: Causal order
slug: causal-order
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Causal order

## Definition — verbatim
> "A happened before B if A could have influenced B. Weaker than total order, stronger than no order." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 21 | defined here | Defined in core vocabulary as an ordering where an event precedes another if it could have influenced it. |

## Consumes
Logical timestamps, causal parent references, vector clocks, dependency graphs.

## Produces
Deterministic event sequencing preserving influence relationships across asynchronous operations.

## When applied
When tracking event causation across asynchronous hooks, agent handoffs, and multi-agent distributed pipelines.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Causal order provides a reliable sequencing mechanism for multi-agent workflows in rjm by explicitly tracking event dependency relationships rather than relying on brittle, unsynchronized machine wall clocks. By embedding parent references or logical timestamps into messages, agents determine execution precedence correctly even under asynchronous dispatch.
