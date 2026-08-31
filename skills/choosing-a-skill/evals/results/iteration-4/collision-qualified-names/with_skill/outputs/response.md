Two jobs, and they run in that order — review first, clean up after, since simplifying code whose behaviour is still under review just preserves whatever the review would have flagged.

On the review, "review this branch" is ambiguous by construction here: there are two different artifacts and one of them answers to a bare name. The fork is between:

- **`code-review`** (local) — two fixed axes, Standards and Spec, run as parallel sub-agents and reported side by side, with a Fowler smell baseline on the Standards axis. It wants an originating issue or spec; without one it skips the Spec axis and reports "no spec available".
- **`code-review:code-review`** (plugin) — resolves a named scope, plans one row per review cell before dispatching, then dedupes, ranks and triages what comes back, and reports the cells it never reached.

Both take a branch diff, so that isn't the tiebreaker. The one thing that decides it is whether this branch has an originating issue or spec to review against — that's the axis the local skill adds and the only reason to prefer it. **My default is the plugin**, `code-review:code-review`, because I don't know of a spec here and coverage of what went unreviewed is worth having before a merge. If you tell me there is a spec or issue behind this branch, I'll switch to the local `code-review` and give you the fixed point it needs (a commit, branch, tag or `main` — it pins that before anything else).

Then the cleanup. "The messy bits" routes to **`code-simplifier:code-simplifier`**, the plugin — not the local `code-simplification`, which is a reference document that only advises. The plugin agent runs the project's tests between each individual edit and reverts anything that breaks them, and proposes rather than edits where a unit has no test coverage. `/code-simplify` reaches the same plugin if you'd rather invoke it that way.

What I'm committing to now is the review. What the cleanup actually covers depends on what the review turns up — some of "the messy bits" may come back as correctness findings, which are fixes rather than simplifications and shouldn't go through a behaviour-preserving pass at all.

One thing to confirm rather than assume: which fixed point to review against — the merge target (`main`?) or something else.
