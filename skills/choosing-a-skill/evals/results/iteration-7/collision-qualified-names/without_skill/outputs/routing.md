# Routing

## Verdict

Two skills, strictly sequenced, drawn from **two different lineages** because each collided name has a better half for its half of the job:

1. **`code-review`** (local skill, `~/.claude/skills/code-review/`) — the review.
2. **`code-simplifier:code-simplifier`** (plugin skill) — the cleanup, **after** the review and after any correctness fixes.

The user's sentence contains an explicit ordering ("once that's done"), so this is a chain, not a choice. Nothing is invoked in parallel.

## The collisions

The request lands on two names that each exist twice in the installed set. Both must be disambiguated before invoking anything.

### Collision 1 — "review"

| Candidate | What it declares |
|---|---|
| `code-review` (local) | Reviews changes since a fixed point (commit, branch, tag, or merge-base) along two axes — Standards (repo's documented coding standards) and Spec (does it match the originating issue/spec?). Runs both as parallel sub-agents, reports side by side. Description explicitly names "review a branch, a PR, work-in-progress changes". |
| `code-review:code-review` (plugin) | Runs a multi-axis review over an **explicitly named scope**, returns triaged findings — resolves the scope arg, discovers review units, plans one row per review cell, then dedupes, ranks and triages. Explicitly *not* for delivering/posting the review anywhere, and *not* for applying a fix. |
| `code-review-and-quality` (local) | Multi-axis review, "use before merging any change". |
| `review` (command) | Five-axis review: correctness, readability, architecture, security, performance. |
| `skills:review` (plugin) | Adaptive multi-axis review inside a PLAN/SPEC lifecycle; auto-invoked by `/end` as a PR gate. |

**Chosen: local `code-review`.** Its description names the exact situation verbatim — reviewing a branch before merge — and its Spec axis is the one that catches "this branch drifted from what the issue asked for", which is the risk that actually matters before a merge. The plugin `code-review:code-review` is a reasonable alternative and I flag it to the user in one line, but it wants an explicitly named scope and its deliverable is triaged findings; the local one's branch/merge-base framing is the closer match to the phrasing given.

**Rejected: `skills:review`.** It is bound to a PLAN/SPEC lifecycle and to `/end`'s PR gate. There's no PLAN or SPEC in play, so invoking it imports machinery the user never asked for.

**Rejected: `code-review-and-quality` and `/review`.** Both are plausible generic fits, but neither is scoped to "the diff since a fixed point," which is what "this branch" means. Picking a generic reviewer over one whose description names branches would be settling for the closest-named skill rather than the right one.

**Rejected: `security-review`, `security-auditor`.** Nothing in the request signals security specifically. If the review surfaces something, escalate then.

### Collision 2 — "clean up the messy bits"

| Candidate | What it declares |
|---|---|
| `code-simplification` (local) | Simplifies code for clarity, refactoring without changing behavior. |
| `code-simplify` (local command) | Simplify code for clarity and maintainability, no behavior change. |
| `code-simplifier:code-simplifier` (plugin skill) | Deliverable is the cleaned-up code itself — reduced nesting, split long functions, removed duplication, unclear local names, dead code — behaviour identical. Explicitly *not* for broken code or failing tests. Its agent runs the project's tests between each individual change, reverts anything that breaks them, and proposes rather than edits where a unit has no test coverage. |
| `simplify` (command) | Reviews changed code for reuse/simplification/efficiency/altitude and applies fixes. Quality only — explicitly says use `/code-review` for bugs. |

**Chosen: `code-simplifier:code-simplifier` (plugin).** The tie-breaker is the verification property, which only this one declares: tests between each change, revert on break, propose-don't-edit where coverage is absent. On a branch that is about to merge, that is the difference between a safe tidy-up and a silent behaviour change landing in main. The local `code-simplification` skill declares behaviour preservation as a goal but no such mechanism.

**Rejected: `/simplify`.** Closely related and would be acceptable, but it applies fixes without the declared test-between-changes discipline, and its scope ("changed code") overlaps rather than follows from the review's findings.

## Ordering constraint (the load-bearing part)

Review must complete before cleanup, for two reasons that come from the skills' own declarations:

1. `code-simplifier:code-simplifier` explicitly must not run on broken code or failing tests — simplifying code whose behaviour is wrong preserves the wrong behaviour. So any correctness findings from step 1 get fixed *before* step 2 runs.
2. Running cleanup first would rewrite the diff the review is meant to judge, and the user asked to review "before I merge it" — the review is the merge gate.

So the real chain is: **`code-review` → (fix correctness findings, if any) → `code-simplifier:code-simplifier`**, with a scope confirmation from the user in between.

## What I ask the user for

One thing only, and it's a genuine input the skill requires rather than a clarifying stall: **the fixed point to diff against** (commit, branch, tag, or merge-base). The local `code-review` skill's whole contract is "changes since a fixed point," so it cannot run without one. I offer merge-base-with-main as the default.

I deliberately do *not* ask what "messy bits" means up front — the review's readability and structure findings will produce that list, and asking now would be asking the user to do work the first skill is about to do for them. I confirm the cleanup scope after the review, before editing.

## Not invoked

- `git-workflow-and-versioning` — no branching or release-convention question was asked; merging is the user's action, not the task.
- `resolving-merge-conflicts` — no in-progress merge or rebase conflict.
- `shipping-and-launch` / `ship` — no deployment mentioned; "merge" is not "launch".
- `test-driven-development` / `test` — the plugin simplifier runs the existing tests itself; no new test-writing was requested.
- `interview-me` / `grilling` — the request is specific and actionable; the only gap is the diff base.
- `choosing-a-skill` — this is a routing decision I make silently, not a question the user asked about the tooling.
