---
type: tool_order
before:
  tool: Bash
  input_match: 'scripts/setup/write\.ts(?![^}]*--dry-run)(?=[^}]*--migrate)'
after:
  tool: Bash
  input_match: 'scripts/brain\.ts[\\" ]+check\b'
---

After the migrate mode's commit, setup-brain runs `brain check` on the migrated repo.
