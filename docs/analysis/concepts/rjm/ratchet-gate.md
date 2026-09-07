---
package: rjm
name: ratchet gate
slug: ratchet-gate
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/adr006_run_block_scanner.py, sha256: ef880b3f5f753654f6ec751498eb3dd2fa2d4581398ab022787367e80fd3306e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ratchet gate

## Definition — verbatim
> "turn it into a ratchet gate that exits 1 when the violation count exceeds N, so" — scripts/ci/adr006_run_block_scanner.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/adr006_run_block_scanner.py | 12 | defined here | Gate mode enabled by --max or --exact that exits 1 when violation count exceeds or deviates from threshold. |

## Consumes
Configured violation threshold (--max N or --exact N) and repository workflow run blocks.

## Produces
Non-zero process exit code (exit 1) when violations exceed or mismatch the ratchet threshold.

## When applied
Executed in CI test workflows to prevent regressions in code health and policy violations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
Ratchet gates enforce monotonic improvement in codebase quality by failing CI whenever tracked violations exceed a pinned ceiling or fail to match an exact ratchet count, preventing stealth regressions.
