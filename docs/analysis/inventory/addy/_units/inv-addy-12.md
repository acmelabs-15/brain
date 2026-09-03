---
unit: inv-addy-12
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-12

## Files assigned
- [x] `skills/idea-refine/examples.md` (20,284 bytes)
- [x] `skills/idea-refine/frameworks.md` (5,404 bytes)
- [x] `skills/idea-refine/scripts/idea-refine.sh` (342 bytes)
- [x] `skills/idea-refine/SKILL.md` (8,111 bytes)
- [x] `skills/idea-refine/refinement-criteria.md` (5,738 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-idea-refine-examples-md.md` (6,813 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-frameworks-md.md` (4,149 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-scripts-idea-refine-sh.md` (3,430 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-SKILL-md.md` (8,063 bytes)
- `docs/analysis/inventory/addy/skills-idea-refine-refinement-criteria-md.md` (5,728 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-12.md` (3,450 bytes)

## Scripts executed
- `sources/addy/skills/idea-refine/scripts/idea-refine.sh` — `cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh` — Exit code: `0` (Initial run: created directory `docs/ideas`, stdout: `{"status": "ready", "directory": "docs/ideas"}`, stderr: `Created directory: docs/ideas`)
- `sources/addy/skills/idea-refine/scripts/idea-refine.sh` — `cd sources/addy && bash skills/idea-refine/scripts/idea-refine.sh` — Exit code: `0` (Idempotent run: directory exists, stdout: `{"status": "ready", "directory": "docs/ideas"}`, stderr: `Directory already exists: docs/ideas`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Lifecycle Positioning & Upstream/Downstream Integration:**
  `idea-refine` resides in the `addy:Define` phase (`CLAUDE.md:21`, `README.md:354`, `sources/addy-external/idea-refine.md:5`). Upstream, it consumes rough concepts from user ideas or intent-gathering from `interview-me` (`interview-me/SKILL.md:14, 182, 225`). Downstream, it produces structured markdown one-pagers (`docs/ideas/[idea-name].md`) that feed directly into `spec-driven-development` and `planning-and-task-breakdown` (`using-agent-skills/SKILL.md:137`).
- **Architectural Exemption in Addy Linter:**
  In `sources/addy/scripts/lib/skill-lint.js:59`, `idea-refine` is explicitly listed under `SECTION_EXEMPT_SKILLS` with the note: `'Legacy structure predating skill-anatomy.md — uses How-It-Works/Usage/Anti-patterns instead of standard headings. Tracked for conformance in https://github.com/addyosmani/agent-skills/issues'`. This accounts for its non-standard section headers and absence of the mandated `Rationalizations` section.
- **Discrepancy Between Invocation Examples and Slash Commands:**
  `examples.md` consistently demonstrates triggering ideation sessions with `/ideate [idea]` (lines 9, 132, 178). However, inspection of `sources/addy/.claude/commands/` confirms no `ideate.md` exists among the 9 defined slash commands. In practice, the skill is invoked conversationally via frontmatter triggers ("Help me refine this idea", "Ideate on [concept]", "Stress-test my plan").
- **Evaluative Rigor and Anti-Sycophancy:**
  `refinement-criteria.md` and `examples.md` provide a high-value model for conversational agent discipline: demanding acute problem validation (Painkiller vs. Vitamin), a 6-tier differentiation hierarchy (where "Cheaper" is weakest and "New capability" is strongest), a 3-tier Assumption Audit (Must Be True dealbreakers), and mandatory scope pruning via an explicit "Not Doing" list before any engineering planning begins.
- **Mock Codebase Reference:**
  The citation to `src/models/document.ts:45` in `examples.md:152` is a fictional illustrative example within a hypothetical document editor to demonstrate codebase-aware ideation, not an unresolved path in the repository.

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~9,970 tokens (39,879 bytes across 5 assigned files, plus cross-reference files).
- Tokens of output written: ~7,500 tokens across 5 inventory entries and 1 unit report.
