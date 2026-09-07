---
package: rjm
name: Self-referential tests
slug: self-referential-tests
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-failure-archaeology/SKILL.md, sha256: 6045e2128544421d2a3ee0975b4487b1213f9890c14e4adc023642bbb8355bee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Self-referential tests

## Definition — verbatim
> "BANNED for runtime contracts. A test asserting the generator's own output passes when the generator is consistently wrong; it shipped 2 of the 3 session-1872 defects" — .claude/skills/ai-agents-failure-archaeology/SKILL.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-failure-archaeology/SKILL.md | 64 | defined here | Settled Battles List entry banning tests that merely mirror generator logic or string-match its outputs. |

## Consumes
Test suites asserting against generator outputs or runtime contract shims.

## Produces
False positive test passes that disguise systemic generation bugs.

## When applied
Enforced during test design and PR review for code generation scripts.

## Sub-concepts
none

## Part of
ai-agents-failure-archaeology

## Implementation status
defects: doc-drift

## Design notes
`Self-referential tests` assert correctness by comparing a generator's output against itself or against assumptions hardcoded into the test. Because they pass whenever generator and test share the same incorrect assumption, rjm bans them for runtime contracts, requiring real-environment execution with negative controls.
