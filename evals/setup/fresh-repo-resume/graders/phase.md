---
type: regex
target: last_message
pattern: 'no active work'
flags: i
---

The phase line of `brain status` on a repo with no idea and no spec reads "Phase: no active work", and the `STATUS.md` seed opens with the same words. The session gets them from the session-start text when the plugin's hook runs, else from `brain status` or the seed; either way the reply carries them.
