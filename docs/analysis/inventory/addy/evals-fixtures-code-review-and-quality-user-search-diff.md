---
package: addy
path: evals/fixtures/code-review-and-quality/user-search.diff
type: file
bytes: 513
unit: inv-addy-8
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/code-review-and-quality/user-search.diff, sha256: 1bc7174d5af1af50da323ba653203743c3c148b3f6c07938bd02f5139a368151}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/code-review-and-quality/user-search.diff

## Purpose — required, verbatim
> "router.get('/users/search', async (req, res) => {" — evals/fixtures/code-review-and-quality/user-search.diff:7
(no explicit purpose statement)

## Design intent — required
Provides a git diff test fixture for evaluating the `code-review-and-quality` skill. The diff adds a `/users/search` HTTP route containing intentional high-severity vulnerabilities: raw string interpolation into a SQL query (SQL injection), missing authentication middleware (`requireAuth`) leading to null pointer dereference on `req.user.email`, and unpaginated database queries. This tests whether an agent generates structured, multi-axis review feedback with severity labels and exact line citations.

## Phase — required
addy:Review

## Inputs — required
Read by the model during evaluation of `code-review-and-quality` (eval id 1).

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `/users/search` — evals/fixtures/code-review-and-quality/user-search.diff:7 — defined here
- `requireAuth` — evals/fixtures/code-review-and-quality/user-search.diff:6 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other: evals/fixtures/code-review-and-quality/user-search.diff:10 — Intentional SQL injection and missing authentication defects planted in test fixture for evaluation purposes.

## Observations
Concise 17-line unified diff containing critical security, error-handling, and scalability flaws suitable for evaluating code review capabilities.

## Context cost
513 bytes (~128 tokens). Loads no external files directly.
