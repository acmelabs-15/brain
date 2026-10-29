---
type: tool_order
before:
  tool: Bash
  input_match: 'scripts/setup/write\.ts(?=[^}]*--migrate)(?=[^}]*--dry-run)'
after:
  tool: Bash
  input_match: 'scripts/setup/write\.ts(?![^}]*--dry-run)(?=[^}]*--migrate)'
---

setup-brain shows the migrate mode's dry run before the run that moves the files and writes the commit.
