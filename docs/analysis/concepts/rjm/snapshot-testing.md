---
package: rjm
name: snapshot testing
slug: snapshot-testing
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

# snapshot testing

## Definition — verbatim
(used, not defined)

> "Mutation testing, snapshot testing, or consumer-driven contract tests" — .agents/architecture/ADR-077-flip-stale-contract-tests.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 73 | used here | Evaluated as an alternative automated tooling approach to capture behavioral regressions. |

## Consumes
Rendered data structures, serialized payloads, output artifacts.

## Produces
Golden snapshot files and diff comparisons detecting any deviation from recorded baseline output.

## When applied
Applied during regression testing to ensure complex outputs do not change unexpectedly across refactoring.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A testing technique comparing serialized component output against saved golden snapshot files. In rjm decision records, it is noted as useful for detecting unintended output changes but prone to high maintenance churn that can obscure intentional contract modifications.
