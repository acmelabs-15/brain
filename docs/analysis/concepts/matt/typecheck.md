---
package: matt
name: typecheck
slug: typecheck
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: skills/engineering/resolving-merge-conflicts/SKILL.md, sha256: 9d8114f8ef0b31f535a265fc05c364bd8cf2e2895a830040e06c22acb11f54b0}
  - {path: skills/misc/setup-pre-commit/SKILL.md, sha256: c9819d7f1e3b198064edc1faa3154224ed67395e9f07f5d3cea4b67cf0a11a98}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# typecheck

## Definition — verbatim
(used, not defined)
> "Discover the project's **automated checks** and run them, typically typecheck, then tests, then format. Fix anything the merge broke." — skills/engineering/resolving-merge-conflicts/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 47 | used here | Addressed in FAQ as a post-merge verification check that can fail if combined types make no sense across renames. |
| skills/engineering/resolving-merge-conflicts/SKILL.md | 12 | used here | Specified as an automated check to discover and execute after resolving merge hunks. |
| skills/misc/setup-pre-commit/SKILL.md | 13 | used here | Configured as a mandatory pre-commit hook script to catch type errors before committing. |

## Consumes
A code change, resolved merge, or staged files.

## Produces
Typecheck verification pass or failure diagnostics.

## When applied
Executed automatically on pre-commit hooks and required manually after resolving merge conflict hunks.

## Sub-concepts
none

## Part of
automated-checks

## Implementation status
clean (in repository skills; external documentation notes doc-drift and orphan status)

## Design notes
Typecheck acts as a static verification gate in Matt's workflow. It ensures that syntactic and architectural changes—particularly following multi-branch merge resolutions or preceding git commits—maintain type system validity before code advances to test execution or commits.
