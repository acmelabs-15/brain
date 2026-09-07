---
package: rjm
name: Pre-commit
slug: pre-commit
kind: gate
package_phase: rjm:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-commit

## Definition — verbatim
(used, not defined)

> "ADR-004 chose a pre-commit entry point, ADR-086 replaced the custom scheduler" — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:36

## Also called — verbatim
pre-commit sequence — scripts/validation/check_push_lock_before_commit.py:32

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 111 | used here | Classified as the verification tier for commit discipline and documentation quality checks. |
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 36 | used here | Traced historically through ADR-004 and ADR-086 as the fast local gate tier scheduled via Lefthook. |
| scripts/validation/check_push_lock_before_commit.py | 32 | used here | Referenced as the piped local git hook sequence running push lock probes and fast linters. |

## Consumes
Staged git index, commit metadata, and changed files.

## Produces
Pass/fail verdict permitting or aborting `git commit`.

## When applied
Triggered automatically by git whenever `git commit` is invoked.

## Sub-concepts
commit-msg-hook, atomic-commits

## Part of
verification-based-enforcement

## Implementation status
defects: missing-path, cross-file-contradiction

## Design notes
Pre-commit is the first local automated quality tier in rjm's gate hierarchy. Scheduled via Lefthook, pre-commit runs fast validators (markdown lint, push lock checks, ruff) within strict latency budgets (under 5 seconds) to catch syntax errors and discipline violations before commits are recorded to git history.
