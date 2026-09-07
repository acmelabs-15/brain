---
package: rjm
name: Acronym frameworks
slug: acronym-frameworks
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-anti-patterns.md, sha256: bb3bb55f446fe40863d1d4460e2885e4f1115d196236896d4107656891eb1bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Acronym frameworks

## Definition — verbatim
> "| Acronym frameworks (4-D, 5-C) | Labels without substance | Actionable steps, no decorative names |" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 19 | defined here | Cataloged as a prompt engineering anti-pattern that uses decorative labels instead of actionable guidance. |

## Consumes
Decorative prompt designs relying on mnemonic acronym structures.

## Produces
Identification of hollow prompt patterns and recommendation to replace them with concrete, actionable steps.

## When applied
During prompt triage, anti-pattern audits, and refactoring of overly structured system instructions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Acronym frameworks (such as 4-D or 5-C) are classified as anti-patterns because they introduce decorative labels and conceptual overhead without providing enforceable operational constraints, consuming context tokens while providing zero behavioral grounding.
