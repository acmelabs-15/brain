---
package: addy
name: display_name
slug: display-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/code-review-and-quality/user-search.diff, sha256: 1bc7174d5af1af50da323ba653203743c3c148b3f6c07938bd02f5139a368151}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# display_name

## Definition — verbatim
(used, not defined)
> "SELECT id, email, display_name FROM users" — evals/fixtures/code-review-and-quality/user-search.diff:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/code-review-and-quality/user-search.diff | 10 | references | Database column name selected in SQL query inside search route. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, other

## Design notes
Database column name in an evaluation fixture diff, not a lifecycle methodology concept.
