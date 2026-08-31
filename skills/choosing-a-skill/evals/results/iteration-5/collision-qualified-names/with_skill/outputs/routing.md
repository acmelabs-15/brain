# Routing

## Summary

Two asks, both landing on entries in the `choosing-a-skill` name-collision table. One
committed skill now; the second held conditional on what the first returns.

| Order | Skill (fully qualified) | Status |
| --- | --- | --- |
| 1 | `code-review:code-review` (plugin, `code-review@…`) | Committed |
| 2 | `code-simplifier:code-simplifier` (plugin) | Conditional — depends on the review |

## 1. "Review this branch" → `code-review:code-review`

**The fork.** `choosing-a-skill` flags this as ambiguous by construction: `code-review`
names a local skill *and* is the prefix of the plugin's `code-review:code-review`. The
skill's instruction is to name both candidates in full, qualified form before picking,
and warns that comparing against a same-lineage neighbour like `code-review-and-quality`
resolves an easier question than the real one and lands wrong without noticing the fork.
So both are named explicitly, and `code-review-and-quality` is not the comparison being
made.

**Local `code-review`** — two fixed axes (Standards + Spec), parallel sub-agents, Fowler
smell baseline. Wants an originating issue or spec, and **skips the Spec axis without
one**.

**Plugin `code-review:code-review`** — resolves a named scope (PR ref, branch, diff range
or path), plans one row per review cell before dispatching, then dedupes, ranks and
triages, reporting per-unit coverage including the cells it never reached.

**Pick: plugin.** The routing rule is "local when there is a spec to review against, since
that is the axis it adds; plugin otherwise, and whenever coverage of what went unreviewed
matters." The user named a branch and no spec or originating issue. Choosing local here
buys a two-axis review that degrades to one. The table also notes explicitly that the
plugin is not repo-only and takes a branch diff, so "it's a branch" is not a reason to
avoid it.

**Reversal condition, stated to the user:** if a spec or ticket drives this branch, switch
to local `code-review`. That is a genuine flip, not hedging — it is the single fact the
table's rule turns on, so it is worth surfacing rather than assuming.

**Not `code-review:reviewer`.** That is the plugin's internal sub-agent (one cell = one
unit × one axis × one shard), dispatched *by* the skill. Per the skill file, reaching it
directly is the sign of being in the right namespace but not yet at
`code-review:code-review`. Same for `code-review:seam-reviewer` and
`code-review:confidence-scorer` — the skill plans and dispatches those.

**Not `/review`.** The Lineage A lifecycle command is a thin entry point to the local
skill's workflow, which inherits the missing-Spec-axis problem. Not
`skills:review` either — that is the `skills@ACMElabs` heavyweight parallel lifecycle, and
the skill file says pick one track per project and stay on it; nothing indicates this repo
is on the heavyweight track.

## 2. "Clean up the messy bits" → `code-simplifier:code-simplifier` (conditional)

**The fork.** Second collision-table row, and the file specifically calls out
`code-simplification` and `code-simplifier:code-simplifier` as different artifacts with
near-identical names.

**Local `code-simplification`** — 331-line reference. Lineage A: advises.
**Plugin `code-simplifier:code-simplifier`** — agent that runs the project's tests between
each individual edit and reverts breakage; proposes rather than edits where a unit has no
coverage.

**Pick: plugin.** The table's verdict is unqualified — "**Plugin.** It verifies; the local
one only advises." Code heading for a merge is precisely where verification earns its
keep. `/code-simplify` also routes to the plugin per the Commands section, so invoking the
skill directly and invoking the command agree; the skill name is used to keep the choice
explicit rather than routed-through.

**Why conditional rather than sequenced.** The skill file's framing: a numbered list of
skills reads as commitments, where one skill plus "the next steps depend on what this
shows" is a plan. Three things could change step 2:

1. The simplifier's own stated boundary — do not use on broken code or to fix a bug, since
   simplifying code whose behaviour is wrong preserves the wrong behaviour. A correctness
   finding from the review gets fixed first.
2. "Messy bits" may not be simplification at all. The simplifier declares itself out for
   behaviour changes: renaming a public API, splitting a long function into a *new module
   boundary*, replacing duplication with a library dependency, performance work. Some of
   those would route elsewhere — a boundary question to `codebase-design` for vocabulary,
   performance to `diagnosing-bugs` (the file is explicit that a performance regression is
   a diagnosis, not an optimisation, and that reaching for `performance-optimization` at a
   symptom is hypothesis-first reasoning in checklist clothing).
3. The review may localise "messy" somewhere specific, which changes the scope handed over.

## Not routed, and why

- **`code-review-and-quality`** (Lineage A, 24-skill reference library) — reference to
  consult, not a workflow to run, and reaching for it is the specific mis-resolution the
  collision section warns about.
- **`grilling` → `to-spec` → `to-tickets` → `implement-spec`** — that chain is for a real
  feature with an unclear spec. The branch already exists; this is review-then-tidy.
  Running the chain is the ceremony failure mode the routing table opens with.
- **`/ship`** — fans out `code-reviewer`, `security-auditor`, `test-engineer` and merges a
  GO/NO-GO with a rollback plan. That is a production-launch gate, not a pre-merge branch
  review; nothing here mentions deploying.
- **`test-driven-development`** — would apply if the review surfaces a bug to fix, as the
  route for a contained change already understood. Not committed now.
- **No clarifying question asked up front.** The collision resolves on facts already in
  hand, and the one fact that would flip it (a spec behind the branch) is surfaced in the
  reply as a reversal condition rather than held as a blocking question.

## What the reply commits to

Per the skill's rule that a route's demands must be visible in the reply and not only in
these notes, the response to the user: names both collision pairs in full qualified form,
states the pick and the reason for each, gives the reversal condition on the review, and
marks the cleanup conditional with the reason (simplification preserves wrong behaviour).
