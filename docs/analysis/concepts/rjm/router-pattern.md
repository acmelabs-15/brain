---
package: rjm
name: router pattern
slug: router-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# router pattern

## Definition — verbatim
(used, not defined)

> "- `ADR-037-memory-router-architecture.md` defines the router pattern the" — .agents/architecture/ADR-063-memory-skill-decomposition.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-063-memory-skill-decomposition.md | 63 | used here | Cited from ADR-037 as the architectural pattern for dispatching incoming requests across sub-skills. |

## Consumes
User intent, invocation triggers, and capability metadata across specialized modules.

## Produces
Delegation decisions routing caller invocations to the appropriate sub-skill or tool.

## When applied
Applied at entry points where multiple specialized sub-skills share a common namespace or domain.

## Sub-concepts
thin-router, when-to-use-matrix

## Part of
autoplan, memory-skill-decomposition

## Implementation status
defects: missing-path, doc-drift

## Design notes
The router pattern decouples high-level user invocation from complex internal skill decomposition. Instead of forcing users or calling agents to memorize dozens of fine-grained sub-skills, a top-level router analyzes the intent, evaluates a When-to-Use decision tree, and delegates the task to the appropriate focused sub-skill, preserving a stable and simple external interface.
