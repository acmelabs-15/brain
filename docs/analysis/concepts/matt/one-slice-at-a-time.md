---
package: matt
name: One slice at a time
slug: one-slice-at-a-time
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# One slice at a time

## Definition — verbatim
> "- **One slice at a time.** One seam, one test, one minimal implementation per cycle." — skills/engineering/tdd/SKILL.md:37

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/SKILL.md | 37 | defined here | Mandated discipline rule governing the pacing and scope of each TDD cycle. |

## Consumes
Pre-agreed testing seam and vertical slice definition.

## Produces
Single passing test and its corresponding minimal implementation.

## When applied
During TDD loops, restricting the developer or agent from tackling multiple tests or seams simultaneously.

## Sub-concepts
none

## Part of
red-green-loop, tdd

## Implementation status
defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 red-green-refactor contradiction)

## Design notes
Enforces strict atomicity in TDD execution: exactly one seam, one test, and one minimal implementation per cycle. This prevents agents and human developers from accumulating unverified code or over-committing to complex architectures before seeing concrete tests pass, ensuring steady, predictable progress.
