---
unit: inv-addy-43
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-43

## Files assigned
- [x] sources/addy/skills/idea-refine/examples.md (20284 bytes, 239 lines)
- [x] sources/addy/skills/idea-refine/frameworks.md (5404 bytes, 100 lines)
- [x] sources/addy/skills/idea-refine/refinement-criteria.md (5738 bytes, 114 lines)
- [x] sources/addy/skills/idea-refine/scripts/idea-refine.sh (342 bytes, 16 lines)
- [x] sources/addy/skills/idea-refine/SKILL.md (8111 bytes, 179 lines)
- [x] sources/addy/skills/incremental-implementation/SKILL.md (9507 bytes, 250 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-idea-refine-examples-md.md (4508 bytes)
- docs/analysis/inventory/addy/skills-idea-refine-frameworks-md.md (3393 bytes)
- docs/analysis/inventory/addy/skills-idea-refine-refinement-criteria-md.md (3144 bytes)
- docs/analysis/inventory/addy/skills-idea-refine-scripts-idea-refine-sh.md (2608 bytes)
- docs/analysis/inventory/addy/skills-idea-refine-skill-md.md (5717 bytes)
- docs/analysis/inventory/addy/skills-incremental-implementation-skill-md.md (5048 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-43.md

## Scripts executed
- skills/idea-refine/scripts/idea-refine.sh, `bash skills/idea-refine/scripts/idea-refine.sh`, 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `idea-refine` is an early-stage exploration skill in `addy:Define`. It facilitates structured divergent thinking (restating as "How Might We", asking 3-5 sharpening questions, exploring 5-8 variations across thinking lenses) and convergent evaluation (clustering, stress-testing against value/feasibility/differentiation, surfacing hidden assumptions) to produce an actionable one-pager stored in `docs/ideas/`. It complements `interview-me` (intent extraction) and `spec-driven-development` (spec drafting) in the Define phase.
- `skills/idea-refine/SKILL.md` exhibits doc-drift relative to `docs/skill-anatomy.md` by retaining legacy headings (`How It Works`, `Usage`, `Output`, `Anti-patterns to Avoid`), an architectural exception explicitly documented in `scripts/lib/skill-lint.js:59`.
- `incremental-implementation` is the core build-phase execution skill (`addy:Build`), mandating development in thin vertical slices through the five-step Increment Cycle (Implement -> Test -> Verify -> Commit -> Next slice). It defines three slicing strategies (Vertical, Contract-First, Risk-First), strict simplicity and scope rules (Rule 0 and Rule 0.5), feature flags for WIP isolation, and completion verification against `references/definition-of-done.md`. It is invoked directly by `/build` (`commands/build.toml`, `.claude/commands/build.md`) as well as `spec-driven-development`, `using-agent-skills`, and `deprecation-and-migration`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,347 tokens (49,386 bytes across 6 files).
Approximate tokens of output written: ~6,750 tokens (~26,900 bytes across 7 deliverables).
