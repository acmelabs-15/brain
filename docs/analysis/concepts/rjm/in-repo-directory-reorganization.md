---
package: rjm
name: in-repo directory reorganization
slug: in-repo-directory-reorganization
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# in-repo directory reorganization

## Definition — verbatim
(used, not defined)

> "Missing \"in-repo directory reorganization\" alternative" — .agents/critique/ADR-045-debate-log.md:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-045-debate-log.md | 192 | defined here | Raised as a new P1 alternative in Round 2 critique of ADR-045 proposing intra-repo reorganization instead of external extraction. |

## Consumes
Monolithic repository structure, module separation goals.

## Produces
Alternative architectural design achieving module boundaries without multi-repository overhead.

## When applied
Evaluated during architectural reviews of extraction proposals as a low-cost, low-risk alternative.

## Sub-concepts
none

## Part of
considered-options

## Implementation status
defects: cross-file-contradiction

## Design notes
`in-repo directory reorganization` was a candidate alternative evaluated in ADR-045 proposing to achieve modular separation of concerns by reorganizing directories within the same repository (e.g., `framework/` and `project/`) rather than incurring the complexity and maintenance overhead of extracting external plugin repositories.
