---
package: rjm
name: skill_size.py
slug: skill-size-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# skill_size.py

## Definition — verbatim
(used, not defined)

> "Validated by: `scripts/validation/skill_size.py`" — .claude/skills/CLAUDE.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 95 | used here | Cited as the validator script enforcing prompt line count limits on skill manifests. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 523 | used here | Advised in passive compliance check message as an external validator to run on scanned trees. |
| .claude/skills/context-optimizer/SKILL.md | 311 | used here | Documented as the validator script measuring skill size across canonical and generated trees. |

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
clean

## Design notes
`skill_size.py` is the script file name for the repository's prompt size validator enforcing line-count limits and progressive disclosure, classified as `kind: name-only` per D-023.
