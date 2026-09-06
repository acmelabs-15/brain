---
unit: inv-rjm-259
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-259

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/security/invoke_precommit_security.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-security-invoke-precommit-security-py.md (9111 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-259.md (2199 bytes)

## Scripts executed
- `scripts/security/invoke_precommit_security.py`, `python3 scripts/security/invoke_precommit_security.py --dry-run` (run in `sources/rjm`), exit code 0
- `scripts/security/invoke_precommit_security.py`, `python3 scripts/security/invoke_precommit_security.py` (run in `sources/rjm`), exit code 0
- `scripts/security/invoke_precommit_security.py`, `python3 scripts/security/invoke_precommit_security.py --skip-codeql` (run in `sources/rjm`), exit code 0
- `scripts/security/invoke_precommit_security.py`, `python3 scripts/security/invoke_precommit_security.py --help` (run in `sources/rjm`), exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/security/invoke_precommit_security.py` implements ADR-042 (Python-first for new scripts) and serves as a pre-commit static security analysis gate for staged PowerShell files.
- It is referenced in the codebase by `tests/test_invoke_precommit_security.py`, `tests/test_security_gate_timeouts_2810.py`, `.agents/analysis/adr-045-inventory-audit.md`, and out-of-scope `.agents/governance/SECURITY-REVIEW-PROTOCOL.md`.
- No files in this unit appear in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~9,244 tokens (36,974 bytes across 1 assigned file).
- Approximate tokens of output written: ~2,500 tokens across 1 inventory card and 1 work-unit report.
