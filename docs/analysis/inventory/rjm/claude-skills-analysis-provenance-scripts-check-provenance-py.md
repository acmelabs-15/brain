---
package: rjm
path: .claude/skills/analysis-provenance/scripts/check_provenance.py
type: script
bytes: 12659
unit: inv-rjm-87
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analysis-provenance/scripts/check_provenance.py, sha256: e9ba09d25d1343e57de5e42155192494ac325c4738171459485d9ab85d9e63ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analysis-provenance/scripts/check_provenance.py

## Purpose — required, verbatim
> "Check code provenance to determine if a file is upstream or local." — .claude/skills/analysis-provenance/scripts/check_provenance.py:2

## Design intent — required
Automates ownership classification for project files and directories prior to modification, preventing accidental changes to external dependencies, vendored packages, or auto-generated code. It evaluates multiple structural signals (path hierarchy, `.gitmodules`, `package.json`, file headers, and git-tracked status) to assign weighted scores categorizing targets as UPSTREAM, LOCAL, VENDOR, or UNKNOWN with associated confidence ratings and action recommendations. Without this script, developers and automated agents could unwittingly edit vendored libraries or package manager files, causing lost modifications or tracking divergences.

## Phase — required
rjm:spec

## Inputs — required
- CLI arguments: `--target <path>` (required), `--format <text|json>` (optional, default: `text`), `--verbose` (optional flag)
- Target file or directory path on disk
- Project root `.git` directory and `.gitmodules`
- Project manifest `package.json`
- Target file headers (first 20 lines)

## Outputs — required
- Text summary to stdout displaying Target, Category (`UPSTREAM`, `LOCAL`, `VENDOR`, `UNKNOWN`), Confidence (`HIGH`, `MEDIUM`, `LOW`), Evidence signals, and Recommendation
- JSON payload to stdout when `--format json` is specified (`target`, `category`, `confidence`, `evidence`, `recommendation`)
- Error messages to stderr if target does not exist or arguments are invalid
- Exit code 0 on successful analysis; exit code 1 if target not found; exit code 2 on invalid CLI arguments (via argparse)

## Invokes — required
- file .gitmodules — .claude/skills/analysis-provenance/scripts/check_provenance.py:169
- config package.json — .claude/skills/analysis-provenance/scripts/check_provenance.py:197
- command git — .claude/skills/analysis-provenance/scripts/check_provenance.py:247

## Invoked by — required
- skill analysis-provenance — .claude/skills/analysis-provenance/SKILL.md:27
- skill analysis-provenance — .claude/skills/analysis-provenance/SKILL.md:79
- skill analysis-provenance — .claude/skills/analysis-provenance/SKILL.md:100
- skill analysis-provenance — .claude/skills/analysis-provenance/SKILL.md:277

## Concepts named — required, verbatim
- `UPSTREAM` — .claude/skills/analysis-provenance/scripts/check_provenance.py:26 — defined here
- `LOCAL` — .claude/skills/analysis-provenance/scripts/check_provenance.py:27 — defined here
- `VENDOR` — .claude/skills/analysis-provenance/scripts/check_provenance.py:28 — defined here
- `UNKNOWN` — .claude/skills/analysis-provenance/scripts/check_provenance.py:29 — defined here
- `HIGH` — .claude/skills/analysis-provenance/scripts/check_provenance.py:35 — defined here
- `MEDIUM` — .claude/skills/analysis-provenance/scripts/check_provenance.py:36 — defined here
- `LOW` — .claude/skills/analysis-provenance/scripts/check_provenance.py:37 — defined here
- `ProvenanceCategory` — .claude/skills/analysis-provenance/scripts/check_provenance.py:23 — defined here
- `Confidence` — .claude/skills/analysis-provenance/scripts/check_provenance.py:32 — defined here
- `Evidence` — .claude/skills/analysis-provenance/scripts/check_provenance.py:41 — defined here
- `ProvenanceResult` — .claude/skills/analysis-provenance/scripts/check_provenance.py:50 — defined here

