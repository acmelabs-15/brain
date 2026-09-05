---
unit: inv-addy-35
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-35

## Files assigned
- [x] sources/addy/references/orchestration-patterns.md (18201 bytes, 371 lines)
- [x] sources/addy/references/performance-checklist.md (13139 bytes, 237 lines)
- [x] sources/addy/references/security-checklist.md (11881 bytes, 206 lines)

## Outputs produced
- docs/analysis/inventory/addy/references-orchestration-patterns-md.md (8560 bytes)
- docs/analysis/inventory/addy/references-performance-checklist-md.md (6304 bytes)
- docs/analysis/inventory/addy/references-security-checklist-md.md (5511 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-35.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `references/orchestration-patterns.md` formalizes the core architectural constraint of the addy package: personas are single-perspective specialists that do not invoke other personas. The user or a slash command is the sole orchestrator. This pattern underpins slash commands like `/ship` (fan-out to `code-reviewer`, `security-auditor`, `test-engineer`) and skills like `doubt-driven-development` (which explicitly forbids adding itself to a persona's `skills:` frontmatter to avoid spawning personas).
- `references/performance-checklist.md` serves as the shared verification checklist referenced by `performance-optimization` skill, `shipping-and-launch` skill, `code-review-and-quality` skill, and `web-performance-auditor` agent persona.
- `references/security-checklist.md` serves as the shared verification checklist referenced by `security-and-hardening` skill, `shipping-and-launch` skill, `code-review-and-quality` skill, and onboarding documentation. It defines precise supply-chain installation boundary rules and native package manager install-script gating across npm, pnpm, and Yarn.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~10805 tokens (43221 bytes across 3 files).
Approximate output tokens: ~5094 tokens (20375 bytes across 3 cards).
