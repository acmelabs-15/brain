# Routing decision

## Skills to invoke, in order

1. **`code-review`** — the *local* skill (not the plugin)
2. **`code-simplifier:code-simplifier`** — the *plugin* agent (not the local `code-simplification`)

Both name collisions resolve in opposite directions. That is the whole difficulty of this request.

## Why this order

The user stated the order ("review this branch... and once that's done...") and it is also the
correct one independent of their preference. `code-simplifier` preserves behaviour by construction —
it runs the tests between each edit and reverts anything that breaks them. Running it first would
tidy code whose behaviour has not yet been checked against the spec, entrenching any defect the
review would have caught. Its own description is explicit: do not use on broken code, since
simplifying code whose behaviour is wrong preserves the wrong behaviour. Review is therefore a
prerequisite, not merely a preference.

There is a handoff between the two steps, not a straight pipe. Review findings split into real
defects (fixed as fixes) and cosmetic residue (handed to the simplifier). Only the second class is
in the simplifier's remit — it is scoped to nesting, long functions, duplication, unclear local
names, dead code, with behaviour identical afterwards.

## Collision 1 — "review this"

| | Local `code-review` | Plugin `code-review:code-review` |
| --- | --- | --- |
| Shape | Two axes, Standards + Spec, parallel sub-agents, Fowler smell baseline | Multi-axis cell-based sweep, one plan row per review cell |
| Scope | A diff since a fixed point (commit, branch, tag, merge-base) | Repo-wide, per-unit coverage reporting |

**Chosen: local.** The routing table's rule is "local for a branch diff against a spec, plugin for a
heavyweight repo-wide sweep." This is a branch about to merge — a diff against a fixed point, which
is precisely the local skill's stated scope. The plugin's cell-planning and per-unit coverage
machinery is ceremony at this size.

Also considered and rejected:

- **`/review` command** — a thin entry point into the same local skill. Invoking the skill directly
  is equivalent; the command adds nothing here.
- **`code-review-and-quality`** (Lineage A) — a 5-axis reference document, not a workflow. Lineage A
  skills are reference you consult, not workflows you execute. It produces no diff-scoped review.
- **`/ship`** — fans out to `code-reviewer`, `security-auditor`, `test-engineer` and merges a GO/NO-GO
  with a rollback plan. That is a *launch* gate, not a merge review. The user said merge, not deploy.
- **`skills:review`** (the `skills@ACMElabs` heavyweight track) — belongs to the parallel Brain/JIRA
  lifecycle. Pick one track per project; nothing indicates this repo is on the heavyweight track.

## Collision 2 — "the messy bits cleaned up"

| | Local `code-simplification` | Plugin `code-simplifier:code-simplifier` |
| --- | --- | --- |
| What it is | 331-line reference document | Agent that edits |
| Verification | None — advises only | Runs the tests between each individual change, reverts breakage; proposes rather than edits where a unit has no coverage |

**Chosen: plugin.** The routing table's verdict is unqualified: the plugin, because it verifies and
the local one only advises. The user wants the messy bits *cleaned up* — an edited-code deliverable,
not advice about cleanliness — which is exactly the plugin agent's remit and exactly what the local
reference cannot produce.

Note that **`/code-simplify` already routes to the plugin**, so that command is a legitimate
equivalent entry point. Invoking the agent directly is the same destination.

## Why no interview / spec / planning skill

The request is two well-understood operations on existing code. `grilling`, `interview-me`,
`spec-driven-development` and `planning-and-task-breakdown` all presuppose work that does not yet
exist. Reaching for them here is the library's characteristic failure mode — ceremony on a task that
did not need it. Skipping a skill is a normal decision.

## Open inputs (asked once, in the reply, not as a blocking interview)

- The fixed point to diff against; default is the merge-base with the main branch.
- The originating issue or spec, if one exists — the Spec axis has nothing to review against
  otherwise, and that axis is dropped rather than guessed at.
