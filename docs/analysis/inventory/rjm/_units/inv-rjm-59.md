---
unit: inv-rjm-59
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-59

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/security/code-quality-security.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/security/infrastructure-file-patterns.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/security/python-security-checklist.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/security/secret-detection-patterns.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/security/security-best-practices.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/security/SR-002-pr-automation-security-review.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-security-code-quality-security-md.md` (5721 bytes)
- `docs/analysis/inventory/rjm/agents-security-infrastructure-file-patterns-md.md` (5461 bytes)
- `docs/analysis/inventory/rjm/agents-security-python-security-checklist-md.md` (7766 bytes)
- `docs/analysis/inventory/rjm/agents-security-secret-detection-patterns-md.md` (6324 bytes)
- `docs/analysis/inventory/rjm/agents-security-security-best-practices-md.md` (7947 bytes)
- `docs/analysis/inventory/rjm/agents-security-sr-002-pr-automation-security-review-md.md` (6299 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The six files in `inv-rjm-59` represent core security guidance, review protocols, pattern detection definitions, and assessment outputs for the `security` role in `rjm`.
- `code-quality-security.md` links software quality metrics (> 500 LOC, > 20 cyclomatic complexity, > 4 nesting levels) directly to vulnerability propensity and attack surface, providing detection heuristics and remediation steps.
- `infrastructure-file-patterns.md` catalogs 10 risk-tiered file patterns (Critical, High, Medium, Low) including CI/CD workflows, Git hooks (Lefthook, Husky), build scripts, containers, and authentication modules, defining a Python detection algorithm `should_trigger_security_review` used across pre-commit hooks, PR templates, and orchestrator routing.
- `python-security-checklist.md` acts as the security enforcement companion to `ADR-042` (Python Migration Strategy), defining mandatory checks for path validation (CWE-22, using shared utility `scripts.utils.path_validation.validate_safe_path`), subprocess execution (CWE-78), secrets handling (CWE-798), and dependency verification via `uv.lock`, `pip-audit`, `mypy`, and `ruff`.
- `secret-detection-patterns.md` establishes regex patterns across API keys, private keys, authentication credentials, database connection strings, and high-risk file patterns, defining a 4-step detection workflow and false-positive filtering rules.
- `security-best-practices.md` provides an overarching 5-pillar security standard (input validation, error handling, logging, cryptography, and testing) with paired Do/Don't examples and explicit coverage thresholds (95% for auth/authz/crypto, 90% for validation/middleware).
- `SR-002-pr-automation-security-review.md` is an audit artifact assessing `scripts/Invoke-PRMaintenance.ps1`, documenting three P0 blocking vulnerabilities (CWE-78 command injection via branch name, CWE-22 path traversal in worktree creation, and CWE-190 integer overflow in GitHub comment IDs). The reviewed target script and referenced implementation plan `.agents/planning/pr-automation-implementation-plan.md` no longer exist in the repository (PowerShell automation was migrated to Python `scripts/invoke_pr_maintenance.py`).

## Blocked or uncertain
none

## Time and size
Approximate source read: ~11,800 tokens (47,324 bytes across 6 files).
Approximate output written: ~9,880 tokens (39,518 bytes across 6 cards plus this unit report).
