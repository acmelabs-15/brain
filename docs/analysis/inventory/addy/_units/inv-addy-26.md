---
unit: inv-addy-26
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-26

## Files assigned
- [x] sources/addy-external/observability-and-instrumentation.md (26344 bytes, 20 lines, sha256 d08fe21236731d07)

## Outputs produced
- docs/analysis/inventory/addy/external-observability-and-instrumentation-md.md (8693 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-26.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- External web catalog snapshot for `observability-and-instrumentation` hosted at `https://skills.addy.ie/skills/observability-and-instrumentation/`.
- Anatomy drift: The external page asserts in "How this skill is structured" that every skill follows a standardized 6-part anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification` at line 10). In the actual repository skill `skills/observability-and-instrumentation/SKILL.md`, the process section is split into 7 numbered subsections (Define "working" before instrumenting, Pick the right signal for each question, Structured logging, Metrics, Distributed tracing, Alerting, Verify the telemetry itself) and the rationalizations section is titled `Common Rationalizations` rather than `Rationalizations`.
- Triggering and boundary drift: The web catalog page compresses triggering conditions to a single sentence ("Adding telemetry, or shipping anything that runs in production.") and omits the explicit negative boundaries ("NOT for: Diagnosing a failure happening right now...", "NOT for: Profiling and optimizing measured slowness...", "NOT for: Launch-day monitoring checklists...") present in `skills/observability-and-instrumentation/SKILL.md:20-23`.
- Lifecycle phase placement: Aligns with addy's `Ship` phase under `/ship`, and cross-promotes peer Ship-phase skills (`git-workflow-and-versioning`, `ci-cd-and-automation`, `deprecation-and-migration`).

## Blocked or uncertain
none

## Time and size
- Approximate source tokens: ~6,586 tokens (26,344 bytes across 1 file)
- Approximate output tokens: ~2,800 tokens (inventory card and unit report)
