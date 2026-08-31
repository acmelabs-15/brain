# Routing

## Order

1. **`code-review`** (local skill) — the branch review, scoped to the merge-base.
2. **`code-simplifier:code-simplifier`** (plugin skill/agent) — the cleanup, conditional on what step 1 returns.

## Why these, and not their near-namesakes

The request contains two asks that each sit on a documented name collision. Both had to be resolved by naming the full, qualified candidates rather than reaching for a bare name.

### "Review this branch" → local `code-review`

Candidates:

- `code-review` — local, Lineage B. Two axes (Standards + Spec), parallel sub-agents, Fowler smell baseline, reviews changes since a fixed point (commit, branch, tag, merge-base).
- `code-review:code-review` — plugin. Multi-axis cell-based review; plans one row per review cell across discovered review units; needs the `/code-review` command.
- `code-review-and-quality` — local, Lineage A. A same-lineage neighbour, and a trap: comparing only against it resolves an easier question than the actual fork and never notices the plugin candidate exists.
- `code-review:reviewer` — the plugin's internal sub-agent, not the plugin skill. Meeting it means being in the right namespace but not yet at the skill.

Pick: **local `code-review`**. The routing table is explicit — local for a branch diff against a spec, plugin for a heavyweight repo-wide sweep. This is a branch about to merge, i.e. a diff against a fixed point, which is exactly the local skill's stated scope.

Also considered and rejected: `/review` (the Lineage A lifecycle command, five-axis, thin entry point) and `/ship` (fans out to the `code-reviewer`, `security-auditor`, `test-engineer` personas and merges into a GO/NO-GO). `/ship` is pre-launch ceremony; the user asked to review before merging, not to decide whether to deploy. `security-review` is a narrower slice not asked for.

### "Clean up the messy bits" → `code-simplifier:code-simplifier`

Candidates:

- `code-simplification` — local, Lineage A, a 331-line reference. Advises only.
- `code-simplifier:code-simplifier` — plugin agent. Runs the project's tests between each individual edit, reverts anything that breaks, and proposes rather than edits where a unit has no coverage.
- `/code-simplify` — the local lifecycle command, which the routing notes say **already routes to the plugin**. So invoking it reaches the same destination; naming the plugin skill directly is clearer about what will actually run.

Pick: **`code-simplifier:code-simplifier`**. The deliverable is edited code, not advice, and the plugin verifies while the local skill only advises. The near-identical names (`code-simplification` vs `code-simplifier:code-simplifier`) are the whole reason this needed disambiguating in writing.

## Why this order, and why the second step is conditional

The user gave the order ("once that's done"), and it happens to be the correct one independently:

- Simplification preserves behaviour. Run before the review, it would tidy around any wrong behaviour and make it harder to see. The `code-simplifier` skill itself says not to run on code whose behaviour is wrong.
- The review is what tells us which bits are messy by accident (candidates for simplification) versus messy on purpose (a seam earning its keep).
- Correctness findings from the review are **fixes**, not simplifications. They get handled on their own path — `test-driven-development` for a contained one, `diagnosing-bugs` if something is broken and the cause isn't known. They do not get folded into the cleanup pass.

So step 2 is stated as conditional in the reply rather than as a second commitment. One skill plus "what comes next depends on what this shows" is the plan; a numbered list of both as equal commitments would be two promises where the second one's shape isn't known yet.

## Ceremony deliberately skipped

No interview, no spec, no ticket breakdown. The user has a finished branch and a clear two-step ask; `grilling` → `to-spec` → `to-tickets` is for a feature whose spec is unclear. Skipping is a normal decision here, not a violation.

## Stated unknown

Whether the branch's test suite is green. `code-simplifier:code-simplifier` verifies behaviour preservation by running tests between edits, so a red suite blocks the second step. Surfaced in the reply rather than assumed.
