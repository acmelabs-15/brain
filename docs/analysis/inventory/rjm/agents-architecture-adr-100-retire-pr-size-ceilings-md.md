---
package: rjm
path: .agents/architecture/ADR-100-retire-pr-size-ceilings.md
type: agent
bytes: 89866
unit: inv-rjm-45
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-100-retire-pr-size-ceilings.md, sha256: 81df930e55b02d1caf5b20ddedf993d13a37bac74ae01cb2f18414852d9545a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-100-retire-pr-size-ceilings.md

## Purpose — required, verbatim
> "Retire both size ceilings as blocking gates. Do not replace them with another blocking size gate." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:237

## Design intent — required
Addresses the pathological frictions, throughput throttling, and unintended behavioral distortions caused by rigid pull request size ceilings (`_check_commit_limit` in local pre-push `scripts/validation/git_hook_policy.py` and in CI `scripts/validation/pr_commit_count.py`/`scripts/ci/enforce_pr_validation.py`, plus the five-file atomic commit cap `check_atomic_commit` and scope explosion check `scripts/detect_scope_explosion.py`). In high-volume, agent-driven repositories, arbitrary commit and file ceilings penalize multi-commit rigor (such as granular fix-plus-rebind review iterations and wide mechanical refactorings) while failing to stop actual regressions, forcing destructive workarounds like branch squashing that permanently destroys citable review provenance, artificial base merges, and self-service bypass abuse. By demoting commit count, atomic commit, and scope explosion gates from blocking enforcement to advisory reporting (while removing the self-attested `SKIP_SCOPE_CHECK` flag and fixing upstream merge-diff rebind churn in `post_qa_code_changes`), the architecture preserves reviewer visibility and telemetry without gating throughput on human label exceptions or trapping agents between contradictory size gates.

## Phase — required
cross-phase

## Inputs — required
- "`scripts/validation/git_hook_policy.py` caps authored files per commit at five, with no bypass of any kind." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:26
- "The rationale on record is `.agents/governance/PROJECT-CONSTRAINTS.md:125`, which cites one 2026-01 incident, PR #908: 59 commits, review slow and merge risky." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:44
- "The session stopped and asked the operator through `AskUserQuestion` which repair to take" — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:124
- "`.claude/rules/ci-scripts.md` MUST-14 already documents stale-ref inflation for the count ratchets and states that a ref fetched earlier in the same session should be treated as stale." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:157
- "`scripts/detect_scope_explosion.py:50` sets `BLOCK_THRESHOLD = 50` and the script returns 1 above it, so the scope check blocks today." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:251
- "The component is `post_qa_code_changes` in `.claude/lib/qa_report.py:244-253`." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:261

## Outputs — required
- "Retire both size ceilings as blocking gates. Do not replace them with another blocking size gate." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:237
- "The CI block is therefore `scripts/ci/enforce_pr_validation.py:64-84`, which reads `COMMIT_STATUS`, fetches the pull request's labels, and returns `LOGIC_ERROR` unless `commit-limit-bypass` is present." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:241
- "The `commit-limit-bypass` label and its human step retire with both." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:247
- "**`check_atomic_commit` stops blocking.** The five-file guidance stays as advisory output." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:249
- "**`SKIP_SCOPE_CHECK` is removed, after item 3 lands.**" — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:257
- "**Record push-ceiling telemetry at demotion time.** When `_check_commit_limit` is demoted under item 1, have it emit what it would have blocked: branch, total and authored counts, the effective limit, which relief applied, and whether a relief check failed to evaluate." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:287
- "File a follow-up issue titled \"Re-measure the retired size ceilings\" at the same time the implementation pull request merges, due 90 days after that merge." — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:397

## Invokes — required
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:26
- script scripts/validation/pr_commit_count.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:26
- script scripts/ci/enforce_pr_validation.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:26
- doc CONTRIBUTING.md — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:26
- doc .agents/governance/PROJECT-CONSTRAINTS.md — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:44
- script scripts/ci/ruleset_required_contexts.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:110
- script scripts/detect_scope_explosion.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:153
- file .claude/rules/ci-scripts.md — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:157
- file .claude/rules/universal.md — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:188
- script scripts/validation/check_pr_bypass_label.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:199
- file .claude/rules/generated-artifacts.md — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:261
- file .claude/lib/qa_report.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:261
- script build/scripts/build_all.py — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:261
- doc .agents/governance/GOTCHAS.md — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:361
- config lefthook.yml — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:374
- file .claude/rules/governance.md — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:381
- doc ADR-086 — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:429
- doc ADR-101 — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:430

## Invoked by — required
- doc ADR-100 — .agents/architecture/README.md:187
- doc ADR-100 — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:258
- doc ADR-100 — .agents/critique/ADR-099-debate-log.md:147
- doc ADR-100 — .agents/critique/ADR-100-101-enforcement-planes-debate-log.md:1

