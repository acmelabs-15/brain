---
type: regex
target: trace
pattern: '^(?=[^\n]*"name": ?"Bash")[^\n]*?"command": ?"(?:[^"\\\n]|\\.)*?scripts/setup/write\.ts(?=(?:[^"\\\n;&|]|\\[^n])*?--migrate\b)(?!(?:[^"\\\n;&|]|\\[^n])*?--dry-run\b)(?:(?:[^"\\\n]|\\.)*?scripts/brain\.ts[\\" ]+check\b|[^\n]*\n(?:[^\n]*\n)*?(?=[^\n]*"name": ?"Bash")[^\n]*?"command": ?"(?:[^"\\\n]|\\.)*?scripts/brain\.ts[\\" ]+check\b)'
flags: m
---

After the migrate mode's commit, setup-brain runs `brain check` on the migrated repo. The check runs later in the migrate's own Bash call, or in a later Bash call. The CI run of 2026-10-30 ran both in one call: `write.ts --migrate ...; brain.ts check`.

A `tool_order` grader cannot accept that one call. It passes only when the first call that matches `before` comes before the first call that matches `after`, and one call never comes before itself.

The migrate is one shell command that runs `scripts/setup/write.ts` with `--migrate` and with no `--dry-run`. That command ends at `;`, `&`, `|` or a line break. The pattern reads each command as a JSON string.
