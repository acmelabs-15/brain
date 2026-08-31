# Routing

## The request

Two sequenced asks: (1) review a branch before merge, (2) then clean up "the messy bits". Both land squarely on entries in the name-collision table, and both are ambiguous by construction — the bare names `code-review` and `code-simplification` each name a local skill *and* sit next to a near-identically-named plugin skill.

## Skills invoked, in order

### 1. `code-review:code-review` (plugin) — default pick for the review

Named in full, qualified form to distinguish it from:
- the **local** `code-review` skill, and
- `code-review:reviewer`, the plugin's internal sub-agent — meeting that one means I'm in the right namespace but haven't reached the skill yet.

**Why the plugin, conditionally.** The collision table splits on one fact: local `code-review` runs two fixed axes, Standards + Spec, and wants an originating issue or spec — without one it silently drops the Spec axis, i.e. half of what makes it worth choosing. The plugin resolves a named scope (branch is explicitly supported — it is not repo-only), plans one row per review cell, and reports the cells it never reached. Before a merge, coverage of what went unreviewed is exactly the thing worth having.

**The conditional is real, not hedging.** If the user names a spec or originating issue, I switch to the local `code-review`, because the Spec axis is the axis it adds and nothing else supplies it. The response states which one I'm running and what would flip it.

**What I did not do:** compare `code-review` only against same-lineage neighbours like `code-review-and-quality`. That resolves an easier question than the one actually in front of me and lands on the wrong side of the fork without noticing the fork exists.

### 2. `code-simplifier:code-simplifier` (plugin) — conditional, after the review

Again named against its collision partner, the local `code-simplification` (331-line reference). The table's verdict is unambiguous: **plugin** — it runs the project's tests between each edit and reverts breakage, where the local skill only advises. `/code-simplify` routes there as well, so the command form is not an escape from the choice.

**Why it is conditional, not a commitment.** The simplifier's own boundary: do not use it on code whose behaviour is wrong, because simplifying wrong behaviour preserves it. So the review has to land first, and its findings decide the shape of step 2:
- mess (nesting, duplication, dead code, unclear local names) → the simplifier takes it directly;
- correctness findings dressed as mess → that's a fix, not a cleanup, and it goes back to the user before anything is edited.

## Skills deliberately not routed to

- **`code-review-and-quality` / `code-simplification`** (Lineage A) — encyclopedic checklists, reference you consult rather than workflows you execute. Neither performs a review or applies an edit.
- **`/ship`** — fans out three personas to a GO/NO-GO with a rollback plan. That's launch machinery; the user asked for a review before a merge, not a production launch. Ceremony for the job.
- **`security-review`, `test-driven-development`, `/review`** — the plugin review already carries security and test-coverage axes; adding more passes is the ceremony failure mode the routing table warns about.
- **Everything else in the lifecycle chain** (`/spec`, `/plan`, `/build`) — the code already exists.

## Commitment discipline

One skill is committed to now (the review, with a stated condition that would swap which of the two `code-review`s runs). The second is explicitly marked as depending on what the review shows. Listing both as flat numbered commitments would read as two promises when only the first is actually determined.
