---
package: rjm
name: _COLLECT_SCRIPT
slug: collect-script
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/collect_metrics_and_report.py, sha256: 24e4bd5101b9da2fb4917182f43920a76ea124230507ff0b82db8551faccf5bf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _COLLECT_SCRIPT

## Definition — verbatim
(used, not defined)

> "_COLLECT_SCRIPT = \".claude/skills/metrics/collect_metrics.py\"" — scripts/ci/collect_metrics_and_report.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/collect_metrics_and_report.py | 26 | defined here | Constant path string pointing to the agent metrics collection script. |

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
`_COLLECT_SCRIPT` is a Python path constant identifier rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
