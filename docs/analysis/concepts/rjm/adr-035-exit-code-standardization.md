---
package: rjm
name: ADR-035 Exit Code Standardization
slug: adr-035-exit-code-standardization
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/analyze_skill_placement.py, sha256: 7073083f4b28fca148890b3a7149ef41098af111ded727c1350dac89b3857383}
  - {path: .claude/skills/context-optimizer/scripts/compress_markdown_content.py, sha256: 6ea240babb32b029c81725c73a1f4a7db221c67d87bde2598c7545c563f42de1}
  - {path: .claude/skills/context-optimizer/scripts/extract_and_index.py, sha256: 6d3e638453dc07f7586b49315c8539b2d9eaa0aad91b14e53cac345e8a0fcde4}
  - {path: scripts/compute_health_status.py, sha256: 6eaa6186909dcbe2e368395148b24f0b3968685da7f351143d3378094749a863}
  - {path: scripts/consolidate_skills.py, sha256: 14ba13d8d34815bfa54c2286f6383f005cba9ed1aae7c57810f669bd8399bfc9}
  - {path: scripts/detect_hook_bypass.py, sha256: 75ac8dd432b365b4d7934e216897ccd03b44a366b92d5e8245bb6795e4dd6e0c}
  - {path: scripts/detect_scope_explosion.py, sha256: d7bfbd26d4d3d5afd838adcbee0815b32f7730ca41ef2f7ce98c686f5870bfa9}
  - {path: scripts/review_memory_export_security.py, sha256: d8e98211aeb8e9412aa1bc516f5a90b054306e33e2390b486e8c2571a279060f}
  - {path: scripts/split_bundled_skills.py, sha256: 984becd29092df0d723645aa4250697a65d743f72cab46212c1934501d747257}
  - {path: scripts/sync_mcp_config.py, sha256: 121e1c3cf83183f12974ea194d84fb4bb3e5f5827fcd336a323acd5a6fa494df}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ADR-035 Exit Code Standardization

## Definition — verbatim
(used, not defined)

> "See: ADR-035 Exit Code Standardization" — .claude/skills/context-optimizer/scripts/analyze_skill_placement.py:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/analyze_skill_placement.py | 26 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| .claude/skills/context-optimizer/scripts/compress_markdown_content.py | 16 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| .claude/skills/context-optimizer/scripts/extract_and_index.py | 15 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| scripts/compute_health_status.py | 13 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| scripts/consolidate_skills.py | 13 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| scripts/detect_hook_bypass.py | 16 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| scripts/detect_scope_explosion.py | 20 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| scripts/review_memory_export_security.py | 12 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| scripts/split_bundled_skills.py | 11 | used here | Cited in script docstring as the standard governing CLI exit codes. |
| scripts/sync_mcp_config.py | 16 | used here | Cited in script docstring as the standard governing CLI exit codes. |

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
defects: doc-drift, script-bug, exit-code-mismatch

## Design notes
ADR-035 Exit Code Standardization is an architecture decision record title referenced across Python CLI scripts to specify standardized process exit codes rather than an operational lifecycle concept, classified as name-only per D-023.
