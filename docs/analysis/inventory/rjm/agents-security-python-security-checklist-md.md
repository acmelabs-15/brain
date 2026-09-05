---
package: rjm
path: .agents/security/python-security-checklist.md
type: agent
bytes: 9406
unit: inv-rjm-59
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/security/python-security-checklist.md, sha256: 4cdd4b1aade8af294ed2cd0f0beda512debf8ff4824603a5776d4bb917713bfe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/security/python-security-checklist.md

## Purpose — required, verbatim
> "This checklist covers security requirements for Python code in the ai-agents repository. All Python scripts MUST pass these checks before merge." — .agents/security/python-security-checklist.md:11

## Design intent — required
Provides a mandatory security standard for Python development during and following the repository's Python migration (ADR-042), enforcing safe patterns for path validation (CWE-22), input sanitization, subprocess execution (CWE-78), secrets handling (CWE-798), dependency auditing, error handling (CWE-209), type safety, file operations, and safe serialization to prevent vulnerabilities from entering scripts.

## Phase — required
cross-phase

## Inputs — required
- "user_path: str, base_dir: Path" — .agents/security/python-security-checklist.md:32
- "All CLI arguments validated via argparse with proper types" — .agents/security/python-security-checklist.md:70
- "repo_path: Path, *args: str" — .agents/security/python-security-checklist.md:128
- "All dependencies pinned in `pyproject.toml`" — .agents/security/python-security-checklist.md:204

## Outputs — required
- "validate_safe_path" — .agents/security/python-security-checklist.md:59
- "parse_args" — .agents/security/python-security-checklist.md:81
- "run_git_command" — .agents/security/python-security-checklist.md:128
- "get_required_secret" — .agents/security/python-security-checklist.md:169

## Invokes — required
- script scripts.utils.path_validation — .agents/security/python-security-checklist.md:59
- config .github/workflows/pytest.yml — .agents/security/python-security-checklist.md:383
- doc ADR-042-python-migration-strategy.md — .agents/security/python-security-checklist.md:423

## Invoked by — required
- doc ADR-045-framework-extraction-security-review.md — .agents/security/ADR-045-framework-extraction-security-review.md:724

## Concepts named — required, verbatim
`Python Security Checklist` — .agents/security/python-security-checklist.md:1 — defined here
`ADR-042 Python Migration Strategy` — .agents/security/python-security-checklist.md:3 — used here
`Path Validation` — .agents/security/python-security-checklist.md:15 — defined here
`CWE-22` — .agents/security/python-security-checklist.md:15 — used here
`validate_safe_path` — .agents/security/python-security-checklist.md:59 — used here
`Input Sanitization` — .agents/security/python-security-checklist.md:66 — defined here
`Subprocess Execution` — .agents/security/python-security-checklist.md:111 — defined here
`CWE-78` — .agents/security/python-security-checklist.md:111 — used here
`Secrets Handling` — .agents/security/python-security-checklist.md:153 — defined here
`CWE-798` — .agents/security/python-security-checklist.md:153 — used here
`Dependency Security` — .agents/security/python-security-checklist.md:200 — defined here
`uv.lock` — .agents/security/python-security-checklist.md:205 — used here
`pip-audit` — .agents/security/python-security-checklist.md:206 — used here
`Error Handling` — .agents/security/python-security-checklist.md:239 — defined here
`CWE-209` — .agents/security/python-security-checklist.md:239 — used here
`Type Safety` — .agents/security/python-security-checklist.md:285 — defined here
`mypy` — .agents/security/python-security-checklist.md:290 — used here
`File Operations` — .agents/security/python-security-checklist.md:314 — defined here
`Serialization Security` — .agents/security/python-security-checklist.md:351 — defined here
`bandit` — .agents/security/python-security-checklist.md:387 — used here
`ruff` — .agents/security/python-security-checklist.md:390 — used here

## Structure
# Python Security Checklist — .agents/security/python-security-checklist.md:1
## Overview — .agents/security/python-security-checklist.md:9
## 1. Path Validation (CWE-22) — .agents/security/python-security-checklist.md:15
### Requirements — .agents/security/python-security-checklist.md:19
### Secure Pattern — .agents/security/python-security-checklist.md:26
### Vulnerable Pattern (DO NOT USE) — .agents/security/python-security-checklist.md:43
### Shared Utility — .agents/security/python-security-checklist.md:54
## 2. Input Sanitization — .agents/security/python-security-checklist.md:66
### Requirements — .agents/security/python-security-checklist.md:68
### Secure Pattern — .agents/security/python-security-checklist.md:75
### Vulnerable Pattern (DO NOT USE) — .agents/security/python-security-checklist.md:99
## 3. Subprocess Execution (CWE-78) — .agents/security/python-security-checklist.md:111
### Requirements — .agents/security/python-security-checklist.md:115
### Secure Pattern — .agents/security/python-security-checklist.md:122
### Vulnerable Pattern (DO NOT USE) — .agents/security/python-security-checklist.md:141
## 4. Secrets Handling (CWE-798) — .agents/security/python-security-checklist.md:153
### Requirements — .agents/security/python-security-checklist.md:155
### Secure Pattern — .agents/security/python-security-checklist.md:162
### Vulnerable Pattern (DO NOT USE) — .agents/security/python-security-checklist.md:185
## 5. Dependency Security — .agents/security/python-security-checklist.md:200
### Requirements — .agents/security/python-security-checklist.md:202
### Verification Commands — .agents/security/python-security-checklist.md:209
### pyproject.toml Requirements — .agents/security/python-security-checklist.md:222
## 6. Error Handling (CWE-209) — .agents/security/python-security-checklist.md:239
### Requirements — .agents/security/python-security-checklist.md:241
### Secure Pattern — .agents/security/python-security-checklist.md:248
### Vulnerable Pattern (DO NOT USE) — .agents/security/python-security-checklist.md:272
## 7. Type Safety — .agents/security/python-security-checklist.md:285
### Requirements — .agents/security/python-security-checklist.md:287
### Secure Pattern — .agents/security/python-security-checklist.md:294
## 8. File Operations — .agents/security/python-security-checklist.md:314
### Requirements — .agents/security/python-security-checklist.md:316
### Secure Pattern — .agents/security/python-security-checklist.md:323
## 9. Serialization Security — .agents/security/python-security-checklist.md:351
### Requirements — .agents/security/python-security-checklist.md:353
### Secure Pattern — .agents/security/python-security-checklist.md:359
## CI Integration — .agents/security/python-security-checklist.md:381
## Pre-Commit Checks — .agents/security/python-security-checklist.md:394
## Quick Reference — .agents/security/python-security-checklist.md:408
## References — .agents/security/python-security-checklist.md:420

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/security/python-security-checklist.md:412 · Associates CWE-22 (path traversal) with Bandit rule B108, which in Bandit standard checks for hardcoded temporary file paths (`/tmp`), rather than path traversal.

## Observations
Direct companion to ADR-042 Python migration, establishing concrete secure vs. vulnerable code patterns across 9 security domains. Integrates directly with CI workflows (`bandit`, `pip-audit`, `mypy`, `ruff`) and points to project-specific shared utility `scripts.utils.path_validation.validate_safe_path`.

## Context cost
9406 bytes, approximately 2351 tokens.
