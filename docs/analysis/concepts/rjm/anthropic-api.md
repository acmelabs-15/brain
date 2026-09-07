---
package: rjm
name: _anthropic_api
slug: anthropic-api
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _anthropic_api

## Definition — verbatim
(used, not defined)

> "from _anthropic_api import call_api as _call_api  # noqa: E402" — scripts/eval/eval-oneshot-vs-shipped.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-oneshot-vs-shipped.py | 30 | used here | Imported for raw Anthropic API invocation in the one-shot benchmark harness. |
| scripts/eval/eval-reviewer-asymmetry.py | 47 | used here | Imported for raw Anthropic API invocation and API key credential loading. |

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
A Python module identifier providing low-level HTTP transport and authentication for the Anthropic API, classified as name-only per D-023.
