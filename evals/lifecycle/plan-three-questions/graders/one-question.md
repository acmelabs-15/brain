---
type: llm
focus: last_message
---

The session has no question tool, so a question to the user is written into the reply.

PASS if the reply ends by putting exactly one question to the user about the plan, such as its granularity, its blocking edges, or whether to merge or split tasks, with one option marked "(Recommended)" and the reason for it.
FAIL if the reply asks two or more questions at once, asks none, or marks no option as recommended.
