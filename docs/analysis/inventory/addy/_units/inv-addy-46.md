---
unit: inv-addy-46
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-46

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/source-driven-development/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/spec-driven-development/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/test-driven-development/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/using-agent-skills/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/addy/skills-source-driven-development-skill-md.md` (6813 bytes)
- `docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md` (7838 bytes)
- `docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md` (10575 bytes)
- `docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md` (7984 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-addy-46 encompasses the core development discipline and routing skills for the Addy package: `using-agent-skills` (router/operating standard), `spec-driven-development` (`addy:Define`), `source-driven-development` (`addy:Build`), and `test-driven-development` (`addy:Verify`).
- `using-agent-skills` serves as the central router and meta-cognitive anchor for all 24 skills across the lifecycle, defining anti-sycophancy, scope discipline, confusion management, simplicity enforcement, and the universal Definition of Done (`references/definition-of-done.md`, inv-addy-37).
- `spec-driven-development` establishes the gated workflow (Specify → Plan → Tasks → Implement) and introduces Phase 0 capability mapping for multi-capability initiatives. It hands off to `planning-and-task-breakdown` (inv-addy-45), `api-and-interface-design` (inv-addy-27), `incremental-implementation` (inv-addy-35), and `test-driven-development`.
- `source-driven-development` mandates stack detection, fetching version-specific official documentation, adhering to documented patterns, citing exact source URLs in code, and safe handling of retrieved content against prompt injection (`LLM01: Prompt Injection`, linking to `security-and-hardening` in inv-addy-45 and `hooks/SDD-CACHE.md`).
- `test-driven-development` enforces the Red-Green-Refactor cycle, the Prove-It Pattern for bug fixes, the Test Pyramid (80/15/5) with resource sizing (Small/Medium/Large), DAMP over DRY, state-based assertions, subagent testing isolation, and Chrome DevTools MCP browser testing (`skills/browser-testing-with-devtools`, inv-addy-28). It also surfaces a cross-file contradiction: README.md:363 and CLAUDE.md:23 classify TDD under Build, whereas using-agent-skills:180 categorizes it under Verify.
- None of this unit's files appear in `docs/analysis/manifest/addy-duplicates.md` (no ledger duplicates).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,250 tokens (49,021 bytes across 4 source files); approximate tokens of output written: ~8,300 tokens (33,210 bytes across 4 inventory cards).
