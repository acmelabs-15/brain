---
package: rjm
path: scripts/modules/investigation_allowlist.py
type: script
bytes: 1641
unit: inv-rjm-254
in_scope_via: .agents/architecture/ADR-034-investigation-session-qa-exemption.md
aliases: []
memo_inputs:
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/modules/investigation_allowlist.py

## Purpose — required, verbatim
> "Shared investigation-only allowlist for ADR-034 QA exemption." — scripts/modules/investigation_allowlist.py:1

## Design intent — required
Acts as the canonical, machine-readable single source of truth for file and directory path patterns qualifying for the ADR-034 investigation-only QA exemption. Instead of allowing verification scripts, CI checks, and skills to maintain separate hardcoded lists of path patterns, this module centralizes the regex definitions and display representations, ensuring uniform policy evaluation across the repository.

## Phase — required
cross-phase

## Inputs — required
- Path string parameter: "file_path: The file path to test (relative to repo root)." — scripts/modules/investigation_allowlist.py:49

## Outputs — required
- Canonical regex list: "Return canonical investigation-only allowlist patterns." — scripts/modules/investigation_allowlist.py:15
- Display string list: "Return human-readable allowed paths for error messages." — scripts/modules/investigation_allowlist.py:32
- Boolean match decision: "True if the file matches any allowlist pattern." — scripts/modules/investigation_allowlist.py:52

## Invokes — required
none

## Invoked by — required
- script investigation_allowlist — scripts/validation/test_investigation_eligibility.py:25
- skill ai-agents-change-control — src/copilot-cli/skills/ai-agents-change-control/SKILL.md:41
- reference provenance.md — src/copilot-cli/skills/ai-agents-change-control/references/provenance.md:11

## Concepts named — required, verbatim
- `ADR-034` — scripts/modules/investigation_allowlist.py:1 — used here
- `QA exemption` — scripts/modules/investigation_allowlist.py:1 — used here
- `investigation-only allowlist` — scripts/modules/investigation_allowlist.py:1 — defined here | used here
- `investigation artifact` — scripts/modules/investigation_allowlist.py:3 — used here
- `get_investigation_allowlist` — scripts/modules/investigation_allowlist.py:14 — defined here
- `get_investigation_allowlist_display` — scripts/modules/investigation_allowlist.py:31 — defined here
- `test_file_matches_allowlist` — scripts/modules/investigation_allowlist.py:45 — defined here

## Structure
- Module docstring and references — scripts/modules/investigation_allowlist.py:1
- Regex pattern generator get_investigation_allowlist — scripts/modules/investigation_allowlist.py:14
- Human-readable path generator get_investigation_allowlist_display — scripts/modules/investigation_allowlist.py:31
- File matching predicate test_file_matches_allowlist — scripts/modules/investigation_allowlist.py:45

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/modules/investigation_allowlist.py`
- **language:** Python
- **lines:** 59
- **documented invocation:**
  `uv run python -c "from scripts.modules.investigation_allowlist import get_investigation_allowlist_display as g; print(len(g()), g())"` — src/copilot-cli/skills/ai-agents-change-control/references/provenance.md:11
- **executed:** yes
- **actual command:** `python3 -c "from scripts.modules.investigation_allowlist import get_investigation_allowlist_display as g; print(len(g()), g())"`
- **actual stdout:**
```text
8 ['.agents/sessions/', '.agents/analysis/', '.agents/retrospective/', '.serena/memories/', '.agents/security/', '.agents/memory/', '.agents/architecture/REVIEW-*', '.agents/critique/']
```
- **actual exit code:** 0
- **documented exit codes vs actual:** none documented in module docstring; import and execution exit 0
- **gate check:** Not a standalone gate; predicate functions `test_file_matches_allowlist` return boolean without exiting.
- **output match:** Output matches the 8 patterns documented in ADR-034 and provenance reference table exactly.

## Defects — required
none

## Observations
The module reconciles 8 path patterns covering sessions, analysis, retrospectives, serena memories, security, memory, architecture reviews, and critique. Redundant episode pattern `^\.agents/memory/episodes/` was removed as subsumed by `^\.agents/memory/`.

## Context cost
1641 bytes, 59 lines. ~380 tokens.
