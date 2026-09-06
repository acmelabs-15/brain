---
package: addy
name: Smoke test
slug: smoke-test
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: hooks/SDD-CACHE.md, sha256: 8c1d337a11ed7fd4f3f0e965856cb86a97cdf8b3de0b29b63345ad0133b3db12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Smoke test

## Definition — verbatim
(used, not defined)
> "### 1. Smoke test the scripts directly" — hooks/SDD-CACHE.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| hooks/SDD-CACHE.md | 83 | defined here | Heading for local testing instructions to directly execute hook scripts with mock stdin |

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
Section heading in hook documentation detailing direct shell invocation of hook scripts; it is a testing instruction heading rather than an agent lifecycle concept.
