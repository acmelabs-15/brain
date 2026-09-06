---
unit: inv-rjm-156
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-156

## Files assigned
- [x] sources/rjm/.claude/skills/security-scan/references/agent-guardrails-template.md
- [x] sources/rjm/.claude/skills/security-scan/references/agent-memory-inference-leakage.md
- [x] sources/rjm/.claude/skills/security-scan/references/autonomous-execution-guardrails.md
- [x] sources/rjm/.claude/skills/security-scan/references/vulnerability-patterns.md
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_constants.py
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_format.py
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_patterns.py
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_vulnerabilities.py

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-security-scan-references-agent-guardrails-template-md.md (4015 bytes)
- docs/analysis/inventory/rjm/claude-skills-security-scan-references-agent-memory-inference-leakage-md.md (3872 bytes)
- docs/analysis/inventory/rjm/claude-skills-security-scan-references-autonomous-execution-guardrails-md.md (2951 bytes)
- docs/analysis/inventory/rjm/claude-skills-security-scan-references-vulnerability-patterns-md.md (3322 bytes)
- docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-constants-py.md (3582 bytes)
- docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-format-py.md (3787 bytes)
- docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-patterns-py.md (2637 bytes)
- docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-vulnerabilities-py.md (7684 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-156.md

## Scripts executed
- `.claude/skills/security-scan/scripts/scan_constants.py`: `python3 sources/rjm/.claude/skills/security-scan/scripts/scan_constants.py`, exit code 0
- `.claude/skills/security-scan/scripts/scan_format.py`: `PYTHONPATH=sources/rjm/.claude/skills/security-scan/scripts python3 sources/rjm/.claude/skills/security-scan/scripts/scan_format.py`, exit code 0
- `.claude/skills/security-scan/scripts/scan_patterns.py`: `python3 sources/rjm/.claude/skills/security-scan/scripts/scan_patterns.py`, exit code 0
- `.claude/skills/security-scan/scripts/scan_vulnerabilities.py`: `python3 sources/rjm/.claude/skills/security-scan/scripts/scan_vulnerabilities.py --directory sources/rjm/.claude/skills/security-scan/scripts/`, exit code 0
- `.claude/skills/security-scan/scripts/scan_vulnerabilities.py`: `python3 .claude/skills/security-scan/scripts/scan_vulnerabilities.py --directory .claude` (in sources/rjm), exit code 10

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/security-scan/references/vulnerability-patterns.md` is currently orphaned from the `SKILL.md` entry point (which is in part 2 of the skill, unit inv-rjm-157). Furthermore, it retains documentation and remediation patterns for CWE-22 (Path Traversal), even though ADR-054 and `SKILL.md:19` explicitly delegated CWE-22 detection to CodeQL and removed it from `scan_vulnerabilities.py`.
- The reference documents in this unit (`agent-guardrails-template.md`, `agent-memory-inference-leakage.md`, `autonomous-execution-guardrails.md`) establish critical agent safety governance models (Four Laws, permission distinction for memory writes, won't-fix protocols) that are actively invoked by `.claude/skills/review/references/agent-safety.md`.
- `scan_constants.py`, `scan_format.py`, and `scan_patterns.py` are modular decompositions of `scan_vulnerabilities.py` created to manage cyclomatic complexity (< 10) and avoid circular imports while standardizing exit codes under ADR-035.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,700 tokens (46,640 bytes across 8 assigned files plus 11,718 bytes of SKILL.md context).
Approximate tokens of output written: ~7,900 tokens (31,850 bytes across 8 inventory cards and unit report).
