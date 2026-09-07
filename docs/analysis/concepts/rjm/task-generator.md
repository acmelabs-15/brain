---
package: rjm
name: task-generator
slug: task-generator
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# task-generator

## Definition — verbatim
(used, not defined)
> "task-generator" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 125 | used here | Agent role assigned to Sonnet 4.5 for decomposing project work into structured task definitions |

## Consumes
Requirements specifications, design documents, and architecture decision records.

## Produces
Atomic task specifications (`TASK-NNN-{slug}.md`) ready for implementation.

## When applied
Applied during spec decomposition and task creation phases.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
clean

## Design notes
task-generator is a specialized agent role in rjm responsible for converting high-level specifications and designs into atomic, actionable task units. Operating under the Sonnet tier, it leverages structured schema adherence rather than deep creative reasoning to reliably output well-sequenced implementation tasks.
