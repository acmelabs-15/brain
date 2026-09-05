---
unit: inv-addy-44
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-44

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/interview-me/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/observability-and-instrumentation/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/performance-optimization/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/addy/skills-interview-me-skill-md.md` (5279 bytes)
- `docs/analysis/inventory/addy/skills-observability-and-instrumentation-skill-md.md` (6908 bytes)
- `docs/analysis/inventory/addy/skills-performance-optimization-skill-md.md` (7049 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/interview-me/SKILL.md` belongs to `addy:Define`. It establishes the one-question-at-a-time interview discipline with attached guesses and confidence ratings before any spec, plan, or code is created. It explicitly hands off downstream to `idea-refine` (unit inv-addy-43) and `spec-driven-development` (unit inv-addy-45).
- `skills/observability-and-instrumentation/SKILL.md` belongs to `addy:Ship`. It establishes the mandate to instrument code alongside feature development (structured JSON logging with correlation IDs, RED/USE metrics, and OpenTelemetry tracing). It references `references/observability-checklist.md` (unit inv-addy-37).
- `skills/performance-optimization/SKILL.md` belongs to `addy:Review`. It defines a 5-step measure-first workflow (Measure, Identify, Fix, Verify, Guard), enforces Core Web Vitals thresholds (LCP, INP, CLS), establishes strict reversion for neutral or noise-level attempts, mandates maintaining an optimization ledger, and links to `references/performance-checklist.md` (unit inv-addy-37).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (47,129 bytes across 3 source files).
Approximate tokens of output written: ~5,200 tokens (21,500 bytes across 3 inventory cards and 1 unit report).
