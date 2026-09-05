---
package: addy
path: evals/fixtures/code-review-and-quality/user-search.diff
type: file
bytes: 513
unit: inv-addy-8
aliases: []
verified: 2026-09-04 quote-check+coverage
memo_inputs:
  - {path: evals/fixtures/code-review-and-quality/user-search.diff, sha256: 1bc7174d5af1af50da323ba653203743c3c148b3f6c07938bd02f5139a368151}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# evals/fixtures/code-review-and-quality/user-search.diff

## Purpose — required, verbatim
> "diff --git a/src/routes/users.js b/src/routes/users.js" — evals/fixtures/code-review-and-quality/user-search.diff:1
(no explicit purpose statement)

## Design intent — required
Provides a git diff fixture representing a proposed change for evaluating the `code-review-and-quality` skill. The diff introduces a `/users/search` endpoint containing several deliberate vulnerabilities and anti-patterns — notably SQL injection, lack of authentication middleware, and unguarded property access — allowing benchmark evaluation of whether a code review agent identifies multi-axis flaws and leads with high-severity security findings.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan (mounted by evaluation harness for `code-review-and-quality` via `evals/cases/code-review-and-quality.json:35`)

## Concepts named — required, verbatim
- `requireAuth` — evals/fixtures/code-review-and-quality/user-search.diff:6 — used here
- `users/search` — evals/fixtures/code-review-and-quality/user-search.diff:7 — defined here
- `audit.log` — evals/fixtures/code-review-and-quality/user-search.diff:12 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The diff contains deliberate security and reliability flaws: line 10 introduces SQL injection through unescaped query concatenation, line 7 lacks the `requireAuth` middleware used by the adjacent route on line 6, and line 12 accesses `req.user.email` which will throw a TypeError if `req.user` is undefined on the unauthenticated route.

## Context cost
513 bytes, ~128 tokens.
