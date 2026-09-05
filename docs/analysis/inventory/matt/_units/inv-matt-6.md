---
unit: inv-matt-6
phase: 1
package: matt
session: 005
subagent_returned: complete
---

# Unit inv-matt-6

## Files assigned
- [x] sources/matt/docs/engineering/prototype.md (9630 bytes, 68 lines)
- [x] sources/matt/docs/engineering/research.md (9674 bytes, 74 lines)
- [x] sources/matt/docs/engineering/resolving-merge-conflicts.md (5326 bytes, 52 lines)
- [x] sources/matt/docs/engineering/setup-matt-pocock-skills.md (9359 bytes, 95 lines)
- [x] sources/matt/docs/engineering/tdd.md (10453 bytes, 95 lines)

## Outputs produced
- docs/analysis/inventory/matt/docs-engineering-prototype-md.md (4849 bytes)
- docs/analysis/inventory/matt/docs-engineering-research-md.md (4938 bytes)
- docs/analysis/inventory/matt/docs-engineering-resolving-merge-conflicts-md.md (3939 bytes)
- docs/analysis/inventory/matt/docs-engineering-setup-matt-pocock-skills-md.md (4407 bytes)
- docs/analysis/inventory/matt/docs-engineering-tdd-md.md (4544 bytes)
- docs/analysis/inventory/matt/_units/inv-matt-6.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/engineering/prototype.md`: Establishes the standard for disposable exploration, distinguishing between single-file zero-build HTML walkthroughs (logic/state machines) and multi-variant UI routes switchable via query parameters. Connects to `wayfinder` (which issues prototype decision tickets) and `to-spec` (which consumes prototype findings).
- `docs/engineering/research.md`: Emphasizes primary-source investigation via autonomous background subagents to prevent primary session context pollution. Highlights open issue #530 (recursive general-purpose agent spawning) and community agreement that research markdown files are temporary and should not permanently bloat git repositories.
- `docs/engineering/resolving-merge-conflicts.md`: Establishes the principle of resolving conflicts based on primary-source intent (commits, PRs, issue tickets) rather than diff-level heuristics, disallowing `--abort` and mandating passing automated checks before commit.
- `docs/engineering/setup-matt-pocock-skills.md`: The run-once setup foundation for engineering skills, externalizing issue tracker and triage configuration into committed markdown under `docs/agents/` so skills remain portable across GitHub, GitLab, and local markdown.
- `docs/engineering/tdd.md`: Stateless methodological specification for vertical-slice test-driven development (tracer bullets) at pre-agreed public seams. Documents the deliberate removal of the "refactor" phase from agent TDD in favor of subsequent `code-review` sessions.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~11,100 tokens (44,442 bytes across 5 files).
Approximate output tokens: ~6,000 tokens (24,000 bytes across 5 cards and unit report).
