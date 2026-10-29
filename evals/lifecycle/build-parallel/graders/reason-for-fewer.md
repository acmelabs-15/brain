---
type: llm
focus: last_message
---

The plan's first wave holds five tasks that share no file, and the cap is 8, so all five can start at once. The tasks run in sub-agents, so judge the closing summary.

PASS if the summary says the five tasks of the first wave started at once, or it reports that fewer started at once and names the reason, and that reason is a fact about the tasks or the host, not caution.
FAIL if the summary does not say how many tasks started at once, or it reports fewer than five at once with no reason, or with caution as the reason ("to be safe", "one at a time to be careful").
