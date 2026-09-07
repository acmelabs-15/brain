---
package: rjm
name: Confidence Building
slug: confidence-building
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Confidence Building

## Definition — verbatim
> "Eliminates hesitation when the model might doubt its own capabilities or access." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1090

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1088 | defined here | Defined as an empirical behavioral pattern eliminating model hesitation regarding tooling permissions or access. |

## Consumes
Environmental context declarations regarding tools, permissions, and valid paths.

## Produces
Direct, unhesitating execution without redundant permission queries or verification loops.

## When applied
When models hesitate or enter repetitive verification loops due to uncertainty regarding permissions, capabilities, or path validity.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Confidence Building eliminates model hesitation regarding permissions and tooling access by establishing explicit affirmative assumptions ("Assume you have access...", "Proceed without verification"). By pre-authorizing execution within prompt instructions, it prevents agents from halting on benign operations.
