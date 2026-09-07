---
package: rjm
name: fetched_pages_complete
slug: fetched-pages-complete
kind: artifact
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fetched_pages_complete

## Definition — verbatim
> "Make `fetched_pages_complete` a Published Language across verifiers." — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 57 | defined here | Establishes a standard boolean indicator across verifiers confirming all paginated results were retrieved |

## Consumes
GitHub API pagination responses across review threads, comments, and check runs.

## Produces
Standardized boolean status field in verifier JSON outputs indicating complete pagination.

## When applied
Checked by PR review completion gate criteria to verify that gate evaluations are based on complete, untruncated datasets.

## Sub-concepts
none

## Part of
published-language

## Implementation status
defects: missing-path, other

## Design notes
fetched_pages_complete is a standardized boolean field in verifier command outputs that certifies whether all pages of a paginated API response were successfully fetched. In rjm's PR review gate, this field prevents "pagination cliff" false-positives where an agent mistakenly approves a PR with 0 unresolved threads simply because remaining threads were on subsequent pages.
