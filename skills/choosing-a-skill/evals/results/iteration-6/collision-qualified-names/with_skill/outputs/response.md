Both halves of that hit a name collision, so let me name the forks before I pick rather than reaching for the bare names.

**Review.** Two different things answer to "review this":

- `code-review` (local) — two fixed axes, Standards and Spec, run as parallel sub-agents against a Fowler smell baseline. It wants an originating issue or spec to review against, and it skips the Spec axis without one.
- `code-review:code-review` (plugin) — resolves a named scope (branch, PR ref, diff range or path), plans one row per review cell, then dedupes, ranks and triages, and reports which cells it never reached.

Both take a branch diff, so the branch itself doesn't decide it. The spec does: if there's an issue or spec this branch was written against, the local skill is worth it because the Spec axis is the thing it adds. If there isn't, that axis is dead weight and the plugin is the better pick — it also tells you what went *un*reviewed, which is what you want before a merge.

So I'm going to start with **`code-review:code-review` over the branch's merge-base**, unless you point me at the spec or issue behind the branch — in which case I'll switch to the local `code-review` to get the Spec axis. Either way I'll say which one ran.

**"The messy bits."** Same fork: `code-simplification` (local) is a 331-line reference that only advises; `code-simplifier:code-simplifier` is an agent that runs the tests between each edit and reverts anything that breaks. For actually changing code, that's the plugin — and `/code-simplify` routes there too. One caveat that changes the order: simplifying code whose behaviour is wrong just preserves the wrong behaviour, so anything the review flags as a genuine defect gets fixed before the cleanup pass, not folded into it.

That ordering is also why I'm only committing to the review now. What "the messy bits" turns out to mean depends on what the review surfaces — if it's mostly nesting, duplication and dead code, the simplifier takes it straight; if it's correctness findings wearing a mess costume, that's a fix, not a cleanup, and we'd talk about it first.

Point me at the branch (and the spec, if there is one) and I'll start the review.
