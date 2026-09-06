---
unit: inv-rjm-157
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-157

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/security-scan/SKILL.md` — read in full (11718 bytes, 293 lines)

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-security-scan-skill-md.md` (17073 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-157.md`

## Scripts executed
- `.claude/skills/security-scan/scripts/scan_vulnerabilities.py`: `python3 .claude/skills/security-scan/scripts/scan_vulnerabilities.py --directory src/`, exit code: 10
- `.claude/skills/security-scan/scripts/scan_vulnerabilities.py`: `python3 .claude/skills/security-scan/scripts/scan_vulnerabilities.py .claude/skills/security-scan/scripts/scan_vulnerabilities.py`, exit code: 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/security-scan` was partitioned into two units: `inv-rjm-156` (part 1: references `agent-guardrails-template.md`, `agent-memory-inference-leakage.md`, `autonomous-execution-guardrails.md`, `vulnerability-patterns.md`, and scripts `scan_constants.py`, `scan_format.py`, `scan_patterns.py`, `scan_vulnerabilities.py`) and `inv-rjm-157` (part 2: `SKILL.md`).
- `SKILL.md` documents only CWE-78 detection and explicitly delegates CWE-22 (path traversal) to CodeQL CI (`python-security-extended.qls` and `actions-security-extended.qls`). The 4 reference documents under `references/` are not linked or mentioned in `SKILL.md`, but are referenced externally by `.claude/skills/review/references/agent-safety.md`.
- `SKILL.md` documents exit codes 0, 1, and 10, omitting exit code 3 (`EXIT_EXTERNAL`), which is defined in `scan_constants.py:17` and raised when git enumeration fails in `scan_vulnerabilities.py:457`.
- `SKILL.md` states to add new CWE-78 patterns to `CWE78_PATTERNS` in `scan_vulnerabilities.py`, but the primary definition is located in `scan_patterns.py:17`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,000 tokens (including assigned SKILL.md, helper scripts, and referencing files).
Approximate tokens of output written: ~4,500 tokens (inventory card and unit report).
