---
unit: inv-rjm-87
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-87

## Files assigned
- [x] .claude/skills/ai-agents-validation-and-qa/SKILL.md
- [x] .claude/skills/analysis-provenance/scripts/check_provenance.py
- [x] .claude/skills/analysis-provenance/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-ai-agents-validation-and-qa-skill-md.md (10459 bytes)
- docs/analysis/inventory/rjm/claude-skills-analysis-provenance-scripts-check-provenance-py.md (8552 bytes)
- docs/analysis/inventory/rjm/claude-skills-analysis-provenance-skill-md.md (8528 bytes)

## Scripts executed
- .claude/skills/analysis-provenance/scripts/check_provenance.py, `python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target .config/`, 0
- .claude/skills/analysis-provenance/scripts/check_provenance.py, `python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target .config/wt.toml --format json`, 0
- .claude/skills/analysis-provenance/scripts/check_provenance.py, `python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target .markdownlint.json`, 1
- .claude/skills/analysis-provenance/scripts/check_provenance.py, `python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --invalid-arg`, 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `analysis-provenance` is invoked during spec generation by `spec-generator` reference `spec-prior-art-schema.md` (line 188) to determine component ownership and halt if provenance is UNKNOWN prior to build-vs-buy decisions.
- `ai-agents-validation-and-qa` is referenced broadly across the `ai-agents-*` ecosystem (`ai-agents-change-control`, `ai-agents-architecture-contract`, `ai-agents-debugging-playbook`, `ai-agents-external-claims`, `ai-agents-build-and-env`, `ai-agents-empirical-probe-toolkit`, `ai-agents-diagnostics-toolkit`) as the authoritative evidence bar (pos+neg+edge, 100% block coverage on changed code, negative control runtime-contracts, ADR-034 QA skip allowlisting).
- Both skills feature slight documentation drift regarding CLI arguments or file locations (`--exit-on-upstream` missing in `check_provenance.py`, stale Pester doc reference and colocated test in `ai-agents-validation-and-qa`).

## Blocked or uncertain
none

## Time and size
Approximate source read: 38,340 bytes (~9,585 tokens); approximate output written: 27,539 bytes (~6,885 tokens).
