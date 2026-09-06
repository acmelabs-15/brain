---
unit: cc-addy-36
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-36

## Files assigned
- [x] sources/addy/skills/context-engineering/SKILL.md
- [x] sources/addy/skills/debugging-and-error-recovery/SKILL.md
- [x] sources/addy/skills/test-driven-development/SKILL.md
- [x] docs/analysis/inventory/addy/skills-context-engineering-skill-md.md
- [x] docs/analysis/inventory/addy/skills-debugging-and-error-recovery-skill-md.md
- [x] docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md

## Outputs produced
- docs/analysis/concepts/addy/the-hierarchical-summary.md (1396 bytes)
- docs/analysis/concepts/addy/context7.md (860 bytes)
- docs/analysis/concepts/addy/chrome-devtools.md (868 bytes)
- docs/analysis/concepts/addy/postgresql.md (853 bytes)
- docs/analysis/concepts/addy/filesystem.md (849 bytes)
- docs/analysis/concepts/addy/github.md (844 bytes)
- docs/analysis/concepts/addy/confusion-management.md (1430 bytes)
- docs/analysis/concepts/addy/the-inline-planning-pattern.md (1414 bytes)
- docs/analysis/concepts/addy/context-starvation.md (1388 bytes)
- docs/analysis/concepts/addy/context-flooding.md (1521 bytes)
- docs/analysis/concepts/addy/stale-context.md (1396 bytes)
- docs/analysis/concepts/addy/missing-examples.md (1401 bytes)
- docs/analysis/concepts/addy/implicit-knowledge.md (1426 bytes)
- docs/analysis/concepts/addy/silent-confusion.md (1455 bytes)
- docs/analysis/concepts/addy/the-stop-the-line-rule.md (1453 bytes)
- docs/analysis/concepts/addy/preserve.md (1344 bytes)
- docs/analysis/concepts/addy/diagnose.md (1316 bytes)
- docs/analysis/concepts/addy/fix.md (1320 bytes)
- docs/analysis/concepts/addy/guard.md (1257 bytes)
- docs/analysis/concepts/addy/resume.md (1317 bytes)
- docs/analysis/concepts/addy/the-triage-checklist.md (1529 bytes)
- docs/analysis/concepts/addy/reproduce.md (1267 bytes)
- docs/analysis/concepts/addy/discover-the-stack-first.md (1827 bytes)
- docs/analysis/concepts/addy/localize.md (1339 bytes)
- docs/analysis/concepts/addy/bisection.md (1255 bytes)
- docs/analysis/concepts/addy/reduce.md (1273 bytes)
- docs/analysis/concepts/addy/fix-the-root-cause.md (1389 bytes)
- docs/analysis/concepts/addy/guard-against-recurrence.md (1299 bytes)
- docs/analysis/concepts/addy/verify-end-to-end.md (1434 bytes)
- docs/analysis/concepts/addy/test-failure-triage.md (1346 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-36.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards> (exit code 0, 30 PASS 0 FAIL)
- bun scripts/synthesis/coverage.ts (all 30 cards recognized with 0 orphan cards, 0 empty required sections)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Five concepts (`Context7`, `Chrome DevTools`, `PostgreSQL`, `Filesystem`, `GitHub`) recorded from the MCP Integrations table in `skills/context-engineering/SKILL.md:186-190` represent external tools/servers rather than lifecycle concepts; per D-023 and dispatch instructions, they were assigned `kind: name-only` with `(used, not defined)` definitions.
- `Discover the Stack First` spans both `skills/debugging-and-error-recovery/SKILL.md:75` (used here) and `skills/test-driven-development/SKILL.md:24` (defined here), linking the Build and Verify phases.
- The 6-step triage checklist and Stop-the-Line protocol concepts (`PRESERVE`, `DIAGNOSE`, `FIX`, `GUARD`, `RESUME`) are decomposed into individual technique and gate cards with cross-references.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,000 tokens (38,390 bytes across source files and citing inventory cards); approximate tokens of output written: ~10,000 tokens (39,066 bytes across 30 concept cards, plus unit report).
