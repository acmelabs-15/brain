---
package: rjm
path: .claude/skills/skillforge/scripts/frontmatter.py
type: script
bytes: 1087
unit: inv-rjm-162
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/frontmatter.py, sha256: ec8b87b73f02570615731d4d085f799e9206c2b0da9a7b6be8a297019b74120f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/frontmatter.py

## Purpose — required, verbatim
> "Shared frontmatter parsing utilities for skill validation." — .claude/skills/skillforge/scripts/frontmatter.py:1

## Design intent — required
Lightweight parsing utility supporting frontmatter validation across skill checking workflows. It provides a focused function, `has_size_exception(content: str) -> bool`, that scans YAML frontmatter delimited by `---` blocks for the declaration `size-exception: true`. Without it, validation tools checking skill file sizes (including `skill_modularity_audit.py` and project-level `scripts/validation/skill_size.py`) would have to duplicate frontmatter regex extraction or risk misreporting skills that have justified size exemptions.

## Phase — required
rjm:Validation and Packaging

## Inputs — required
none (imported helper module; accepts markdown string `content` via Python function calls to `has_size_exception(content)`).

## Outputs — required
none (produces no stdout/stderr or disk files; returns boolean `True` if `size-exception: true` is present, `False` otherwise).

## Invokes — required
none

## Invoked by — required
- script skill_modularity_audit.py — .claude/skills/skillforge/scripts/skill_modularity_audit.py:43
- skill .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:286
- script skill_size.py — scripts/validation/skill_size.py:44

## Concepts named — required, verbatim
- `has_size_exception` — .claude/skills/skillforge/scripts/frontmatter.py:13 — defined here
- `size-exception` — .claude/skills/skillforge/scripts/frontmatter.py:17 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/frontmatter.py`, language: Python, lines: 39
- documented invocation: none (`(no CLI invocation; imported helper module: "Internal helper module: shared YAML frontmatter parsing (imported, not run directly)" — .claude/skills/skillforge/SKILL.md:286)`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/frontmatter.py`, abridged stdout: `(empty)`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (no `sys.exit` calls; script defines helper function and terminates cleanly with exit code 0)
- for validators/gates: can it exit non-zero? no (defines helper function without execution entrypoint or assertions). does it fail on the source repo's own default branch? no.
- does the output match what the documentation claims? yes (exits 0 with no output when imported or run directly)

## Defects — required
none

## Observations
- Single-purpose utility: Implements only size-exception regex parsing rather than full YAML deserialization, avoiding dependency on PyYAML or complex parsing logic during size auditing.
- Robust regex matching: Uses regex pattern `(?im)^\s*size-exception:\s*true\s*(?:#.*)?$` to support leading whitespace, trailing comments, and case-insensitive matching across frontmatter lines.

## Context cost
1087 bytes, ~270 tokens.
