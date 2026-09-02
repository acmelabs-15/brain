---
package: addy
path: evals/fixtures/code-review-and-quality/user-search.diff
type: file
bytes: 513
unit: inv-addy-2
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
- config `evals/cases/code-review-and-quality.json` — evals/cases/code-review-and-quality.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:394

## Concepts named — required, verbatim
- `user-search` — evals/fixtures/code-review-and-quality/user-search.diff:1 — used here
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
