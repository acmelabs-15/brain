---
package: rjm
name: verification steps
slug: verification-steps
kind: checklist
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

# verification steps

## Definition — verbatim
(used, not defined)

> "`.agents/governance/TESTING-RIGOR.md` defines per-function test cases, coverage targets, and verification steps." — .agents/architecture/ADR-077-flip-stale-contract-tests.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-077-flip-stale-contract-tests.md | 48 | used here | Describes governance definitions in TESTING-RIGOR.md specifying concrete verification procedures. |

## Consumes
Executable test suites, test runners, system requirements, verification commands.

## Produces
Documented, reproducible validation sequences and execution evidence confirming that an implementation satisfies its stated criteria.

## When applied
Followed by implementers before committing and verified by QA agents during pre-PR quality review.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Explicit, repeatable test commands and inspection procedures codified in governance documents that developers and agents must execute to prove implementation correctness prior to pull request submission.
