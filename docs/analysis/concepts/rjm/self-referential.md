---
package: rjm
name: self-referential
slug: self-referential
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md, sha256: acb5f3ee40425bd518402bdbbfb3b658c032fc607fc43f6d99199974871f1a6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# self-referential

## Definition — verbatim
> "1. Ban the self-referential form: a test that asserts the generator emits the string the test author copied FROM the generator passes when the generator is consistently wrong." — .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-empirical-probe-toolkit/SKILL.md | 146 | defines | Step 1 of Recipe 6 banning tests that assert generators emit strings copied directly from generator implementations. |

## Consumes
Unit tests and contract validation assertions for generator functions.

## Produces
Circular validation loops where errors in implementations are mirrored in tests.

## When applied
Identified and banned during test authoring, code review, and quality audits.

## Sub-concepts
self-referential-test

## Part of
empirical-probe-toolkit

## Implementation status
defects: missing-path

## Design notes
A banned testing pattern wherein a test author validates output by asserting identity with a string copied directly from the generator under test. This creates a closed tautological loop that succeeds whenever the generator is internally consistent, even if its output completely violates external runtime specifications.
