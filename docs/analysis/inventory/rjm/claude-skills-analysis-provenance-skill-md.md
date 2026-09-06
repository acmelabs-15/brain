---
package: rjm
path: .claude/skills/analysis-provenance/SKILL.md
type: skill
bytes: 8721
unit: inv-rjm-87
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analysis-provenance/SKILL.md, sha256: da8d7cfd6e7333bb7a893e589bc58588386cd6eb9c73c555be2e3b1757de7c27}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analysis-provenance/SKILL.md

## Purpose — required, verbatim
> "Identify code ownership before modifying validators, linters, or tool configurations." — .claude/skills/analysis-provenance/SKILL.md:11

## Design intent — required
Provides operational guidance and decision frameworks for determining code ownership prior to altering validators, linters, or developer tooling configurations. It enforces a "configure, do not modify" protocol for external (UPSTREAM) and vendored (VENDOR) dependencies, steering developers to project-level configuration files and override mechanisms instead of editing third-party or dependency code directly. Without this skill, developers and agents risk making brittle, ephemeral in-tree modifications to installed dependencies or vendored utilities that would be wiped out upon reinstall or break upstream synchronization.

## Phase — required
rjm:spec

## Inputs — required
- Target file or directory paths under consideration for modification
- Trigger phrases: `check provenance before modifying`, `is this file upstream or local`, `who owns this validator`, `check code ownership`, `analyze provenance`
- File headers (first 20 lines for copyright/generated markers)
- Directory paths (`node_modules/`, `.venv/`, `vendor/`, etc.)
- Manifests (`package.json`, lockfiles) and `.gitmodules`

## Outputs — required
- Ownership classification: `UPSTREAM`, `LOCAL`, `VENDOR`, or `UNKNOWN`
- Decision outcomes and action recommendations (configure vs modify vs track upstream vs investigate)
- Provenance findings block emitted into PRD Prior Art / Constraints section during spec generation (`<component>: provenance <UPSTREAM|LOCAL|VENDOR|UNKNOWN>; owner <name-or-team-or-none>`)
- Formatted text or JSON reports generated via `check_provenance.py`

## Invokes — required
- script .claude/skills/analysis-provenance/scripts/check_provenance.py — .claude/skills/analysis-provenance/SKILL.md:27
- skill style-enforcement — .claude/skills/analysis-provenance/SKILL.md:142
- skill programming-advisor — .claude/skills/analysis-provenance/SKILL.md:143
- skill analyze — .claude/skills/analysis-provenance/SKILL.md:144

## Invoked by — required
- reference .claude/skills/spec-generator/references/spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:188

## Concepts named — required, verbatim
- `UPSTREAM` — .claude/skills/analysis-provenance/SKILL.md:42 — defined here
- `LOCAL` — .claude/skills/analysis-provenance/SKILL.md:43 — defined here
- `VENDOR` — .claude/skills/analysis-provenance/SKILL.md:44 — defined here
- `UNKNOWN` — .claude/skills/analysis-provenance/SKILL.md:45 — defined here
- `Target Resolution` — .claude/skills/analysis-provenance/SKILL.md:64 — defined here
- `Directory Analysis` — .claude/skills/analysis-provenance/SKILL.md:65 — defined here
- `Package Manifest Analysis` — .claude/skills/analysis-provenance/SKILL.md:66 — defined here
- `File Header Analysis` — .claude/skills/analysis-provenance/SKILL.md:67 — defined here
- `Provenance Determination` — .claude/skills/analysis-provenance/SKILL.md:68 — defined here
- `Upstream Indicators` — .claude/skills/analysis-provenance/SKILL.md:151 — defined here
- `Local Indicators` — .claude/skills/analysis-provenance/SKILL.md:162 — defined here
- `Vendor Indicators` — .claude/skills/analysis-provenance/SKILL.md:171 — defined here

## Structure
- `# Analysis Provenance` — .claude/skills/analysis-provenance/SKILL.md:9
- `## Triggers` — .claude/skills/analysis-provenance/SKILL.md:13
- `## Quick Start` — .claude/skills/analysis-provenance/SKILL.md:23
- `## Quick Reference` — .claude/skills/analysis-provenance/SKILL.md:38
- `## When to Use` — .claude/skills/analysis-provenance/SKILL.md:49
- `## Process` — .claude/skills/analysis-provenance/SKILL.md:60
- `## Decision Tree` — .claude/skills/analysis-provenance/SKILL.md:74
- `## Command Reference` — .claude/skills/analysis-provenance/SKILL.md:95
- `## Anti-Patterns` — .claude/skills/analysis-provenance/SKILL.md:116
- `## Verification` — .claude/skills/analysis-provenance/SKILL.md:127
- `## Related Skills` — .claude/skills/analysis-provenance/SKILL.md:138
- `## Timelessness: 8/10` — .claude/skills/analysis-provenance/SKILL.md:286

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
- documented exit codes:
  - "0" — .claude/skills/analysis-provenance/SKILL.md:111
  - "1" — .claude/skills/analysis-provenance/SKILL.md:112
  vs. actual exit paths in code:
  - exit 0: `return 0` at .claude/skills/analysis-provenance/scripts/check_provenance.py:409
  - exit 1: `return 1` at .claude/skills/analysis-provenance/scripts/check_provenance.py:399 (when target not found)
  - exit 2: `argparse` raises SystemExit with code 2 on missing or invalid CLI arguments
- for validators/gates:
  - Can it exit non-zero? Only on missing target (exit 1) or invalid arguments (exit 2). When the target exists, it always exits 0.
  - Does it fail on the source repo's own default branch? Exits 0 on existing files and directories. Fails with exit 1 if target does not exist.
  - Gate capability: The pre-commit example in line 278 lists `args: [--target, node_modules, --exit-on-upstream]`, but `--exit-on-upstream` is not implemented in `check_provenance.py`, making it an unfailable gate in pre-commit.
- does the output match what the documentation claims? Partially: example output in line 191 matches the format output, but pre-commit hook example in line 278 documents `--exit-on-upstream` which does not exist in the script.

## Defects — required
- doc-drift · .claude/skills/analysis-provenance/SKILL.md:278 · Pre-commit example specifies argument `--exit-on-upstream`, but check_provenance.py does not define or accept this argument.
- missing-path · .claude/skills/analysis-provenance/SKILL.md:187 · Example documents `--target .markdownlint.json`, but .markdownlint.json does not exist in the repository root.
- missing-path · .claude/skills/analysis-provenance/SKILL.md:223 · Example documents `--target PSScriptAnalyzerSettings.psd1`, but PSScriptAnalyzerSettings.psd1 does not exist in the repository root.
- unfailable-gate · .claude/skills/analysis-provenance/SKILL.md:278 · Pre-commit configuration intended to block commits of upstream modifications cannot fail because check_provenance.py lacks `--exit-on-upstream` and always exits 0 when the target exists.

## Observations
- Promotes a clear architectural distinction between modifying dependencies and configuring tooling, enforcing the "Configuration over modification" pattern.
- Integrated into spec generation via `spec-prior-art-schema.md` to establish ownership and halt on UNKNOWN provenance before build-vs-buy decisions are made.
- Assesses timelessness rating (8/10) on fundamental software engineering principles of provenance and dependency hygiene.
- Context cost: 8,721 bytes (skill) + 12,659 bytes (check_provenance.py) = 21,380 bytes, approximately 5,345 tokens.
