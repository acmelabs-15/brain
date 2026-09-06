---
unit: inv-rjm-210
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-210

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/validate_vendor_provenance.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/vanilla_hook_guard.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/verify_code_env.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/scripts/ci/verify_codeql_artifacts.py

## Outputs produced
- docs/analysis/inventory/rjm/scripts-ci-validate-vendor-provenance-py.md (9309 bytes)
- docs/analysis/inventory/rjm/scripts-ci-vanilla-hook-guard-py.md (7410 bytes)
- docs/analysis/inventory/rjm/scripts-ci-verify-code-env-py.md (5961 bytes)
- docs/analysis/inventory/rjm/scripts-ci-verify-codeql-artifacts-py.md (5803 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-210.md (5291 bytes)

## Scripts executed
- `scripts/ci/validate_vendor_provenance.py`, `python3 scripts/ci/validate_vendor_provenance.py --candidate-root . --vendor-rel .claude/hooks/PreToolUse/_vendor/markdownlint --verifier-rel .claude/hooks/PreToolUse/_markdownlint_verifier.py --mirror-rel src/copilot-cli/hooks/PreToolUse/_markdownlint_verifier.py --config-rel .claude/hooks/PreToolUse/markdownlint-safe-config.yaml --cli2-config-rel .claude/hooks/PreToolUse/markdownlint-cli2.yaml --copilot-config-rel src/copilot-cli/hooks/PreToolUse/markdownlint-safe-config.yaml --copilot-cli2-config-rel src/copilot-cli/hooks/PreToolUse/markdownlint-cli2.yaml`, exit code 1 (path containment error due to absent vendor tree)
- `scripts/ci/validate_vendor_provenance.py`, `python3 scripts/ci/validate_vendor_provenance.py --candidate-root /nonexistent --vendor-rel a --verifier-rel b --mirror-rel c --config-rel d`, exit code 2 (infra error for missing candidate root)
- `scripts/ci/vanilla_hook_guard.py`, `python3 scripts/ci/vanilla_hook_guard.py --mode windows-path --install-root .claude --consumer-cwd .`, exit code 0 (vacuous pass under ADR-097)
- `scripts/ci/vanilla_hook_guard.py`, `python3 scripts/ci/vanilla_hook_guard.py --mode linux-container --install-root . --consumer-cwd .`, exit code 2 (usage error, missing --image)
- `scripts/ci/verify_code_env.py`, `python3 scripts/ci/verify_code_env.py`, exit code 0 (default reporting)
- `scripts/ci/verify_code_env.py`, `ENABLE_GIT_HOOKS=true ENABLE_PYTHON=true python3 scripts/ci/verify_code_env.py`, exit code 1 (lefthook installation verification failure)
- `scripts/ci/verify_codeql_artifacts.py`, `python3 scripts/ci/verify_codeql_artifacts.py --language python`, exit code 1 (database and SARIF missing)
- `scripts/ci/verify_codeql_artifacts.py`, `python3 scripts/ci/verify_codeql_artifacts.py --language python --db-base <temp>/db --results-base <temp>/results`, exit code 0 (synthetic artifacts present)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-210` covers 4 CI infrastructure scripts under `scripts/ci/` (49,540 total bytes across 4 source files).
- ADR-006 alignment: All four scripts implement the architectural principle of keeping execution logic and assertions out of GitHub Actions workflow YAML.
- Duplication ledger: None of the 4 files appear in `docs/analysis/manifest/rjm-duplicates.md` (no exact aliases and no variant pairs; no divergence cards required).
- In-scope reachability and orphan status: All four scripts are classified as `orphan` with respect to the in-scope manifest graph, because their only invocation sites are GitHub Actions workflows (`.github/workflows/vendor-provenance.yml`, `.github/workflows/installed-plugin-hook-guard.yml`, `.github/actions/setup-code-env/action.yml`, `.github/workflows/test-codeql-integration.yml`) and pytest suites under `tests/`, which are outside the reachability graph rooted at `README.md` and lifecycle command files.
- Security and governance architecture:
  - `validate_vendor_provenance.py` implements trusted base-branch validation of candidate PR artifacts, preventing supply-chain attacks on vendored tools by enforcing pinned SHA-256 trust anchors, npm lockfile v3 policy, AST-level YAML execution-key rejection, and isolated `npm ci` reconstruction.
  - `vanilla_hook_guard.py` enforces graceful degradation (ADR-097) in customer environments without Python, isolating the test harness from the code under test via Docker or `PATH` scrubbing.
  - `verify_code_env.py` audits CI toolchain availability and implements safe PowerShell command interpolation using an allowlist regex to prevent command injection (CWE-78).
  - `verify_codeql_artifacts.py` enforces ADR-035 standardized exit codes and validates SARIF JSON syntax after static analysis runs.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~13,500 tokens (49,540 bytes across 4 assigned files).
- Approximate tokens of output written: ~8,500 tokens across 4 inventory cards and 1 work-unit report.
