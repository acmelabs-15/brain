---
package: rjm
name: Biasing Headers
slug: biasing-headers
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

# Biasing Headers

## Definition — verbatim
> "### Biasing Headers (~80 tokens)" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:30
> "Written as preferences, not mandates. Shape tone without procedural theater." — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 30 | defined here | Defined as concise preference blocks (~80 tokens) that shape model priorities without procedural overhead. |

## Consumes
Desired operational priorities, behavioral biases, and verification preferences.

## Produces
A compact header block establishing default behaviors (factuality, admitting uncertainty, staying in scope).

## When applied
At the top of system prompts to set foundational behavioral tone without rigid procedural rules.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Biasing Headers replace brittle procedural mandates with lightweight preference directives (~80 tokens). By stating biases (such as defaulting to strict facts and asking clarifying questions) as operational preferences rather than pseudo-legal laws, they guide model behavior consistently without wasting tokens on procedural theater.
