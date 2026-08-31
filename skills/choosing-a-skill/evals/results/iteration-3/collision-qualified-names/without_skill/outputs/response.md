Happy to. That's two passes, and I'll keep them separate so the second doesn't muddy the first.

**Pass 1 — review before merge.** I'll run `code-review:code-review` (the plugin skill, not the local `code-review` command) over the branch's diff against its merge-base. That gives you triaged findings across correctness, architecture, security and test coverage, with per-finding file and line evidence, and it tells you which review cells it couldn't reach rather than quietly skipping them. It produces findings only — it won't touch the code, so nothing changes under you while you're still deciding whether to merge.

**Pass 2 — clean up the messy bits.** Once you've read the findings, I'll run `code-simplifier:code-simplifier` (the plugin skill, not the local `code-simplify` command) to do the actual tidying: flattening nesting, splitting long functions, removing duplication, deleting dead code. It preserves behaviour and verifies that by running your tests between changes, reverting anything that breaks them.

Two things worth flagging before I start:

1. **Order matters and they don't overlap.** The review finds problems; the simplifier fixes messiness. Anything the review flags as an actual *bug* is not simplifier work — simplifying broken code just preserves the bug more legibly. I'll hand you correctness findings as fixes to make (or approve) separately, and confine the cleanup pass to code that's already behaving correctly.
2. **Simplification rewrites the diff you just reviewed.** If this branch is going to a PR that someone else also reviews, you may want to merge first and clean up in a follow-up, so your reviewer isn't reading a diff that's since been reshaped. Tell me if you'd rather I do it that way — otherwise I'll do both on the branch and you'll get one combined diff.

Point me at the branch (or confirm it's the current one) and I'll start the review.
