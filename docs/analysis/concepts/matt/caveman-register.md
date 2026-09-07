---
package: matt
name: caveman register
slug: caveman-register
kind: pattern
package_phase: matt:Productivity Skills
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/wait-what.md, sha256: 74574387b52328039e177e1816b86717875262d832da9043bd5c2ce8040c0c96}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# caveman register

## Definition — verbatim
> "The model over-corrects into a caveman register that is shorter and no clearer." — external/wait-what.md:32

## Also called — verbatim
`telegrams` — external/wait-what.md:31

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/wait-what.md | 32 | defined here | Describes the failure mode where concision directives cause the model to produce blunt, clipped, and unhelpful fragments. |

## Consumes
Aggressive output-brevity directives ("be concise", "/tldr", "/no-fluff").

## Produces
Extremely clipped, telegram-like text that is shorter but offers no improvement in clarity or understanding.

## When applied
Emerges when agents over-correct in response to output-length constraints.

## Sub-concepts
none

## Part of
wait-what

## Implementation status
clean

## Design notes
The caveman register is an anti-pattern identified in Matt's prompt design where models, under strict instructions to be brief, delete functional words, articles, and explanatory premises. The result is terse fragments that fail to educate or clarify, demonstrating why prompting must focus on user comprehension rather than word counts.
