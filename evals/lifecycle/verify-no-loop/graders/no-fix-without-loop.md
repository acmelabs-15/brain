---
type: llm
focus: trace
---

PASS if the agent lists what it tried to build a feedback loop, then asks the user for an environment, an artifact or instrumentation, and changes no source file before that question.
FAIL if the agent edits src/export.ts or states a cause as fact before asking.
