---
unit: inv-addy-26
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-26

## Files assigned
- [x] sources/addy-external/observability-and-instrumentation.md

## Outputs produced
- docs/analysis/inventory/addy/external-observability-and-instrumentation-md.md (9153 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-26.md (1932 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- External documentation snapshot from `https://skills.addy.ie/skills/observability-and-instrumentation/`.
- Manifest path is `external/observability-and-instrumentation.md`, mapping to `sources/addy-external/observability-and-instrumentation.md` on disk.
- Not present in the duplicate ledger (`docs/analysis/manifest/addy-duplicates.md`); no aliases or divergence cards needed.
- Observed doc-drift between external documentation and in-repo skill `skills/observability-and-instrumentation/SKILL.md`:
  - Skill description on the web page focuses on specific practices (structured logging, RED metrics, OpenTelemetry, symptom alerting) rather than triggering use cases.
  - Section 04 is labeled `Rationalizations` on the web page but `## Common Rationalizations` in `SKILL.md`.
  - The sidebar associates the skill with command `/ship`, but `commands/ship.toml` explicitly invokes `shipping-and-launch` instead of `observability-and-instrumentation`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~6,600 tokens (26,344 bytes). Approximate tokens of output written: ~2,500 tokens (~11,000 bytes).
