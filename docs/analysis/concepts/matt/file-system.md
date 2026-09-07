---
package: matt
name: File system
slug: file-system
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/mocking.md, sha256: 3ceb807fdf4a47d6a93d4d9a891e5ba6d362a6247bd08adc451feebfc17361ef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# File system

## Definition — verbatim
(used, not defined)
> "- File system (sometimes)" — skills/engineering/tdd/mocking.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/mocking.md | 8 | defined here | Identified as a conditional system boundary where mocking disk operations is sometimes permitted. |

## Consumes
none

## Produces
none

## When applied
When testing components with disk I/O where creating temporary fixtures on disk is too slow or introduces environmental side effects.

## Sub-concepts
none

## Part of
mocking, system-boundaries

## Implementation status
clean

## Design notes
In Matt's TDD philosophy, the file system is marked as a conditional boundary where mocking is allowed "sometimes". Developers are encouraged to test against real file paths or temporary directories where feasible, reserving mocks for scenarios where disk manipulation would slow down the test suite or pollute the host environment.
