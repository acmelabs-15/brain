---
package: matt
name: integration branch
slug: integration-branch
kind: artifact
package_phase: matt:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# integration branch

## Definition — verbatim
> "Where even the batches can't stay green alone, they share an integration branch and all block a final integrate-and-verify ticket. Green is promised only there." — docs/engineering/to-tickets.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 54 | defined here | Defines integration branches as shared git branches for wide refactor batches that cannot maintain green CI in isolation. |
| external/to-tickets.md | 49 | defined here | External catalog explanation of shared integration branches for complex multi-ticket refactoring sequences. |

## Consumes
Multiple migration tickets or interdependent wide refactor batches that temporarily break system integrity when applied alone.

## Produces
An isolated shared git branch isolating unstable intermediate commits until all batches merge and verify.

## When applied
Employed during wide refactor workflows when individual migration batches cannot pass continuous integration independently.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
clean

## Design notes
An `integration branch` is a coordination artifact utilized in `to-tickets` when executing wide refactorings where individual batches cannot maintain green continuous integration independently. Instead of breaking main repository branches, all interdependent batches target the shared integration branch, which gates a final verify ticket before merging into main.
