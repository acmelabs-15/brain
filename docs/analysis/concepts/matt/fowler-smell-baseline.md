---
package: matt
name: Fowler smell baseline
slug: fowler-smell-baseline
kind: reference
package_phase: matt:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Fowler smell baseline

## Definition — verbatim
> "It also gains an always-on **Fowler smell baseline** on its Standards axis — a curated ~12 high-signal \"Bad Smells in Code\"" — CHANGELOG.md:165

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 165 | defined here | Changelog entry establishing Fowler's catalog as the anchor for refactoring |
| external/tdd.md | 54 | used here | Explains transfer of refactoring responsibility and code smell baseline to code-review |

## Consumes
Source code diffs, candidate refactorings, or code review targets

## Produces
Standardized code smell diagnoses and catalog-anchored refactoring recommendations

## When applied
During code review and post-implementation refactoring passes

## Sub-concepts
none

## Part of
code-review

## Implementation status
clean

## Design notes
The Fowler smell baseline anchors refactoring suggestions to established, named architectural smells (from Martin Fowler's Refactoring catalog) rather than subjective stylistic preferences or arbitrary cleanups.
