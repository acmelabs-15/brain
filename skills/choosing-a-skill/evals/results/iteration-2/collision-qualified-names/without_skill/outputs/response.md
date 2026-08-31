Happy to. Two phases, in this order — review first, cleanup second, because simplifying code before it's been reviewed just makes the diff harder to review, and any fixes the review turns up would need re-simplifying afterwards.

**Phase 1 — review.** I'll run `code-review:code-review` (the plugin skill, not the local `code-review` command) over the branch. It resolves the scope, discovers the review units, then dispatches per-unit/per-axis reviewers in parallel and hands back deduplicated, ranked, triaged findings with per-unit coverage — including which cells it couldn't reach. I'll default the scope to the merge-base with the base branch, which is what "before I merge" usually means. That skill produces findings only: it won't push anything to a PR or apply fixes, so you get the whole picture before anything changes.

**Phase 2 — cleanup.** Once you've seen the findings and told me which to act on, I'll run `code-simplifier:code-simplifier` for the "messy bits" — reduced nesting, split long functions, removed duplication, clearer local names, dead code gone, behaviour identical. Two caveats worth flagging now:

- Simplification preserves behaviour by design. So any *correctness* findings from the review are bug fixes, not cleanup, and I'll do those first — simplifying code whose behaviour is wrong just preserves the wrong behaviour.
- If the review surfaces things that are genuine behaviour changes (a renamed public API, a new module boundary, a performance fix), those are out of scope for the simplifier and I'll call them out separately rather than smuggling them in.

I'll start with the review and come back with the triaged findings before touching anything. If you'd rather I scoped the review to something other than the merge-base — a specific commit or tag — say the word and I'll use that instead.
