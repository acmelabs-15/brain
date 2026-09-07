---
package: matt
name: test files
slug: test-files
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# test files

## Definition — verbatim
(used, not defined)

> "Migrate test files from `as` type assertions to @total-typescript/shoehorn." — skills/misc/README.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 6 | used here | Identifies automated test code files as the targets for migrating away from unsafe type assertions. |

## Consumes
Source code under test, test runner harness, and assertion utilities.

## Produces
Automated test suites executing behavioral and regression verifications.

## When applied
During testing, quality assurance, and test code modernization workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Test files are the source code artifacts containing automated unit, integration, or regression tests. In Matt's toolkit, they are subject to strict type safety standards, requiring unsafe `as` type assertions to be migrated to type-safe utilities like shoehorn.
