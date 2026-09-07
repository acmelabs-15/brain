---
package: rjm
name: command_size.py
slug: command-size-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# command_size.py

## Definition — verbatim
(used, not defined)

> "command_size.py owns this repository's local 200-line " — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:536

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 536 | used here | Cited in vendor guidance noting that command file ratchets belong to command_size.py rather than CLAUDE.md validation. |
| .claude/skills/context-optimizer/SKILL.md | 305 | used here | Referenced to distinguish local 200-line command ratchets from CLAUDE.md passive context guidelines. |

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
`command_size.py` is a repository script file name enforcing command-file line size ratchets rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
