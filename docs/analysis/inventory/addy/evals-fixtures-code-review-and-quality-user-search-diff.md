---
package: addy
path: evals/fixtures/code-review-and-quality/user-search.diff
type: file
bytes: 513
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/code-review-and-quality/user-search.diff, sha256: 1bc7174d5af1af50da323ba653203743c3c148b3f6c07938bd02f5139a368151}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/code-review-and-quality/user-search.diff

## Purpose — required, verbatim
> "router.get('/users/search', async (req, res) => {" — evals/fixtures/code-review-and-quality/user-search.diff:7 (no explicit purpose statement)

## Design intent — required
Provides a git diff containing a newly introduced user search HTTP endpoint (`GET /users/search`) with multiple intentional security, correctness, and architectural defects: raw SQL injection vulnerability via string interpolation (`LIKE '%${query}%'`), missing authentication middleware (`requireAuth` present on sibling route but missing on `/users/search`), potential crash/undefined access when logging unauthenticated `req.user.email`, lack of pagination, and lack of try/catch error handling. Used to evaluate whether an agent performs multi-axis code review with proper severity ratings.

## Phase — required
none

## Inputs — required
- Diff against `src/routes/users.js` — `evals/fixtures/code-review-and-quality/user-search.diff:1-16`

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `/users/search` — evals/fixtures/code-review-and-quality/user-search.diff:7 — defined here
- `requireAuth` — evals/fixtures/code-review-and-quality/user-search.diff:6 — used here
- `router.get` — evals/fixtures/code-review-and-quality/user-search.diff:6 — used here
- `db.query` — evals/fixtures/code-review-and-quality/user-search.diff:9 — used here
- `audit.log` — evals/fixtures/code-review-and-quality/user-search.diff:12 — used here

## Structure
- Unified diff header (lines 1-5)
- Context and added route hunk (lines 6-14)
- Module export context (line 16)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains multiple layered flaws: Critical SQL injection vulnerability, Major missing auth gate, Moderate runtime TypeError crash on `req.user.email`, Minor unbounded query without pagination.

## Context cost
513 bytes (approx. 128 tokens).
