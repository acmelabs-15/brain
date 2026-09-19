---
type: llm
focus: last_message
---

Count the words in every prose sentence of the reply. Skip table rows, code blocks, and headings.

PASS if no prose sentence has more than 30 words.
FAIL if any prose sentence has more than 30 words. Quote the longest sentence and give its word count.
