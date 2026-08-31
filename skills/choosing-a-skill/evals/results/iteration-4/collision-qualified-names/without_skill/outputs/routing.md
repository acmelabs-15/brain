# Routing

## Summary

Two skills, run in sequence, not in parallel:

1. **`code-review`** (local, unqualified name) — review the branch.
2. **`code-simplifier:code-simplifier`** (plugin, qualified name) — clean up the messy bits, *after* review is done and the user has looked at it.

## Why these, and why the qualified names matter

Both halves of the request land on a **name collision**, so naming the skill loosely ("the review skill", "the simplify skill") would be ambiguous. Each had to be disambiguated deliberately.

### Collision 1 — "review this branch"

Candidates whose descriptions match:

| Candidate | Declared scope | Verdict |
|---|---|---|
| `code-review` (local skill) | "Review the changes since a fixed point (commit, branch, tag, or merge-base)… Use when the user wants to review a branch, a PR, work-in-progress changes" | **Chosen.** It names *branch* review and a merge-base scope explicitly — exactly the request. |
| `review` (command) | "Conduct a five-axis code review — correctness, readability, architecture, security, performance" | Viable, but scoped as five-axis review generally rather than branch-vs-fixed-point. Second choice. |
| `code-review:code-review` (plugin) | "Runs a multi-axis code review over an explicitly named scope and returns the triaged findings… Use when the reviewed findings themselves are the deliverable." Declares it does **not** deliver/post/submit a review anywhere. | Viable but wants an *explicitly named* scope; the local skill resolves branch scope itself. |
| `code-review-and-quality` | "Conducts multi-axis code review. Use before merging any change." | Generic guidance-shaped; the local `code-review` is the more specific match for a concrete branch. |
| `security-review` (command) | "security review of the pending changes on the current branch" | Narrower single axis. Not the whole ask; could supplement. |

**Chosen: `code-review`** — it is the only candidate whose description names *branch review before merge against a fixed point* as its trigger, which is verbatim the situation. Its declared behaviour (two axes — Standards and Spec — run as parallel sub-agents, reported side by side) needs one input from the user: the fixed point to diff against.

### Collision 2 — "the messy bits cleaned up"

| Candidate | Declared scope | Verdict |
|---|---|---|
| `code-simplifier:code-simplifier` (plugin skill) | "Use when the deliverable is the cleaned-up code itself — reducing nesting, splitting a long function, removing duplication, renaming unclear local names, deleting dead code — and behaviour must stay identical." | **Chosen.** The user wants code changed, not a report. Its paired agent declares it verifies behaviour preservation by running tests between changes and reverting anything that breaks them. |
| `code-simplification` (local skill) | "Simplifies code for clarity… without changing behavior" | Process guidance, model-agnostic. Fine, but the plugin skill's declared test-between-changes discipline is the better fit for edits landing pre-merge. |
| `code-simplify` / `simplify` (commands) | `simplify`: "Review the changed code for reuse, simplification, efficiency, and altitude cleanups, then apply the fixes. Quality only — it does not hunt for bugs; use /code-review for that." | Reasonable alternative. Notably it *itself* points bug-hunting at code-review, corroborating the ordering below. |

**Chosen: `code-simplifier:code-simplifier`**, qualified, because the bare name `code-simplifier` is ambiguous against the local `code-simplification` and the `code-simplify` / `simplify` commands.

## Why sequential, and why there is a checkpoint between them

The user said "once that's done" — an explicit ordering. It is also substantively correct rather than merely literal:

- `code-simplifier:code-simplifier` declares it must **not** be used on broken code or to fix a bug, on the grounds that simplifying code whose behaviour is wrong preserves the wrong behaviour. So the review has to run first, and its correctness findings have to be *resolved*, not merely collected.
- If review turns up real defects, cleanup is not the next step — fixing is. That makes the boundary a genuine decision point for the user, not an automatic hand-off.
- The two skills also disagree about what "messy" means. Review findings are things that are *wrong*; simplifier targets are things that are *unclear but correct*. Handing the second skill an unfiltered review report would blur those.

So: run review, report, stop. Then confirm scope for cleanup.

## Not routed, and why

- `git-workflow-and-versioning` — merge/branch conventions; the user is not asking how to merge.
- `resolving-merge-conflicts` — declares itself for an *in-progress* conflict. None reported.
- `ship` / `shipping-and-launch` — pre-launch/deploy checklist. A pre-merge branch review is earlier than that.
- `skills:review` (plugin) — bound to a PLAN/SPEC lifecycle and auto-invoked by `/end`; no such session artifacts are in play.
- `debugging-and-error-recovery` / `diagnosing-bugs` — only if review surfaces a defect worth chasing.
- `security-review` — would be a sensible add-on axis if the branch touches auth, input handling, or data storage. Worth offering, not worth assuming.

## One thing I need before starting

`code-review` diffs against a **fixed point the user supplies**. I'll default to the merge-base with the default branch and say so, so the user can correct it in one word rather than being blocked by a question.
