---
package: rjm
name: opt
slug: opt
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# opt

## Definition — verbatim
> "Read failures here, propose edits from them." — scripts/eval/README.md:465

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 465 | defined here | Partitioned task set allocated to the optimizing agent to inspect failure modes and propose edits. |

## Consumes
Full evaluation benchmark fixture set, split configuration, and seed.

## Produces
Partitioned set of task IDs allocated for candidate edit generation.

## When applied
Applied during benchmark partitioning by `optimize-artifact.py split` in held-out optimization loops.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
The training partition in rjm's held-out-gated evaluation harness (implementing ADR-087), providing the optimizing agent with failure cases to learn from while strictly isolating them from the held-out selection gate.
