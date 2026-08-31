# Routing decision

## Skills invoked

**`test-driven-development`** — and nothing else. Loaded as reference for the one
test around the flag, not run as a ceremony.

Order: just the one. No chain.

## Why

The routing table in `choosing-a-skill` maps job size to route. This request lands on
row two: *"A contained change you already understand → `test-driven-development`, then
commit."*

The signals that put it there:

- The behaviour is fully specified by the user's one sentence. There is no ambiguity
  about what `--dry-run` should do — print instead of act. Nothing to interview about.
- It is a contained change: flag parsing, a boolean threaded to the mutation sites,
  print statements, one test.
- The user explicitly framed it as small. That is a constraint on the response, not
  just a description of the work.

`test-driven-development` earns its place because the flag has a genuinely testable
assertion (nothing mutated, expected lines printed) and because that test is the only
real guard against the failure mode here — a dry run that misses a side effect. It is
one test, consulted as reference, not a full TDD workflow.

## Why not the others

- **`grilling` → `to-spec` → `to-tickets` → `implement-spec`** — the full feature chain.
  This is the exact ceremony failure the skill warns about: "an interview, a spec, a
  ticket breakdown and a five-axis review on a change that needed twenty minutes."
  There is no design tree to work in rounds; `grilling`'s frontier is empty before it
  starts.
- **`interview-me` / `spec-driven-development`** — nothing is underspecified. Asking
  clarifying questions here would be inventing ambiguity to justify a process.
- **`/plan`, `/build`, `/build auto`** — `/build auto` demands a spec at a known path
  and a clean git status. Generating a spec to satisfy a command's precondition is the
  tail wagging the dog on a flag addition.
- **`/review` or `/ship`** — the five-axis review and the three-persona GO/NO-GO fan-out
  are for shipping features, not for adding a boolean.
- **`incremental-implementation`** — it triggers on changes touching more than one
  file, which this might, but the change is one coherent thread through a single call
  path. Splitting it into increments would add steps, not reduce risk.
- **`skills:*` (the ACMElabs plugin lifecycle)** — the heavyweight track with Brain
  knowledge-graph notes, JIRA sync and formal gates. `choosing-a-skill` says pick one
  track per project; for a flag addition the answer is neither track.

Skipping the rest is a normal decision, not a violation — the skill states this
explicitly.

## What the response does with it

The reply commits to doing the work now, states the five concrete steps, and flags the
one real risk (an incomplete dry run that misses a mutation site). That risk note is
the entire value a skill adds here; anything more would be the ceremony the routing
table exists to prevent.
