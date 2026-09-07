---
package: rjm
name: SKILL_QUESTION_PATTERNS
slug: skill-question-patterns
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKILL_QUESTION_PATTERNS

## Definition — verbatim
(used, not defined)

> "SKILL_QUESTION_PATTERNS = [" — .claude/skills/skillforge/scripts/triage_skill_request.py:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/triage_skill_request.py | 98 | defined here | Regular expression pattern list for matching questions inquiring about existing skills. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
Python constant identifier in triage_skill_request.py holding regex patterns for skill inquiry queries rather than an operational lifecycle concept.
