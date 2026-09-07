---
package: rjm
name: --allow-baseline-shrink
slug: allow-baseline-shrink
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --allow-baseline-shrink

## Definition — verbatim
(used, not defined)

> "\"--allow-baseline-shrink\"," — scripts/validation/portability_common.py:88

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_agent_skill_discriminator.py | 635 | defined here | CLI option permitting baseline updates that lower or drop recorded agent scores. |
| scripts/validation/portability_baseline.py | 132 | used here | Cited in warning message requiring this flag to confirm deliberate reductions in recorded debt. |
| scripts/validation/portability_common.py | 88 | defined here | CLI option flag permitting baseline updates that drop recorded violations. |
| scripts/validation/portability_floor.py | 126 | used here | Cited in docstring explaining deliberate debt lowering semantics. |

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
--allow-baseline-shrink is a command-line flag identifier requiring explicit confirmation to reduce recorded debt entries in ratchets, classified as name-only per D-023.
