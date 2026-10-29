---
type: tool_order
before:
  tool: Bash
  input_match: '\bbun\s+(?:--version|-v)\b'
after:
  tool: Bash
  input_match: 'scripts/setup/write\.ts'
---

setup-brain checks for bun before anything else, since every brain script runs with it.
