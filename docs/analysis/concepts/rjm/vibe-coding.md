---
package: rjm
name: Vibe Coding
slug: vibe-coding
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
  - {path: .claude/skills/programming-advisor/references/token-estimates.md, sha256: 96553695fca4e95210b4891b11a1a8b3062a1c4ba27ef63f8d2fb02aa903671a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Vibe Coding

## Definition — verbatim
(used, not defined)

> "Vibe coding burns tokens, time, and creates maintenance burden." — .claude/skills/programming-advisor/SKILL.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/token-estimates.md | 93 | used here | Section heading identifying high token burn indicators and red flags where vibe coding becomes inefficient. |
| .claude/skills/programming-advisor/SKILL.md | 25 | defined here | Core philosophy statement establishing that unvetted vibe coding consumes tokens, time, and creates long-term maintenance overhead. |

## Consumes
User requirements, prompt instructions, and LLM context.

## Produces
Generated custom implementation code, tests, and documentation.

## When applied
Applied when custom development proceeds via iterative LLM generation rather than adopting existing internal or external packages.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Vibe coding represents rapid, iterative custom code generation driven by conversational LLM prompting. Within the `programming-advisor` workflow, it serves as the default developer impulse that the skill seeks to evaluate, estimate, and temper by contrasting token burn and maintenance liability against vetted off-the-shelf alternatives.
