---
package: rjm
name: run_check
slug: run-check
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_claude_authorization.py, sha256: 02d1029955d370a06572aac4b1f500a8043a0f588edfd0aca83258ccf33b7297}
  - {path: scripts/ci/check_plugin_lib_mirrors.py, sha256: 2ba1360dfea77be673c75b9acac6c476472966335816f1b3cedb061ce32bbab5}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_check

## Definition — verbatim
(used, not defined)

> "def run_check(checker: Path, values: dict[str, str]) -> tuple[int, str]:" — scripts/ci/check_claude_authorization.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_claude_authorization.py | 54 | defined here | Function executing external checker script and returning status code and output message. |
| scripts/ci/check_plugin_lib_mirrors.py | 23 | defined here | Function executing mirror synchronization check and returning exit code. |
| scripts/validation/check_agent_skill_discriminator.py | 448 | defined here | Function executing discriminator check logic over agent definitions. |
| scripts/validation/check_generated_staleness.py | 224 | defined here | Function executing generator staleness checks with timeout handling. |

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
defects: missing-path, orphan, other

## Design notes
A Python function identifier (`run_check`) executing validation checks across CI and validation scripts recorded during inventory analysis, classified as `name-only` per D-023.
