# Context Map

This repo holds two vocabularies, and they belong to different readers. The words for **building**
the plugin are not the words the plugin **ships**, and confusing them is how a rule ends up with
two homes.

## Contexts

- [Authoring](./CONTEXT.md): the plugin as an artefact under construction — its skill, its tool,
  its five modes, the kinds of file that hang off the skill, and the evidence that it works.
  The words a person uses while changing this repo.
- [Session log](./skills/session/CONTEXT.md): the record the plugin produces — a session, an
  entry, the gate, a plan part, the handoff. The words a person uses in a repo that *installed*
  the plugin. Defined once, in the glossary section `session init` writes out (code in
  `skills/session/scripts/templates.ts`, printed by `session template context`); that context
  file points at it rather than restating it.

## Relationships

- **Authoring → Session log**: one-way. The authoring context builds the thing that teaches the
  session-log context its words: `session init` writes
  the glossary section (`session template context`) into a consuming repo's `CONTEXT.md`. The
  session-log vocabulary never describes this repo's own work — this repo keeps no
  `docs/sessions/`.
- **The shared boundary term is `session`.** In the authoring context it names the *product*
  (the skill, the tool, the plugin). In the session-log context it names a *stream of work toward
  one Goal*. A sentence in this repo that says "session" without saying which is ambiguous; say
  "the session skill" or "a session (the stream of work)".
- **A rule has one home.** Where the two contexts touch, the session-log context wins and the
  authoring context links to it. `skills/session/CLAUDE.md` lists which files must change
  together when a shipped shape changes.
