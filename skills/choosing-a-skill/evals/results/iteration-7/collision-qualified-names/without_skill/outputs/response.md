Happy to. That's two separate jobs, and they have to run in that order — reviewing first, cleaning up second — because a cleanup pass rewrites the very code the review is judging.

**Step 1 — review the branch.** I'll run the local `code-review` skill. It reviews the changes since a fixed point along two axes, Standards (does this follow the repo's documented coding standards?) and Spec (does it match what the originating issue asked for?), running both as parallel sub-agents and reporting them side by side. It needs one thing from you: **the fixed point to diff against** — a commit, branch, tag, or merge-base. If you're merging into `main`, the merge-base with `main` is usually what you want; tell me and I'll use it.

One naming note so you know what you're getting: there's also a plugin skill called `code-review:code-review`, which runs a multi-axis review over a scope you name and returns triaged, ranked findings. The local one is the better fit here because you're reviewing a branch before a merge, which is exactly what its description covers, and the Spec axis catches drift from the original ask. Say the word if you'd rather have the plugin's triaged-findings format instead.

**Step 2 — clean up the messy bits.** Once you've seen the review and decided what's in scope, I'll run `code-simplifier:code-simplifier` (the plugin). I'm picking it over the local `code-simplification` skill deliberately: the plugin agent runs the project's tests between each individual change and reverts anything that breaks them, and it proposes rather than edits where a unit has no test coverage. That's the safety property you want when tidying code that's about to merge.

Two caveats on the cleanup:

- The plugin skill is explicit that it must not run on broken code or failing tests — simplifying code whose behaviour is wrong just preserves the wrong behaviour. So if the review turns up correctness bugs, those get fixed first, and the cleanup runs after.
- "Messy bits" is doing a lot of work in that sentence. I'll treat the review's readability and structure findings as the candidate list and confirm the scope with you before touching anything, rather than guessing at what bothers you.

Give me the diff base and I'll start the review.
