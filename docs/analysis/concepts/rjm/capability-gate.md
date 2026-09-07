---
package: rjm
name: Capability Gate
slug: capability-gate
kind: gate
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Capability Gate

## Definition — verbatim
> "If the idea adds a new capability (Context, module, scanner, validator, pipeline component), it must pass the buy-vs-build gate BEFORE any spec work." — .claude/skills/ai-agents-research-methodology/SKILL.md:129-130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 127 | defined here \| used here | Section header and Stage 3 requirement mandating buy-vs-build evaluation before authoring specifications for new capabilities. |

## Consumes
New capability proposals, component requirements, and architectural scope descriptions.

## Produces
A go/no-go strategic verdict, Core vs. Context categorization, and total cost of ownership justification.

## When applied
During Stage 3 of the idea lifecycle prior to spec-generator execution for any new scanner, validator, or component.

## Sub-concepts
none

## Part of
idea-lifecycle

## Implementation status
defects: missing-path

## Design notes
The Capability Gate prevents premature engineering of bespoke tools by mandating strategic buy-vs-build scrutiny. By requiring a rapid Core vs. Context analysis and TCO assessment before any specification is generated, rjm ensures that contributors only build software that constitutes core repository differentiation, redirecting commodity requirements to existing external solutions.
