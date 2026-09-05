---
unit: inv-addy-17
phase: 1
package: addy
session: 004
subagent_returned: complete
---

# Unit inv-addy-17

## Files assigned
- [x] sources/addy-external/context-engineering.md (26352 bytes, 20 lines)

## Outputs produced
- docs/analysis/inventory/addy/external-context-engineering-md.md (6443 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-17.md

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `external/context-engineering.md` is an external HTML documentation snapshot corresponding to the public skill page at `https://skills.addy.ie/skills/context-engineering/`. It provides web-facing installation commands via `npx skills add addyosmani/agent-skills --skill context-engineering` and links to the canonical GitHub source `skills/context-engineering/SKILL.md`.
- Taxonomy and routing drift: `external/context-engineering.md:12` assigns `context-engineering` to the `Build` phase and explicitly pairs it with `/build`. However, `.claude/commands/build.md` does not orchestrate or invoke `context-engineering` (it invokes `incremental-implementation`, `test-driven-development`, `planning-and-task-breakdown`, `debugging-and-error-recovery`, and `doubt-driven-development`).
- Structural anatomy drift: The web catalog page templates a generic 6-stage anatomy (`01 Overview`, `02 When to Use`, `03 Process`, `04 Rationalizations`, `05 Red Flags`, `06 Verification`) across all catalog entries (`external/context-engineering.md:10`), whereas `skills/context-engineering/SKILL.md` omits a `Process` section, organizing its process guidance into "The Context Hierarchy", "Context Packing Strategies", "MCP Integrations", and "Confusion Management".

## Blocked or uncertain
none

## Time and size
- Approximate source tokens: ~6,588 tokens (26,352 bytes across 1 file)
- Approximate output tokens: ~1,611 tokens (6,443 bytes across 1 card plus report)
