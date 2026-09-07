---
package: rjm
name: invoke-on-demand
slug: invoke-on-demand
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# invoke-on-demand

## Definition — verbatim
> "taste-lints, doc-accuracy) were invoke-on-demand and not on the exit path," — scripts/validation/check_build_gates.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 7 | used here | Describes the failure mode where quality skills were discretionary rather than mandatory on the exit path. |

## Consumes
Discretionary agent or user request to execute a skill.

## Produces
Ad-hoc execution and output of a specific skill outside the mandatory phase gates.

## When applied
Used when skills are executed at will rather than required by workflow exit gates.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Invoke-on-demand describes an execution model where verification skills are run at human or agent discretion rather than mandated by phase exit gates.
