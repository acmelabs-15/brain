Two jobs, and they run in the order you gave them — review first, cleanup second. That order isn't just politeness: the simplifier preserves behaviour, so if the review turns up something actually wrong, simplifying first would just lock the wrong behaviour in more neatly.

Here's how I'll run each:

**1. Review — local `code-review`.** It reviews the branch against a fixed point (merge-base by default) on two axes in parallel sub-agents: Standards, meaning your repo's documented coding standards, and Spec, meaning whether the code does what the originating issue or spec asked for. That's the right shape for a pre-merge branch diff. There's also a plugin `code-review:code-review` with the same name — it's a heavyweight cell-based repo-wide sweep, which is more machinery than a branch needs, so I'm not using it here.

**2. Cleanup — plugin `code-simplifier:code-simplifier`.** For "the messy bits" I'll use the plugin agent, not the local `code-simplification` skill. The difference is that the plugin one actually edits and runs your tests between each individual change, reverting anything that breaks them, and proposes rather than edits where there's no test coverage. The local skill is a reference document — it advises, it doesn't verify.

Between the two I'll come back to you with the review findings and we'll split them: anything that's a real defect gets fixed as a fix, and only the genuinely cosmetic residue — nesting, long functions, duplication, dead code, unclear local names — goes to the simplifier as behaviour-preserving cleanup. If the review turns up nothing blocking, I'll go straight on to the cleanup.

Two things I need from you to start: what to diff against (a branch, tag, or commit — I'll default to the merge-base with your main branch), and, if there's an issue or spec behind this branch, a pointer to it, since that's what the Spec axis reviews against. I'll skip that axis if there isn't one.
