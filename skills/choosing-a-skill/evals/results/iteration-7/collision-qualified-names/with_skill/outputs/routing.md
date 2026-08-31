# Routing

## Summary

Two requests, two name collisions, one ordering constraint. Both asks land squarely in the
"Name collisions with installed plugins" table in `choosing-a-skill`, which is the section that
governs here.

## Skills invoked, in order

### 1. Review — `code-review` (local) OR `code-review:code-review` (plugin), decided by one question

Not committed until the user answers. The collisions table says a bare "review this" is
**ambiguous by construction**: `code-review` names a local skill *and* is the prefix of the
plugin's `code-review:code-review`. So I name both in full, qualified form before picking,
rather than reaching for whichever fires first.

| Candidate | What it actually is | When it wins |
| --- | --- | --- |
| `code-review` (local) | Two fixed axes — Standards + Spec — parallel sub-agents, Fowler smell baseline. Wants an originating issue or spec; **skips the Spec axis without one**. | There is a spec to review against — that is the axis it adds. |
| `code-review:code-review` (plugin) | Resolves a named scope (PR ref, branch, diff range or path), plans one row per review cell before dispatching, then dedupes, ranks and triages, reporting per-unit coverage including cells it never reached. | No spec, or coverage of what went unreviewed matters. |

The discriminator is **not** "does it take a branch diff" — the table is explicit that both do,
the plugin is not repo-only. It is **is there an originating issue or spec**. That is the one
question put to the user.

Traps deliberately avoided:
- Comparing the local `code-review` only against same-lineage neighbours like
  `code-review-and-quality` (Lineage A) — the table warns this resolves an easier question than
  the real one and lands on the wrong side without noticing the fork. `code-review-and-quality`
  is Lineage A: an encyclopedic checklist to consult, not a workflow to execute at a request.
- `/review` — the Lineage A lifecycle command. It is a thin entry point into the five-axis
  Lineage A skill, and the routing table's standing rule is that where the lifecycle chain is
  ceremony for the job, skipping it is normal. The named collision is the live question, not the
  lifecycle.
- `skills:review` — the `skills@ACMElabs` heavyweight parallel lifecycle. The rule is **pick one
  track per project and stay on it**; nothing here says Peter is on the heavyweight track, so the
  lighter local/plugin track holds.
- `code-review:reviewer` and `code-review:confidence-scorer` are the plugin's internal sub-agents,
  not the plugin skill. Meeting them means I'm in the right namespace and still haven't found
  `code-review:code-review`.

### 2. Cleanup — `code-simplifier:code-simplifier` (plugin). Committed.

Second collision, and this one the table resolves outright rather than conditionally:

| Candidate | What it is | Verdict |
| --- | --- | --- |
| `code-simplification` (local) | 331-line reference | Advises only |
| `code-simplifier:code-simplifier` (plugin) | Agent that runs tests between each edit and reverts breakage | **Plugin.** It verifies. |

`/code-simplify` is the local command entry point and **routes to the plugin** anyway, so
invoking the plugin skill directly and invoking `/code-simplify` reach the same place. Naming
the skill in qualified form is clearer about which artifact runs.

Also worth noting from the plugin skill's own declared scope: it is for cases where the
deliverable is the cleaned-up code itself and behaviour must stay identical, and explicitly not
for code that is broken or whose tests are failing. That constraint is what fixes the ordering.

## Ordering, and why the middle step is conditional

Review → triage → fix → simplify.

The user's own sequencing ("once that's done") already puts review first, and the constraint
confirms it: `code-simplifier:code-simplifier` preserves behaviour by construction, so any
correctness finding from the review has to be fixed *before* it runs. Simplifying wrong code
preserves the wrong behaviour.

The reply commits to one skill now (the review, once the spec question is answered) and marks
the rest conditional, rather than presenting a numbered list of skills as if all of them were
settled commitments. The shape of the middle step genuinely depends on what the review returns.

## Skills deliberately not invoked

- `grilling` → `to-spec` → `to-tickets` → `implement-spec` — that chain is for a real feature with
  an unclear spec. This is a finished branch heading for merge.
- `diagnosing-bugs` — nothing is reported broken. No symptom, no tight loop to build.
- `/ship` — fans out `code-reviewer`, `security-auditor`, `test-engineer` for a GO/NO-GO with a
  rollback plan. That is a production-launch decision, not a pre-merge branch review. If the merge
  *is* a release, `/ship` becomes the right call and the routing changes.
- `security-review`, `test-driven-development`, `documentation-and-adrs` — available as reference
  if the review surfaces something in their territory, not as steps in the plan.
- `using-agent-skills` — its 16-step "typical sequence" is an inventory of the library, not a
  recommendation. Routed from the table instead.

## What I have not checked

The branch name and merge base are unknown, and I have not looked for a repo. Both are asked for
in the reply rather than assumed.
