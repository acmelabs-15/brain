---
package: matt
name: format
slug: format
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# format

## Definition — verbatim
(used, not defined)
> "Discover the project's **automated checks** and run them, typically typecheck, then tests, then format. Fix anything the merge broke." — skills/engineering/resolving-merge-conflicts/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 47 | used here | Mentioned in FAQ as one of the post-merge automated checks that may fail if conflict resolution was imperfect. |
| skills/engineering/resolving-merge-conflicts/SKILL.md | 12 | used here | Included in the recommended sequence of automated checks run after resolving conflict hunks. |

## Consumes
Code files with updated content.

## Produces
Consistently formatted source code adhering to repository style rules.

## When applied
Run following merge hunk resolution alongside typecheck and tests.

## Sub-concepts
none

## Part of
automated-checks

## Implementation status
clean (in repository skills; external documentation notes doc-drift and orphan status)

## Design notes
Formatting in Matt's package operates as a hygiene gate in the post-merge verification sequence. Running code formatting ensures that merged code matches the repository's whitespace and style configuration, eliminating trivial formatting diffs before commits are finalized.
