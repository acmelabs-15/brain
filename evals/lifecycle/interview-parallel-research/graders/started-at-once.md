---
type: regex
target: trace
pattern: '^(?=.*"name": ?"Agent")(?=.*from: `?IDEA-001#0[234]\b).*$[\s\S]*?"type": ?"tool_result"[\s\S]*?^(?=.*"name": ?"Agent")(?=.*from: `?IDEA-001#0[234]\b)'
flags: m
match: not_contains
---

All three research rows start at once: in one turn, before any tool result comes back. The pattern finds an Agent call for a research row, then a tool result, then a later Agent call for a research row. That order means the rows started one turn after another, so the grader fails when it finds it.

Each line of the trace is one JSON message. A tool call's name and its input sit on one line, whether a line holds one content block or a whole message, and every result of a turn follows all of that turn's calls. The quotes the pattern names are JSON's own, so a quote inside a prompt, which the trace escapes, never matches them.

No research record exists in the scaffold, so no row is started a second time to continue one.
