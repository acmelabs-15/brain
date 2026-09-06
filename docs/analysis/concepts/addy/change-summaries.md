---
package: addy
name: Change Summaries
slug: change-summaries
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Change Summaries

## Definition — verbatim
> "After any modification, provide a structured summary. This makes review easier, documents scope discipline, and surfaces unintended changes:" — skills/git-workflow-and-versioning/SKILL.md:193

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 191 | defined here | Section heading introducing structured change summaries with changes made, untouched areas, and concerns. |

## Consumes
Completed code modifications, inspected git diffs, and deliberate scope boundary decisions.

## Produces
A structured markdown summary containing changes made, explicitly untouched files, and potential risks or concerns.

## When applied
> "After any modification, provide a structured summary." — skills/git-workflow-and-versioning/SKILL.md:193

## Sub-concepts
- changes-made
- things-i-didn-t-touch
- potential-concerns

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A post-modification communication pattern that requires developers or AI agents to document what changed, what was deliberately untouched, and what concerns or assumptions arose. By making untouched code explicit, it proves scope discipline and stops unsolicited refactorings before code review.
