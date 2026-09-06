---
package: matt
name: regression test
slug: regression-test
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# regression test

## Definition — verbatim
> "`diagnosing-bugs` runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — docs/engineering/diagnosing-bugs.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 3 | defined here | Defined in Phase 5 of the six-phase bug diagnosis lifecycle as the automated test that locks down the defect. |
| external/diagnosing-bugs.md | 25 | used here | Summarized in external documentation as the verification gate required before declaring a bug fix complete. |
| skills/engineering/diagnosing-bugs/SKILL.md | 114 | defined here | Heading for Phase 5 instructions specifying that regression tests must be written before the fix at a correct seam. |

## Consumes
A minimised reproduction of a bug and an architectural seam that reaches the failure.

## Produces
An automated test that fails before the fix and passes once the fix is applied, preventing regression.

## When applied
During Phase 5 of bug diagnosis, after hypotheses are validated with probes and before applying the code fix.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean in skill (skills/engineering/diagnosing-bugs/SKILL.md:114 has no defects), but associated with defects in docs: other (missing human checkpoint between instrumentation and fix in docs/engineering/diagnosing-bugs.md:64)

## Design notes
An automated test written before applying a fix to lock down defect behavior. In Matt's diagnosing-bugs discipline, a regression test must only be written if a correct seam exists; if the only available seam is too shallow, writing no test and recording the architectural seam deficiency is preferred over false confidence.
