---
description: "Alias for `/brain:session close` — the session's Goal is done: write its Outcome, run the tool's `session close` (which gates first), mark the plan part done, commit. With no `SES-NNN` the skill asks which session in progress. Typed only; never invoked by Claude on its own."
disable-model-invocation: true
argument-hint: "SES-NNN"
---

Invoke the `session` skill's `close` act now — exactly what typing `/brain:session close …` does.

Typed after the alias: `$ARGUMENTS`

When that text contains a `SES-NNN` id, call the Skill tool with `skill: brain:session` and
`args: close SES-NNN` (that id); otherwise `args: close` — the skill then asks which session.
Anything else typed is ignored. The skill carries the whole procedure and its Done-when line; run
it rather than reproducing its steps here.
