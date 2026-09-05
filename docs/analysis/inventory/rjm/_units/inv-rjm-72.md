---
unit: inv-rjm-72
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-72

## Files assigned
- [x] sources/rjm/.claude/agents/roadmap.md — read in full
- [x] sources/rjm/.claude/agents/security.md — read in full
- [x] sources/rjm/.claude/agents/security/references/dependency-risk-scoring.md — read in full

## Outputs produced
- docs/analysis/inventory/rjm/claude-agents-roadmap-md.md (6071 bytes)
- docs/analysis/inventory/rjm/claude-agents-security-md.md (12629 bytes)
- docs/analysis/inventory/rjm/claude-agents-security-references-dependency-risk-scoring-md.md (3344 bytes)
- docs/analysis/inventory/rjm/_divergence/claude-agents-roadmap-md--templates-agents-roadmap-shared-md.md (1874 bytes)
- docs/analysis/inventory/rjm/_divergence/claude-agents-security-md--templates-agents-security-shared-md.md (4923 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-72.md (2616 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/agents/roadmap.md` defines an explicit post-delivery `Outcome Review (post-delivery)` step in its epic specification template that closes the feedback loop between delivery metrics and future RICE confidence scoring.
- `.claude/agents/security.md` enforces absent tool capability (no shell/Bash tool on any surface) as an architectural security control rather than relying on regex denylists, which fail against case-insensitive git configuration flags.
- Both `.claude/agents/roadmap.md` and `.claude/agents/security.md` have variant counterparts in `templates/agents/*.shared.md` tracked under ledger IDs V8 and V24, respectively. Divergence cards were produced matching the exact ledger hunk counts (1 hunk for V8, 5 hunks for V24).
- `.claude/agents/security.md` references `security/references/dependency-risk-scoring.md` (which maps to the assigned `.claude/agents/security/references/dependency-risk-scoring.md` file), whereas its template variant references `references/dependency-risk-scoring.md`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,950 tokens (43,822 bytes across 3 source files + 2 template variant files).
Approximate tokens of output written: ~7,500 tokens (~30,500 bytes across 6 deliverables).
