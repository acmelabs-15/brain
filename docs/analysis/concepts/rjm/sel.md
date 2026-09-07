---
package: rjm
name: sel
slug: sel
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

# sel

## Definition — verbatim
> "Decides accept or reject. Each decision spends one consultation from a fixed budget." — scripts/eval/README.md:466

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 466 | defined here | Held-out validation partition used by the gate to evaluate candidate improvements against incumbent performance. |

## Consumes
Partitioned task-id set, consultation budget, and candidate evaluation results.

## Produces
Accept or reject gating decisions based on held-out benchmark performance.

## When applied
Applied during the gating step (`optimize-artifact.py gate`) to validate proposed artifact edits against unseen tasks.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
The held-out selection partition in rjm's evaluation harness that guards against prompt and agent overfitting by evaluating candidate mutations on tasks the authoring agent never observed.
