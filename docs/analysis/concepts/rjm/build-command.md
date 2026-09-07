---
package: rjm
name: build_command
slug: build-command
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/execute_ai_review_post_script.py, sha256: b054d9d879990f9f217d6c35988afeffc153a412a657601f420cafb9a8d2102f}
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# build_command

## Definition — verbatim
(used, not defined)

> "def build_command(script_path: Path, env: Mapping[str, str]) -> list[str]:" — scripts/ci/execute_ai_review_post_script.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/execute_ai_review_post_script.py | 31 | defined here | Function constructing execution command arguments for Python or PowerShell post-review scripts. |
| scripts/validation/checks_ratchet.py | 101 | defined here | Function building command argv for running checks against baseline ratchets via uv. |

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
defects: orphan, script-bug

## Design notes
A utility function constructing command-line argument lists for subprocess execution rather than an operational lifecycle concept.
