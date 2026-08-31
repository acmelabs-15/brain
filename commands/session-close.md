---
description: "Alias for `/sessions:session close` — the session's Goal is done: write its Outcome, run the tool's `session close` (which gates first), mark the plan part done, post the closing note. Typed only; never invoked by Claude on its own."
disable-model-invocation: true
---

Invoke the `session` skill in `close` mode now — exactly what typing `/sessions:session close` does: call
the Skill tool with `skill: sessions:session`, `args: close`. Ignore any text typed after the alias,
including an `ARGUMENTS:` line appended below this one. The skill carries the whole procedure and
its Done-when line; run it rather than reproducing its steps here.
