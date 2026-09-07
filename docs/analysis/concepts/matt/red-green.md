---
package: matt
name: Red-green
slug: red-green
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Red-green

## Definition — verbatim
> "**Red-green.** Write the failing test, then only enough code to pass it. No anticipating the test after next. There is no refactor phase: it was dropped in June 2026 because agents essentially never performed it, and because review and implementation work better as separate sessions." — docs/engineering/tdd.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/tdd.md | 31 | defined here | Defines the truncated two-stage loop (red then green) with refactor moved to code-review. |
| external/tdd.md | 36 | defined here | External documentation section defining the red-green discipline. |

## Consumes
A single behavioral slice with confirmed public seams and test criteria.

## Produces
One failing test followed by the minimal production code needed to make it pass.

## When applied
During each vertical slice iteration of test-driven development.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: doc-drift (docs/engineering/tdd.md:51 where the skill description still promises "red-green-refactor" while the execution loop has been streamlined to red-green)

## Design notes
`Red-green` is Matt's streamlined adaptation of classical test-driven development for AI coding agents. Observing that agents routinely fail to execute nuanced refactorings in the middle of implementation, Matt's lifecycle explicitly decouples the red-green authoring loop from refactoring. Developers and agents write a failing test and just enough code to satisfy it, deferring code cleanup and architectural refactoring to a dedicated `code-review` session.
