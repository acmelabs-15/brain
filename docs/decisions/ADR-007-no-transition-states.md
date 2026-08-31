# ADR-007: No transition states — a retired skill is deleted in the commit that lands its replacement

> Status: accepted · 2026-08-31 · Peter, in PLAN-005 Part 7's session ("I don't want any
> transition states; by the time we're done with this plan all those skills like that should be
> gone; these are the new skills; nobody's using this package yet so we don't have to worry about
> backwards compatibility") · supersedes ADR-006 D4's clause "every retired skill becomes a
> pointer stub, never a live duplicate" and PRD-002 requirement 9's "retired skills stay pointer
> stubs until PLAN-001 Part 6 retires sources"

## Context

Parts 1–6 retired six skills into pointer stubs (a name, a one-line retired description,
`disable-model-invocation: true`, one redirect sentence) and kept two typed wrappers
(`grill-me`, `grill-with-docs`) pointing at the merged skill. The stubs existed for references
outside this repository; there are none — the package has no users yet.

## Decision

1. A retired skill's directory is **deleted** in the same commit that lands its replacement, and
   every live reference — call sites, routers, glossaries, the map — is retargeted in that commit.
   No stub, no wrapper, no redirect.
2. The six stubs and two wrappers on disk are deleted now: `grilling`, `spec-driven-development`,
   `to-spec`, `to-tickets`, `incremental-implementation`, `debugging-and-error-recovery`,
   `grill-me`, `grill-with-docs`. The plugin ships 40 skills.
3. `implement-spec` (Part 7) follows the same rule: deleted when the concurrent mode lands, or
   when the measurements refuse it — its parts survive in the ANA either way.
4. PLAN-001 Part 6's sweep no longer has stubs to remove; its remaining scope (the `~/.claude`
   copies, the eval redo) is unchanged.

Alternatives rejected: stubs until Part 8's closure (a transition state with no consumer to
serve); deleting only the six and keeping the wrappers (a wrapper for a skill that no longer
exists is the same ghost with a shorter name).

## Consequences

- § Continuing a plan's Step 8 route moved from `/brain:grill-with-docs` to
  `/brain:interview-me` (artifact mode) — the one word in that section that a deletion forced;
  the walk's behavior is unchanged.
- The two routers (`choosing-a-skill`, `using-agent-skills`) carry mechanical name swaps now so
  nothing dangles; Part 8 still rewrites their prose for the composed set.
- `wayfinder` is not in the retired set; its fate is a separate, open decision.
