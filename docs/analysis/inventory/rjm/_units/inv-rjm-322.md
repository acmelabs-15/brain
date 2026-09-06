---
unit: inv-rjm-322
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-322

## Files assigned
- [x] sources/rjm/templates/agents/roadmap.shared.md — read in full
- [x] sources/rjm/templates/agents/security.shared.md — read in full

## Outputs produced
- docs/analysis/inventory/rjm/templates-agents-roadmap-shared-md.md (7353 bytes)
- docs/analysis/inventory/rjm/templates-agents-security-shared-md.md (13761 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-322.md (2349 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `templates/agents/roadmap.shared.md` is the cross-platform (VS Code, Copilot) counterpart to `.claude/agents/roadmap.md` (Variant V8). Divergence card `claude-agents-roadmap-md--templates-agents-roadmap-shared-md.md` was previously authored by inv-rjm-72 and satisfies the 1 hunk in the duplication ledger.
- `templates/agents/security.shared.md` is the cross-platform counterpart to `.claude/agents/security.md` (Variant V24). Divergence card `claude-agents-security-md--templates-agents-security-shared-md.md` was previously authored by inv-rjm-72 and satisfies the 5 hunks in the duplication ledger.
- In `templates/agents/security.shared.md:682, 686, 748`, references to `security/references/...` and `references/...` fail resolution relative to `templates/agents/` because reference markdown files live in `src/claude/security/references/` rather than alongside the template files. Recorded as `missing-path` defects.
- In `templates/agents/roadmap.shared.md:157`, tools `Read, Grep, Glob, WebSearch, WebFetch` and `mcp__serena__read_memory` are documented in prose despite not being granted in `tools_vscode` or `tools_copilot` frontmatter. Recorded as `doc-drift` defect.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,100 tokens (40,473 bytes across 2 source files).
Approximate tokens of output written: ~5,300 tokens (~23,400 bytes across 3 deliverables).
