---
unit: inv-rjm-129
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-129

## Files assigned
- [x] `.claude/skills/orphan-ref-validator/scripts/__init__.py`
- [x] `.claude/skills/orphan-ref-validator/scripts/counts.py`
- [x] `.claude/skills/orphan-ref-validator/scripts/envelope.py`
- [x] `.claude/skills/orphan-ref-validator/scripts/filters.py`
- [x] `.claude/skills/orphan-ref-validator/scripts/patterns.py`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts---init---py.md` (3787 bytes)
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-counts-py.md` (6337 bytes)
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-envelope-py.md` (7366 bytes)
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-filters-py.md` (7492 bytes)
- `docs/analysis/inventory/rjm/claude-skills-orphan-ref-validator-scripts-patterns-py.md` (9509 bytes)

## Scripts executed
- `.claude/skills/orphan-ref-validator/scripts/__init__.py`: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/__init__.py`, exit code 0
- `.claude/skills/orphan-ref-validator/scripts/counts.py`: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/counts.py`, exit code 0
- `.claude/skills/orphan-ref-validator/scripts/envelope.py`: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/envelope.py`, exit code 0
- `.claude/skills/orphan-ref-validator/scripts/filters.py`: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/filters.py`, exit code 0
- `.claude/skills/orphan-ref-validator/scripts/patterns.py`: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/patterns.py`, exit code 0
- `.claude/skills/orphan-ref-validator/tests/`: `uv run pytest .claude/skills/orphan-ref-validator/tests/ -q`, exit code 0 (228 passed in 3.03s)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- This unit represents part 1 of `.claude/skills/orphan-ref-validator`, focusing on its helper and library modules (`__init__.py`, `counts.py`, `envelope.py`, `filters.py`, `patterns.py`). Subsequent parts cover the CLI runner `scan.py`, filesystem walker `walking.py`, and the main skill documentation `SKILL.md`.
- `counts.py` resolves sibling artifact namespaces (`.claude/agents/*.md`, `.claude/commands/*.md`, `.serena/memories/**/*.md`, `.claude/skills/*/references/*.md`), preventing false-positive orphan findings on bare tokens that legitimately refer to agents, commands, or memories rather than skills.
- `envelope.py` implements the ADR-056 structured output schema (`Success`, `Data`, `Error`, `Metadata`) and ADR-035 exit code protocol (1 logic, 2 config/usage, 3 external, 4 auth).
- `filters.py` bounds detection by replacing unbounded denylists with bounded allowlists of known retired skills (`KNOWN_RETIRED_KEBAB_SKILLS`, `KNOWN_SINGLE_WORD_SKILLS`) and qualified foreign catalogs (`FOREIGN_SKILL_CATALOGS`).
- `patterns.py` defines regex extractors with support for line-level directives (`<!-- orphan-ref-ignore -->`) and typed prose claims ("the `foo` skill").

## Blocked or uncertain
none

## Time and size
Source read: 35,207 bytes across 5 files (~8,800 tokens), plus 21,618 bytes of `SKILL.md` context (~5,400 tokens).
Output written: 34,491 bytes across 5 inventory cards (~8,620 tokens), plus 3,100 bytes unit report (~775 tokens).
