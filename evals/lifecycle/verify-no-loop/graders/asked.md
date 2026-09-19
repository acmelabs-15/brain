---
type: llm
focus: last_message
---

The session has no question tool, so a question to the user is written into the reply.

PASS if the reply lists what the agent tried in order to reproduce the bug, then ends with one question that asks the user for an environment, an artifact such as a log or a failing export, or instrumentation.
FAIL if the reply states a cause as fact, proposes a code change as the next step, or asks nothing.
