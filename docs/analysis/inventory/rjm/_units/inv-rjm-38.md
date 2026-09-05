---
unit: inv-rjm-38
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-38

## Files assigned
- [x] `.agents/architecture/ADR-088-progressive-disclosure-book-rules.md` (8907 bytes)
- [x] `.agents/architecture/ADR-089-remove-causal-memory-tier.md` (21331 bytes)

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-088-progressive-disclosure-book-rules-md.md` (12908 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-089-remove-causal-memory-tier-md.md` (12778 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-088 documents the progressive disclosure strategy that moved eight book-derived rules from always-on instruction files behind the `software-engineering-library` skill. This connects to unit work covering `.claude/skills/software-engineering-library/` and context optimization rules under `.claude/skills/context-optimizer/`.
- ADR-089 documents the complete deletion of Tier 3 causal memory graph machinery while explicitly retaining Tier 2 episodic memory (`.agents/memory/episodes/`) and intra-episode `caused_by`/`leads_to` links. It cross-references defects in memory skill documentation (unimplemented PowerShell cmdlets, fabricated ADR-007 tier citation, unread episodic memory query API). This informs units covering `.claude/skills/memory/` and `.claude/skills/memory-reflexion/`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,500 tokens (30,238 bytes).
Approximate tokens of output written: ~6,400 tokens (25,686 bytes cards + report).
