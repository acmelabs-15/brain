---
package: matt
name: Red before green
slug: red-before-green
kind: gate
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

# Red before green

## Definition — verbatim
> "- **Red before green.** Write the failing test first, then only enough code to pass it. Don't anticipate future tests or add speculative features." — skills/engineering/tdd/SKILL.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/SKILL.md | 36 | defined here | Primary operational rule and execution gate of the TDD red-green loop. |

## Consumes
Feature requirement or bug report.

## Produces
Failing test case confirming expected behavior absence before implementation begins.

## When applied
At the start of every implementation cycle before authoring production code.

## Sub-concepts
none

## Part of
red-green-loop, tdd

## Implementation status
defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 red-green-refactor contradiction)

## Design notes
The fundamental gate of Matt's TDD lifecycle. Writing a genuinely failing test before authoring production code guarantees that the test is capable of detecting failure and verifying the desired capability, while preventing speculative engineering and scope creep by restricting production edits strictly to what is needed to make the test pass.
