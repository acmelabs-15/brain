---
package: addy
path: evals/fixtures/code-review-and-quality/user-search.diff
type: file
bytes: 513
unit: inv-addy-8
aliases: []
memo_inputs:
  - {path: evals/fixtures/code-review-and-quality/user-search.diff, sha256: 1bc7174d5af1af50da323ba653203743c3c148b3f6c07938bd02f5139a368151}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# evals/fixtures/code-review-and-quality/user-search.diff

## Purpose — required, verbatim
> "diff --git a/src/routes/users.js b/src/routes/users.js" — evals/fixtures/code-review-and-quality/user-search.diff:1

(no explicit purpose statement)

## Design intent — required
Unified diff fixture adding a `/users/search` endpoint to an Express-like router. Serves as the target diff for eval #1 of `code-review-and-quality` (`evals/cases/code-review-and-quality.json`). Intentionally embeds multiple critical defects across several review axes (critical SQL injection vulnerability via string concatenation, missing authentication middleware leading to unhandled null reference on `req.user.email`, and route ordering shadowing). Tests whether an agent delivers a structured, multi-axis review with severity ratings that prioritizes security and correctness risks over stylistic nitpicks.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
"code-review-and-quality" — evals/cases/code-review-and-quality.json:35

## Concepts named — required, verbatim
- `requireAuth` — evals/fixtures/code-review-and-quality/user-search.diff:6 — used here
- `/users/search` — evals/fixtures/code-review-and-quality/user-search.diff:7 — defined here
- `display_name` — evals/fixtures/code-review-and-quality/user-search.diff:10 — used here

## Structure
- Diff header: `diff --git a/src/routes/users.js b/src/routes/users.js` — evals/fixtures/code-review-and-quality/user-search.diff:1-4
- Diff hunk: `@@ -1,3 +1,15 @@` — evals/fixtures/code-review-and-quality/user-search.diff:5

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · line 5: hunk line count is mathematically inconsistent; header declares `@@ -1,3 +1,15 @@` (15 lines in post-image), but the hunk contains only 11 lines (3 context + 8 added), causing `git apply --check` to fail with `error: corrupt patch at line 17`.
- `other` · line 10: contains critical SQL injection vulnerability via unsanitized query interpolation in SQL string (intentional test defect for review eval).
- `other` · line 7, 12: omits `requireAuth` authentication middleware on `/users/search`, causing `req.user.email` access to throw a TypeError on unauthenticated requests (intentional test defect for review eval).

## Observations
Designed as a realistic multi-flaw code review challenge testing whether reviewers identify security flaws (SQLi), authentication omissions, and error handling rather than focusing solely on formatting.

## Context cost
513 bytes, ~120 tokens.
