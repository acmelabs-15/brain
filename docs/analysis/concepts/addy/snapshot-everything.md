---
package: addy
name: Snapshot everything
slug: snapshot-everything
kind: pattern
package_phase: addy:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Snapshot everything

## Definition — verbatim
> "| Snapshot everything | No one reviews snapshot diffs | Assert specific values |" — references/testing-patterns.md:229

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 229 | defined here | Defined in test anti-patterns table as an unmaintainable pattern generating unreviewed snapshot diffs |

## Consumes
Large component renders, DOM trees, or full API payload structures.

## Produces
Oversized snapshot files that developers update blindly without review, masking unintended regressions.

## When applied
When reviewing tests that rely on broad snapshot comparisons rather than targeted assertions.

## Sub-concepts
none

## Part of
test-anti-patterns

## Implementation status
clean

## Design notes
Snapshot everything is an anti-pattern that substitutes comprehensive, specific assertions with indiscriminate serialization dumps. Because large snapshot diffs are routinely accepted without scrutiny during pull requests, they obscure regressions; Addy's testing reference recommends replacing them with assertions on specific values and critical invariants.
