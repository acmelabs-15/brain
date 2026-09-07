---
package: rjm
name: budget
slug: budget
kind: technique
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

# budget

## Definition — verbatim
> "Edits allowed at this step, cosine-decayed from `max` to `min`." — scripts/eval/README.md:493

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 493 | defined here | Subcommand calculating the permissible edit count at each optimization step via cosine decay. |

## Consumes
Current optimization step index and total planned steps (`--step`, `--total`).

## Produces
Integer budget defining maximum allowed patch mutations for the step.

## When applied
Applied at the start of each optimization loop step before generating candidate patches.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
A dynamic mutation scheduling technique in rjm's artifact optimization harness that uses cosine decay to transition from broad structural modifications in early steps to subtle localized adjustments in later steps.
