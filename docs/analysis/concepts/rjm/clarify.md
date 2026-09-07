---
package: rjm
name: CLARIFY
slug: clarify
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CLARIFY

## Definition — verbatim
> "| **CLARIFY** | Ambiguous or duplicate | Asks user to clarify intent |" — .claude/skills/skillforge/references/phase0-triage.md:58

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase0-triage.md | 58 | defined here | Decision action row specifying condition (ambiguous or duplicate) and user clarification prompt. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 13 | defined here | Docstring bullet defining the triage action when input is ambiguous and requires more information. |
| .claude/skills/skillforge/SKILL.md | 84 | defined here | Process overview diagram step enumerating triage routing outcomes. |

## Consumes
Ambiguous user input or high match scores (>=80%) occurring on explicit create requests.

## Produces
Targeted clarification prompts to the user resolving intent and highlighting duplicate warnings.

## When applied
Applied during Phase 0 triage when user intent is underspecified or potentially in conflict with existing skills.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, script-bug, missing-path

## Design notes
CLARIFY is an interactive triage gate that pauses execution when an input is too vague or when a user requests creating a skill that already exists. It prevents accidental duplication and misaligned skill development by asking targeted disambiguation questions.
