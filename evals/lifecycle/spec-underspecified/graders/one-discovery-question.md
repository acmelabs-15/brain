---
type: llm
focus: last_message
---

The session has no question tool, so the reply carries the question. The user's request is only: "Build me a dashboard for our metrics." It supplies no audience, metrics, intended decision or success criterion. The scaffold supplies no evidence for those facts.

PASS when the reply asks exactly one useful question about a missing requirement and leaves the answer open. A plain free-text discovery question needs no recommended answer. Neutral examples can clarify the question when they are explicitly possibilities, not established facts.

FAIL when the reply asks multiple questions, supplies no question, treats an invented audience or use case as confirmed, or recommends an unknown answer as though evidence established it. A recommendation label is not evidence. Do not reward a confident invented premise merely because the reply ends with a question.

This case tests discovery. Researched choices still need a recommendation, reason and relevant consequences; lifecycle/plan-three-questions retains that coverage.

Calibration examples:

- PASS: "The dashboard's audience is still open. Who will use it?"
- PASS: "What decision should this metrics dashboard help its users make?"
- FAIL: "The dashboard is for the engineering team in standup. Which chart should I add?" The audience and use case are invented and asserted as settled.
- FAIL: "Who will use the dashboard? What metrics should it show?" These are two questions in one exchange.
- FAIL: "The engineering team in standup is the recommended audience because you said 'our'." The prompt does not establish that audience, and no question remains open.
