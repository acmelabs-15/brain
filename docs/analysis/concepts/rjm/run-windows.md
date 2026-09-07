---
package: rjm
name: run_windows
slug: run-windows
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/vanilla_hook_guard.py, sha256: bf86e44411bdcd580c983ff5b6e3fa94b03c519de7a92c20563d423bc2d6bd34}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_windows

## Definition — verbatim
(used, not defined)

> "def run_windows(install_root: Path, consumer_cwd: Path) -> tuple[int, str]:" — scripts/ci/vanilla_hook_guard.py:169

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/vanilla_hook_guard.py | 169 | defined here | Test runner function executing hooks under Windows PowerShell with Python paths scrubbed from PATH. |

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
defects: orphan

## Design notes
A test execution harness function (`run_windows`) in `vanilla_hook_guard.py` driving hook degradation tests under Windows, classified as `name-only` per D-023.
