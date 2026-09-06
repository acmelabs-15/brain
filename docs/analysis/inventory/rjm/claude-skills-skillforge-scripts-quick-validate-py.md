---
package: rjm
path: .claude/skills/skillforge/scripts/quick_validate.py
type: script
bytes: 12925
unit: inv-rjm-163
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/quick_validate.py, sha256: 579d5fb466abe33bebdd9997f39953776bfe932e972df0d57e2051864c060214}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/quick_validate.py

## Purpose — required, verbatim
> "quick_validate.py - Fast validation for Claude Code skills" — .claude/skills/skillforge/scripts/quick_validate.py:3

The docstring states:
"Validates that a skill meets the packaging requirements for distribution. This is the minimal validation required before packaging with package_skill.py." — .claude/skills/skillforge/scripts/quick_validate.py:5-6

## Design intent — required
Provides a fast, zero-external-dependency validation gate that checks whether a skill directory meets Claude Code packaging and discovery standards before distribution. It verifies that `SKILL.md` exists, contains valid YAML frontmatter, includes required fields (`name`, `description`), contains only allowed keys, obeys kebab-case naming rules (up to 64 characters), and keeps descriptions under 1024 characters without angle brackets. It incorporates a fallback parser when PyYAML is unavailable and enforces strict CWE-22 path-traversal sandboxing. Without it, malformed frontmatter or invalid skill properties would fail during packaging or cause discovery failures in Claude Code.

## Phase — required
rjm:Validation and Packaging

## Inputs — required
- Positional CLI argument `<skill_directory>`: Path to skill directory — .claude/skills/skillforge/scripts/quick_validate.py:9
- Target file `SKILL.md` within the specified directory — .claude/skills/skillforge/scripts/quick_validate.py:215
- Optional parameter `root` in `validate_skill()`: Trusted root path for path containment verification — .claude/skills/skillforge/scripts/quick_validate.py:191

## Outputs — required
- Standard output: Status message reporting validation success ("Skill is valid!") or failure description — .claude/skills/skillforge/scripts/quick_validate.py:306
- Programmatic return value: tuple `(is_valid: bool, message: str)` returned by `validate_skill` — .claude/skills/skillforge/scripts/quick_validate.py:191

## Invokes — required
- script _constants.py — .claude/skills/skillforge/scripts/quick_validate.py:36

## Invoked by — required
- script package_skill.py — .claude/skills/skillforge/scripts/package_skill.py:5
- doc .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:282

## Concepts named — required, verbatim
- `Claude Code` — .claude/skills/skillforge/scripts/quick_validate.py:3 — used here
- `_parse_frontmatter_fallback` — .claude/skills/skillforge/scripts/quick_validate.py:57 — defined here
- `_PathModule` — .claude/skills/skillforge/scripts/quick_validate.py:114 — defined here
- `commonpath` — .claude/skills/skillforge/scripts/quick_validate.py:125 — used here
- `splitdrive` — .claude/skills/skillforge/scripts/quick_validate.py:127 — used here
- `_is_within` — .claude/skills/skillforge/scripts/quick_validate.py:130 — defined here
- `CWE-22` — .claude/skills/skillforge/scripts/quick_validate.py:140 — used here
- `_contained_realpath` — .claude/skills/skillforge/scripts/quick_validate.py:172 — defined here
- `validate_skill` — .claude/skills/skillforge/scripts/quick_validate.py:191 — defined here
- `hyphen-case` — .claude/skills/skillforge/scripts/quick_validate.py:275 — defined here | used here

## Structure
- Fallback frontmatter parser `_parse_frontmatter_fallback` — .claude/skills/skillforge/scripts/quick_validate.py:57
- Path module protocol `_PathModule` — .claude/skills/skillforge/scripts/quick_validate.py:114
- Path containment checker `_is_within` — .claude/skills/skillforge/scripts/quick_validate.py:130
- Target path containment resolver `_contained_realpath` — .claude/skills/skillforge/scripts/quick_validate.py:172
- Core validation function `validate_skill` — .claude/skills/skillforge/scripts/quick_validate.py:191
- CLI entrypoint `main` — .claude/skills/skillforge/scripts/quick_validate.py:309

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/quick_validate.py`
- language: Python (python3)
- lines: 343
- documented invocation:
  - `python quick_validate.py <skill_directory>` — .claude/skills/skillforge/scripts/quick_validate.py:9
  - `python quick_validate.py ~/.claude/skills/my-skill/` — .claude/skills/skillforge/scripts/quick_validate.py:10
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/quick_validate.py sources/rjm/.claude/skills/skillforge`
- abridged stdout:
  ```text
  ✅ Skill is valid!
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented in docstring: none explicitly listed in docstring.
  - Actual exit paths in code:
    - `sys.exit(0 if valid else 1)` — .claude/skills/skillforge/scripts/quick_validate.py:338 (success exit 0, validation failure exit 1)
    - `sys.exit(1)` — .claude/skills/skillforge/scripts/quick_validate.py:314 (invalid CLI argument count)
    - `sys.exit(1)` — .claude/skills/skillforge/scripts/quick_validate.py:325 (path traversal detected)
    - `sys.exit(1)` — .claude/skills/skillforge/scripts/quick_validate.py:329 (skill path not found)
- for validators/gates: can exit non-zero (exits 1 on validation error, path traversal, or missing path). Tested on source repository's own default branch: passes with exit code 0 on `sources/rjm/.claude/skills/skillforge`.
- does the output match what the documentation claims: yes, validates skill frontmatter structure and prints status message

## Defects — required
- `doc-drift`: In .claude/skills/skillforge/scripts/quick_validate.py:10, the example `python quick_validate.py ~/.claude/skills/my-skill/` fails with `Error: Path traversal detected` unless the current working directory is an ancestor of the target directory, as enforced by lines 321-325.
- `exit-code-mismatch`: Docstring does not document exit codes (exits 0 on success, 1 on failure).

## Observations
- Implements cross-platform path-traversal prevention in `_is_within` using `commonpath` and Windows UNC share root handling to prevent sibling-directory traversal escapes (.claude/skills/skillforge/scripts/quick_validate.py:130-170).
- Uses `_contained_realpath` to verify symlink targets remain inside the permitted root before reading `SKILL.md` (.claude/skills/skillforge/scripts/quick_validate.py:172-188, 224-228).
- Fallback YAML parser handles folded (`>`) and literal (`|`) multiline strings without third-party dependencies (.claude/skills/skillforge/scripts/quick_validate.py:57-111).

## Context cost
12,925 bytes (approx. 3,200 tokens). Can import `_constants.py` (3,038 bytes), giving total combined cost of ~16.0 KB (~4,000 tokens).
