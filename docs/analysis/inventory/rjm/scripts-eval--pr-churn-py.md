---
package: rjm
path: scripts/eval/_pr_churn.py
type: script
bytes: 4842
unit: inv-rjm-220
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_pr_churn.py, sha256: 027d16099d7ba9d03cbd30f7d78b433c82c8b84c715a4ae795f1547b21008f84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_pr_churn.py

## Purpose — required, verbatim
> "Deterministic commit-churn classification for PR cohort analysis." — scripts/eval/_pr_churn.py:1

## Design intent — required
Provides deterministic, regex-based classification of Git commit message headlines into prioritized churn categories (`revert`, `merge_rebase`, `ci_fix`, `lint_format`, `validation_protocol`, `review_response`, `test_fix`, `deps`, `progress`, `other`) and computes a thrash fraction (non-progress share of commits) without LLM inference spend. In degenerate high-commit pull requests, teams frequently experience process thrash (endless loops of validation, style linting, CI fixes, and review responses) rather than productive feature progress. `_pr_churn.py` implements pure classification functions tuned against empirical cohorts (reproducing the published 50% validation protocol share on 13 PRs > 60 commits) to evaluate whether instruction and prompt changes succeed in reducing process thrash. Without it, PR cohort evaluation would require non-deterministic LLM classifiers or lack reproducible metrics on where engineering effort is lost.

## Phase — required
none

## Inputs — required
- Commit message headline string (`headline`) — scripts/eval/_pr_churn.py:134
- Sequence of commit message headline strings (`headlines`) — scripts/eval/_pr_churn.py:146, 155

## Outputs — required
- Churn bucket category name string from `CHURN_BUCKETS` — scripts/eval/_pr_churn.py:131
- Frequency histogram mapping bucket names to observed headline counts — scripts/eval/_pr_churn.py:146-152
- Non-progress commit ratio (`thrash_fraction`) rounded to 3 decimal places — scripts/eval/_pr_churn.py:155-165

## Invokes — required
none

## Invoked by — required
- script _pr_churn — scripts/eval/analyze-pr-churn.py:41
- doc README.md — scripts/eval/README.md:94

## Concepts named — required, verbatim
- `_BUCKET_TOKENS` — scripts/eval/_pr_churn.py:15 — defined here
- `revert` — scripts/eval/_pr_churn.py:29 — defined here
- `merge_rebase` — scripts/eval/_pr_churn.py:31 — defined here
- `ci_fix` — scripts/eval/_pr_churn.py:43 — defined here
- `lint_format` — scripts/eval/_pr_churn.py:58 — defined here
- `validation_protocol` — scripts/eval/_pr_churn.py:73 — defined here
- `review_response` — scripts/eval/_pr_churn.py:88 — defined here
- `test_fix` — scripts/eval/_pr_churn.py:103 — defined here
- `deps` — scripts/eval/_pr_churn.py:104 — defined here
- `progress` — scripts/eval/_pr_churn.py:106 — defined here
- `CHURN_BUCKETS` — scripts/eval/_pr_churn.py:131 — defined here
- `classify` — scripts/eval/_pr_churn.py:134 — defined here
- `histogram` — scripts/eval/_pr_churn.py:146 — defined here
- `thrash_fraction` — scripts/eval/_pr_churn.py:155 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_pr_churn.py`, language: Python, lines: 166
- documented invocation: none (pure computational library module without CLI parsing; imported by `scripts/eval/analyze-pr-churn.py:41`)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/eval/_pr_churn.py`, stdout: (empty), **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: library module without `sys.exit()` or `exit()` calls; exits 0 upon direct module execution
- for validators/gates: not a validator or gate; returns category classifications and numerical thrash ratios; running module directly exits 0
- does the output match what the documentation claims? yes, loads cleanly and executes without error

## Defects — required
none

## Observations
- Priority-ordered alternation rules: earlier buckets take precedence (`revert` > `merge_rebase` > `ci_fix` > `lint_format` > `validation_protocol` > `review_response` > `test_fix` > `deps` > `progress` > `other`), ensuring merge or revert commits are not misclassified under subsequent keyword matches (scripts/eval/_pr_churn.py:25-27, 140-142).
- Empirically calibrated against historical project data: bucket categories and regex alternation ordering were tuned against 13 high-churn PRs (>60 commits) in `rjmurillo/ai-agents`, reproducing the published 50% validation protocol thrash share (scripts/eval/_pr_churn.py:14-17).
- Bounded metric range: `thrash_fraction` returns 0.0 for empty inputs and is rounded to 3 decimal places, providing a stable 0.0–1.0 index of non-progress overhead (scripts/eval/_pr_churn.py:155-165).

## Context cost
4842 bytes. Approximately 1210 tokens.
