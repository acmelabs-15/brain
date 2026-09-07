---
package: matt
name: original issue
slug: original-issue
kind: artifact
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

# original issue

## Definition — verbatim
(used, not defined)

> "Before touching a hunk it traces each side back to its <strong class=\"ah-prose-strong\"><a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/primary-source\">primary source</a></strong> (the commit message, the PR, the original issue), so it is choosing between two intents rather than between two blocks of text, and it preserves both wherever they are compatible." — external/resolving-merge-conflicts.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/resolving-merge-conflicts.md | 26 | used here | Identified as a primary source artifact consulted to uncover the original intent behind a conflicting change. |

## Consumes
An issue tracker or work tracking record documenting feature requirements or defect fixes.

## Produces
Historical context and author intent required to reconcile conflicting diff hunks without dropping features.

## When applied
When investigating git merge or rebase conflicts before editing conflict hunks.

## Sub-concepts
none

## Part of
resolving-merge-conflicts

## Implementation status
defects: orphan (external/resolving-merge-conflicts.md:1), doc-drift (external/resolving-merge-conflicts.md:28), doc-drift (external/resolving-merge-conflicts.md:30)

## Design notes
The tracked issue or ticket that motivated the changes on a conflicting branch. By tracing conflict hunks back to the original issue rather than resolving conflicts purely as text diffs, an agent understands the underlying intent and avoids dropping intentional behavior.
