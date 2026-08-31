# Issue tracker

Where tickets, maps and their blocking edges live. Skills that create or read tickets
(`to-tickets`, `to-spec`, `triage`, `code-review`, `wayfinder`) consult this file when the repo
does not carry its own tracker doc.

**Resolution order — first hit wins:**

1. **The repo's own tracker doc**, `docs/agents/issue-tracker.md`. If it exists, it governs, and
   nothing below applies.
2. **The repo's evident convention.** A populated issue tracker with a labelling scheme already in
   use, a numbered docs series that tickets plainly belong to (`docs/plan/PLAN-NNN`, an `issues/`
   tree), or a `CLAUDE.md` naming where work items live. Follow it, including its file-naming
   pattern and any index to update.
3. **The local-markdown default below.**

Ask which tracker a repo uses only when the choice changes what you would write and steps 1–2 leave
it genuinely open. Otherwise take the default and say where you saved things.

## The local-markdown default

One file per ticket:

```text
.scratch/<feature-slug>/issues/<NN>-<slug>.md
```

Numbered from `01` in dependency order, blockers first. One ticket per file — never a single
combined file. Each ticket's **Blocked by** lists the numbers or titles it depends on, or
"None (can start immediately)". `to-tickets` carries the ticket template.

The **frontier** is any ticket whose blockers are all resolved. For a purely linear chain that is
simply top to bottom.

## Triage labels

Canonical role names, used directly as the `Status:` line in local-markdown tickets. A real tracker
may spell them differently; map to its strings and record the mapping in the repo's own tracker doc.

| Role | Kind | Means |
| --- | --- | --- |
| `needs-triage` | state | Unlabelled work that has not been assessed yet — the usual entry state. |
| `needs-info` | state | Blocked on the reporter; returns to `needs-triage` when they reply. |
| `ready-for-agent` | state | A brief is attached; an agent should take the next step. |
| `ready-for-human` | state | Ready for a human to decide or merge. |
| `wontfix` | state | Closed deliberately without action. |

Every triaged item carries exactly one category role and one state role. Conflicting state roles get
flagged to the maintainer before anything else happens.

## Wayfinding operations

How `wayfinder` expresses its map under the local-markdown default. A repo tracker doc that supports
real child issues and blocking relationships should override these with its native forms.

| Operation | Local-markdown form |
| --- | --- |
| The map | `.scratch/<feature-slug>/MAP.md` — the index: decisions made, each gisted and linked to its ticket. Never restates a decision. |
| A child ticket | A numbered file in the same `issues/` directory, linked from the map. |
| Ticket type | A `Type:` line — one of `research`, `prototype`, `grilling`, `task`. |
| Blocking | The ticket's **Blocked by** line, naming blocking ticket numbers. |
| Frontier query | Read the `issues/` directory; take every ticket whose blockers are all resolved. |
| Resolving a ticket | Write the answer into the ticket, set `Status: ready-for-human`, and update the map's gist line. |
