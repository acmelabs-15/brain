---
package: rjm
path: .claude/skills/panning-for-gold/scripts/synthesis.py
type: script
bytes: 4106
unit: inv-rjm-132
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/panning-for-gold/scripts/synthesis.py, sha256: 8349fd7fd52af44f1f05ce0dd8ea038ca334dfb456f5ba2b92932ab1451dce87}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/panning-for-gold/scripts/synthesis.py

## Purpose — required, verbatim
> "Gold-found synthesis for panning-for-gold." — .claude/skills/panning-for-gold/scripts/synthesis.py:2

## Design intent — required
Implements synthesis functionality for the `panning-for-gold` skill, combining a finalized thread inventory with individual per-thread evaluation markdown files into a unified `gold-found.md` document. It computes deterministic, collision-resistant evaluation file names based on title slugs and SHA-256 hashes of thread keys (`{slug}-{hash}.md`), enforces a strict section hierarchy (`High-Signal`, `Medium-Signal`, `Low-Signal`), formats thread quotations as blockquotes, and raises `SynthesisError` if any expected evaluation file is missing.

## Phase — required
cross-phase

## Inputs — required
- Sequence of validated `Thread` instances
- Directory path containing per-thread evaluation markdown files
- Source identifier string and optional generation date

## Outputs — required
- Formatted `gold-found.md` markdown string containing metadata block and signal-tiered thread evaluations

## Invokes — required
- script inventory — .claude/skills/panning-for-gold/scripts/synthesis.py:24

## Invoked by — required
- script synthesis — .claude/skills/panning-for-gold/scripts/pan.py:35
- script scripts/synthesis.py — .claude/skills/panning-for-gold/SKILL.md:126

## Concepts named — required, verbatim
- `Gold-found` — .claude/skills/panning-for-gold/scripts/synthesis.py:2 — used here
- `panning-for-gold` — .claude/skills/panning-for-gold/scripts/synthesis.py:2 — used here
- `ADR-035` — .claude/skills/panning-for-gold/scripts/synthesis.py:7 — used here
- `High-Signal` — .claude/skills/panning-for-gold/scripts/synthesis.py:28 — used here
- `Medium-Signal` — .claude/skills/panning-for-gold/scripts/synthesis.py:29 — used here
- `Low-Signal` — .claude/skills/panning-for-gold/scripts/synthesis.py:30 — used here
- `SynthesisError` — .claude/skills/panning-for-gold/scripts/synthesis.py:34 — defined here

## Structure
none (python module; functions and constants: `SIGNAL_ORDER`, `SIGNAL_HEADER`, `SynthesisError`, `SLUG_MAX_LEN`, `_HASH_LEN`, `_slugify`, `evaluation_filename`, `load_evaluation`, `build_gold_found`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/panning-for-gold/scripts/synthesis.py`, language: Python 3, lines: 136
- documented invocation:
  - "scripts/synthesis.py" — .claude/skills/panning-for-gold/SKILL.md:126
  - "The script delegates to `inventory.py` for parsing and merging, and `synthesis.py` for gold-found generation." — .claude/skills/panning-for-gold/SKILL.md:118
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/panning-for-gold/scripts/synthesis.py`
  abridged stdout: (empty)
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in module docstring:
  - "0 - Success" — .claude/skills/panning-for-gold/scripts/synthesis.py:8
  - "1 - Logic error (missing evaluation, bad inventory)" — .claude/skills/panning-for-gold/scripts/synthesis.py:9
  - "2 - Config error (missing file or directory)" — .claude/skills/panning-for-gold/scripts/synthesis.py:10
  Actual exit paths in code:
  - No `sys.exit()` or CLI entrypoint in this file. The module defines `SynthesisError` (.claude/skills/panning-for-gold/scripts/synthesis.py:34) which is caught by `pan.py` (.claude/skills/panning-for-gold/scripts/pan.py:162) to exit with code 1.
- for validators/gates: can it exit non-zero? no (as a library module). does it fail on default branch? no.
- does output match documentation? yes, functions correctly when invoked via `pan.py synth`.

## Defects — required
- `doc-drift` · .claude/skills/panning-for-gold/scripts/synthesis.py:7 · Docstring documents ADR-035 CLI exit codes (0, 1, 2) as if this script were an independent CLI tool, but `synthesis.py` has no `__main__` entrypoint or `sys.exit()` calls; exit codes are returned by `pan.py`.

## Observations
- Filename calculation in `evaluation_filename` (.claude/skills/panning-for-gold/scripts/synthesis.py:61) appends an 8-character SHA-256 hash of `thread.key` to the slugified title, preventing file collisions between threads whose titles produce identical slugs.
- In `build_gold_found`, empty signal sections render explicit `_None._` (.claude/skills/panning-for-gold/scripts/synthesis.py:122) markers to maintain structural clarity in the output markdown.

## Context cost
4106 bytes (~1027 tokens).
