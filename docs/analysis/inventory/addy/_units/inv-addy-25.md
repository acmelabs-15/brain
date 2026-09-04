---
unit: inv-addy-25
phase: 1
package: addy
session: 015
subagent_returned: complete
---

# Unit inv-addy-25

## Files assigned
- [x] `external/source-driven-development.md` (26,358 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-source-driven-development-md.md` (16,687 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-25.md` (3,450 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Build Phase Alignment and Relationship to inv-addy-23**:
  `external/source-driven-development.md` positions `source-driven-development` alongside `incremental-implementation` (`inv-addy-23`), `test-driven-development` (`inv-addy-22`), and `context-engineering` in the `Build phase`, explicitly associating the phase with command `/build`.
- **Command Binding Ambiguity & Lack of Dedicated Command**:
  While the external web landing page displays `Command /build` in its sidebar card, in-repo command definitions in `commands/build.toml`, `.claude/commands/build.md`, and `.gemini/commands/build.toml` establish that `/build` primarily drives `incremental-implementation` and `test-driven-development` (and references `planning-and-task-breakdown`, `debugging-and-error-recovery`, and `doubt-driven-development`), but never invokes or references `source-driven-development`. Furthermore, while `hooks/SDD-CACHE.md:51` mentions `/source-driven-development`, no slash command file exists for this skill in the repository.
- **Skill Anatomy Template vs Implementation Reality**:
  The external page asserts a rigid 6-part anatomy ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"). In the underlying repository skill `skills/source-driven-development/SKILL.md`, the workflow section is titled `The Process` (featuring a 4-step diagram and detailed subsections for Detect Stack and Versions, Fetch Official Documentation, Implement Following Documented Patterns, and Cite Your Sources), rationalizations are titled `## Common Rationalizations`, and an important `Retrieval Safety` subsection outlines prompt injection defenses not represented in the external template.
- **Triggering and Boundary Differences**:
  The external page simplifies "Use when" to a single clause ("You want authoritative, source-cited code for any framework or library."), omitting the 6 granular triggering conditions in `SKILL.md:14-19` as well as the 3 explicit negative boundaries ("When NOT to use" at `SKILL.md:21-25`).
- **Implicit Lifecycle Mapping Gap in AGENTS.md**:
  While `CLAUDE.md:23`, `README.md:252, 360`, and `skills/using-agent-skills/SKILL.md:175` classify `source-driven-development` under `Build`, `AGENTS.md:42` (Lifecycle Mapping) maps `BUILD → incremental-implementation + test-driven-development`, omitting `source-driven-development` from the implicit command lifecycle.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,590 tokens (26,358 bytes across 1 file).
- Approximate tokens of output written: ~4,300 tokens across 1 inventory card and 1 unit report.
