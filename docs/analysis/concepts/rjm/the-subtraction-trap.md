---
package: rjm
name: The Subtraction Trap
slug: the-subtraction-trap
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

# The Subtraction Trap

## Definition — verbatim
> "## The Subtraction Trap" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:79
> "Stripping AI tells without replacing them with anything real creates its own tell. Prompts built from "don't" rules cause flat, minimal output. The absence becomes a signature." — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 79 | defined here | Defined as the failure mode where purely negative rules strip expressiveness and produce flat, distinctively artificial text. |

## Consumes
Prompts formulated predominantly with negative prohibitions ("do not", "never use").

## Produces
Identification of synthetic absence signatures and recommendation to introduce positive craft guidance from real samples.

## When applied
During prompt review, anti-pattern auditing, and prompt engineering refinement passes.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Subtraction Trap describes what occurs when prompt designers attempt to eliminate AI mannerisms solely through negative rules: stripping tells without providing authentic voice models leaves a barren, flat output whose very lack of texture forms an unmistakable synthetic fingerprint.
