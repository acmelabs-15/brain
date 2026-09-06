---
package: rjm
path: scripts/ci/validate_vendor_provenance.py
type: script
bytes: 31771
unit: inv-rjm-210
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/ci/validate_vendor_provenance.py, sha256: 65858093c108f169cc0e34423abc589c0d79f7047b2211c82c7e4457c57d0a9c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/validate_vendor_provenance.py

## Purpose — required, verbatim
> "Trusted vendor provenance validator (base-branch owned)." — scripts/ci/validate_vendor_provenance.py:3

## Design intent — required
Enforces supply-chain security and strict provenance for vendored npm dependencies (specifically markdownlint-cli2) used by plugin hooks. Because pull request workflows run untrusted candidate code, this validator runs exclusively from the base branch under `pull_request_target` without executing candidate code. It validates candidate vendor artifacts against pinned SHA-256 trust anchors (verifier script, safe YAML configuration, and INTEGRITY.json manifest), enforces npm lockfile v3 policy (canonical https://registry.npmjs.org/ registry and sha512 integrity hashes), rejects symlink escape attempts, recursively parses YAML to ban execution-capable keys, enforces byte-identical mirror parity between canonical and Copilot plugin copies, and confirms clean reconstruction via `npm ci`. Without this script, malicious pull requests could introduce dependency-confusion or supply-chain attacks, compromise hook execution, or poison vendored binaries.

## Phase — required
none

## Inputs — required
Command-line arguments parsed by `argparse`:
- `--candidate-root`: path to candidate checkout directory (`scripts/ci/validate_vendor_provenance.py:785`)
- `--vendor-rel`: relative path to vendor directory (`scripts/ci/validate_vendor_provenance.py:786`)
- `--verifier-rel`: relative path to verifier script (`scripts/ci/validate_vendor_provenance.py:787`)
- `--mirror-rel`: relative path to mirror script (`scripts/ci/validate_vendor_provenance.py:788`)
- `--config-rel`: relative path to primary safe config (`scripts/ci/validate_vendor_provenance.py:789`)
- `--cli2-config-rel`: optional relative path to cli2 config (`scripts/ci/validate_vendor_provenance.py:790`)
- `--copilot-config-rel`: optional relative path to copilot config (`scripts/ci/validate_vendor_provenance.py:791`)
- `--copilot-cli2-config-rel`: optional relative path to copilot cli2 config (`scripts/ci/validate_vendor_provenance.py:792`)
Files read:
- `package-lock.json` in vendor directory (`scripts/ci/validate_vendor_provenance.py:71`)
- `package.json` in vendor directory (`scripts/ci/validate_vendor_provenance.py:586`)
- `INTEGRITY.json` in vendor directory (`scripts/ci/validate_vendor_provenance.py:150`)
- Pinned verifier, mirror verifier, and YAML configuration files
- All files, symlinks, and directory entries under the candidate vendor root

## Outputs — required
- Standard output logs reporting PASS/FAIL status for each validation step
- Exit codes: 0 on pass, 1 when blocked by provenance or containment errors, 2 on infrastructure/usage errors
- Files produced: none (runs isolated reconstruction in a temporary directory)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Trusted vendor provenance validator` — scripts/ci/validate_vendor_provenance.py:3 — defined here
- `pull_request_target` — scripts/ci/validate_vendor_provenance.py:5 — used here
- `lockfile` — scripts/ci/validate_vendor_provenance.py:6 — used here
- `registry integrity` — scripts/ci/validate_vendor_provenance.py:6 — used here
- `Trust-anchor` — scripts/ci/validate_vendor_provenance.py:7 — used here
- `bootstrap PR` — scripts/ci/validate_vendor_provenance.py:7 — used here
- `TRUST ANCHORS` — scripts/ci/validate_vendor_provenance.py:24 — defined here
- `package-lock.json` — scripts/ci/validate_vendor_provenance.py:71 — used here
- `.npmrc` — scripts/ci/validate_vendor_provenance.py:100 — used here
- `INTEGRITY.json` — scripts/ci/validate_vendor_provenance.py:150 — used here
- `Mirror parity` — scripts/ci/validate_vendor_provenance.py:204 — defined here
- `Symlink containment` — scripts/ci/validate_vendor_provenance.py:218 — defined here
- `_markdownlint_verifier.py` — scripts/ci/validate_vendor_provenance.py:332 — used here
- `_materialize_verified_copy` — scripts/ci/validate_vendor_provenance.py:333 — used here
- `markdownlint-cli2` — scripts/ci/validate_vendor_provenance.py:365 — used here
- `npm ci` — scripts/ci/validate_vendor_provenance.py:584 — used here

## Structure
- # Trusted vendor provenance validator (base-branch owned)
- # Trust-anchor pins (_PIN_VERIFIER_SHA256, _PIN_CONFIG_SHA256, _PIN_CLI2_CONFIG_SHA256, _PIN_INTEGRITY_SHA256)
- # Lockfile policy (_validate_package_entry, _validate_lockfile)
- # .npmrc rejection (_reject_npmrc)
- # Trust-anchor authentication (_sha256_file, _authenticate_artifact, _authenticate_all_pins)
- # Safe YAML config validation (_parse_yaml_safe, _find_execution_keys_recursive, _validate_config_safe)
- # Mirror parity validation (_validate_mirror_parity)
- # Symlink containment (_safe_resolve_within, _check_symlink_containment)
- # Full vendor-root tree comparison (_collect_tree, _compare_vendor_trees)
- # Manifest coverage and verification (_load_manifest, _collect_manifest_entries, _compare_manifest_coverage, _validate_manifest_tree)
- # Entrypoint co-tamper validation (_validate_entrypoint_in_manifest)
- # Reconstruction (_reconstruct_vendor, _run_reconstruction)
- # Main orchestration and CLI resolution (_run_checks, _resolve_candidate_paths, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/validate_vendor_provenance.py`, Python 3, 843 lines
- documented invocation:
  "Runs from BASE branch via pull_request_target. Validates candidate vendor tree" — scripts/ci/validate_vendor_provenance.py:5
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 scripts/ci/validate_vendor_provenance.py --candidate-root . --vendor-rel .claude/hooks/PreToolUse/_vendor/markdownlint --verifier-rel .claude/hooks/PreToolUse/_markdownlint_verifier.py --mirror-rel src/copilot-cli/hooks/PreToolUse/_markdownlint_verifier.py --config-rel .claude/hooks/PreToolUse/markdownlint-safe-config.yaml --cli2-config-rel .claude/hooks/PreToolUse/markdownlint-cli2.yaml --copilot-config-rel src/copilot-cli/hooks/PreToolUse/markdownlint-safe-config.yaml --copilot-cli2-config-rel src/copilot-cli/hooks/PreToolUse/markdownlint-cli2.yaml`
  - Abridged stdout:
    ```
    === Path Containment ===
      FAIL: vendor_dir: Cannot resolve /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/hooks/PreToolUse/_vendor/markdownlint: [Errno 2] No such file or directory: '/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/hooks/PreToolUse/_vendor'
      ...
    BLOCKED: 5 containment error(s)
    ```
  - actual exit code: 1
- documented exit codes vs actual exit paths:
  - Documented: "Exit codes: 0 = pass, 1 = blocked, 2 = infra error." — scripts/ci/validate_vendor_provenance.py:9
  - Actual exit paths:
    - `return 2` — scripts/ci/validate_vendor_provenance.py:802
    - `return 2` — scripts/ci/validate_vendor_provenance.py:805
    - `return 1` — scripts/ci/validate_vendor_provenance.py:813
    - `return 2` — scripts/ci/validate_vendor_provenance.py:823
    - `return 1` — scripts/ci/validate_vendor_provenance.py:837
    - `return 0` — scripts/ci/validate_vendor_provenance.py:839
    - `sys.exit(main())` — scripts/ci/validate_vendor_provenance.py:842
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits non-zero (exit code 1 for blocked/validation errors, exit code 2 for infrastructure/usage errors). On the default branch clone it exits 1 because `.claude/hooks/PreToolUse/_vendor/markdownlint` is not tracked in the repository checkout.
- does output match what documentation claims:
  Yes, emits structured PASS/FAIL diagnostic sections and exits 1 with a BLOCKED summary when required vendor files are missing or do not resolve.

## Defects — required
- `missing-path` · scripts/ci/validate_vendor_provenance.py:24 · Trust-anchor validation targets `.claude/hooks/PreToolUse/_vendor/markdownlint` and `_markdownlint_verifier.py`, which are absent from the default repository clone.
- `orphan` · scripts/ci/validate_vendor_provenance.py:1 · Script is executed only from GitHub Actions workflow `.github/workflows/vendor-provenance.yml:93` with no caller in the in-scope manifest graph.

## Observations
- Demonstrates thorough defence-in-depth security engineering against CWE-59 (symlink traversal), CWE-22 (path traversal), CWE-78 (command injection), and CWE-918 (server-side request forgery/network redirection).
- Safe YAML parsing uses `yaml.safe_load` and recursively traverses the document tree to reject execution-capable keys (`customRules`, `markdownItPlugins`, `extends`, `outputFormatters`, `globs`).
- Employs `_safe_resolve_within` with `is_relative_to` to prevent prefix-collision path traversal attacks.
- Reconstruction step uses temporary directory isolation to run `npm ci --ignore-scripts --audit=false` against the canonical registry before comparing trees.

## Context cost
31771 bytes, 843 lines. Loads no in-scope repository modules. Approximately 8,500 tokens.
