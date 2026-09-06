---
package: rjm
path: scripts/split_bundled_skills.py
type: script
bytes: 4644
unit: inv-rjm-262
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/split_bundled_skills.py, sha256: 984becd29092df0d723645aa4250697a65d743f72cab46212c1934501d747257}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/split_bundled_skills.py

## Purpose — required, verbatim
> "Split bundled skill files into individual files per ADR-017." — scripts/split_bundled_skills.py:2

## Design intent — required
Splits bundled multi-skill markdown files in `.serena/memories` into individual files following the `domain-###-topic.md` naming convention, implementing ADR-017 to improve retrieval granularity and reduce context window consumption for agent skill memories.

## Phase — required
cross-phase

## Inputs — required
- CLI flag `--bundled-files-dir` specifying source memory directory (default: `.serena/memories`): `scripts/split_bundled_skills.py:114`
- CLI flag `--dry-run`: `scripts/split_bundled_skills.py:115`
- List of bundled files to split: `BUNDLED_FILES` — scripts/split_bundled_skills.py:21

## Outputs — required
- Extracted individual skill markdown files at `{domain}-{number}-{topic}.md`: `scripts/split_bundled_skills.py:94-95`
- Unlinks original bundled files if not `--dry-run`: `scripts/split_bundled_skills.py:140`
- Progress status and summary counts to stdout: `scripts/split_bundled_skills.py:132-135`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-017` — scripts/split_bundled_skills.py:2 — used here
- `ADR-035 Exit Code Standardization` — scripts/split_bundled_skills.py:11 — used here
- `BUNDLED_FILES` — scripts/split_bundled_skills.py:21 — defined here
- `SKILL_PATTERN` — scripts/split_bundled_skills.py:61 — defined here
- `process_bundled_file` — scripts/split_bundled_skills.py:64 — defined here
- `main` — scripts/split_bundled_skills.py:112 — defined here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
For `scripts/split_bundled_skills.py`:
- path, language, lines: `scripts/split_bundled_skills.py`, Python, 149 lines
- documented invocation:
  "uv run python scripts/split_bundled_skills.py --help" — scripts/README.md:226
- **executed:** yes
- actual command run: `python3 scripts/split_bundled_skills.py --dry-run`
- actual stdout (abridged):
```
WARNING: File not found: .serena/memories/documentation-fallback-pattern.md
...
Summary:
  Total bundled files processed: 37
  Total skills extracted: 0

Done!
```
- **actual exit code:** 0
- documented exit codes:
  "0  - Success" — scripts/split_bundled_skills.py:8
  "1  - Error" — scripts/split_bundled_skills.py:9
  vs. actual exit paths: `return 0` at `scripts/split_bundled_skills.py:144` passed to `sys.exit(main())` at `scripts/split_bundled_skills.py:148`. No exit path in `main()` returns or exits 1 (missing files only trigger a warning).
- for validators/gates: not a validator or gate; cannot exit non-zero under normal execution.
- does the output match what the documentation claims? Output format matches documentation when files are present, but exit code 1 documented in docstring is never produced.

## Defects — required
- exit-code-mismatch — scripts/split_bundled_skills.py:9 — docstring documents exit code 1 for Error, but main() only returns 0 and contains no error exit path returning 1.
- orphan — scripts/split_bundled_skills.py:1 — migration script from ADR-017 not invoked by any workflow or lifecycle command.

## Observations
Hardcodes 37 bundled markdown memory filenames from the pre-ADR-017 memory architecture in `BUNDLED_FILES` (`scripts/split_bundled_skills.py:21-59`).

## Context cost
4644 bytes, ~1160 tokens.
