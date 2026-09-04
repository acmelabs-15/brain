---
unit: inv-addy-36
phase: 1
package: addy
session: 014
subagent_returned: complete
---

# Unit inv-addy-36

## Files assigned
- [x] `skills/deprecation-and-migration/SKILL.md` (12,516 bytes)
- [x] `skills/documentation-and-adrs/SKILL.md` (9,782 bytes)
- [x] `skills/doubt-driven-development/SKILL.md` (16,499 bytes)
- [x] `skills/frontend-ui-engineering/SKILL.md` (10,711 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-deprecation-and-migration-skill-md.md` (11,552 bytes)
- `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md` (9,074 bytes)
- `docs/analysis/inventory/addy/skills-doubt-driven-development-skill-md.md` (12,964 bytes)
- `docs/analysis/inventory/addy/skills-frontend-ui-engineering-skill-md.md` (9,581 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-36.md` (4,970 bytes)

## Scripts executed
none — all assigned files are markdown skills with no executable scripts.

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Phase Placement and Lifecycle Classification across the Unit**:
  - `skills/deprecation-and-migration/SKILL.md` is positioned in `addy:Ship` (`README.md:279, 373`, `CLAUDE.md:26`), representing safe decommissioning, compulsory vs. advisory deprecation, and expand/contract database schema migrations.
  - `skills/documentation-and-adrs/SKILL.md` is placed in `addy:Ship` (`README.md:280, 374`, `CLAUDE.md:26`), establishing ADR conventions, inline documentation standards, and agent rules files.
  - `skills/doubt-driven-development/SKILL.md` is classified as `addy:Build` (`CLAUDE.md:23`, `README.md:253, 361`, `commands/build.toml:38`), functioning as an in-flight adversarial verification posture for non-trivial implementation decisions. Note cross-unit contradiction with `skills/interview-me/SKILL.md:14` which claims it as a Define-phase skill.
  - `skills/frontend-ui-engineering/SKILL.md` is placed in `addy:Build` (`CLAUDE.md:23`, `README.md:254, 362`, `AGENTS.md:32`), providing concrete standards for production-quality UI, WCAG 2.1 AA accessibility, and anti-AI-aesthetic styling.
- **Architectural Loading and Orchestration Constraints (`doubt-driven-development`)**:
  `skills/doubt-driven-development/SKILL.md:42-48` explicitly restricts execution to the main-session orchestrator. Personas in `agents/` must not load this skill in their `skills:` frontmatter to avoid recursive subagent spawn violations (`references/orchestration-patterns.md` Anti-Pattern B). Inside subagent execution contexts where nested spawning is disallowed by Claude Code, it mandates either surfacing to the user or falling back to degraded self-questioning.
- **Database Schema Migration Rigor (`deprecation-and-migration`)**:
  Provides a formal 5-step worked example of Expand/Contract column renaming (`EXPAND` -> `MIGRATE` / dual-write + batch backfill -> `CONTRACT`), enforcing that destructive schema operations are decoupled from application code and executed in independent deploys with tested rollback (`down`) paths. Directly invokes `incremental-implementation` (`skills/incremental-implementation/SKILL.md:183`).
- **Documentation Standards for Autonomous Agents (`documentation-and-adrs`)**:
  Emphasizes repo convention discovery first (`.adr-dir`, MADR, `adr-tools`) before defaulting to `docs/decisions/`. Highlights that written rationale and ADRs directly prevent agents from reopening settled architectural questions or silently introducing incompatible patterns.
- **Systematic Rejection of AI-Generated UI Artifacts (`frontend-ui-engineering`)**:
  Includes an 8-point anti-pattern taxonomy rejecting common LLM UI traits (purple gradients, rounded-2xl everywhere, stock cards, placeholder text), coupling design system adherence with strict WCAG 2.1 AA accessibility (keyboard focus trapping, ARIA labeling, semantic tokens, mobile-first responsive breakpoints 320px/768px/1024px/1440px). Links to `references/accessibility-checklist.md`.
- **Pre-D-013 Draft Remediation**:
  Audited and resolved all 24 initial quotation failures across the 4 pre-existing draft cards, corrected out-of-sync line citations, eliminated ungrounded citations in `documentation-and-adrs`, verified byte-exact line locations, unified unit identifiers to `inv-addy-36`, and standardized middle-dot (`·`) delimiters in `## Defects`. All 4 cards pass `quote-check.ts` with 0 failures (239 total PASS checks).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,377 tokens (49,508 bytes across 4 files).
- Approximate tokens of output written: ~12,500 tokens across 4 inventory cards and 1 work-unit report.
