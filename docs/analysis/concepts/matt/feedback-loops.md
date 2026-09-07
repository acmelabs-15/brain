---
package: matt
name: feedback loops
slug: feedback-loops
kind: technique
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# feedback loops

## Definition — verbatim
(used, not defined)

> "The added value is the &quot;find the primary sources&quot; and &quot;run feedback loops&quot; steps, which otherwise have to be prompted by hand every time." — external/resolving-merge-conflicts.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 36 | used here | Refers to the mandatory automated verification steps (typecheck, tests, format) executed after resolving hunks. |

## Consumes
Resolved conflict diff hunks and repository automated test/typecheck scripts.

## Produces
Green verification status confirming that reconciled conflict hunks maintain build integrity and runtime contracts.

## When applied
Executed immediately after resolving conflict hunks and before staging the resolution commit.

## Sub-concepts
automated-checks, typecheck, tests, format

## Part of
resolving-merge-conflicts

## Implementation status
defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30)

## Design notes
The automated verification loops that `resolving-merge-conflicts` enforces before completing a merge or rebase commit. Because a merge is prone to producing syntactically valid code that satisfies neither parent branch's runtime behavior, running project feedback loops (typecheck, tests, and formatting) ensures regressions are caught immediately.
