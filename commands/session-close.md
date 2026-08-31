---
description: "Alias for `/session close` — the session's Goal is done: write its Outcome, run `session close`, update the plan it served, post the closing note. Typed only; never invoked by Claude on its own."
disable-model-invocation: true
---

Invoke the `session` skill in `close` mode now — exactly what typing `/session close` does: call
the Skill tool with `skill: session:session`, `args: close`. Ignore any text typed after the command,
including an `ARGUMENTS:` line appended below this one. The skill carries the whole procedure and
its completion criterion; run it rather than reproducing its steps here.
