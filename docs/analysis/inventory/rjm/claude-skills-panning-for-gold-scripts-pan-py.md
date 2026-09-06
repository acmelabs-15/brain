---
package: rjm
path: .claude/skills/panning-for-gold/scripts/pan.py
type: script
bytes: 7850
unit: inv-rjm-132
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/panning-for-gold/scripts/pan.py, sha256: f448b2523db6e65590e2bf7fd22bd6426e17d2eb9424632d6d77019aff99b533}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/panning-for-gold/scripts/pan.py

## Purpose — required, verbatim
> "CLI entrypoint for the panning-for-gold skill." — .claude/skills/panning-for-gold/scripts/pan.py:2

## Design intent — required
Serves as the main command-line interface for the `panning-for-gold` skill, orchestrating workspace management, inventory validation, two-pass merging, and synthesis. It provides four subcommands: `init` (creates workspace subdirectories `transcripts/`, `inventories/`, `evaluations/`, `gold-found/`), `validate` (validates inventory schemas), `merge` (merges `pass1` and `final` inventories with deduplication and overwrite protection), and `synth` (assembles `gold-found.md` from inventories and evaluations). It also enforces CWE-22 path traversal prevention on user-supplied workspace paths by rejecting null bytes, control characters, backslashes, and `..` components.

## Phase — required
cross-phase

## Inputs — required
- Subcommand CLI arguments:
  - `init`: `--workspace` path (.claude/skills/panning-for-gold/scripts/pan.py:184)
  - `validate`: `--inventory` path (.claude/skills/panning-for-gold/scripts/pan.py:188)
  - `merge`: `--pass1`, `--final`, `--output` paths, `--force` flag (.claude/skills/panning-for-gold/scripts/pan.py:192-195)
  - `synth`: `--inventory`, `--evaluations`, `--output` paths, `--source` label, `--force` flag (.claude/skills/panning-for-gold/scripts/pan.py:199-203)

## Outputs — required
- Workspace directory trees under `<workspace>` (.claude/skills/panning-for-gold/scripts/pan.py:42)
- Merged inventory files written to disk (.claude/skills/panning-for-gold/scripts/pan.py:137)
- Synthesized `gold-found` files written to disk (.claude/skills/panning-for-gold/scripts/pan.py:170)
- Status and validation messages on stdout and stderr

## Invokes — required
- script inventory — .claude/skills/panning-for-gold/scripts/pan.py:27
- script synthesis — .claude/skills/panning-for-gold/scripts/pan.py:35

## Invoked by — required
- script pan.py — .claude/skills/panning-for-gold/SKILL.md:112
- script scripts/pan.py — .claude/skills/panning-for-gold/SKILL.md:124

## Concepts named — required, verbatim
- `panning-for-gold` — .claude/skills/panning-for-gold/scripts/pan.py:2 — used here
- `init` — .claude/skills/panning-for-gold/scripts/pan.py:5 — defined here
- `validate` — .claude/skills/panning-for-gold/scripts/pan.py:6 — defined here
- `merge` — .claude/skills/panning-for-gold/scripts/pan.py:7 — defined here
- `synth` — .claude/skills/panning-for-gold/scripts/pan.py:8 — defined here
- `ADR-035` — .claude/skills/panning-for-gold/scripts/pan.py:10 — used here
- `PathValidationError` — .claude/skills/panning-for-gold/scripts/pan.py:45 — defined here

## Structure
none (python CLI entrypoint; subcommands and helpers: `WORKSPACE_ENV`, `DEFAULT_WORKSPACE`, `SUBDIRS`, `PathValidationError`, `_reject_traversal`, `resolve_workspace`, `cmd_init`, `cmd_validate`, `cmd_merge`, `cmd_synth`, `build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/panning-for-gold/scripts/pan.py`, language: Python 3, lines: 218
- documented invocation:
  - "pan.py init      --workspace <path>" — .claude/skills/panning-for-gold/SKILL.md:112
  - "pan.py validate  --inventory <file>" — .claude/skills/panning-for-gold/SKILL.md:113
  - "pan.py merge     --pass1 <file> --final <file> --output <file>" — .claude/skills/panning-for-gold/SKILL.md:114
  - "pan.py synth     --inventory <file> --evaluations <dir> --output <file>" — .claude/skills/panning-for-gold/SKILL.md:115
  - "scripts/pan.py" — .claude/skills/panning-for-gold/SKILL.md:124
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/panning-for-gold/scripts/pan.py --help`
  abridged stdout:
  ```text
  usage: pan.py [-h] {init,validate,merge,synth} ...
  Triage raw input into evaluated thread inventories.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0 - Success" — .claude/skills/panning-for-gold/scripts/pan.py:11
  - "1 - Logic error" — .claude/skills/panning-for-gold/scripts/pan.py:12
  - "2 - Config error" — .claude/skills/panning-for-gold/scripts/pan.py:13
  Documented in SKILL.md:
  - "`0` success; `1` validation failure (malformed inventory or evaluation); `2` usage or I/O error." — .claude/skills/panning-for-gold/SKILL.md:124
  Actual exit paths in code:
  - `return 0` on successful init (.claude/skills/panning-for-gold/scripts/pan.py:103), validate (.claude/skills/panning-for-gold/scripts/pan.py:117), merge (.claude/skills/panning-for-gold/scripts/pan.py:139), and synth (.claude/skills/panning-for-gold/scripts/pan.py:172).
  - `return 1` on `InventoryError` (.claude/skills/panning-for-gold/scripts/pan.py:115, 130, 151) or `SynthesisError` (.claude/skills/panning-for-gold/scripts/pan.py:164).
  - `return 2` on `PathValidationError` (.claude/skills/panning-for-gold/scripts/pan.py:98), `MissingInventoryError` (.claude/skills/panning-for-gold/scripts/pan.py:112, 127, 148), existing output file without `--force` (.claude/skills/panning-for-gold/scripts/pan.py:135, 168), missing evaluations directory (.claude/skills/panning-for-gold/scripts/pan.py:155).
  - Program exits via `raise SystemExit(main())` (.claude/skills/panning-for-gold/scripts/pan.py:217).
- for validators/gates: can it exit non-zero? yes (exits 1 on validation/synthesis logic errors, exits 2 on path/config errors). does it fail on default branch? no.
- does output match documentation? yes, subcommands execute and adhere to documented ADR-035 exit code conventions.

## Defects — required
none

## Observations
- Safe file overwrite prevention: requires `--force` when output files already exist in both `cmd_merge` (.claude/skills/panning-for-gold/scripts/pan.py:134) and `cmd_synth` (.claude/skills/panning-for-gold/scripts/pan.py:167).
- Strict CWE-22 path traversal defense: `_reject_traversal` (.claude/skills/panning-for-gold/scripts/pan.py:50) checks for null bytes, ASCII control characters, backslashes, and `..` components in workspace inputs.

## Context cost
7850 bytes (~1963 tokens).
