Both halves of that ask land on a name collision, so let me name the candidates in full before I pick either.

**The review.** Two different artifacts answer to "review this": the local `code-review` skill (two axes — Standards and Spec — run as parallel sub-agents against a fixed point, with a Fowler smell baseline), and the plugin's `code-review:code-review` (multi-axis cell-based review, planned per review cell, aimed at a heavyweight repo-wide sweep). A branch diff you're about to merge is the local skill's case, so that's what I'll run: `code-review`, scoped to the merge-base.

**The cleanup.** Same fork: `code-simplification` is the local 331-line reference, and `code-simplifier:code-simplifier` is a plugin agent that runs the project's tests between each edit and reverts anything that breaks. Since you want the messy bits actually cleaned up rather than advised about, that's the plugin — it verifies, the local one only advises.

So: review first, cleanup second — and that order is load-bearing rather than just the order you said it in. The review tells us which bits are messy on purpose and which are messy by accident, and simplification that runs before the review would preserve any wrong behaviour it tidied around. If the review turns up correctness findings rather than clarity ones, those are fixes, not simplifications, and they get handled on their own before `code-simplifier:code-simplifier` touches anything.

Starting with the review now. What I do after it depends on what it turns up — I'll come back with the findings and the shortlist of what's worth cleaning before I start editing.

One thing I haven't checked: whether the tests pass on this branch. `code-simplifier:code-simplifier` needs a green suite to verify against, and it declines to edit units with no coverage — it proposes instead. If the suite is red when we get there, I'll tell you rather than simplify on top of it.
