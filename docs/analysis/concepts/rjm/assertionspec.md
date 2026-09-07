---
package: rjm
name: AssertionSpec
slug: assertionspec
kind: artifact
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AssertionSpec

## Definition — verbatim
(used, not defined)

> "class AssertionSpec:" — scripts/eval/_runtime_parity.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 31 | defined here | Frozen dataclass defining the assertion rule (kind, pattern, path, expected value) for parity evaluations. |

## Consumes
Test fixture assertion specifications from JSON fixture documents.

## Produces
Evaluation assertion rules defining expected regex patterns, target file paths, or expected file contents.

## When applied
Parsed by `load_fixtures` and evaluated by `score_assertions` during runtime parity testing.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An evaluation assertion specification artifact in rjm's parity harness that represents expected model response regexes or workspace file states, decoupling assertion criteria from scoring execution.
