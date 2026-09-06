---
package: rjm
path: scripts/modules/investigation_allowlist.py
type: script
bytes: 1641
unit: inv-rjm-254
in_scope_via: scripts/validation/test_investigation_eligibility.py
aliases: []
memo_inputs:
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/modules/investigation_allowlist.py

## Purpose — required, verbatim
> "Shared investigation-only allowlist for ADR-034 QA exemption." — scripts/modules/investigation_allowlist.py:1

## Design intent — required
Provides the centralized single source of truth for investigation artifact path patterns under ADR-034 (Investigation Session QA Exemption). When a pull request or task claims investigation status, it is exempt from standard QA validation requirements provided all modified files match the allowlist patterns (such as `.agents/sessions/`, `.agents/analysis/`, `.agents/retrospective/`, `.serena/memories/`, `.agents/security/`, and `.agents/architecture/REVIEW-*`). Unifying these patterns in this shared module ensures that pre-push hooks, CI validation workflows, and test suites evaluate investigation eligibility identically without rule drift.

## Phase — required
cross-phase

## Inputs — required
- `file_path`: "The file path to test (relative to repo root)." — scripts/modules/investigation_allowlist.py:49

## Outputs — required
- `list[str]`: "Return canonical investigation-only allowlist patterns." — scripts/modules/investigation_allowlist.py:15
- `list[str]`: "Return human-readable allowed paths for error messages." — scripts/modules/investigation_allowlist.py:32
- `bool`: "True if the file matches any allowlist pattern." — scripts/modules/investigation_allowlist.py:52

## Invokes — required
none

## Invoked by — required
- scripts/validation/test_investigation_eligibility.py:25 — scripts/validation/test_investigation_eligibility.py:25
- src/copilot-cli/skills/ai-agents-change-control/references/provenance.md:11 — src/copilot-cli/skills/ai-agents-change-control/references/provenance.md:11

## Concepts named — required, verbatim
- `ADR-034` — scripts/modules/investigation_allowlist.py:1 — used here
- `QA exemption` — scripts/modules/investigation_allowlist.py:1 — used here
- `get_investigation_allowlist` — scripts/modules/investigation_allowlist.py:14 — defined here
- `get_investigation_allowlist_display` — scripts/modules/investigation_allowlist.py:31 — defined here
- `test_file_matches_allowlist` — scripts/modules/investigation_allowlist.py:45 — defined here

## Structure
- Module docstring and references — scripts/modules/investigation_allowlist.py:1
- Imports — scripts/modules/investigation_allowlist.py:9
- Allowlist pattern getter function — scripts/modules/investigation_allowlist.py:14
- Display list getter function — scripts/modules/investigation_allowlist.py:31
- Path matching test function — scripts/modules/investigation_allowlist.py:45

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/modules/investigation_allowlist.py`
- **language:** Python (python3)
- **lines:** 59
- **documented invocation:**
  - `python3 -c "from scripts.modules.investigation_allowlist import get_investigation_allowlist_display as g; print(len(g()), g())"`
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/modules/investigation_allowlist.py`
- **abridged stdout:** ``
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented: none
  - Actual exit paths: none (implicitly exits 0 on clean import/execution)
- **for validators/gates:**
  - Can exit non-zero: no (library module helper)
  - Verified on repository default branch: exits 0
- **does the output match what the documentation claims:** yes (executes cleanly without output)

## Defects — required
none

## Observations
- Defines 8 canonical path patterns anchored to string start (`^`) with corresponding human-readable display representations.
- Reconciled in issue #2958 to align with ADR-034 architectural documentation.

## Context cost
1641 bytes, 59 lines, ~400 tokens.
