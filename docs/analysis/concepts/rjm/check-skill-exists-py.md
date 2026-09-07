---
package: rjm
name: check_skill_exists.py
slug: check-skill-exists-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_skill_exists.py

## Definition — verbatim
(used, not defined)

> "### check_skill_exists.py" — scripts/AGENTS.md:209

## Also called — verbatim
> "- `check_skill_exists.py` - Skill availability check" — scripts/README.md:166

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/AGENTS.md | 209 | defined here | Section heading documenting skill existence verification tool for Phase 1.5 blocking gate. |
| scripts/README.md | 166 | used here | Listed in scripts overview table as a skill availability check utility. |

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
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
check_skill_exists.py is a Python verification script file name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
