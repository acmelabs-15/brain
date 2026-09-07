---
package: rjm
name: good practice
slug: good-practice
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# good practice

## Definition — verbatim
(used, not defined)

> "• Good practice" — .claude/skills/cynefin-classifier/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/SKILL.md | 51 | used here | Listed in the Complicated quadrant of the Cynefin Framework ASCII diagram as the appropriate practice tier. |

## Consumes
Expert analysis, diagnostic evaluation, architecture trade-offs.

## Produces
Contextually sound, peer-reviewed engineering solutions from among multiple valid options.

## When applied
Applied when solving Complicated problems where multiple valid solutions exist and context dictates the best fit.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: doc-drift

## Design notes
In the Cynefin Framework, `good practice` is the practice tier associated with the Complicated domain. Unlike Clear domains where a single "best practice" applies universally, complicated systems allow for several valid approaches; expert analysis must determine which good practice is most suitable for the specific context and trade-offs.
