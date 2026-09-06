---
unit: inv-addy-35
phase: 1
package: addy
session: 011
subagent_returned: complete
---

# Unit inv-addy-35

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/orchestration-patterns.md (18201 bytes, 371 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/performance-checklist.md (13139 bytes, 237 lines) — read in full
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/references/security-checklist.md (11881 bytes, 206 lines) — read in full

## Outputs produced
- docs/analysis/inventory/addy/references-orchestration-patterns-md.md (6826 bytes)
- docs/analysis/inventory/addy/references-performance-checklist-md.md (6192 bytes)
- docs/analysis/inventory/addy/references-security-checklist-md.md (5915 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-35.md (2427 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Phase 1V remediation complete: `references/security-checklist.md` now explicitly extracts and cites `Threat Modeling` (lines 7, 21), `IDOR` (line 49), `SSRF` (lines 65, 188), and `installation boundary` (line 104).
- `references/orchestration-patterns.md` sets the central multi-agent execution invariants ("the user or a slash command is the orchestrator; personas do not invoke personas") and provides mapping between Claude Code subagents and Agent Teams.
- `references/performance-checklist.md` provides quantitative targets for Core Web Vitals (LCP, INP, CLS) and explicit caching strategies (cache-aside, read-through, write-through, write-behind, stampede protection via request coalescing) used by `performance-optimization` and `web-performance-auditor`.
- `references/security-checklist.md` establishes the package-manager install-script gating matrix (npm, pnpm, Yarn) and AI/LLM security guidelines (OWASP Top 10 for LLMs) used by `security-and-hardening`.

## Blocked or uncertain
none

## Time and size
Approximate source read: 43,221 bytes (~10,800 tokens). Approximate output written: 21,383 bytes (~5,350 tokens).
