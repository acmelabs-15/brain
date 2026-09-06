---
package: addy
name: Not Doing list
slug: not-doing-list
kind: artifact
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/idea-refine.json, sha256: 559741e57427aca454ce9546df49771c1929208f5b3a89974ddc76ed0a15a224}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Not Doing list

## Definition — verbatim
(used, not defined)
> "Sharpening questions, distinct directions, surfaced assumptions, and a one-pager with MVP scope and a Not Doing list" — evals/cases/idea-refine.json:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/idea-refine.json | 34 | used here | Explicit component mandated in the expected output of the idea-refine evaluation case. |

## Consumes
Secondary feature ideas, out-of-scope requests, and deferred optimizations.

## Produces
An explicit enumerated list of features and capabilities deliberately excluded from the current scope.

## When applied
During the convergence phase of idea refinement when defining project boundaries.

## Sub-concepts
none

## Part of
- one-pager
- idea-refine

## Implementation status
clean

## Design notes
An explicit Not Doing list serves as a boundary fence against scope creep. By documenting what is deliberately excluded rather than leaving non-goals implicit, it protects teams and agents from distracting tangents and premature optimization.
