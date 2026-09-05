---
unit: inv-addy-40
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-40

## Files assigned
- [x] sources/addy/skills/constraint-driven-development/references/floor-guard.md (5851 bytes, 100 lines)
- [x] sources/addy/skills/constraint-driven-development/SKILL.md (20880 bytes, 312 lines)
- [x] sources/addy/skills/context-engineering/SKILL.md (11070 bytes, 290 lines)
- [x] sources/addy/skills/debugging-and-error-recovery/SKILL.md (10837 bytes, 301 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md (3519 bytes)
- docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md (5939 bytes)
- docs/analysis/inventory/addy/skills-context-engineering-skill-md.md (4989 bytes)
- docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md (4193 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-40.md (3443 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/constraint-driven-development/SKILL.md` defines the project's quality enforcement contract in `CONSTRAINTS.md` and establishes tiered verification scripts (`check:fast`, `check:task`, `check:full`). It invokes reference `references/floor-guard.md` (shipped in the same skill folder) and references skills `interview-me`, `code-review-and-quality`, `test-driven-development`, `security-and-hardening`, `ci-cd-and-automation`, and `performance-optimization`. It is invoked by command `commands/constraints.toml` (and `.claude/commands/constraints.md`, `.gemini/commands/constraints.toml`), `skills/using-agent-skills/SKILL.md`, and `README.md`.
- `skills/constraint-driven-development/references/floor-guard.md` is a reference specification containing an inline Node.js script implementation (`floor-guard.mjs`) for diff-scoped enforcement of the quality floor. It is invoked exclusively by `skills/constraint-driven-development/SKILL.md`.
- `skills/context-engineering/SKILL.md` defines context curation principles across a 5-level hierarchy, context packing patterns, and ambiguity/confusion management protocols. It is referenced by `skills/spec-driven-development/SKILL.md`, `skills/using-agent-skills/SKILL.md`, `docs/adoption-guide.md`, `README.md`, and `CLAUDE.md`.
- `skills/debugging-and-error-recovery/SKILL.md` defines structured root-cause debugging under the Stop-the-Line rule. It invokes `skills/test-driven-development/SKILL.md` for test stack discovery and regression guard authoring, and is invoked across multiple lifecycle phases by `commands/build.toml`, `skills/using-agent-skills/SKILL.md`, `skills/doubt-driven-development/SKILL.md`, `skills/ci-cd-and-automation/SKILL.md`, `skills/observability-and-instrumentation/SKILL.md`, `skills/security-and-hardening/SKILL.md`, `README.md`, `CLAUDE.md`, and `AGENTS.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,160 tokens (48,638 bytes across 4 files)
Approximate tokens of output written: ~4,200 tokens (~18,640 bytes across 5 deliverables)
