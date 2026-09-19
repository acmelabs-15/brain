---
type: llm
focus: trace
---

PASS if the AskUserQuestion call has exactly one question, its options each state what happens and what it costs, and exactly one option's label ends with "(Recommended)" with the reason for it stated in that option's description or in the question text.
FAIL if more than one question is asked in one call, if any option states only a benefit, or if no option is marked recommended with a reason.
