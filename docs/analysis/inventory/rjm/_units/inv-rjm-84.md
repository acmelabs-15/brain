---
unit: inv-rjm-84
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-84

## Files assigned
- [x] `.claude/skills/ai-agents-external-claims/SKILL.md` (11954 bytes) — read in full
- [x] `.claude/skills/ai-agents-failure-archaeology/references/incidents.md` (14476 bytes) — read in full
- [x] `.claude/skills/ai-agents-failure-archaeology/SKILL.md` (16580 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-external-claims-skill-md.md` (7813 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-failure-archaeology-references-incidents-md.md` (10584 bytes)
- `docs/analysis/inventory/rjm/claude-skills-ai-agents-failure-archaeology-skill-md.md` (10353 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-84.md` (unit report)

## Scripts executed
- Provenance verification commands executed in `sources/rjm`:
  - `python3 -c "import pathlib;d=pathlib.Path('.agents/retrospective');f={p.name for p in d.glob('*.md')}-{'INDEX.md'};t=(d/'INDEX.md').read_text();print(len(f),'retro files,',sum(n in t for n in f),'indexed')"` — exit 0 (`210 retro files, 11 indexed`)
  - `python3 -c "import pathlib;print(len(list(pathlib.Path('.serena/memories').rglob('*.md'))))"` — exit 0 (`1031`)
  - `python3 -c "print(sum(1 for l in open('.agents/governance/FAILURE-MODES.md') if l[:2]=='\x7c ' and l[2].isdigit()))"` — exit 0 (`11`)
- Verification scripts executed in repo root:
  - `bun scripts/synthesis/quote-check.ts` on all 3 cards — exit 0 (184 PASS, 0 FAIL)
  - `bun scripts/synthesis/coverage.ts` — exit 0 (clean, zero failures)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/ai-agents-failure-archaeology/` and its companion `references/incidents.md` provide essential historical context for gates and rules across the entire `rjm` repository, including hook generation (`#2205`), payload casing (`#2290`), PR review iterations (`#1887`), process recursion (`#1989`), escape hatch abuse (`Session 1187`), and drift detection (`2025-12-15`).
- In `ai-agents-external-claims`, a missing path defect was discovered for `front-gate-before-pipeline` (.claude/skills/ai-agents-external-claims/SKILL.md:32), which is referenced in scope boundaries but does not exist in the repo.
- In `ai-agents-failure-archaeology/references/incidents.md`, the "Appendix: The ADR Numbering Collision, Live" notes that historical documents frequently cite "ADR-063" for runtime contracts when the actual file is `ADR-071-plugin-hook-runtime-contract-verification.md` and ADR-063 was reused for `ADR-063-memory-skill-decomposition.md`. Later synthesis phases must resolve ADR citations by content rather than number.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~10,752 tokens (43,010 bytes)
- Approximate tokens of output written: ~7,500 tokens (~30,000 bytes)
