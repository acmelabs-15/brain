---
package: addy
name: five-axis code review
slug: five-axis-code-review
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
  - {path: docs/getting-started.md, sha256: 2c218fb92f46645d93191b9f3ff4f2df8faa25ba3d7517c336c6fa87fed8ab0b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# five-axis code review

## Definition — verbatim
> "Conduct a five-axis code review — correctness, readability, architecture, security, performance" — .gemini/commands/review.toml:1

## Also called — verbatim
- `five-axis review` — docs/adoption-guide.md:82

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/review.toml | 1 | defines | Command description specifying multi-axis code review |
| commands/review.toml | 1 | defines | Command description specifying multi-axis code review |
| docs/gemini-cli-setup.md | 118 | applies | CLI setup guide explaining /review command capabilities |
| docs/getting-started.md | 98 | applies | Getting started guide documenting /review command and five axes |

## Consumes
Code diff, staged changes, or modified files on current branch.

## Produces
Structured review document categorizing findings across five axes with severity tags (Critical, Important, Suggestion).

## When applied
Invoked via `/review` before merging any change to verify code quality.

## Sub-concepts
correctness, readability, architecture, security, performance, critical, important, suggestion

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
`five-axis code review` is Addy's structured evaluation methodology for code health. Rather than unstructured comments, it partitions scrutiny into five explicit dimensions (Correctness, Readability, Architecture, Security, Performance). This multi-dimensional framing guarantees that subtle architectural or non-functional concerns receive equal attention alongside basic correctness.
