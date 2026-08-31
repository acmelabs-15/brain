Both halves of that land on a name collision, so let me surface the fork before I pick rather than after.

**The review.** Two different things are called "review" here:

- `code-review` (local) — two fixed axes, Standards + Spec, run as parallel sub-agents against a Fowler smell baseline. The Spec axis is the value it adds, and it wants an originating issue or spec to review against; without one it skips that axis and you're paying for half a skill.
- `code-review:code-review` (plugin) — resolves a named scope (PR ref, branch, diff range or path), plans one row per review cell before dispatching, then dedupes, ranks and triages what comes back, and reports the cells it never reached.

Both take a branch diff, so that isn't the discriminator. The question that decides it is: **is there an issue or spec this branch was written against?** If yes, local `code-review` — the Spec axis is the whole reason to prefer it. If not, or if you want to know what went *unreviewed* before merging, `code-review:code-review`. Tell me which and I'll run that one.

**The cleanup.** Same shape, easier answer:

- `code-simplification` (local) — a 331-line reference document. It advises.
- `code-simplifier:code-simplifier` (plugin) — an agent that runs the project's tests between each individual edit and reverts anything that breaks them.

I'd use the plugin one. It verifies; the local one only tells you what to look at.

**Order.** Review first, cleanup second — that's the order you asked for and it's the right one anyway. The simplifier preserves behaviour by construction, so anything the review turns up as *wrong* has to be fixed before it runs; simplifying code whose behaviour is wrong just preserves the wrong behaviour more legibly. So the plan is: review, you and I triage the findings into fix-now versus fine, land the fixes, then hand the result to `code-simplifier:code-simplifier`. What the cleanup pass looks like depends on what the review shows — if it comes back with correctness findings, the shape of that middle step changes.

One thing I haven't checked: I don't know the branch or the merge base yet. Point me at it (or tell me it's the current branch against main) along with the spec answer, and I'll start.
