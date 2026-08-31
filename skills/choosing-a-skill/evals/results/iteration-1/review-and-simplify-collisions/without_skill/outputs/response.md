I'll take these in order — review first, cleanup second — because they're genuinely sequential: the review tells us what "messy" means here, and simplifying before the review would move code out from under it.

**Step 1 — Review the branch.** I'll run `/review` over the diff against the merge base. That covers correctness, readability, architecture, security, and performance, and it's read-only — nothing gets changed. You'll get a findings list with file and line evidence, triaged so you can see what actually blocks the merge versus what's just noise.

**Step 2 — Clean up the messy bits.** Once you've seen the findings, I'll run `/code-simplify` on the same scope. That's behaviour-preserving only: reduced nesting, split-up long functions, dead code removed, unclear local names fixed — with tests run between changes so anything that breaks behaviour gets reverted.

Two things worth flagging before I start:

- If the review turns up actual **bugs**, those are fixes, not simplification — I'll surface them separately and ask before touching them, since simplifying broken code just preserves the wrong behaviour.
- **Merge order matters.** If you plan to merge as-is and clean up after, say so and I'll keep the simplification as a follow-up commit on top rather than folding it into the branch you're reviewing — a review that no longer matches the merged diff isn't much use to anyone.

Starting the review now.
