---
package: rjm
name: Check-SkillExists.ps1
slug: check-skillexists-ps1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Check-SkillExists.ps1

## Definition — verbatim
(used, not defined)

> "This is a Python port of Check-SkillExists.ps1 following ADR-042 migration." — scripts/check_skill_exists.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 253 | defined here | Proposed as a P0 PowerShell utility script to verify skill existence and enable automated constraint checks. |
| scripts/check_skill_exists.py | 7 | used here | Cited in header documentation as the legacy PowerShell script replaced during Python migration. |

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
defects: doc-drift, missing-path

## Design notes
Check-SkillExists.ps1 is a legacy PowerShell validation script file name rather than an architectural lifecycle concept.
