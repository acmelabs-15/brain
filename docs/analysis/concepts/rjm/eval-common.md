---
package: rjm
name: _eval_common
slug: eval-common
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_anthropic_api.py, sha256: 574e0b74df4e4a048641130705579a08ddd84d48c0a4e79655dae3040888e1e8}
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _eval_common

## Definition — verbatim
(used, not defined)

> "from _eval_common import require_str_or_none, safe_http_error_message" — scripts/eval/_anthropic_api.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_anthropic_api.py | 21 | used here | Imported utility module providing argument validation and error formatting. |
| scripts/eval/_run_rollup_core.py | 33 | used here | Imported utility module for rollup operations across evaluation runs. |
| scripts/eval/eval-reviewer-asymmetry.py | 48 | used here | Imported error exception types used in reviewer asymmetry evaluation. |

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
_eval_common is an internal Python helper module identifier providing shared utility routines across evaluation scripts rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
