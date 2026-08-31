Two jobs, and they want two different skills — plus they have to run in that order, because simplifying before the review would move the code out from under it.

**First, the review: the local `code-review` skill.** That's the one for a branch diff — two axes, Standards (does this follow the repo's documented coding standards) and Spec (does it do what the originating issue asked for), run as parallel sub-agents and reported side by side. I'll resolve the review point from the merge-base unless you want it pinned somewhere else.

Worth flagging the fork I'm taking: `code-review` is also the prefix of the plugin skill `code-review:code-review`, which is a multi-axis cell-based sweep sized for a whole repo. That's heavier than a branch diff needs, so I'm going local. Say the word if you'd rather have the repo-wide pass.

**Then the cleanup: the plugin skill `code-simplifier:code-simplifier`.** Also a deliberate pick over the local `code-simplification`, which is a reference document that only advises. The plugin one actually edits, runs the tests between each individual change, and reverts anything that breaks them — which is what you want when the goal is "same behaviour, reads better." Where a unit has no test coverage it proposes rather than edits, so it won't quietly rewrite untested code.

One thing I'd like to settle before starting the second half: the review will surface findings that are genuine defects (wrong behaviour, missing spec coverage) alongside things that are merely messy. Those are different work. Simplification preserves behaviour by design, so it can't fix a defect — running it over broken code just makes the broken code tidier. My plan is to bring you the review findings first, split into "fix this" and "tidy this", and only then turn the simplifier loose on the tidy pile.

Starting the review now.
