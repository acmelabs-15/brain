---
unit: inv-addy-46
phase: 1
package: addy
session: 011
subagent_returned: complete
---

# Unit inv-addy-46

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/source-driven-development/SKILL.md (9949 bytes, 217 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/spec-driven-development/SKILL.md (12163 bytes, 246 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/test-driven-development/SKILL.md (16483 bytes, 399 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/using-agent-skills/SKILL.md (10426 bytes, 193 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/skills-source-driven-development-skill-md.md (7674 bytes)
- docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md (8732 bytes)
- docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md (11132 bytes)
- docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md (9883 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-46.md (4500 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Phase 1V Remediation & Cross-File Defect Tracking**:
  - Remediated the Phase 1V verification finding regarding the cross-file contradiction defect on TDD lifecycle phase placement: `skills/using-agent-skills/SKILL.md:180` and `commands/test.toml:4` place `test-driven-development` under `addy:Verify`, whereas `README.md:363`, `CLAUDE.md:23`, and `commands/build.toml:4` place it under `addy:Build`. This defect is explicitly documented in both `skills-using-agent-skills-skill-md.md` and `skills-test-driven-development-skill-md.md`.
  - Documented cross-file invocation networks linking `skills/source-driven-development/SKILL.md` to `external/source-driven-development.md:10`, `skills/using-agent-skills/SKILL.md:28`, and `hooks/SDD-CACHE.md:51` (noting the missing slash command `/source-driven-development`).
- **Source-Driven Development Retrieval Safety & Caching**:
  - Identifies the explicit retrieval safety protocol in `skills/source-driven-development/SKILL.md:97-115` guarding against indirect prompt injection (OWASP LLM01), requiring models to extract only API signatures and version constraints while ignoring instruction-like directives in retrieved web docs. Connects to `hooks/SDD-CACHE.md` for transparent cross-session caching.
- **Spec-Driven Development Scope Decomposition**:
  - Highlights Phase 0 Scope Check (`skills/spec-driven-development/SKILL.md:34-66`), which decomposes multi-capability initiatives into a capability map of stable kebab-case module IDs with acyclic dependency order prior to writing module specifications (`SPEC-[module-id].md`).
- **Test-Driven Development Resource Model & Subagent Pattern**:
  - Highlights the three-tier test resource sizing model (Small / Medium / Large), the "Beyonce Rule", DAMP over DRY conventions, and the subagent delegation pattern for writing clean bug reproduction tests before implementing fixes. Connects with `browser-testing-with-devtools` for runtime verification via Chrome DevTools MCP.
- **Using Agent Skills Meta-Skill Governance**:
  - Details the six core operating behaviors and ten anti-productivity failure modes governing agent autonomy across the lifecycle. Notes the hook-based automatic injection via `hooks/session-start.sh` and the explicit lint exemption in `scripts/lib/skill-lint.js:58`.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,255 tokens (49,021 bytes across 4 source files)
- Approximate tokens of output written: ~10,480 tokens (41,921 bytes across 4 inventory cards + 1 unit report)
