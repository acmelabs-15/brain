---
unit: inv-rjm-180
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-180

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/world-model-diagnostic/SKILL.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.codeql/scripts/CLAUDE.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.codeql/scripts/get_codeql_diagnostics.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.codeql/scripts/install_codeql_integration.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.codeql/scripts/install_codeql.py

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-world-model-diagnostic-skill-md.md (8862 bytes)
- docs/analysis/inventory/rjm/codeql-scripts-claude-md.md (2043 bytes)
- docs/analysis/inventory/rjm/codeql-scripts-get-codeql-diagnostics-py.md (6808 bytes)
- docs/analysis/inventory/rjm/codeql-scripts-install-codeql-integration-py.md (8009 bytes)
- docs/analysis/inventory/rjm/codeql-scripts-install-codeql-py.md (6667 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-180.md (this file)

## Scripts executed
- `.codeql/scripts/get_codeql_diagnostics.py`, `python3 .codeql/scripts/get_codeql_diagnostics.py --output-format console` (in `sources/rjm`), exit code 1
- `.codeql/scripts/get_codeql_diagnostics.py`, `python3 .codeql/scripts/get_codeql_diagnostics.py --output-format markdown` (in `sources/rjm`), exit code 1
- `.codeql/scripts/install_codeql_integration.py`, `python3 .codeql/scripts/install_codeql_integration.py --help` (in `sources/rjm`), exit code 0
- `.codeql/scripts/install_codeql_integration.py`, `python3 .codeql/scripts/install_codeql_integration.py --skip-cli` (in `sources/rjm`), exit code 0
- `.codeql/scripts/install_codeql_integration.py`, `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.codeql/scripts/install_codeql_integration.py` (in `/tmp`, outside git repo), exit code 1
- `.codeql/scripts/install_codeql.py`, `python3 .codeql/scripts/install_codeql.py --help` (in `sources/rjm`), exit code 0
- `.codeql/scripts/install_codeql.py`, `python3 .codeql/scripts/install_codeql.py --version v0.0.0-nonexistent --ci` (in `sources/rjm`), exit code 3

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/world-model-diagnostic` is an architectural/organizational diagnostic framework ported from upstream OpenClaw (session 1760). It references companion skills `work-operating-model` (issue #1806), `panning-for-gold` (issue #1802), and `codebase-documenter` (issue #1803).
- The three Python scripts in `.codeql/scripts/` (`get_codeql_diagnostics.py`, `install_codeql_integration.py`, `install_codeql.py`) form the underlying engine for the `codeql-scan` skill (inventoried in unit `inv-rjm-104`). All scripts strictly implement ADR-035 standardized exit codes.
- `install_codeql.py` downloads official GitHub CodeQL distribution archives from `https://github.com/github/codeql-action/releases/download`, defaulting to bundle `v2.23.9`, and modifies shell startup scripts with an idempotent `# Added by CodeQL installer` marker.
- `get_codeql_diagnostics.py` implements multi-layer database cache invalidation, comparing git HEAD, configuration file SHA-256, scripts directory tree hash, and config directory tree hash.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,270 tokens (49,080 bytes across 5 files)
- Approximate tokens of output written: ~8,100 tokens across 5 inventory cards and 1 unit report
