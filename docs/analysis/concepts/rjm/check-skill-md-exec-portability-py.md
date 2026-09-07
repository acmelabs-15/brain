---
package: rjm
name: check_skill_md_exec_portability.py
slug: check-skill-md-exec-portability-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_resolver_anchoring.py, sha256: 8013b916e0028b1191d0d6f89083dfc8030d317c22fc705a4fb159522f950e46}
  - {path: scripts/validation/skill_md_exec_portability_baseline.json, sha256: 443a380bdae502462b837dd841290985f9279faaab5d56132e2af43e842bdf61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_skill_md_exec_portability.py

## Definition — verbatim
(used, not defined)

> "Companion to check_skill_md_exec_portability.py, which verifies that skills do" — scripts/validation/check_skill_resolver_anchoring.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_resolver_anchoring.py | 25 | used here | Cited as companion validator that checks executable paths in skill markdown files. |
| scripts/validation/skill_md_exec_portability_baseline.json | 2 | used here | Named as generator script in header comment of portability baseline file. |

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
A script file name cited across validation tooling, classified as name-only per D-023.
