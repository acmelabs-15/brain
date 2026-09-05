---
unit: inv-addy-44
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-44

## Files assigned
- [x] sources/addy/skills/interview-me/SKILL.md (14359 bytes, 226 lines)
- [x] sources/addy/skills/observability-and-instrumentation/SKILL.md (11053 bytes, 204 lines)
- [x] sources/addy/skills/performance-optimization/SKILL.md (21717 bytes, 497 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-interview-me-skill-md.md (6715 bytes)
- docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md (8104 bytes)
- docs/analysis/inventory/addy/skills-performance-optimization-skill-md.md (10339 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-44.md (this report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/interview-me/SKILL.md` defines an intake interrogation workflow positioned in `addy:Define` before `idea-refine`, `spec-driven-development`, or `doubt-driven-development`. Its external documentation catalog entry (`external/interview-me.md` in inv-addy-13) exhibits doc-drift regarding trigger conditions and anatomy, and displays a `/spec` command badge even though `commands/spec.toml` invokes `spec-driven-development` directly.
- `skills/observability-and-instrumentation/SKILL.md` defines telemetry instrumentation (structured logs, RED/USE metrics, OpenTelemetry distributed tracing, symptom-based alerting) within `addy:Ship`. It links to companion reference `references/observability-checklist.md` (inv-addy-34). Neither `commands/ship.toml` nor `.claude/commands/ship.md` directly invokes this skill, though both `CLAUDE.md` and `README.md` place it in the Ship phase.
- `skills/performance-optimization/SKILL.md` defines a measure-first optimization process in `addy:Review`, providing specific remediation patterns for database queries, connection pool sizing, image optimization, React re-renders, bundle sizes, and cache stampedes. It links to companion reference `references/performance-checklist.md` (inv-addy-35). It is invoked by command `/review` (`commands/review.toml`), and granular optimization guidance is delegated to it from persona agent `agents/web-performance-auditor.md` (inv-addy-3).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,800 tokens (47,129 bytes across 3 files)
Approximate tokens of output written: ~6,300 tokens (25,158 bytes across 3 inventory cards plus unit report)
