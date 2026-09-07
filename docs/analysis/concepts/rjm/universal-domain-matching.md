---
package: rjm
name: UNIVERSAL domain matching
slug: universal-domain-matching
kind: technique
package_phase: cross-phase
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

# UNIVERSAL domain matching

## Definition — verbatim
> "Calculate how well a skill matches the query using UNIVERSAL domain matching." — .claude/skills/skillforge/scripts/triage_skill_request.py:290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/triage_skill_request.py | 290 | defined here | Matching technique calculating skill match scores against user queries using domain synonyms without hardcoding skill names. |

## Consumes
User query string and skill metadata dictionary containing domains, keywords, triggers, and description.

## Produces
Calculated match score (0-100) and list of matched domain terms and reasons.

## When applied
Applied during skill triage when evaluating whether existing skills match a user request.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
UNIVERSAL domain matching is a query matching technique in SkillForge that evaluates incoming requests against domain synonyms and skill capabilities rather than hardcoded names, enabling generic routing across diverse agent skills.
