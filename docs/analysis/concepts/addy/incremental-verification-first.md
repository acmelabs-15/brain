---
package: addy
name: Incremental, verification-first
slug: incremental-verification-first
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Incremental, verification-first

## Definition — verbatim
> "| Adoption strategy | **Full lifecycle, immediately** | **Incremental, verification-first** |" — docs/adoption-guide.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 18 | defines | Adoption strategy for brownfield projects establishing reading and protective skills before modifications. |

## Consumes
Brownfield repository with existing technical debt and legacy behavioral risks.

## Produces
Sequenced adoption of skills starting with context engineering and review before introducing build changes.

## When applied
Applied when integrating agent skills into mature or production codebases.

## Sub-concepts
none

## Part of
adoption-guide, brownfield

## Implementation status
clean

## Design notes
"Incremental, verification-first" avoids the pitfalls of big-bang agent rollouts in mature codebases. By first establishing context engineering, read-only code review, and characterization test coverage around targeted areas before permitting automated code modifications, teams safely introduce agent workflows without causing regressions.
