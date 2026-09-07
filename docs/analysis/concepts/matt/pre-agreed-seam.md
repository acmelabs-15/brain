---
package: matt
name: Pre-agreed seam
slug: pre-agreed-seam
kind: gate
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

# Pre-agreed seam

## Definition — verbatim
> "A seam is the public boundary you observe behaviour at without reaching inside. The rule is absolute: no test at an unconfirmed seam." — docs/engineering/tdd.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/tdd.md | 35 | defined here | Defines the pre-agreed seam rule requiring confirmation before writing any test. |
| external/tdd.md | 38 | defined here | External documentation detailing the absolute rule requiring agreement on test boundaries. |

## Consumes
Candidate architectural boundaries identified during `to-spec` or proposed during standalone `tdd` invocations.

## Produces
Confirmed public interfaces where tests are permitted to observe behavior without introspecting implementation internals.

## When applied
Enforced as a hard gate prior to writing any automated test in `tdd`; checked retrospectively in `code-review`.

## Sub-concepts
none

## Part of
tdd

## Implementation status
defects: doc-drift (docs/engineering/tdd.md:55 / issue #607 where interactive prompts list seams by label name only without explaining diagnostic tradeoffs)

## Design notes
`Pre-agreed seam` is an essential quality gate in Matt's development lifecycle. Testing effort is finite, and without pre-agreed seams coding agents tend to test shallow internal functions or private variables. By enforcing an absolute rule that no test may be authored without prior human confirmation of the architectural boundary, the system ensures that tests focus exclusively on critical public interfaces that survive internal refactoring.
