---
package: matt
name: red-capable
slug: red-capable
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# red-capable

## Definition — verbatim
> "Phase 1 is done when the loop is **tight** and **red-capable**" — skills/engineering/diagnosing-bugs/SKILL.md:59

> "- [ ] **Red-capable**: it drives the actual bug code path and asserts the **user's exact symptom**, so it can go red on this bug and green once fixed." — skills/engineering/diagnosing-bugs/SKILL.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/SKILL.md | 59 | defined here | Defined as an essential completion criterion for Phase 1 feedback loops. |

## Consumes
A reproduction command or test exercising the suspected bug path.

## Produces
A pass/fail signal that is definitively red on the existing defect and capable of turning green when resolved.

## When applied
At the completion of Phase 1 of diagnosing bugs before proceeding to hypothesis generation.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
A mandatory gate property of a feedback loop requiring that the command specifically triggers and catches the user's reported bug symptom, ensuring the loop goes red on the defect and green upon fix rather than merely running without errors.
