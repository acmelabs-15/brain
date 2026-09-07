---
package: matt
name: Pre-agreed seams
slug: pre-agreed-seams
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-agreed seams

## Definition — verbatim
> "**Test only at pre-agreed seams.** Before writing any test, write down the seams under test and confirm them with the user. No test is written at an unconfirmed seam. You can't test everything, so agreeing the seams up front is how testing effort lands on the critical paths and complex logic instead of every edge case." — skills/engineering/tdd/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/implement.md | 45 | used here | Section heading and core concept explaining that tests verify behavior at pre-agreed public boundaries. |
| skills/engineering/tdd/SKILL.md | 22 | defined here | Normative rule requiring developers and agents to agree on seams with the user before writing tests. |

## Consumes
Architectural seams and explicit user confirmation of testing boundaries.

## Produces
Confirmed testing boundaries ensuring tests verify observable behavior rather than internal implementations.

## When applied
"Before writing any test, write down the seams under test and confirm them with the user. No test is written at an unconfirmed seam." — skills/engineering/tdd/SKILL.md:22

## Sub-concepts
seam

## Part of
tdd, implement

## Implementation status
defects: other (external/implement.md:47 notes that nothing inside implement agrees the seams and tdd refuses to write tests at unconfirmed seams, creating a fragile precondition), internal-contradiction (skills/engineering/tdd/SKILL.md:38 excludes refactoring from the loop while frontmatter triggers on red-green-refactor)

## Design notes
Testing discipline requiring explicit agreement on public interface boundaries before writing tests. Agreeing on seams up front focuses testing effort on critical paths and prevents tests from coupling to volatile internal mechanics, keeping them durable when code is refactored.
