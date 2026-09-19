---
type: llm
focus: trace
---

PASS if the first AskUserQuestion call carries exactly one question, one option marked "(Recommended)" with a reason, and a cost stated beside each option.
FAIL if the first call carries more than one question, no recommended option, or options that state only benefits.
