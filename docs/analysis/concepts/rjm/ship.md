---
package: rjm
name: /ship
slug: ship
kind: phase
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/getting-started.md, sha256: 1ee78be702025c56a7806ece0ca99ba2821047890152daebcc00899a99a86ad3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /ship

## Definition — verbatim
> "| 7 | Ship | `/ship` | Pre-flight checks (pipeline, security, review, tests, standards) then PR creation | Ship report plus PR link | After `/review` has no unresolved Critical findings |" — docs/getting-started.md:79

## Also called — verbatim
> "Ship to production" — README.md:321

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/SKILL.md | 63 | used here | Cites `/ship` as the downstream command requiring a valid SHA-bound review marker. |
| docs/getting-started.md | 79 | defined here | Defines Phase 7 Ship running pre-flight checks and PR creation. |
| README.md | 306 | defined here | Lifecycle diagram displaying SHIP as final delivery phase. |
| README.md | 311 | defined here | Lifecycle command mapping table executing pre-flight checks, PR creation, and ship report. |

## Consumes
Reviewed tip commit with valid `Reviewed-By` trailer from `/review`, passing automated test suites, and clean pre-flight verification.

## Produces
Pre-flight verification report, GitHub pull request creation, and ship summary report.

## When applied
> "After `/review` has no unresolved Critical findings" — docs/getting-started.md:79

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
defects: missing-path, doc-drift

## Design notes
`/ship` represents the terminal release phase in rjm's seven-phase development lifecycle. It validates that all preceding phases completed cleanly—requiring passing unit/functional tests from `/test` and an uncompromised, SHA-bound `Reviewed-By` marker from `/review`—before executing pre-flight checks and automating pull request creation or release deployment.
