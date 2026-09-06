---
package: addy
name: Scope to What Changed
slug: scope-to-what-changed
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-simplification/SKILL.md, sha256: f0c5ed754057eb0c1e027e2587f59de816651feb5e837242296c43ea21cf621d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Scope to What Changed

## Definition — verbatim
> "Default to simplifying recently modified code. Avoid drive-by refactors of unrelated code unless explicitly asked to broaden scope." — skills/code-simplification/SKILL.md:101-103

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-simplification/SKILL.md | 101 | defined here | Fifth core principle confining refactoring activities to recently modified files to prevent diff clutter and regression risk. |

## Consumes
Recently modified files, git diff boundaries, and current task scope.

## Produces
Tightly bounded refactorings that improve the code touched by the current task without expanding the diff blast radius.

## When applied
Whenever refactoring code as part of a feature, bug fix, or targeted code review.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
A scope management discipline preventing drive-by refactorings across unrelated files, ensuring that diffs remain clean, easy to review, and focused on current task deliverables while minimizing the risk of accidental regressions.