## Structure
none (python script; classes and functions: ProvenanceCategory, Confidence, Evidence, ProvenanceResult, _get_relative_parts, check_directory_path, check_file_header, check_git_submodule, check_package_manifest, check_git_tracked, check_project_root, determine_provenance, find_project_root, format_text_output, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/analysis-provenance/scripts/check_provenance.py`, language: Python 3, lines: 414
- documented invocation:
  - "python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target .config/markdownlint.json" — .claude/skills/analysis-provenance/SKILL.md:27
  - "python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target .config/" — .claude/skills/analysis-provenance/SKILL.md:30
  - "python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target PSScriptAnalyzerSettings.psd1 --format json" — .claude/skills/analysis-provenance/SKILL.md:33
  - "python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target <path> [options]" — .claude/skills/analysis-provenance/SKILL.md:100
- **executed:** yes
- actual command run: `python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target .config/`
  abridged stdout:
  ```
  Provenance Check: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.config
  =============================================================================

  Category: LOCAL
  Confidence: HIGH

  Evidence:
    - git_tracked: True
    - project_root: True

  Recommendation: Safe to modify as needed.
  ```
  **actual exit code:** 0
- actual command run (json format): `python3 .claude/skills/analysis-provenance/scripts/check_provenance.py --target .config/wt.toml --format json`
  abridged stdout:
  ```json
  {
    "target": "/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.config/wt.toml",
    "category": "LOCAL",
    "confidence": "HIGH",
    "evidence": [
      {
        "signal": "git_tracked",
        "value": true
      },
      {
        "signal": "project_root",
        "value": true
      }
    ],
    "recommendation": "Safe to modify as needed."
  }
  ```
  **actual exit code:** 0
- documented exit codes:
  - "0: Provenance determined successfully" — .claude/skills/analysis-provenance/scripts/check_provenance.py:8
  - "1: Script error (file not found, invalid arguments)" — .claude/skills/analysis-provenance/scripts/check_provenance.py:9
  vs. actual exit paths in code:
  - exit 0: `return 0` at .claude/skills/analysis-provenance/scripts/check_provenance.py:409 (propagated via `sys.exit(main())` at line 413)
  - exit 1: `return 1` at .claude/skills/analysis-provenance/scripts/check_provenance.py:399 (when target not found, propagated via `sys.exit(main())` at line 413)
  - exit 2: `argparse.ArgumentParser.parse_args()` exits with status code 2 on missing or invalid CLI options (e.g. missing `--target`), conflicting with docstring claim that invalid arguments exit with code 1.
- for validators/gates:
  - Can it exit non-zero? Only on target not found (exit 1) or invalid arguments (exit 2). When the target exists, it always exits 0 regardless of category (UPSTREAM, VENDOR, UNKNOWN).
  - Does it fail on the source repo's own default branch? Exits 0 on existing files and directories. Fails with exit 1 if target does not exist.
  - Gate capability: The script itself lacks failure exit codes for UPSTREAM/VENDOR/UNKNOWN; pre-commit usage shown in SKILL.md:278 attempts `--exit-on-upstream`, but that flag is not implemented in the script.
- does the output match what the documentation claims? Partially: produces category, confidence, evidence, and recommendation as claimed, but `--verbose` argument is defined (line 391) but never used in formatting text or JSON output, and `--exit-on-upstream` documented in SKILL.md:278 is not implemented.

## Defects — required
- exit-code-mismatch · .claude/skills/analysis-provenance/scripts/check_provenance.py:9 · Docstring documents exit code 1 for invalid arguments, but argparse.ArgumentParser exits with code 2 on invalid or missing arguments.
- script-bug · .claude/skills/analysis-provenance/scripts/check_provenance.py:391 · CLI flag `--verbose` is parsed into args but never referenced or used in determine_provenance or output formatting.

## Observations
- Simple heuristic scoring using weighted evidence signals: `upstream_signals` (+10 for dir, +10 for package.json dep, +9 for submodule, +7 for generated header), `vendor_directory` (+8), `local_signals` (+6 for project_root, +5 for git_tracked).
- Evaluates files even when outside git repositories by falling back to directory traversal.
- Context cost: 12,659 bytes, approximately 3,165 tokens.
