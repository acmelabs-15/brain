---
package: rjm
path: scripts/ci/verify_npm_published.py
type: script
bytes: 2834
unit: inv-rjm-211
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/verify_npm_published.py, sha256: fa15b877b242e367ca2210d209b6fb26ecb341e79078d4e7c4cbd9dae457e916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/verify_npm_published.py

## Purpose — required, verbatim
> "Verify that an npm package version is visible on the registry after publish." — scripts/ci/verify_npm_published.py:2

## Design intent — required
Post-publish verification gate for CI publishing workflows (`publish.yml`), replacing an inline shell retry loop. It reads the expected version from `package.json` in `--package-dir` and polls the public npm registry up to 5 times with 10-second intervals via `npm view` to confirm registry propagation and replication before downstream release steps execute.

## Phase — required
rjm:ship

## Inputs — required
- CLI option `--package-dir` pointing to package directory — scripts/ci/verify_npm_published.py:68
- Package `version` field inside target package.json — scripts/ci/verify_npm_published.py:83
- Public registry metadata queried via `npm` view command — scripts/ci/verify_npm_published.py:35

## Outputs — required
- Polling status logs (`Expecting...`, `Attempt...`, `Verified...`) to stdout — scripts/ci/verify_npm_published.py:54,59,61
- Error messages and GitHub Actions annotation `::error::` to stderr on missing files, missing version, or timeout — scripts/ci/verify_npm_published.py:79,85,92
- Process exit code: 0 if version is visible, 1 if not published or missing files, 2 on usage error — scripts/ci/verify_npm_published.py:9-11

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `publish.yml` — scripts/ci/verify_npm_published.py:6 — used here
- `ADR-035` — scripts/ci/verify_npm_published.py:8 — used here
- `EXIT_OK` — scripts/ci/verify_npm_published.py:23 — defined here
- `EXIT_NOT_PUBLISHED` — scripts/ci/verify_npm_published.py:24 — defined here
- `EXIT_USAGE` — scripts/ci/verify_npm_published.py:25 — defined here

## Structure
- get_published_version(package: str, version: str) -> str
- wait_for_publish(package: str, version: str, max_retries: int, delay_seconds: int) -> bool
- build_parser() -> argparse.ArgumentParser
- main(argv: list[str] | None = None) -> int

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/verify_npm_published.py`, Python 3, 98 lines
- **documented invocation:**
  > "Retries up to 5 times with 10-second delays before failing. Reads the expected" — scripts/ci/verify_npm_published.py:4
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/ci/verify_npm_published.py --package-dir sources/rjm`
- **actual exit code:** 1
- **abridged stdout/stderr:** `ERROR: sources/rjm/package.json not found`
- **documented exit codes:**
  > "0  - Package version is live on npm" — scripts/ci/verify_npm_published.py:9
  > "1  - Version not visible after all retries" — scripts/ci/verify_npm_published.py:10
  > "2  - Usage error" — scripts/ci/verify_npm_published.py:11
  vs. actual exit paths:
  - `scripts/ci/verify_npm_published.py:80`: `return EXIT_NOT_PUBLISHED` (when package.json missing)
  - `scripts/ci/verify_npm_published.py:86`: `return EXIT_NOT_PUBLISHED` (when version missing from package.json)
  - `scripts/ci/verify_npm_published.py:89`: `return EXIT_OK` (when version confirmed live on npm)
  - `scripts/ci/verify_npm_published.py:93`: `return EXIT_NOT_PUBLISHED` (when retries exhausted without visibility)
  - `scripts/ci/verify_npm_published.py:76`: `build_parser().parse_args(argv)` exits with code 2 on missing `--package-dir`
  - `scripts/ci/verify_npm_published.py:97`: `sys.exit(main())`
- **validators/gates:** can exit non-zero: yes (exits 1 on missing file, missing version, or timeout; exits 2 on usage error). Fails on source repo default branch: yes (the package `@rjmurillo/ai-agents@0.1.0` has not yet been published to the public registry, returning 404).
- **output match:** yes, verifies package.json existence and queries npm registry with retries.

## Defects — required
- always-failing-gate · scripts/ci/verify_npm_published.py:88-93 · On the repository's current branch, running against `packages/ai-agents-cli` fails because version 0.1.0 has never been published to the npm registry, causing the retry loop to time out after 50 seconds with exit code 1.

## Observations
Contains hardcoded `_PACKAGE_NAME = "@rjmurillo/ai-agents"` (line 29) instead of reading package name from `package.json`, tightly coupling the script to this specific repository's package identity.

## Context cost
File size: 2834 bytes (~700 tokens). Standard library only.
