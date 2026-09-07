---
package: rjm
name: --update-baseline
slug: update-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
  - {path: scripts/validation/skill_md_portability_baseline.json, sha256: 7e99a765356aaf635637c80c183a5c9200b7029a2917227b0580683be941d97f}
  - {path: scripts/validation/skill_portability_baseline.json, sha256: 19be7c6de8ec9639ccde43c96cde35a3826b6dfadd239d08156ddd050fcc51f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --update-baseline

## Definition — verbatim
(used, not defined)

> "\"--update-baseline\"," — scripts/validation/portability_common.py:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 626 | defined here | CLI option directing the discriminator to score the full corpus and write baseline scores. |
| scripts/validation/portability_common.py | 83 | defined here | CLI option directing portability validators to rewrite baseline JSON files. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Cited in baseline comment as the command flag used to generate the baseline file. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Cited in baseline comment as the command flag used to generate the baseline file. |
| scripts/validation/skill_portability_baseline.json | 2 | used here | Cited in baseline comment as the command flag used to generate the baseline file. |

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
defects: missing-path, other

## Design notes
--update-baseline is a command-line flag identifier used across validation scripts to record and ratify baseline debt thresholds, classified as name-only per D-023.
