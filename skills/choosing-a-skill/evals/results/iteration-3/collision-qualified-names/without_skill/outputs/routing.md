# Routing

## Decision

Two skills, run in this order:

1. **`code-review:code-review`** (plugin-qualified)
2. **`code-simplifier:code-simplifier`** (plugin-qualified)

Not concurrent. The second consumes the outcome of the first.

## Why this order

The request is explicitly sequenced by the user: "review this branch before I merge it" *and then* "once that's done I want the messy bits cleaned up." Review is a read-only deliverable; simplification mutates code. Running them the other way round, or together, means reviewing a diff that is being rewritten underneath the reviewer.

## Skill 1 — `code-review:code-review`

Matches on deliverable: the user wants *findings about* a branch, not edits to it. The skill's own description scopes it to "a multi-axis code review over an explicitly named scope ... returns the triaged findings" and the scope here is named — this branch, against its merge base.

The skill's negatives are all satisfied: the user is not asking to post the review to a PR, send it to a colleague, or file it into a tracker, and is not asking for a fix to be applied. That is exactly the boundary this skill draws.

### Name collision — which `code-review`

Three candidates share this territory:

| Candidate | Kind | Verdict |
|---|---|---|
| `code-review:code-review` | plugin skill | **chosen** |
| `code-review` | local skill | rejected — same lineage, but the plugin-qualified one is the fuller implementation (explicit scope resolution, per-cell planning, dedup/rank/triage, coverage reporting including unreached cells) |
| `/review` | local command | rejected — fixed five-axis checklist, no scope-resolution step; the plugin skill's axis planning subsumes it |

Because the bare name `code-review` is ambiguous between the local skill and the plugin skill, the invocation **must** be written plugin-qualified as `code-review:code-review`. Invoking the bare name risks silently getting the local variant.

Also considered and rejected:
- `code-review-and-quality` — a general guidance/vocabulary skill about review dimensions, not a skill that produces a review of a named scope.
- `skills:review` — belongs to the PLAN/SPEC/ADR lifecycle system; it is auto-invoked by `/end` as a PR gate and expects that workflow's state. No such workflow is in play here.
- `security-review` / `security-auditor` — single-axis. The multi-axis skill already dispatches a security axis; adding these duplicates it.
- `doubt-driven-development` — an adversarial-verification stance, not a branch review.

## Skill 2 — `code-simplifier:code-simplifier`

"The messy bits cleaned up" is the canonical trigger: the deliverable is the cleaned-up code itself, and behaviour must stay identical. The skill's listed in-scope work — reducing nesting, splitting long functions, removing duplication, renaming unclear local names, deleting dead code — is precisely what "messy bits" names.

Its stated exclusion is load-bearing here: **do not simplify code that is broken or whose tests fail**, because simplifying wrong behaviour preserves the wrong behaviour. This is why any *correctness* finding from pass 1 gets fixed or explicitly deferred before pass 2 runs, and is called out to the user in the reply.

### Name collision — which simplifier

| Candidate | Kind | Verdict |
|---|---|---|
| `code-simplifier:code-simplifier` | plugin skill | **chosen** |
| `code-simplification` | local skill | rejected — guidance-flavoured; the plugin skill is the one whose deliverable is the edited code, with test-verified behaviour preservation and propose-don't-edit on untested units |
| `code-simplify` / `simplify` | local commands | rejected — `simplify` is scoped to "the changed code" quality cleanups, overlapping but thinner; the plugin skill's revert-on-test-failure loop is the safety property wanted when touching a pre-merge branch |

The bare name `code-simplifier` collides between the plugin skill and the plugin's same-named subagent, and `code-simplification` / `code-simplify` / `simplify` are near-neighbours. Invoke plugin-qualified as `code-simplifier:code-simplifier`.

## Not routed

- `git-workflow-and-versioning` — the user mentions merging, but wants the branch's *contents* assessed, not branching or release conventions decided.
- `resolving-merge-conflicts` — no conflict reported.
- `debugging-and-error-recovery` / `diagnosing-bugs` — conditional. Only if pass 1 surfaces a defect whose root cause is not obvious from the finding itself.
- `test-driven-development` — conditional, same trigger: if a correctness fix is needed, it gets a failing test first.
- `interview-me` / `grilling` — the request is clear enough to act on; no clarifying interview needed.
