---
package: rjm
name: Mutation testing
slug: mutation-testing
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-077-flip-stale-contract-tests.md, sha256: c4b19bb8f1453828b502f31578a375d9fd70f1446abf25e4f094ca50a2efd652}
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mutation testing

## Definition — verbatim
(used, not defined)

> "Mutation testing, snapshot testing, or consumer-driven contract tests" — .agents/architecture/ADR-077-flip-stale-contract-tests.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 73 | used here | Considered as an alternative tooling approach to detect behavioral drift in contract tests. |
| .agents/critique/ADR-023-debate-log.md | 54 | used here | Noted by Independent-Thinker as an absent testing dimension in prompt test evaluation. |

## Consumes
Source code, test suites, mutation operators (simulated syntax/logic alterations).

## Produces
Mutation test scores indicating whether artificial defects injected into program logic cause test failures.

## When applied
Considered during test rigor evaluation to assess whether assertions actually test behavior or pass superficially.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
A testing evaluation technique that mutates program source code to verify whether test assertions fail as expected. In rjm architecture debates, it is recognized as a powerful tool for discovering weak test suites, though weighed against high setup and execution costs.
