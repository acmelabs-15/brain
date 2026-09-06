---
package: matt
name: natural-language steering
slug: natural-language-steering
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# natural-language steering

## Definition — verbatim
> "- The user can tell the model to wrap up, summarise, and move on, since natural-language steering is the intended control surface, not a numeric limit." — .out-of-scope/question-limits.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/question-limits.md | 12 | defined here | Identified as the intended human control surface for managing conversational agent session length. |

## Consumes
User intent to alter, accelerate, or redirect an agent's ongoing conversational flow.

## Produces
Immediate adjustment in agent behavior, such as summarizing, concluding questioning, or shifting focus.

## When applied
Whenever an interactive session needs to conclude or change direction without requiring programmatic limits.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Natural-language steering establishes conversational dialogue as the primary mechanism for regulating agent depth, keeping control with the human operator rather than imposing rigid numeric thresholds.
