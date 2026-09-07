---
package: rjm
name: Five-axis review
slug: five-axis-review
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Five-axis review

## Definition — verbatim
> "Five-axis review: architecture, security, quality, tests, standards" — docs/getting-started.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/getting-started.md | 78 | defined here | Defined as the static review framework executed during Phase 6 (Review) via `/review`. |

## Consumes
Branch diff and passing test suite from the QA phase.

## Produces
Findings list (Critical, Important, Suggestion) with file:line citations.

## When applied
> "After `/test` passes" — docs/getting-started.md:78

## Sub-concepts
none

## Part of
7-phase-pipeline

## Implementation status
clean

## Design notes
Five-axis review is the holistic static code inspection methodology in rjm. By reviewing code across architecture, security, quality, tests, and repository standards, it surfaces critical design flaws and stylistic deviations before pull request submission.
