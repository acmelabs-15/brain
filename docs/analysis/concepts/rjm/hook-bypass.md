---
package: rjm
name: hook-bypass
slug: hook-bypass
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_hook_bypass_results.py, sha256: f64f6a9f0d591c6c512810bf6cd12f4510cbd9a98000767141afee1346bc3019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hook-bypass

## Definition — verbatim
(used, not defined)

> "Parse hook-bypass audit JSON into the indicator count the audit workflow reads." — scripts/ci/parse_hook_bypass_results.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_hook_bypass_results.py | 2 | used here | Describes the audit target where git hook execution bypass indicators are parsed and counted. |

## Consumes
Audit reports and execution telemetry from git hook invocations.

## Produces
Indicators and metric counts highlighting unauthorized hook circumvention.

## When applied
During CI workflow audits checking for unauthorized git hook circumventions across commits.

## Sub-concepts
none

## Part of
git-hook-policy

## Implementation status
defects: orphan

## Design notes
A security compliance pattern representing the circumvention of repository git hooks (such as committing with `--no-verify`), tracked and counted by CI audit workflows to prevent unvalidated changes from bypassing quality gates.
