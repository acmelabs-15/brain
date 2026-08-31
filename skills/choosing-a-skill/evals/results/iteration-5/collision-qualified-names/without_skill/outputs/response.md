Happy to. Two things to settle before I start, because in both halves of your request there are several installed skills with near-identical names, and they don't do the same job.

**The review.** Three different things could answer "review this branch":

- `code-review` (the local skill) reviews changes since a fixed point — commit, branch, tag, or merge-base — along two axes: Standards (does this follow the repo's documented coding standards) and Spec (does it match what the originating issue asked for). It runs both in parallel sub-agents and reports them side by side. This is the one whose description names your exact case: "review a branch, a PR, work-in-progress changes."
- `/review` (the command) is a five-axis review — correctness, readability, architecture, security, performance. Broader axes, but not anchored to a merge-base or to an originating spec.
- `code-review:code-review` (the plugin skill) runs a multi-axis review over an explicitly named scope and returns triaged findings. It's explicit that it has no destination — it won't post to a PR or file anything; delivering the findings is on whoever called it.

There's also `skills:review`, but that one is wired into a PLAN/SPEC lifecycle and is auto-invoked by `/end` before PR creation. Unless you're working inside that lifecycle, it's not the one you want.

I'd default to the local **`code-review`**, since "review this branch before I merge" is the case it names, and merge-base scoping is exactly what a pre-merge review needs. Tell me the base to diff against (or I'll take the merge-base with your default branch). If you'd rather have security and performance covered too, say so and I'll run `/review` instead — or both, since they overlap less than the names suggest.

**The cleanup.** Same collision. "Messy bits" maps to `code-simplify` / `code-simplification` / `code-simplifier:code-simplifier` / `simplify`. The one that matters: `simplify` reviews changed code for reuse, simplification, efficiency and altitude, then *applies* the fixes — and it explicitly does not hunt for bugs. `code-simplifier:code-simplifier` is the behaviour-preserving one: it verifies preservation by running the project's tests between each change and reverting anything that breaks them, and proposes rather than edits where there's no test coverage.

Important ordering constraint, and it's the reason I'm not doing these back to back automatically: the simplifier skills state outright that they must not run on code whose behaviour is wrong, because simplifying broken code preserves the wrong behaviour. So the sequence is review first, then *you* triage the findings, then fix any correctness bugs, and only then simplify. If the review turns up nothing behavioural, I'll go straight into cleanup.

One more thing worth naming: neither review skill posts anything anywhere. You'll get findings in this session; getting them onto the PR is a separate step I can do afterwards.

Say the word on which review flavour and what base, and I'll start.
