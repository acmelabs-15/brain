---
package: rjm
name: buffer-add
slug: buffer-add
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

# buffer-add

## Definition — verbatim
> "Record a rejected edit so it is not re-proposed." — scripts/eval/README.md:499

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 499 | defined here | Subcommand recording rejected patches and rationale into persistent rejection buffer. |

## Consumes
Rejected candidate patch, target artifact path, and mandatory `--reason` explanation text.

## Produces
Updated rejection buffer JSON containing patch fingerprint and failure justification.

## When applied
Applied immediately upon a candidate rejection verdict or operator veto in the optimization loop.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
A rejection memory technique in rjm that records failed candidate patches and explicit causal reasons to ensure the optimizer does not cycle back to previously failed mutations.
