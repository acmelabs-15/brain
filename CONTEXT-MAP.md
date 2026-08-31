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
  session-log words for its own record and `~/.claude/references/project-docs-conventions.md`'s
  words for its layout; a `CONTEXT-MAP` entry per carried skill arrives with PLAN-001 Part 5.
