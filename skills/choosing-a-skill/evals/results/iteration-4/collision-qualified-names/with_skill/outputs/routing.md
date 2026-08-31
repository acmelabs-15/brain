# Routing

## Shape of the request

Two sequential jobs in one message: (1) review a branch before merge, (2) clean up "the messy bits"
afterwards. The user's own ordering ("once that's done") is also the correct ordering — simplifying
code whose behaviour is still under review preserves whatever the review would have flagged.

## Job 1 — "review this branch"

This is a **name collision**, and the routing skill says a bare name here is ambiguous by
construction: `code-review` names a local skill *and* is the prefix of the plugin's
`code-review:code-review`. Both candidates named in full, qualified form before picking:

| Candidate | What it actually declares |
| --- | --- |
| `code-review` (local, `~/.claude/skills/code-review/`) | Two fixed axes — Standards and Spec — run as parallel sub-agents, reported side by side. Standards carries a Fowler smell baseline. Pins a fixed point first and asks for one if not given. Without an originating issue/spec the Spec axis skips and reports "no spec available". |
| `code-review:code-review` (plugin) | Resolves a named scope (PR ref, branch, diff range or path), writes one plan row per review cell before dispatching, then dedupes, ranks and triages, reporting per-unit coverage including cells it never reached. |

Discriminator per the routing table: **local when there is a spec to review against**, since that is
the axis it adds; **plugin otherwise, and whenever coverage of what went unreviewed matters**. Both
take a branch diff, so "it's a branch" is not a tiebreaker.

**Pick: `code-review:code-review` (plugin) as the default**, conditional on the spec question. No
spec is known to exist for this branch, and pre-merge is exactly when the coverage report earns its
keep. Marked conditional in the reply: if the user says there is an originating issue or spec, switch
to the local `code-review` and supply the fixed point it pins.

Traps avoided:
- Not resolving against same-lineage neighbours like `code-review-and-quality` (Lineage A reference
  checklist) — that answers an easier question than the one actually in front of me.
- `code-review:reviewer` is the plugin's internal sub-agent that reviews one cell, not the plugin
  skill. It is not the routing target; meeting it means being in the right namespace and not yet at
  `code-review:code-review`.
- Not `/review` — that is a thin Lineage A entry point to `code-review-and-quality`'s five-axis
  workflow, a third artifact and not what either side of this collision offers.

## Job 2 — "the messy bits cleaned up"

Second collision, same discipline. `code-simplification` (local) and
`code-simplifier:code-simplifier` (plugin) are different artifacts with near-identical names.

**Pick: `code-simplifier:code-simplifier` (plugin).** It runs the project's tests between each
individual change and reverts anything that breaks them, and proposes rather than edits where a unit
has no test coverage. The local `code-simplification` is a reference document that only advises.
`/code-simplify` routes to the same plugin, so invoking it that way lands identically.

The plugin agent also declares it is not for broken code or bug fixing — which reinforces the
ordering: any correctness findings from Job 1 are fixes, and must not be routed through a
behaviour-preserving simplification pass.

## Order

1. `code-review:code-review` — branch scope against the merge target. (Swap to local `code-review`
   if a spec/issue exists.)
2. Triage the findings: correctness/security issues are fixes, not simplifications.
3. `code-simplifier:code-simplifier` on what remains — the readability and duplication findings.

Step 3's actual scope is conditional on step 1's output and is stated as such in the reply, rather
than presented as a settled multi-skill plan.

## Skipped

- `code-review-and-quality`, `/review` — Lineage A neighbours; resolving against them dodges the
  real fork.
- `code-simplification` (local) — advises only.
- `security-and-hardening`, `/ship`, `test-driven-development` — ceremony for a two-job request. The
  routing table's warning about ceremony applies: skipping a skill is a normal decision.
- `git-workflow-and-versioning` — the user asked about the content of the branch, not merge/branching
  conventions.
