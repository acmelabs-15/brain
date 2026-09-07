---
package: rjm
name: SECTIONS_TO_COMPARE
slug: sections-to-compare
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SECTIONS_TO_COMPARE

## Definition — verbatim
(used, not defined)

> "and `detect_agent_drift.py` compares only the 18 headings named in its `SECTIONS_TO_COMPARE` allowlist (`:57-76`), at an 80 percent similarity threshold (`:668`), whose exit code `.github/workflows/drift-detection.yml:35-42` captures and discards." — .claude/skills/ai-agents-debugging-playbook/SKILL.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 86 | used here | Cited as the constant allowlist of 18 headings compared by detect_agent_drift.py. |

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
defects: missing-path, unfailable-gate

## Design notes
SECTIONS_TO_COMPARE is a constant identifier defining the 18 allowlisted headings in detect_agent_drift.py rather than an independent software lifecycle concept, classified as name-only per D-023.
