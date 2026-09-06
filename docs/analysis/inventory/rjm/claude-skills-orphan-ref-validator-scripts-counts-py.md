---
package: rjm
path: .claude/skills/orphan-ref-validator/scripts/counts.py
type: script
bytes: 4325
unit: inv-rjm-129
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/scripts/counts.py

## Purpose — required, verbatim
> "orphan-ref-validator skill catalog enumeration." — .claude/skills/orphan-ref-validator/scripts/counts.py:2

## Design intent — required
Enumerates the live skill catalog located at `.claude/skills/<name>/SKILL.md` and discovers non-skill sibling artifact namespaces (Claude agents in `.claude/agents/`, slash commands in `.claude/commands/`, Serena memories in `.serena/memories/`, and bundled skill references in `.claude/skills/<skill>/references/`). By checking candidate kebab-case tokens against these sibling namespaces, it distinguishes valid references to real non-skill artifacts from truly orphaned references, eliminating false-positive flags on bare references while ensuring that explicit skill claims still require existence in the live skill catalog.

## Phase — required
rjm:build

## Inputs — required
- `repo_root: Path` parameter passed to `skills_dir()`, `enumerate_skills()`, and `enumerate_sibling_artifacts()` (.claude/skills/orphan-ref-validator/scripts/counts.py:47, 57, 74)
- Filesystem directories inspected under `repo_root`:
  - `skills` catalog directory at `.claude/skills/` containing `<name>/SKILL.md` (.claude/skills/orphan-ref-validator/scripts/counts.py:54, 70)
  - `.claude/agents/*.md` (.claude/skills/orphan-ref-validator/scripts/counts.py:36, 91)
  - `.claude/commands/*.md` (.claude/skills/orphan-ref-validator/scripts/counts.py:37, 91)
  - `.serena/memories/**/*.md` (.claude/skills/orphan-ref-validator/scripts/counts.py:38, 91)
  - `.claude/skills/*/references/*.md` (.claude/skills/orphan-ref-validator/scripts/counts.py:44, 96, 99)

## Outputs — required
- Return values from functions:
  - `skills_dir(repo_root)` returns `Path` to catalog directory (.claude/skills/orphan-ref-validator/scripts/counts.py:47, 54)
  - `enumerate_skills(repo_root)` returns `set[str] | None` containing names of directories with `SKILL.md`, or `None` if directory missing (.claude/skills/orphan-ref-validator/scripts/counts.py:57, 66, 67)
  - `enumerate_sibling_artifacts(repo_root)` returns `frozenset[str]` of non-skill markdown file stems (.claude/skills/orphan-ref-validator/scripts/counts.py:74, 101)

## Invokes — required
none

## Invoked by — required
- script counts — .claude/skills/orphan-ref-validator/scripts/scan.py:71
- script patterns.py — .claude/skills/orphan-ref-validator/scripts/patterns.py:69

## Concepts named — required, verbatim
- `orphan-ref-validator` — .claude/skills/orphan-ref-validator/scripts/counts.py:2 — used here
- `scan` — .claude/skills/orphan-ref-validator/scripts/counts.py:5 — used here
- `SKILL.md` — .claude/skills/orphan-ref-validator/scripts/counts.py:6 — used here
- `SKILL_REF_RE` — .claude/skills/orphan-ref-validator/scripts/counts.py:10 — used here
- `issue-feature-review` — .claude/skills/orphan-ref-validator/scripts/counts.py:12 — used here
- `decision-rigor` — .claude/skills/orphan-ref-validator/scripts/counts.py:12 — used here
- `testing-002-test-first-development` — .claude/skills/orphan-ref-validator/scripts/counts.py:13 — used here
- `merge-resolver` — .claude/skills/orphan-ref-validator/scripts/counts.py:19 — used here
- `negotiation` — .claude/skills/orphan-ref-validator/scripts/counts.py:20 — used here
- `pr-comment-responder` — .claude/skills/orphan-ref-validator/scripts/counts.py:20 — used here
- `retrospective` — .claude/skills/orphan-ref-validator/scripts/counts.py:20 — used here
- `observability` — .claude/skills/orphan-ref-validator/scripts/counts.py:21 — used here
- `chestertons-fence` — .claude/skills/orphan-ref-validator/scripts/counts.py:22 — used here
- `threat-modeling` — .claude/skills/orphan-ref-validator/scripts/counts.py:22 — used here
- `REQ-009` — .claude/skills/orphan-ref-validator/scripts/counts.py:24 — used here
- `test_scan.py` — .claude/skills/orphan-ref-validator/scripts/counts.py:25 — used here
- `skills_dir` — .claude/skills/orphan-ref-validator/scripts/counts.py:47 — defined here
- `enumerate_skills` — .claude/skills/orphan-ref-validator/scripts/counts.py:57 — defined here
- `enumerate_sibling_artifacts` — .claude/skills/orphan-ref-validator/scripts/counts.py:74 — defined here

## Structure
none (python library module; constants and functions: `_SIBLING_FILE_NAMESPACES`, `_SKILL_REFERENCE_DIR`, `skills_dir`, `enumerate_skills`, `enumerate_sibling_artifacts`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/counts.py`, language: Python 3, lines: 102
- documented invocation:
  - "from counts import (" — .claude/skills/orphan-ref-validator/scripts/scan.py:71
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/counts.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (library module without CLI entrypoint).
  Actual exit paths in code: no `sys.exit` or `exit` calls in code; exits 0 implicitly upon execution.
- for validators/gates: can it exit non-zero? no (library module with no executable entrypoint). Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes, defines and exports catalog enumeration functions.

## Defects — required
none

## Observations
- Distinguishes "no skill directory" (returns `None`) from "directory with zero skills" (returns empty set `set()`) at lines 60-62, enabling callers to handle missing catalog directories as configuration/environment errors rather than false-positive zero-skill reports.
- Documents a deliberate architectural trade-off in lines 17-26: when a deleted skill shares its name with a sibling artifact (such as an agent or review axis), bare mentions pass validation because they resolve to a live sibling, while typed claims (explicitly saying "the `foo` skill") are still caught via REQ-009 AC-2.

## Context cost
4325 bytes (~1081 tokens). Standard library only (`pathlib`).
