---
unit: inv-addy-40
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-40

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/constraint-driven-development/references/floor-guard.md (5851 bytes, 100 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/constraint-driven-development/SKILL.md (20880 bytes, 312 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/context-engineering/SKILL.md (11070 bytes, 290 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/debugging-and-error-recovery/SKILL.md (10837 bytes, 301 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md (8579 bytes)
- docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md (10916 bytes)
- docs/analysis/inventory/addy/skills-context-engineering-skill-md.md (9043 bytes)
- docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md (7995 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-40.md (4870 bytes)

## Scripts executed
- sources/addy/skills/constraint-driven-development/references/floor-guard.md: `node --input-type=module -e "$(sed -n '19,92p' sources/addy/skills/constraint-driven-development/references/floor-guard.md)" -- --base HEAD` (exit 0; output: `floor-guard: clean`)
- sources/addy/skills/constraint-driven-development/references/floor-guard.md: `node --input-type=module -e "$(sed -n '19,92p' sources/addy/skills/constraint-driven-development/references/floor-guard.md)" -- --base nonexistent-branch` (exit 2; output: `floor-guard: no merge base against nonexistent-branch`)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **CDD Floor Guard and Agent Anti-Degradation**: `skills/constraint-driven-development/SKILL.md` and `skills/constraint-driven-development/references/floor-guard.md` formulate the foundational defensive layer against autonomous agent shortcuts ("cheapest road to green"). The floor guard mechanically catches 5 specific diff-scoped evasions: silenced checkers (`@ts-ignore`, `eslint-disable`, etc.), tests made easier (`.skip`, removed test files), stripped assertions, unimplemented stubs (`throw new Error("Not implemented")`, empty `catch {}`), and unauthorized `CONSTRAINTS.md` exception rows or lowered thresholds.
- **Execution Timing Budget and Lifecycle Placement**: CDD establishes strict latency budgets across lifecycle phases: `<5s` for fast edit-loop checks (`check:fast` — types, lint, secrets, floor), `<90s` for task-end checks (`check:task` — related tests, diff-scoped coverage), minutes for review (`check:full`), and CI for exhaustive scans. This directly interfaces with `skills/ci-cd-and-automation/SKILL.md` (inv-addy-39) and commands (`/build`, `/test`, `/review`, `/ship`).
- **Context Engineering Hierarchy and Security Trust Tiers**: `skills/context-engineering/SKILL.md` introduces the five-tier context hierarchy (Rules Files -> Specs/Architecture Docs -> Relevant Source Files -> Error Output -> Conversation History) and classifies inputs into three security trust tiers (`Trusted`, `Verify before acting on`, `Untrusted`), explicitly identifying prompt injection risks in external docs and configs. It also provides the "Inline Planning Pattern" (`PLAN: ... → Executing unless you redirect`) and structured confusion resolution prompts (`CONFUSION:`, `MISSING REQUIREMENT:`).
- **Stop-the-Line Rule & Systematic Debugging**: `skills/debugging-and-error-recovery/SKILL.md` defines the Stop-the-Line protocol (STOP, PRESERVE, DIAGNOSE, FIX, GUARD, RESUME) and the six-step triage checklist (Reproduce, Localize, Reduce, Fix the Root Cause, Guard Against Recurrence, Verify End-to-End). It reinforces prompt injection defense by treating all error output, stack traces, and logs as untrusted data to analyze rather than executable instructions.
- **Cross-unit corrections**: Also resolved an off-by-one citation in `docs/analysis/inventory/addy/skills-documentation-and-adrs-skill-md.md:62` (line 231 instead of 232 for `Changelog Maintenance`), enabling 0 FAIL verification across documentation and ADR inventory cards.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,160 tokens (48,638 bytes across 4 files)
- Approximate tokens of output written: ~10,350 tokens (41,402 bytes across 4 inventory cards + unit report)
