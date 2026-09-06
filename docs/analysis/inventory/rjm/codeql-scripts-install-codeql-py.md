---
package: rjm
path: .codeql/scripts/install_codeql.py
type: script
bytes: 9317
unit: inv-rjm-180
in_scope_via: docs/codeql-integration.md
aliases: []
memo_inputs:
  - {path: .codeql/scripts/install_codeql.py, sha256: 9a0a3b59f671c9f1ae78245806b03e827f679f49145347dc81d37ef1772f16f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .codeql/scripts/install_codeql.py

## Purpose — required, verbatim
> "Download and install the CodeQL CLI for static analysis." — .codeql/scripts/install_codeql.py:2

## Design intent — required
Automated cross-platform installer for the GitHub CodeQL CLI bundle. Detects host operating system (`win64`, `linux64`, `osx64`), downloads the pinned distribution bundle (`codeql-bundle-{version}`) from official `github/codeql-action` releases into a temporary directory, extracts and installs the distribution into the target installation directory (default: `.codeql/cli`), optionally adds the binary path to session PATH and shell profile files (`.bashrc`, `.zshrc`, `.profile`) marked with a durable tracking marker, and verifies installation health. Exits per ADR-035 conventions (0 for success or already installed, 1 for logic/verification error, 2 for unsupported platform, 3 for download/extraction network/filesystem failure).

## Phase — required
rjm:verify

## Inputs — required
- CLI options parsed via argparse:
  - `--version`: CodeQL CLI version to install (default: `CODEQL_VERSION` or `v2.23.9`) — .codeql/scripts/install_codeql.py:35
  - `--install-path`: destination directory for installation (default: `CODEQL_INSTALL_PATH` or `.codeql/cli`) — .codeql/scripts/install_codeql.py:40
  - `--force`: flag to overwrite existing installation — .codeql/scripts/install_codeql.py:46
  - `--add-to-path`: flag to add CodeQL CLI to PATH and shell profile scripts — .codeql/scripts/install_codeql.py:50
  - `--ci`: flag for non-interactive CI mode — .codeql/scripts/install_codeql.py:55
- External network download:
  - Distribution tarball downloaded from base URL "https://github.com/github/codeql-action/releases/download" — .codeql/scripts/install_codeql.py:73
- Shell profile files: `.bashrc` (.codeql/scripts/install_codeql.py:177), `.zshrc` (.codeql/scripts/install_codeql.py:179), `.profile` (.codeql/scripts/install_codeql.py:181) in user home directory

## Outputs — required
- Installed CodeQL CLI binary directory at `destination` (`.codeql/cli`) — .codeql/scripts/install_codeql.py:157
- Shell profile modifications appending export line marked with `CODEQL_MARKER` — .codeql/scripts/install_codeql.py:168
- Console status messages and warnings printed to stderr — .codeql/scripts/install_codeql.py:117

## Invokes — required
none

## Invoked by — required
- script get_codeql_diagnostics.py — .codeql/scripts/get_codeql_diagnostics.py:88
- script install_codeql_integration.py — .codeql/scripts/install_codeql_integration.py:87
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:40
- doc docs/codeql-integration.md — docs/codeql-integration.md:89
- doc docs/codeql-rollout-checklist.md — docs/codeql-rollout-checklist.md:14

## Concepts named — required, verbatim
- `ADR-035` — .codeql/scripts/install_codeql.py:8 — used here
- `build_parser` — .codeql/scripts/install_codeql.py:29 — defined here
- `get_download_url` — .codeql/scripts/install_codeql.py:61 — defined here
- `check_codeql_installed` — .codeql/scripts/install_codeql.py:77 — defined here
- `install_codeql_cli` — .codeql/scripts/install_codeql.py:111 — defined here
- `CODEQL_MARKER` — .codeql/scripts/install_codeql.py:168 — defined here
- `get_default_profile_scripts` — .codeql/scripts/install_codeql.py:171 — defined here
- `add_to_path` — .codeql/scripts/install_codeql.py:186 — defined here
- `main` — .codeql/scripts/install_codeql.py:242 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.codeql/scripts/install_codeql.py`, Python 3, 294 lines
- documented invocation:
  - "python3 .codeql/scripts/install_codeql.py --ci --force" — docs/codeql-rollout-checklist.md:79
  - "python3 .codeql/scripts/install_codeql.py --add-to-path" — .codeql/scripts/get_codeql_diagnostics.py:88
  - "python3 .codeql/scripts/install_codeql.py --version VERSION" — docs/codeql-integration.md:95
  - "python3 .codeql/scripts/install_codeql.py --install-path .codeql/cli" — docs/codeql-integration.md:96
- **executed:** yes
- actual command run: `python3 .codeql/scripts/install_codeql.py --version v0.0.0-nonexistent --ci` (in `sources/rjm`)
  abridged stdout:
  ```text
  CodeQL CLI installation failed: Failed to download CodeQL CLI (network error): Not Found
  ```
  **actual exit code**: 3
- documented exit codes vs. actual exit paths in code:
  Documented in docstring:
  - "0 - Success" — .codeql/scripts/install_codeql.py:9
  - "1 - Logic error (invalid parameters, installation check failed)" — .codeql/scripts/install_codeql.py:10
  - "2 - Configuration error (unsupported platform)" — .codeql/scripts/install_codeql.py:11
  - "3 - External dependency error (download failed, extraction failed)" — .codeql/scripts/install_codeql.py:12
  Actual exit paths in code:
  - `raise SystemExit(main())` — .codeql/scripts/install_codeql.py:293
  - `return 0` (.codeql/scripts/install_codeql.py:263, 289) on success or when already installed without `--force`
  - `return 1` (.codeql/scripts/install_codeql.py:273, 283) on general runtime error or post-install verification failure
  - `sys.exit(2)` (.codeql/scripts/install_codeql.py:71) on unsupported platform
  - `return 3` (.codeql/scripts/install_codeql.py:272) when download or extraction fails
- for validators/gates: can it exit non-zero? yes, exits 2 on unsupported OS platform, 3 on download/extraction failure, and 1 if post-install verification fails. Does it fail on the source repo's own default branch? No, `--help` exits 0; invalid version or failed download exits 3.
- does the output match what the documentation claims? Yes, manages binary download, extraction, PATH updates, and verification.

## Defects — required
- `script-bug` · .codeql/scripts/install_codeql.py:71 · Directly invokes `sys.exit(2)` within utility function `get_download_url()` rather than raising an exception or returning a result code handled by `main()`.

## Observations
- Downloads official bundle from GitHub Actions releases (`https://github.com/github/codeql-action/releases/download/codeql-bundle-{version}/codeql-bundle-{plat}.tar.gz`) pinned to default version `v2.23.9` (line 35).
- Includes idempotency check in `add_to_path` (line 222) looking for `# Added by CodeQL installer` marker to avoid duplicate entries in shell profiles.

## Context cost
9317 bytes. Approximately 2329 tokens.
