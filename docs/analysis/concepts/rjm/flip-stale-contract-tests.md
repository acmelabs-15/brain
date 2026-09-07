---
package: rjm
name: Flip Stale Contract Tests
slug: flip-stale-contract-tests
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Flip Stale Contract Tests

## Definition — verbatim
> "ADR-077: Flip Stale Contract Tests" — .agents/architecture/ADR-077-flip-stale-contract-tests.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 12 | defined here | Title of architecture decision record establishing the governance rule to find and flip stale contract tests in the same diff. |

## Consumes
Contract-altering code modifications, existing test suites, git commit history.

## Produces
Updated test assertions aligned with the modified observable contract and commit body justifications explaining why assertions changed.

## When applied
Applied whenever a code modification changes an observable contract (public return values, exceptions, signatures, error messages, or side effects).

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A testing governance rule requiring developers who modify observable software behavior to search for and flip existing assertions rather than deleting them or leaving them stale. Prevents false-pass test suites where obsolete behavioral assumptions survive unnoticed across code changes.
