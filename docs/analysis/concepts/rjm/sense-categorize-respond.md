---
package: rjm
name: Sense-Categorize-Respond
slug: sense-categorize-respond
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sense-Categorize-Respond

## Definition — verbatim
> "Sense-Categorize-Respond" — .claude/skills/cynefin-classifier/SKILL.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/scripts/classify.py | 127 | defined here | Defined in STRATEGIES dictionary as the response strategy approach string for the Clear domain. |
| .claude/skills/cynefin-classifier/SKILL.md | 134 | defined here | Documented in output schema template as the required approach string when problem domain is Clear. |

## Consumes
Problem symptoms, established category schema, standardized runbooks or procedures.

## Produces
Matched standard category, execution of best practice procedure.

## When applied
When problems fall into the Clear Cynefin domain where cause-and-effect relationships are self-evident to all participants.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: unimplemented-feature, doc-drift

## Design notes
`Sense-Categorize-Respond` is the designated cognitive response strategy for the Clear domain in Cynefin. Because cause-and-effect connections are obvious and well-understood, the problem requires no deep analysis or exploratory probing; the agent or engineer simply senses the situation, categorizes it into a known pattern, and executes standard operating procedures or best practices.
