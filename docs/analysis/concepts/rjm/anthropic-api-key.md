---
package: rjm
name: ANTHROPIC_API_KEY
slug: anthropic-api-key
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ANTHROPIC_API_KEY

## Definition — verbatim
(used, not defined)

> "Load ANTHROPIC_API_KEY from environment or .env file." — scripts/eval/_anthropic_api.py:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 34 | used here | Documented environment variable holding the Anthropic API access key. |
| scripts/eval/eval-oneshot-vs-shipped.py | 12 | used here | Documented requirement for running evaluation and judge model calls. |
| scripts/eval/eval-rule-activation.py | 44 | used here | Cited prerequisite environment variable in CLI error and authentication docstrings. |
| scripts/eval/variance-control.py | 14 | used here | Cited requirement for executing variance measurement API calls. |

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
defects: doc-drift

## Design notes
ANTHROPIC_API_KEY is an environment variable name identifier holding authentication credentials for Anthropic API access rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
