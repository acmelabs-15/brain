---
package: rjm
name: SKILL_PROMPT_REF_TEMPLATE
slug: skill-prompt-ref-template
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKILL_PROMPT_REF_TEMPLATE

## Definition — verbatim
> "SKILL_PROMPT_REF_TEMPLATE = \".claude/skills/{agent}-review/SKILL.md\"" — scripts/eval/eval-agent-vs-baseline.py:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agent-vs-baseline.py | 113 | defined here | Constant template string defining the relative repository path pattern for skill prompt files. |

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
defects: exit-code-mismatch, script-bug

## Design notes
A configuration path template string referencing skill prompt markdown file locations, classified as `name-only` per D-023.
