---
package: addy
name: fairness invariant
slug: fairness-invariant
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fairness invariant

## Definition — verbatim
(used, not defined)
> "A failing reproduction test for the lost-cent case, a fix preserving both README invariants (exact sum, earliest-shares fairness), the fairness invariant covered by its own test, full suite passing" — evals/cases/test-driven-development.json:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/test-driven-development.json | 33 | references | Specified in an evaluation expected output requiring tests and fixes to preserve the split remainder fairness rule. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
fairness invariant is a specific business logic rule of the splitCents calculation fixture requiring remainder cents to distribute to earliest shares rather than a lifecycle concept.
