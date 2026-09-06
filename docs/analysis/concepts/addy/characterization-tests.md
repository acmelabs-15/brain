---
package: addy
name: characterization tests
slug: characterization-tests
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# characterization tests

## Definition — verbatim
> "For untested legacy behavior, write characterization tests, tests that pin down what the code currently does, right or wrong, before any modification." — docs/adoption-guide.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 90 | defines | Prescribes tests that capture actual current behavior of legacy code before refactoring or feature additions. |

## Consumes
Untested legacy code slated for modification or refactoring.

## Produces
Automated test suite asserting the existing observable behavior of legacy components.

## When applied
Mandatory prerequisite in Phase 2 of brownfield adoption before modifying untested code.

## Sub-concepts
none

## Part of
adoption-guide, test-driven-development

## Implementation status
clean

## Design notes
Characterization tests establish a safety net around legacy code before refactoring or feature work begins. By locking down how the code currently behaves—regardless of whether that behavior is documented or technically buggy—characterization tests ensure that subsequent agent edits preserve exact runtime behavior and do not introduce unexpected regressions.
