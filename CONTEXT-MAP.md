# Context Map

This repo holds two vocabularies, and they belong to different readers. The words for **building**
the plugin are not the words the plugin **ships**, and confusing them is how a rule ends up with
two homes. Since 2026-08-31 (ADR-003) this repo is also a *consumer* of the shipped words: it
keeps its own `docs/sessions/`, gated by the tool it ships.

## Contexts

- [Authoring](./CONTEXT.md), § The artefact onward: the plugin as an artefact under construction —
  its skill, its tool, its three acts, the kinds of file that hang off the skill, and the evidence
  that it works. The words a person uses while changing this repo's code.
- [Session log](./skills/session/CONTEXT.md): the record the plugin produces — a session, an
  entry, the gate, a plan part, the three acts as a user types them. The words a person uses in a
  repo that *installed* the plugin, and in this repo's own `docs/`. Defined once, in the glossary
  section `session init` writes out (code in `skills/session/scripts/core.ts`, printed by
  `session template context`); the same section sits at the end of [CONTEXT.md](./CONTEXT.md)
  here because `init` wrote it, and that context file points at it rather than restating it.

## Relationships

- **Authoring → Session log**: one-way. The authoring context builds the thing that teaches the
  session-log context its words: `session init` writes the glossary section into a consuming
  repo's `CONTEXT.md` — this repo included.
- **The shared boundary term is `session`.** In the authoring context it names the *product*
  (the skill, the tool, the plugin). In the session-log context it names a *stream of work toward
  one Goal*. A sentence in this repo that says "session" without saying which is ambiguous; say
  "the session skill" or "a session (the stream of work)".
- **The shared word for the three things the skill does is `act`** — start, log, close — in both
  contexts; the authoring context's older word *mode* is retired.
- **A rule has one home.** Where the two contexts touch, the session-log context wins and the
  authoring context links to it. `skills/session/CLAUDE.md` lists which files must change
  together when a shipped shape changes.
- **The docs system** (`docs/plan`, `docs/decisions`, `docs/analysis`, `docs/sessions`) uses the
  session-log words for its own record and `references/project-docs-conventions.md`'s words for
  its layout.

## The carried skills' vocabularies (since PLAN-001 Part 2)

The 47 skills copied in on 2026-08-31 bring their own words, each defined in its own files and
not repeated here. Three are contexts of their own, with a glossary a reader should load before
using the words:

- [Deep modules](./skills/codebase-design/SKILL.md): *seam*, *deep module*, *depth*, *frontier*,
  *tracer bullet*, *tight loop*, *red*, *fog of war* — the vocabulary the Matt Pocock lineage
  shares (`grilling`, `to-tickets`, `implement-spec`, `wayfinder`, `diagnosing-bugs` use it
  verbatim). `choosing-a-skill` § The three lineages lists the words.
- [Loops](./skills/loop-me/SKILL.md): *loop*, *workflow*, *trigger*, *checkpoint*, *brief*,
  *push right* — `loop-me` only; its *brief* is not the session skill's reply line.
- [Triage roles](./references/issue-tracker.md): `needs-triage`, `needs-info`, `ready-for-agent`,
  `ready-for-human`, `wontfix` — a ticket's `Status:` words, distinct from a plan part's and a
  session's (`references/project-docs-conventions.md` keeps them apart).

`ask-user-question` carries its own words (*option*, *label*, *recommendation*, *preview*, *skip*)
in its `SKILL.md` and `references/`. Where a carried skill's word collides with a session-log word
— *brief*, *session*, *record* — the session-log context wins inside `docs/`, and the skill's
word inside the skill.
