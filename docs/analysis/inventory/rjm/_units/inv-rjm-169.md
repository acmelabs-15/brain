---
unit: inv-rjm-169
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-169

## Files assigned
- [x] `.claude/skills/software-engineering-library/references/clean-architecture.md`
- [x] `.claude/skills/software-engineering-library/references/data-intensive-applications.md`
- [x] `.claude/skills/software-engineering-library/references/domain-driven-design.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-clean-architecture-md.md` — 8394 bytes
- `docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-data-intensive-applications-md.md` — 9917 bytes
- `docs/analysis/inventory/rjm/claude-skills-software-engineering-library-references-domain-driven-design-md.md` — 9873 bytes

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/software-engineering-library/references/clean-architecture.md` is routed by `.claude/skills/software-engineering-library/SKILL.md:24, 37` and referenced by `.claude/skills/review/references/architect.md:52` and `.claude/skills/requirements-interview/SKILL.md:114`. It designates the `architect` agent as the boundary guardian for boundary reviews.
- `.claude/skills/software-engineering-library/references/data-intensive-applications.md` contains a `doc-drift` defect at line 146, referencing `scripts/memory_enhancement/reflection.py::reinforce_memories` which was removed from that module (explicitly tested in `tests/test_memory_hook_reflection.py:183`). It is also referenced by `.agents/architecture/ADR-060-rework-warning-session-log-persistence.md:164`.
- `.claude/skills/software-engineering-library/references/domain-driven-design.md` directly invokes `.claude/skills/software-engineering-library/references/enterprise-patterns.md:8` (which is inventoried in part 2 of this skill). It is also referenced by `.claude/skills/review/references/architect.md:52` and `.claude/skills/requirements-interview/SKILL.md:114`.
- The parent routing skill `.claude/skills/software-engineering-library/SKILL.md` was read in full for routing and invocation context.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~13,350 tokens (48,562 bytes source files + 4,840 bytes SKILL.md context).
Approximate output written: ~7,600 tokens (28,184 bytes across 3 cards + ~2,200 bytes unit report).
