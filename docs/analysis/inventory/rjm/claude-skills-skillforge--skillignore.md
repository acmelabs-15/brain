---
package: rjm
path: .claude/skills/skillforge/.skillignore
type: skill
bytes: 209
unit: inv-rjm-158
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/.skillignore, sha256: e90aea4eb3a8bf9cb3eb27da6c7645e58b87153d49204bfe5d4c9babb2b501c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/.skillignore

## Purpose — required, verbatim
> "# Files excluded from skill packaging and installation." — .claude/skills/skillforge/.skillignore:1

## Design intent — required
Declares explicit packaging exclusion rules consumed by `package_skill.py` to prevent repository-level metadata (such as `README.md`, `LICENSE`, `.git`, `.gitignore`, `.skillignore`), system caches (`.DS_Store`, `__pycache__`, `*.pyc`), and documentation/presentation image bundles (`assets/images`) from being packaged into distributable skill archives. This keeps distribution artifacts minimal and strictly limited to executable instructions, scripts, templates, and reference materials.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script package_skill.py — .claude/skills/skillforge/scripts/package_skill.py:34

## Concepts named — required, verbatim
- `packaging` — .claude/skills/skillforge/.skillignore:1 — used here
- `installation` — .claude/skills/skillforge/.skillignore:1 — used here
- `assets/images` — .claude/skills/skillforge/.skillignore:11 — used here

## Structure
- # Files excluded from skill packaging and installation. — .claude/skills/skillforge/.skillignore:1
- # These exist in the repo but are not part of the skill itself. — .claude/skills/skillforge/.skillignore:2

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Line 11 explicitly excludes `assets/images`, which accounts for the 13 PNG presentation assets (`01-title.png` through `13-closing.png`) in `.claude/skills/skillforge/assets/images/` not being distributed in packaged skill archives.
- Verified in test suite by `scripts/tests/test_package_skill_ignore.py` to ensure `package_skill.py` properly honors directory-level and wildcard exclusion rules.

## Context cost
209 bytes (approx. 52 tokens).
