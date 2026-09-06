---
unit: inv-rjm-104
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-104

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/codeql-scan/scripts/CLAUDE.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/codeql-scan/SKILL.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/context-gather/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-codeql-scan-scripts-claude-md.md (2669 bytes)
- docs/analysis/inventory/rjm/claude-skills-codeql-scan-scripts-invoke-codeql-scan-skill-py.md (8096 bytes)
- docs/analysis/inventory/rjm/claude-skills-codeql-scan-scripts-invoke-codeql-scan-py.md (8080 bytes)
- docs/analysis/inventory/rjm/claude-skills-codeql-scan-skill-md.md (8857 bytes)
- docs/analysis/inventory/rjm/claude-skills-context-gather-skill-md.md (5707 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-104.md (4513 bytes)

## Scripts executed
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py`, `python3 sources/rjm/.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py --help`, exit code 0
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py`, `python3 sources/rjm/.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py --operation validate` (run in brain-v2 root), exit code 3
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py`, `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py --operation validate` (run in sources/rjm), exit code 0
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py`, `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan_skill.py --operation quick` (run in sources/rjm), exit code 3
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py`, `python3 sources/rjm/.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --help`, exit code 0
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py`, `python3 sources/rjm/.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation full` (run in brain-v2 root where .codeql/ is absent), exit code 0
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py`, `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation validate` (run in sources/rjm), exit code 0
- `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py`, `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation quick` (run in sources/rjm), exit code 3

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/codeql-scan` contains two Python wrapper scripts in `scripts/`: `invoke_codeql_scan.py` (documented in `SKILL.md`) and `invoke_codeql_scan_skill.py` (omitted from `SKILL.md`, retained for regression coverage in `tests/skills/codeql-scan/test_codeql_delegate_paths.py`). Both wrap underlying scripts in `.codeql/scripts/` (`test_codeql_config.py`, `invoke_codeql_scan.py`, `install_codeql.py`) and enforce ADR-035 exit codes.
- `codeql-scan` complements `security-scan` (invoked by `/ship`): `security-scan` handles fast regex detection of CWE-78 command injection on staged diffs, whereas `codeql-scan` performs full multi-language semantic SAST and data flow analysis.
- `.claude/skills/context-gather` invokes excluded skill `exploring-knowledge-graph` for multi-tier context searching (Forgetful, Serena, Context7, DeepWiki, Web), defining protocol markers `TIER_QUERIED: <tier>` and `CONTEXT_LOADED: <topic>` used by `/build`, `/plan`, and `/research` for skip detection.
- Model downgrade: `context-gather` explicitly documents downgrading model tier from `opus` to `claude-sonnet-4-6` per ADR-002 model selection rules.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,750 tokens (39,007 bytes across 5 files)
- Approximate tokens of output written: ~8,350 tokens across 5 inventory cards and 1 unit report
