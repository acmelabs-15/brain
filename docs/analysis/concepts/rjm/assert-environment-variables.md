---
package: rjm
name: assert_environment_variables
slug: assert-environment-variables
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/__init__.py, sha256: 3f36c029f63472c8e276ce8896a4c8bcbda405c8e280eb6d341f7a5cc74fe20d}
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/workflow.py, sha256: afc062433185e6daf4a066162000ab7a13caa0b4e33383ff2dd450065de240ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# assert_environment_variables

## Definition — verbatim
(used, not defined)

> "def assert_environment_variables(names: list[str]) -> None:" — scripts/ai_review_common/workflow.py:32

## Also called — verbatim
> "    assert_environment_variables," — scripts/ai_review_common/__init__.py:28
> "    assert_environment_variables," — scripts/ai_review_common/quality_gate.py:20

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/__init__.py | 28 | used here | Imported from quality_gate/workflow and exported in package init. |
| scripts/ai_review_common/quality_gate.py | 20 | used here | Imported from workflow to assert environment variables before gate execution. |
| scripts/ai_review_common/workflow.py | 32 | defined here | Implemented to validate required environment variables are set and non-empty. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: script-bug, internal-contradiction, orphan

## Design notes
assert_environment_variables is a Python helper function identifier validating environment variable presence rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
