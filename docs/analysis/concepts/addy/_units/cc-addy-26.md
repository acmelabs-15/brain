---
unit: cc-addy-26
phase: 2
package: addy
session: 015
subagent_returned: complete
---

# Unit cc-addy-26

## Files assigned
- [x] sources/addy/references/orchestration-patterns.md
- [x] sources/addy/references/performance-checklist.md
- [x] sources/addy/skills/performance-optimization/SKILL.md
- [x] docs/analysis/inventory/addy/references-orchestration-patterns-md.md
- [x] docs/analysis/inventory/addy/references-performance-checklist-md.md
- [x] docs/analysis/inventory/addy/skills-performance-optimization-skill-md.md

## Outputs produced
- docs/analysis/concepts/addy/persona-that-calls-another-persona.md (1346 bytes)
- docs/analysis/concepts/addy/sequential-orchestrator-that-paraphrases.md (1386 bytes)
- docs/analysis/concepts/addy/deep-persona-trees.md (1245 bytes)
- docs/analysis/concepts/addy/decision-flow.md (1214 bytes)
- docs/analysis/concepts/addy/performance-checklist.md (1482 bytes)
- docs/analysis/concepts/addy/core-web-vitals-targets.md (1309 bytes)
- docs/analysis/concepts/addy/ttfb-diagnosis.md (1203 bytes)
- docs/analysis/concepts/addy/frontend-checklist.md (1232 bytes)
- docs/analysis/concepts/addy/backend-checklist.md (1223 bytes)
- docs/analysis/concepts/addy/caching-strategies.md (1436 bytes)
- docs/analysis/concepts/addy/measurement-commands.md (1186 bytes)
- docs/analysis/concepts/addy/common-anti-patterns.md (1210 bytes)
- docs/analysis/concepts/addy/largest-contentful-paint.md (1441 bytes)
- docs/analysis/concepts/addy/inp.md (1477 bytes)
- docs/analysis/concepts/addy/interaction-to-next-paint.md (1304 bytes)
- docs/analysis/concepts/addy/cls.md (1347 bytes)
- docs/analysis/concepts/addy/cumulative-layout-shift.md (1235 bytes)
- docs/analysis/concepts/addy/yieldtomain.md (1143 bytes)
- docs/analysis/concepts/addy/scheduler-yield.md (1248 bytes)
- docs/analysis/concepts/addy/scheduler-posttask.md (1258 bytes)
- docs/analysis/concepts/addy/isinputpending.md (1221 bytes)
- docs/analysis/concepts/addy/requestidlecallback.md (1209 bytes)
- docs/analysis/concepts/addy/content-visibility-auto.md (1219 bytes)
- docs/analysis/concepts/addy/contain-intrinsic-size.md (1246 bytes)
- docs/analysis/concepts/addy/bfcache.md (1329 bytes)
- docs/analysis/concepts/addy/explain-analyze.md (1410 bytes)
- docs/analysis/concepts/addy/cache-aside.md (1211 bytes)
- docs/analysis/concepts/addy/read-through.md (1300 bytes)
- docs/analysis/concepts/addy/write-through.md (1183 bytes)
- docs/analysis/concepts/addy/write-behind.md (1410 bytes)
- docs/analysis/concepts/addy/_units/cc-addy-26.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts (37 PASS, 0 FAIL across all 30 cards)
- bun scripts/synthesis/coverage.ts (clean on all 30 concept cards; required sections non-empty, 0 orphans)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Four orchestration patterns/anti-patterns (`persona-that-calls-another-persona`, `sequential-orchestrator-that-paraphrases`, `deep-persona-trees`, `decision-flow`) from `references/orchestration-patterns.md` establish the strict invariant that users/commands orchestrate and personas never invoke other personas.
- Performance engineering concepts are distributed between `skills/performance-optimization/SKILL.md` (the workflow and Core Web Vitals thresholds) and `references/performance-checklist.md` (the checklists, caching strategies, and scheduling APIs).
- Core Web Vitals concepts appear both as full names and acronyms (`Largest Contentful Paint` / `LCP`, `Interaction to Next Paint` / `INP`, `Cumulative Layout Shift` / `CLS`); each has its dedicated card cross-referencing the other.
- Modern browser main-thread scheduling techniques (`yieldToMain`, `scheduler.yield()`, `scheduler.postTask()`, `isInputPending()`, `requestIdleCallback`) and rendering directives (`content-visibility: auto`, `contain-intrinsic-size`, `bfcache`) represent specific execution-level patterns ensuring interactive responsiveness.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens (53 KB across 3 source files and 3 inventory cards).
Approximate tokens of output written: ~9,800 tokens (38,663 bytes across 30 concept cards plus unit report).
