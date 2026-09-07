---
package: rjm
name: scaffold a weaker model up
slug: scaffold-a-weaker-model-up
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scaffold a weaker model up

## Definition — verbatim
> "The guardrails in this repository are written to **constrain that capability down**, not to **scaffold a weaker model up**." — .agents/governance/agent-design-principles.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 13 | defined here | Contrasted as the expensive, avoided approach of adding decomposition, worked examples, and step-by-step checks for weaker models. |

## Consumes
none

## Produces
none

## When applied
Explicitly avoided in rjm's prompt architecture; rejected when submitted as default instructions.

## Sub-concepts
none

## Part of
frontier-model-execution

## Implementation status
defects: other

## Design notes
A contrasting design technique that rjm deliberately rejects for default agent prompts. Scaffolding weaker models requires voluminous decomposition and defensive checks that degrade frontier model performance and bloat context windows.
