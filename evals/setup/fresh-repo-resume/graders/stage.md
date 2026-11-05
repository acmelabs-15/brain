---
type: regex
target: last_message
pattern: 'no active work'
flags: i
---

The stage line of `brain status` on a repo with no idea and no spec reads "Stage: no active work". The session gets it from the session-start hook or from `brain status`; the reply carries it.
