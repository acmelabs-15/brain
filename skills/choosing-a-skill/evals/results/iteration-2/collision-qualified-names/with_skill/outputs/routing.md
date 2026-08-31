# Routing decision

## Order

1. **`code-review`** (local skill) — review the branch
2. **`code-simplifier:code-simplifier`** (plugin skill) — clean up the messy bits

Sequential, not parallel. The request itself says "once that's done", and the
dependency is real in both directions: the simplifier edits files, so running it
first would move the code out from under the review; and the review's findings
are what tell us which "messy bits" are actually messy versus actually broken.

## 1. Review → local `code-review`

The ask is a branch diff before a merge. Both candidates share a name, so both
get named in full before picking:

- **`code-review`** (local) — two axes, Standards + Spec, parallel sub-agents,
  Fowler smell baseline.
- **`code-review:code-review`** (plugin) — multi-axis cell-based review, unit
  discovery, per-cell dispatch, needs the `/code-review` command.

**Picked: local.** The routing rule is local for a branch diff against a spec,
plugin for a heavyweight repo-wide sweep. This is a single branch about to be
merged — one diff, one spec, a bounded scope. The plugin's cell-planning and
per-unit coverage machinery is built for sweeping a whole repository and would
be ceremony here.

Not `code-review-and-quality`. That is the Lineage A encyclopedic checklist —
reference you consult for a section, not a workflow that produces a review of a
specific diff. Comparing the local skill only against that same-lineage
neighbour would resolve an easier question than the one actually in front of me
and would miss the local-vs-plugin fork entirely.

Not `/review` or `/ship`. `/review` is the thin command entry point into the
five-axis persona review, and `/ship` fans out to three personas and merges into
a GO/NO-GO with a rollback plan — that is launch machinery, and the user asked
for a review before a merge, not a production launch.

Note if I end up inside the plugin namespace at any point: `code-review:reviewer`
is the plugin's internal per-cell sub-agent, not the plugin skill. Meeting it
means I am in the right namespace and have not yet reached
`code-review:code-review`.

## 2. Cleanup → plugin `code-simplifier:code-simplifier`

Same collision shape, opposite answer. Both named in full:

- **`code-simplification`** (local) — a 331-line reference. Advises only.
- **`code-simplifier:code-simplifier`** (plugin) — an agent that edits, runs the
  project's tests between each individual change, and reverts anything that
  breaks them. Proposes rather than edits where a unit has no test coverage.

**Picked: plugin.** The rule is unambiguous here — the plugin verifies, the local
one only advises. "Cleaned up" is a request for edited code, not for advice about
edits, and behaviour must stay identical, which is exactly what the
between-edits test loop enforces.

Reaching for `/code-simplify` would land in the same place — that command routes
to the plugin — so invoking the plugin skill directly is the same destination
without the indirection.

Not `code-simplification` even though its name is the closer match to the word
"cleaned". Near-identical names across the local/plugin fork are the failure
mode this collision exists to catch.

## The handoff between them

The one substantive judgement beyond skill selection: review findings split into
defects and untidiness, and only the untidy pile goes to the simplifier.
Simplification preserves behaviour by construction, so pointing it at code whose
behaviour is wrong preserves the wrong behaviour — the simplifier's own guidance
says to fix first, simplify after. So the plan is review → triage findings into
fix/tidy → fix defects (test-driven, via `test-driven-development` if any are
substantive) → simplifier over the tidy pile.

## Skipped deliberately

- **`grilling` → `to-spec` → `to-tickets` → `implement-spec`** — this is the
  feature-sized chain. The branch already exists; there is nothing to specify.
- **`diagnosing-bugs`** — nothing is reported broken. If the review surfaces a
  defect whose cause is not obvious from the diff, that is the moment to reach
  for it, not before.
- **`security-and-hardening`, `api-and-interface-design`** — Lineage A reference.
  Pull a relevant section if the diff touches auth or a public interface; do not
  run them as workflows.
- **The `skills@ACMElabs` lifecycle** (`skills:review` and friends) — the
  heavyweight parallel track with Brain knowledge graph, JIRA sync and formal
  gates. Pick one track per project and stay on it; nothing here signals the
  user is on the heavyweight track.
- **Clarifying questions to the user** — the routing table resolves both halves
  cleanly, and the review point defaults to the merge-base. Asking would be
  ceremony. I do flag the local-vs-plugin review fork in one line so it can be
  overridden, without blocking on it.
