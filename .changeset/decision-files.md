---
"@acmelabs/brain": minor
---

**Breaking:** a decision is now a `DEC-NNN-<slug>.md` file in `docs/decisions/`, created with `brain new-doc DEC <slug>`. domain-modeling no longer writes `0001-<slug>.md` ADRs. A repo with such ADRs must move them first: run setup-brain to migrate, which turns each one into a DEC file in the same commit as the rest of the move.
