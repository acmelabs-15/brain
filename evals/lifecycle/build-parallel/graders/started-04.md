---
type: tool_order
before:
  tool: Agent
  input_match: 'reverse\.test\.ts'
after:
  tool: Bash
  input_match: '"command"\s*:\s*"[^"]*\bgit\b[^"]*\b(?:merge(?!-base)|cherry-pick)\b'
---

Task 04 starts before the main session merges any task. Its brief holds the task's block from `todo.md`, whose verification line names a test file that no other scaffold file names. A build that waits for one task before it starts the next merges first, so its later starts come after a merge.
