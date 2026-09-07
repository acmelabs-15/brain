---
package: rjm
name: More Rules = More Fingerprint
slug: more-rules-more-fingerprint
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

# More Rules = More Fingerprint

## Definition — verbatim
> "## More Rules = More Fingerprint" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:85
> "Adding structural rules to make output human-like can make it more detectable. Each rule is a regularity the model follows precisely. Those regularities compound into a pattern." — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:87

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 85 | defined here | Principle demonstrating that compounding prompt rules creates structural regularities that heighten machine detectability. |

## Consumes
Elaborate prompt rule sets attempting to micromanage output structure and tone.

## Produces
Architectural justification for minimal prompt design, fewer rules, and preference-based biasing.

## When applied
When evaluating prompt complexity, adding style constraints, or streamlining over-engineered system instructions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
More Rules = More Fingerprint articulates the compounding risk of prescriptive prompt engineering: because language models adhere to rules with mathematical precision, every additional structural constraint introduces an invariant regularity that statistical detectors easily identify, defeating the goal of natural output.
