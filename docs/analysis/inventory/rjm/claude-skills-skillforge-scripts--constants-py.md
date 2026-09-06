---
package: rjm
path: .claude/skills/skillforge/scripts/_constants.py
type: script
bytes: 3038
unit: inv-rjm-162
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/_constants.py, sha256: 7d95cd0e323d528ee16098e199af1dbf91434ae1e8cd7e2e312e1acecca669b6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/_constants.py

## Purpose — required, verbatim
> "_constants.py - Shared constants for skill validation scripts" — .claude/skills/skillforge/scripts/_constants.py:3

## Design intent — required
Centralizes validation constants, schema properties, regular expressions, and structural constraints for the SkillForge validation suite (`quick_validate.py`, `validate-skill.py`, `discover_skills.py`, and `skill_modularity_audit.py`). It defines required frontmatter properties (`name`, `description`), optional frontmatter fields, valid agent types (`Explore`, `Plan`, `general-purpose`), valid lifecycle hook events (`PreToolUse`, `PostToolUse`, `Stop`) and hook types (`command`, `prompt`), known tool identifiers, character limits (name <= 64, description <= 1024), and regexes for hyphen-case skill names, semver strings, and YAML frontmatter delimiter blocks. Without it, individual validation scripts would duplicate constants and regex patterns, leading to schema drift, divergent validation gates, and inconsistent skill packaging checks.

## Phase — required
rjm:Validation and Packaging

## Inputs — required
none (imported Python constants module; consumes no arguments, environment variables, or files).

## Outputs — required
none (produces no stdout/stderr or disk files; exports Python constants: `REQUIRED_PROPERTIES`, `OPTIONAL_PROPERTIES`, `ALLOWED_PROPERTIES`, `RECOMMENDED_PROPERTIES`, `VALID_AGENT_TYPES`, `VALID_HOOK_EVENTS`, `VALID_HOOK_TYPES`, `KNOWN_TOOLS`, `NAME_MAX_LENGTH`, `DESCRIPTION_MAX_LENGTH`, `NAME_REGEX`, `SEMVER_REGEX`, `FRONTMATTER_REGEX`).

## Invokes — required
none

## Invoked by — required
- script _constants — .claude/skills/skillforge/scripts/discover_skills.py:34
- script _constants — .claude/skills/skillforge/scripts/validate-skill.py:165
- script _constants — .claude/skills/skillforge/scripts/quick_validate.py:28
- skill .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:287

## Concepts named — required, verbatim
- `FRONTMATTER PROPERTIES` — .claude/skills/skillforge/scripts/_constants.py:12 — defined here
- `REQUIRED_PROPERTIES` — .claude/skills/skillforge/scripts/_constants.py:16 — defined here
- `OPTIONAL_PROPERTIES` — .claude/skills/skillforge/scripts/_constants.py:22 — defined here
- `ADR-080` — .claude/skills/skillforge/scripts/_constants.py:27 — used here
- `ALLOWED_PROPERTIES` — .claude/skills/skillforge/scripts/_constants.py:38 — defined here
- `RECOMMENDED_PROPERTIES` — .claude/skills/skillforge/scripts/_constants.py:41 — defined here
- `VALIDATION CONSTANTS` — .claude/skills/skillforge/scripts/_constants.py:44 — defined here
- `VALID_AGENT_TYPES` — .claude/skills/skillforge/scripts/_constants.py:48 — defined here
- `VALID_HOOK_EVENTS` — .claude/skills/skillforge/scripts/_constants.py:51 — defined here
- `VALID_HOOK_TYPES` — .claude/skills/skillforge/scripts/_constants.py:54 — defined here
- `KNOWN_TOOLS` — .claude/skills/skillforge/scripts/_constants.py:57 — defined here
- `NAME_MAX_LENGTH` — .claude/skills/skillforge/scripts/_constants.py:64 — defined here
- `DESCRIPTION_MAX_LENGTH` — .claude/skills/skillforge/scripts/_constants.py:65 — defined here
- `NAME_REGEX` — .claude/skills/skillforge/scripts/_constants.py:72 — defined here
- `SEMVER_REGEX` — .claude/skills/skillforge/scripts/_constants.py:75 — defined here
- `FRONTMATTER_REGEX` — .claude/skills/skillforge/scripts/_constants.py:78 — defined here

## Structure
- FRONTMATTER PROPERTIES — .claude/skills/skillforge/scripts/_constants.py:12
- VALIDATION CONSTANTS — .claude/skills/skillforge/scripts/_constants.py:44

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/_constants.py`, language: Python, lines: 79
- documented invocation: none (`(no CLI invocation; imported helper module: "Internal helper module: shared constants and thresholds (imported, not run directly)" — .claude/skills/skillforge/SKILL.md:287)`)
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/_constants.py`, abridged stdout: `(empty)`, **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code: none (no `sys.exit` calls; script defines module-level constants and exits cleanly with exit code 0)
- for validators/gates: can it exit non-zero? no (module defines constant data structures with no execution logic or assertions). does it fail on the source repo's own default branch? no.
- does the output match what the documentation claims? yes (exits 0 with no stdout/stderr output when imported or run directly)

## Defects — required
none

## Observations
- Architecture governance integration: Line 27 specifically references `ADR-080: justification for a bare cost-tier alias pin`, showing direct traceability between architectural decisions and code validation schemas.
- Cross-platform newline resilience: Line 78 uses `r'^---\r?\n(.*?)\r?\n---'` to correctly match frontmatter blocks whether formatted with CRLF (Windows) or LF (Unix/macOS) newlines.
- Fallback import patterns: Calling scripts (`quick_validate.py`, `discover_skills.py`, `validate-skill.py`) wrap `from _constants import ...` in `try...except ImportError` blocks with local fallback copies, ensuring resilience if invoked from directories outside the script path.

## Context cost
3038 bytes, ~760 tokens.