## Concepts named — required, verbatim
`commit-limit-bypass` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:26 — used here
`_check_commit_limit` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:26 — used here
`needs-split` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:28 — used here
`resolve_push_update` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:28 — used here
`_merge_base` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:28 — used here
`range_spec` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:28 — used here
`contains_main_merge` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:122 — used here
`MAIN_MERGE_BLOCK_THRESHOLD` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:123 — used here
`AskUserQuestion` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:124 — used here
`SKIP_SCOPE_CHECK` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:155 — used here
`push-ref-policy` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:165 — used here
`_unpushed_commit_count` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:193 — used here
`COMMIT_STATUS` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:241 — used here
`LOGIC_ERROR` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:241 — used here
`OVERALL_STATUS` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:243 — used here
`check_atomic_commit` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:249 — used here
`BLOCK_THRESHOLD` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:251 — used here
`_partition_generated` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:251 — used here
`post_qa_code_changes` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:261 — used here
`push-ceiling telemetry` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:287 — defined here
`Re-measure the retired size ceilings` — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:397 — defined here

## Structure
# ADR-100: Retire the Pull Request Size Ceilings — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:12
## Status — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:14
## Date — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:18
## Context — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:22
### What the gate actually fires on — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:46
### The closed-unmerged population, enumerated — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:60
### The open population, enumerated — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:84
### What actually stopped the bad one — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:108
### What the ceiling actually caused, recovered from in-tree records — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:114
### The cost — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:143
### A false positive measured while writing this — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:149
### The ceiling blocked this decision, measured while writing it — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:161
## Decision — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:235
### What is deliberately not adopted — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:299
## Prior Art Investigation — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:311
### What currently exists — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:313
### Historical rationale — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:319
### Why change now — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:323
## Rationale — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:329
### Alternatives considered — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:331
### Trade-offs — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:346
## Consequences — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:350
### Positive — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:352
### Negative — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:358
### Neutral — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:364
## Impact on Dependent Components — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:368
## Implementation Notes — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:385
### Time-box and re-measure — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:391
### Follow-up, not part of this decision — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:422
## Related Decisions — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:427
## References — .agents/architecture/ADR-100-retire-pr-size-ceilings.md:432

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · `scripts/validation/check_pr_bypass_label.py` at `.agents/architecture/ADR-100-retire-pr-size-ceilings.md:199`: helper script referenced by ADR-100 does not exist on disk (deleted in session 99928 when ADR-099 was implemented).
- `doc-drift` · `scripts/ci/enforce_pr_validation.py:64-84` at `.agents/architecture/ADR-100-retire-pr-size-ceilings.md:26`: cites lines 64-84 for the CI commit limit block, but `enforce_pr_validation.py` currently has only 44 lines total because ADR-099 previously stripped out that blocking logic.
- `doc-drift` · `_check_commit_limit` in `scripts/validation/git_hook_policy.py:6122-6162` at `.agents/architecture/ADR-100-retire-pr-size-ceilings.md:245`: cited as an active blocking pre-push gate, but `_check_commit_limit` has moved to line 6716 and was already converted to advisory-only via ADR-099.
- `doc-drift` · `scripts/validation/git_hook_policy.py` at `.agents/architecture/ADR-100-retire-pr-size-ceilings.md:28`: line numbers `:5604`, `:5620`, and `:6123` have drifted due to subsequent code changes in the repository.
- `cross-file-contradiction` · `.agents/architecture/ADR-100-retire-pr-size-ceilings.md:3`: ADR-100 remains in `status: proposed` and `implemented: false`, but partially overlaps with accepted and implemented `ADR-099-remove-commit-limit-bypass-gate.md` which already retired the commit ceiling blocks in both `git_hook_policy.py` and `enforce_pr_validation.py` without implementing ADR-100's atomic commit retirement, scope threshold demotion, telemetry, or `post_qa_code_changes` rebind fix.

## Observations
- Documents in detail how size ceilings (both commit count and atomic file limits) incentivize destructive workarounds in agentic software engineering workflows, including git history squashing that destroys citable review provenance (11 review SHAs destroyed in PR #5178), unnecessary merges from trunk solely to reset threshold ceilings, and author hesitation to fix review findings.
- Documents the fatal failure mode of sandbox permissions when gates require external API checks: `check_pr_bypass_label.py` shelled out to `gh`, which failed with 403 in sandboxed sessions, causing the gate to fail closed and treat an unreachable check as relief-withheld, completely disregarding maintainer-approved labels.
- Analyzes git diff-merges semantics for post-QA binding invalidation (`-m` vs `-c` vs merge-base comparisons), proving that `-m` causes severe evidence rebind churn on clean trunk merges while `-c` combined with merge-base deltas cleanly isolates genuine code changes.
- Contains an extensive falsification plan (§Time-box and re-measure) requiring a 90-day post-merge re-measurement of PRs using separate counterfactual replays for each of the three retired gates.

## Context cost
89866 bytes (~22,500 tokens). Total referenced context across invoked scripts, rules, and governance documents exceeds 570,000 bytes (~142,500 tokens).
