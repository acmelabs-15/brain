---
package: rjm
path: scripts/validation/skill_size.py
type: script
bytes: 30176
unit: inv-rjm-306
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/skill_size.py

## Purpose — required, verbatim
> "Validate SKILL.md files do not exceed size limits." — scripts/validation/skill_size.py:2

## Design intent — required
Enforces prompt size constraints on `SKILL.md` files across skill trees (`.claude/skills` and `src/copilot-cli/skills`) to prevent prompt bloat, excessive context token consumption, and latency overhead when skills are activated. Skill files that grow too large degrade agent reasoning efficiency and crowd out task context. The script implements a dual ceiling check across lines (default 500 hard ceiling, 300 warning) and raw bytes (default 24,576 bytes ratchet ceiling toward 20,480 bytes target, 12,288 bytes progressive disclosure warning). The byte ceiling specifically prevents table-heavy or dense-line skills from circumventing line limits while carrying excessive context. To support legitimate exceptions while preventing unreviewed overrides, it honors a frontmatter `size-exception: true` flag only if an opening HTML rationale comment of at least 200 characters explaining the justification appears in the first 40 lines. In pre-commit hooks, it queries git stage-0 index blobs directly with `--no-replace-objects` and fails closed on uncertifiable blobs, preventing unstaged working-tree tampering or replace-ref decoys.

## Phase — required
none

## Inputs — required
- CLI option `--path`: "Narrow the scan to one SKILL.md file or directory " — scripts/validation/skill_size.py:558
- CLI option `--ci`: "CI mode: exit non-zero on validation failure" — scripts/validation/skill_size.py:566
- CLI option `--staged-only`: "Only check staged files" — scripts/validation/skill_size.py:572
- CLI option `--changed-files`: "Explicit list of file paths to check" — scripts/validation/skill_size.py:578
- CLI option `--limit`: "Maximum lines allowed" — scripts/validation/skill_size.py:584
- CLI option `--warn`: "Warning threshold in lines" — scripts/validation/skill_size.py:590
- CLI option `--byte-limit`: "Maximum bytes allowed" — scripts/validation/skill_size.py:596
- CLI option `--byte-warn`: "Warning threshold in bytes" — scripts/validation/skill_size.py:602
- Environment variable `SKILL_PATH`: Default path override — scripts/validation/skill_size.py:556
- Environment variable `CI`: Default CI flag — scripts/validation/skill_size.py:565
- Environment variable `STAGED_ONLY`: Default staged-only flag — scripts/validation/skill_size.py:571
- Skill file trees: `_SKILL_TREE_PREFIXES` — scripts/validation/skill_size.py:120
- Frontmatter helper path: `_FRONTMATTER_PATH` — scripts/validation/skill_size.py:43
- Git index blobs inspected via `ls-files` — scripts/validation/skill_size.py:382
- Git staged objects retrieved via `cat-file` — scripts/validation/skill_size.py:454
- Staged file listing filter via `--diff-filter=ACMRT` — scripts/validation/skill_size.py:330

## Outputs — required
- Standard output reporting validation progress, per-file failures or warnings, and summary totals (`Total`, `Passed`, `Warnings`, `Failed`, `Limit`) — scripts/validation/skill_size.py:620-626
- Standard error error message on frontmatter helper loading failure — scripts/validation/skill_size.py:55
- Exit code 0: "0 - Success: All skill files within size limits" — scripts/validation/skill_size.py:22
- Exit code 1: "1 - Error: One or more files exceed limit (CI mode only)" — scripts/validation/skill_size.py:23
- Exit code 2: "2 - Uncertifiable staged blob or staged discovery failure (fail-closed)" — scripts/validation/skill_size.py:24

## Invokes — required
- script frontmatter.py — scripts/validation/skill_size.py:44

## Invoked by — required
- doc CLAUDE.md — .claude/skills/CLAUDE.md:95
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:27
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:311

## Concepts named — required, verbatim
- `size limits` — scripts/validation/skill_size.py:2 — defined here
- `progressive disclosure` — scripts/validation/skill_size.py:6 — used here
- `size-exception` — scripts/validation/skill_size.py:13 — defined here
- `ratchet` — scripts/validation/skill_size.py:11 — used here
- `fail-closed` — scripts/validation/skill_size.py:24 — used here
- `SKILL_SIZE_LIMIT` — scripts/validation/skill_size.py:61 — defined here
- `SKILL_SIZE_WARNING` — scripts/validation/skill_size.py:62 — defined here
- `SKILL_BYTE_TARGET` — scripts/validation/skill_size.py:70 — defined here
- `SKILL_BYTE_LIMIT` — scripts/validation/skill_size.py:71 — defined here
- `SKILL_BYTE_WARNING` — scripts/validation/skill_size.py:72 — defined here
- `RATIONALE_SEARCH_LINES` — scripts/validation/skill_size.py:81 — defined here
- `RATIONALE_MIN_CHARS` — scripts/validation/skill_size.py:82 — defined here
- `StagedDiscoveryError` — scripts/validation/skill_size.py:140 — defined here
- `StagedBlobError` — scripts/validation/skill_size.py:150 — defined here
- `SizeCheckResult` — scripts/validation/skill_size.py:178 — defined here

