---
package: rjm
path: scripts/ci/verify_npm_package_metadata.py
type: script
bytes: 2203
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/verify_npm_package_metadata.py, sha256: a512033119983342b4e302a36cee1ec3ca2678492662c59de71861aac4bbd256}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/verify_npm_package_metadata.py

## Purpose — required, verbatim
> "Verify npm package metadata meets publishing requirements." — scripts/ci/verify_npm_package_metadata.py:2

## Design intent — required
Validation utility designed for CI packaging pipelines (`publish.yml`), replacing an inline `node -e` script. It inspects `package.json` in `--package-dir` to enforce npm publishing standards: verified package name (`@rjmurillo/ai-agents`), public registry access configuration, provenance enablement for supply-chain security, executable bin entry, and files allowlist.

## Phase — required
rjm:ship

## Inputs — required
- `--package-dir` CLI parameter specifying package root path — scripts/ci/verify_npm_package_metadata.py:47
- `package.json` file inside the target package directory — scripts/ci/verify_npm_package_metadata.py:56

## Outputs — required
- Confirmation log `Package metadata OK` to stdout — scripts/ci/verify_npm_package_metadata.py:68
- Error messages printed to stderr on missing file or failing checks — scripts/ci/verify_npm_package_metadata.py:58,65
- Process exit code: 0 on all checks passing, 1 on check or file failure, 2 on usage error — scripts/ci/verify_npm_package_metadata.py:9-11

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `publish.yml` — scripts/ci/verify_npm_package_metadata.py:6 — used here
- `ADR-035` — scripts/ci/verify_npm_package_metadata.py:8 — used here
- `EXIT_OK` — scripts/ci/verify_npm_package_metadata.py:22 — defined here
- `EXIT_INVALID` — scripts/ci/verify_npm_package_metadata.py:23 — defined here
- `EXIT_USAGE` — scripts/ci/verify_npm_package_metadata.py:24 — defined here

## Structure
- check_package_metadata(pkg: dict[str, Any]) -> list[str]
- build_parser() -> argparse.ArgumentParser
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/verify_npm_package_metadata.py`, Python 3, 74 lines
- **documented invocation:**
  > "Reads package.json from --package-dir and checks that the required fields" — scripts/ci/verify_npm_package_metadata.py:4
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/verify_npm_package_metadata.py --package-dir sources/rjm/packages/ai-agents-cli`
- **actual exit code:** 1
- **abridged stdout/stderr:**
```
publishConfig.access must be public
publishConfig.provenance must be true
```
- **documented exit codes:**
  > "0  - All metadata checks pass" — scripts/ci/verify_npm_package_metadata.py:9
  > "1  - One or more checks failed" — scripts/ci/verify_npm_package_metadata.py:10
  > "2  - Usage error (missing --package-dir)" — scripts/ci/verify_npm_package_metadata.py:11
  vs. actual exit paths:
  - `scripts/ci/verify_npm_package_metadata.py:59`: `return EXIT_INVALID` (when `package.json` not found)
  - `scripts/ci/verify_npm_package_metadata.py:66`: `return EXIT_INVALID` (when metadata checks fail)
  - `scripts/ci/verify_npm_package_metadata.py:69`: `return EXIT_OK` (when all checks pass)
  - `scripts/ci/verify_npm_package_metadata.py:55`: `build_parser().parse_args(argv)` exits with code 2 on missing `--package-dir`
  - `scripts/ci/verify_npm_package_metadata.py:73`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 1 on missing file or check failure, 2 on usage error). Fails on source repo default branch: yes (fails on `sources/rjm/packages/ai-agents-cli` because `publishConfig` is omitted).
- **output match:** yes, verifies required package.json fields and emits missing requirements.

## Defects — required
- always-failing-gate · scripts/ci/verify_npm_package_metadata.py:32-36 · The script requires `publishConfig.access == 'public'` and `publishConfig.provenance` to be true, but the repository's own `packages/ai-agents-cli/package.json` has no `publishConfig` block, causing the gate to fail with exit code 1 on the repo's default branch.

## Observations
Enforces mandatory package provenance (`publishConfig.provenance: true`), ensuring published packages generate Sigstore cryptographic attestations on npm.

## Context cost
File size: 2203 bytes (~550 tokens). Standard library only.
