---
package: matt
name: observable behavior
slug: observable-behavior
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/tests.md, sha256: 859f9e592c188fda4fc7277dd180e4ce9c7a2e13f6efe1f6f29eccc9d28c106a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# observable behavior

## Definition — verbatim
(used, not defined)
> "// GOOD: Tests observable behavior" — skills/engineering/tdd/tests.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/tests.md | 8 | defined here | Comment annotating a good test example that verifies user-observable outcomes rather than internal calls. |

## Consumes
Public API contracts and system outputs.

## Produces
Tests verifying external side-effects, returned statuses, or data retrieval through public APIs.

## When applied
When choosing assertion targets, ensuring assertions check external effects callers care about.

## Sub-concepts
none

## Part of
integration-style, good-tests

## Implementation status
clean

## Design notes
Observable behavior refers to the outputs, state transitions, and responses that external consumers or users of an interface can directly witness. In Matt's testing model, tests must assert exclusively on observable behavior rather than checking internal variables or method calls, ensuring that tests remain valid when internal implementations are refactored.
