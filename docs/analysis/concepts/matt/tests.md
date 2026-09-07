---
package: matt
name: tests
slug: tests
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tests

## Definition — verbatim
(used, not defined)
> "Discover the project's **automated checks** and run them, typically typecheck, then tests, then format. Fix anything the merge broke." — skills/engineering/resolving-merge-conflicts/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 47 | used here | Cited in FAQ where post-merge test suite failures route the user to diagnosing-bugs. |
| skills/engineering/resolving-merge-conflicts/SKILL.md | 12 | used here | Specified as a standard automated check to discover and run after conflict hunk resolution. |
| skills/misc/README.md | 8 | used here | Listed in README as one of the automated validation suites configured by setup-pre-commit. |

## Consumes
Test suite files and code modifications.

## Produces
Test execution results, verifying behavioral contracts pass.

## When applied
Run as automated checks following merge conflict resolution and configured on pre-commit hooks.

## Sub-concepts
none

## Part of
automated-checks

## Implementation status
clean (in repository skills; external documentation notes doc-drift and orphan status)

## Design notes
Tests serve as an automated verification gate in Matt's development cycle. Rather than serving as an abstract metric, running tests provides immediate feedback on functional regressions during merge conflict resolution and prevents broken behaviors from entering version control.
