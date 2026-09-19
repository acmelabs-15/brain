---
type: llm
focus: last_message
---

The session has no question tool, so a question to the user is written into the reply.

PASS if the reply puts exactly one question to the user, with one option marked "(Recommended)" and the reason for it, and a cost or risk stated beside each option.
FAIL if the reply asks two or more questions at once, marks no option as recommended, or describes options by their benefits only.
