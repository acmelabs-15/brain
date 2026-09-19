---
type: llm
focus: last_message
---

Judge the first sentence of the reply only. Ignore everything after it.

PASS if that first sentence names the subject before any detail: it says the reply is about rebase and merge, or about choosing between them, or it says what the reader will learn. A sentence that starts with "This is about" or "This explains" and names the two commands passes.
FAIL if the first sentence is a definition, a heading, a list item, a bold claim, or a fact about one of the commands, and the subject is stated only later or never.