## Structure
- Shebang and module docstring — scripts/validation/skill_size.py:1-27
- Imports and frontmatter module dynamic loader — scripts/validation/skill_size.py:29-59
- Size thresholds, ratchet limits, and rationale constants — scripts/validation/skill_size.py:60-84
- Exception rationale validator (`has_exception_rationale`) — scripts/validation/skill_size.py:86-111
- Skill tree prefixes, pattern regex, and git blob mode constants — scripts/validation/skill_size.py:114-138
- Exception classes (`StagedDiscoveryError`, `StagedBlobError`) — scripts/validation/skill_size.py:140-160
- Display helper and data structures (`_relative_display`, `SizeCheckResult`, `_Tally`) — scripts/validation/skill_size.py:161-203
- Core validation logic (`check_skill_size`) — scripts/validation/skill_size.py:205-298
- Git staged discovery and blob reading (`get_staged_skill_files`, `_staged_index_entry`, `read_staged_blob_bytes`) — scripts/validation/skill_size.py:300-466
- Corpus discovery and summary helpers (`default_corpus_files`, `default_corpus_summary`, `get_skill_files`) — scripts/validation/skill_size.py:468-548
- Argument parser and summary reporting (`build_parser`, `_report_summary`, `_print_corpus_summary`) — scripts/validation/skill_size.py:549-665
- CLI entry point (`main`) — scripts/validation/skill_size.py:666-743

## Scripts — required if type is script or the skill ships scripts
For each script:
- path: `scripts/validation/skill_size.py`, language: Python, lines: 743
- documented invocation:
  `"Validate SKILL.md files against size limits." — scripts/validation/skill_size.py:552`
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  Command: `python3 sources/rjm/scripts/validation/skill_size.py`
  ```
  Validating skill prompt sizes...
  Scanning skill trees: .claude/skills, src/copilot-cli/skills
  Found 203 SKILL.md file(s) to check.

    [WARN] .claude/skills/adr-generator/SKILL.md (251 lines, 12612 bytes)
    ...
  ========================================
  Skill Size Summary
  ========================================
    Total:    203
    Passed:   203
    Warnings: 89
    Failed:   0
    Limit:    500 lines / 24576 bytes

  All skill files within size limits.
  ```
  Exit code: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented:
    - `"0 - Success: All skill files within size limits" — scripts/validation/skill_size.py:22`
    - `"1 - Error: One or more files exceed limit (CI mode only)" — scripts/validation/skill_size.py:23`
    - `"2 - Uncertifiable staged blob or staged discovery failure (fail-closed)" — scripts/validation/skill_size.py:24`
  - Actual exit paths:
    - Exit 2: `raise SystemExit(2) from _exc` — scripts/validation/skill_size.py:58
    - Exit 2: `return 2` — scripts/validation/skill_size.py:636
    - Exit 2: `return 2` — scripts/validation/skill_size.py:692
    - Exit 1: `return 1` — scripts/validation/skill_size.py:646
    - Exit 0: `return 0` — scripts/validation/skill_size.py:652
    - Exit 0: `return 0` — scripts/validation/skill_size.py:696
    - Invocation wrapper: `raise SystemExit(main())` — scripts/validation/skill_size.py:742
  - for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
    Yes, exits 1 when a skill exceeds limits in CI mode (`--ci`), and exits 2 if git discovery fails or staged blobs cannot be certified. On the source repo's default branch it passes with 203 skills checked, 89 warnings, 0 failures, and exits 0.
  - does the output match what the documentation claims?
    Yes, outputs individual checked skills with warnings/exceptions and produces the summary block adhering to ADR-035 exit codes.

## Defects — required
none

## Observations
- Rigorous git security and fail-closed integrity: Uses `--no-replace-objects` for all git subprocess operations (`git diff`, `git ls-files`, `git cat-file`) to defend against sparse index replacement tree manipulation and prevents staged symlinks or gitlinks from subverting blob size measurements.
- Ratchet enforcement: Rather than jumping directly to the desired 20 KiB target (`SKILL_BYTE_TARGET: 20480`), it seeds the hard ceiling (`SKILL_BYTE_LIMIT: 24576`) just above the largest existing skill body (24,210 B) to prevent further growth while allowing legacy skills to decompose via progressive disclosure.
- Rationale validation floor: Frontmatter `size-exception: true` requires an opening HTML comment within the first 40 lines containing at least 200 characters of substantive justification to prevent token suppressions.

## Context cost
30,176 bytes (~7,500 tokens) for this script. When loaded, dynamically imports `frontmatter.py` (2,735 bytes), for a total context footprint of ~32,911 bytes (~8,200 tokens).
