# Routing decision

## Shape of the request

Two sequential asks in one message:

1. "Review this branch before I merge it" — a pre-merge review of a branch's changes.
2. "Once that's done I want the messy bits cleaned up" — a follow-on cleanup, explicitly gated on the review finishing.

Both halves land on a **cluster of similarly-named installed skills**. Picking by name similarity alone would pick wrong in both cases, so the routing work here is disambiguation, not discovery.

## Half 1 — the review

Candidates, and what each one actually declares:

| Candidate | What it declares |
|---|---|
| `code-review` (local skill) | Reviews changes since a fixed point (commit, branch, tag, or merge-base) on two axes — Standards (repo's documented coding standards) and Spec (matches the originating issue/spec). Runs both in parallel sub-agents, reports side by side. Declares: "Use when the user wants to review a branch, a PR, work-in-progress changes, or asks to 'review since X'." |
| `/review` (command) | "Conduct a five-axis code review — correctness, readability, architecture, security, performance." |
| `code-review:code-review` (plugin skill) | Multi-axis review over an **explicitly named scope**, returns triaged findings; plans one row per review cell, dedupes/ranks/triages, reports per-unit coverage including cells it never reached. Declares: use when the findings themselves are the deliverable. Explicitly **not** for delivering/posting/commenting a review anywhere — "opens no network connection and has no destination." Not for applying or committing a fix. |
| `skills:review` (plugin skill) | Adaptive multi-axis review tied to a PLAN/SPEC lifecycle; auto-invoked by `/end` before PR creation; PR-type classification, per-axis verdicts, findings table. |
| `code-review-and-quality` | Guidance skill: "Conducts multi-axis code review. Use before merging any change." |
| `code-reviewer` (agent) | Senior reviewer agent, five dimensions. |

**Chosen: `code-review` (the local skill), primary.**

Reasons:
- Its description names this exact case verbatim — reviewing *a branch*, and "review since X". No other candidate names branch review that specifically.
- Pre-merge review needs a **base to diff against**. `code-review` is the only candidate that declares fixed-point/merge-base scoping as its core mechanic. `/review` and `code-review:code-review` require the scope to come from elsewhere (the latter says "explicitly named scope").
- Its Spec axis — does the code match what the originating issue asked for — is a genuine pre-merge question the five-axis command does not cover.

**Rejected, and why:**
- `skills:review` — rejected on lifecycle coupling. It is built around PLAN/SPEC notes and is auto-invoked by `/end`. Nothing in the user's message indicates they are inside that workflow. Firing it would drag in machinery they did not ask for.
- `code-review:code-review` — a reasonable second choice, but it wants an explicitly named scope, which the user hasn't given. Its distinguishing declaration (no destination, no delivery) is worth *surfacing* to the user rather than acting on.
- `code-review-and-quality` — a guidance/vocabulary skill, not a runner over a diff. Wrong artifact type.
- `code-reviewer` agent — not routed to directly; `code-review` already fans out to sub-agents itself. Dispatching it separately would duplicate work.
- `/review` — offered as an alternative, not chosen. It adds security and performance axes that `code-review` doesn't declare, so it's a legitimate complement if the user wants breadth over merge-base precision. Presented as a choice rather than assumed.

**Note surfaced to the user, not acted on:** none of the review skills deliver findings anywhere. `code-review:code-review` states this outright. Getting findings onto a PR is a separate step.

## Half 2 — the cleanup

"Messy bits cleaned up" — same collision problem.

| Candidate | What it declares |
|---|---|
| `simplify` (command) | Reviews changed code for reuse, simplification, efficiency and altitude cleanups, **then applies the fixes**. "Quality only — it does not hunt for bugs; use /code-review for that." |
| `code-simplifier:code-simplifier` (skill) | Deliverable is the cleaned-up code itself; behaviour must stay identical. Not for broken code or failing tests — "simplifying code whose behaviour is wrong preserves the wrong behaviour: fix it first." Not for behaviour changes. Not for producing a *document* about the code. |
| `code-simplifier:code-simplifier` (agent) | Same, plus: verifies behaviour preservation by running the project's tests between each individual change and reverting anything that breaks them; proposes rather than edits where a unit has no test coverage. Declares: use after a coding task is complete and its tests pass. |
| `code-simplify` (command) | "Simplify code for clarity and maintainability — reduce complexity without changing behavior." |
| `code-simplification` (skill) | Guidance on simplifying for clarity. |

**Chosen: `code-simplifier:code-simplifier`, deferred — conditional on the review's outcome.**

Reasons:
- The user scoped the cleanup to "the messy bits", i.e. clarity, not behaviour. That is the simplifier's declared deliverable.
- The test-between-each-change-and-revert behaviour is the strongest safety property on offer among the candidates, which matters when cleanup immediately precedes a merge.
- `simplify` is the close alternative and applies fixes across reuse/efficiency/altitude, a slightly wider remit. Either is defensible; I'd pick based on whether the user wants edits applied broadly (`simplify`) or behaviour-preservation verified per-change (`code-simplifier`).

**Rejected:**
- `code-simplification` — guidance, not an editor. Wrong artifact type for "cleaned up".
- Running any simplifier *first* or *in parallel* with the review — rejected on an explicit declared constraint, see below.

## Ordering, and why it is not merely the user's stated sequence

The user said "once that's done", which already implies review → cleanup. But the ordering is independently forced by what the simplifier skills declare: they must not run on broken code, because simplifying wrong behaviour preserves it.

So the real sequence has a **human triage step the user did not name**:

1. `code-review` on the branch against its merge-base.
2. User triages findings. Any *correctness* finding gets fixed before cleanup. (`simplify` explicitly does not hunt bugs, and `code-simplifier` explicitly refuses broken code — so nothing downstream will catch a bug the review surfaced and nobody fixed.)
3. `code-simplifier:code-simplifier` (or `simplify`) on the cleaned-up branch.

If step 1 turns up nothing behavioural, step 2 collapses and I go straight to step 3.

## What I asked the user for

Deliberately minimal, and only what routing genuinely cannot resolve:
- The base to diff against (defaulting to merge-base with the default branch if unstated).
- Whether they want the two-axis merge-base review (`code-review`) or the five-axis breadth (`/review`) — a real fork, not a clarifying question I could have answered myself.

I did **not** ask which simplifier they want; that choice depends on the review's output and can be made when we get there.

## Skills deliberately not invoked

- `git-workflow-and-versioning` — branching/merge conventions, but the user asked for a review, not for advice on how to merge.
- `resolving-merge-conflicts` — no conflict is in progress.
- `security-review` / `security-auditor` — not requested; `/review`'s security axis covers this if the user picks that fork.
- `doubt-driven-development`, `code-review-and-quality` — guidance-layer skills that would add process without producing the review the user asked for.
