---
package: rjm
path: scripts/validation/validate_seed_parity.py
type: script
bytes: 8418
unit: inv-rjm-309
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_seed_parity.py, sha256: c25853828b45f5da25b2e26fd0e51b4ec2b4c68b8fcceb4ed6f8c7061ae67f59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_seed_parity.py

## Purpose — required, verbatim
> "Forensic tool: was a canonical review-axis hand-paraphrased or verbatim-seeded?" — scripts/validation/validate_seed_parity.py:2

## Design intent — required
Audits whether canonical review-axis prompt references in `.claude/skills/review/references/{role}.md` were initially seeded character-for-character from legacy continuous integration prompt templates (`.github/prompts/pr-quality-gate-{role}.md` on `main`). It normalizes whitespace, removes YAML frontmatter, strips appended output schema sections, and balances trailing markdown code fences before computing and comparing SHA-256 digests. It is designed as a one-shot forensic tool rather than an ongoing continuous integration gate, and fails by design once maintainers intentionally modify canonical reference files.

## Phase — required
rjm:review

## Inputs — required
- CLI arguments:
  - `roles` optional positional arguments naming specific roles to verify (default: all 6 canonical roles) — scripts/validation/validate_seed_parity.py:218
- Files read:
  - Canonical review reference markdown files in `.claude/skills/review/references/{role}.md` — scripts/validation/validate_seed_parity.py:7
  - Legacy continuous integration prompts retrieved from git history on main (`git show main:...`) — scripts/validation/validate_seed_parity.py:140

## Outputs — required
- Standard output:
  - Per-role status reports (`status=ok` or `status=mismatch` with hash digests) — scripts/validation/validate_seed_parity.py:195, 200
  - Aggregate status summary (`role=ALL status=ok count=...` or `role=ALL status=mismatch count=...`) — scripts/validation/validate_seed_parity.py:234, 236
  - Configuration error report (`role={role} status=config_error error=...`) — scripts/validation/validate_seed_parity.py:227
- Exit codes:
  - 0: Canonical body and CI prompt body match (verbatim seed intact) — scripts/validation/validate_seed_parity.py:33, 237
  - 1: Mismatch (canonical was edited after seed, or never seeded verbatim) — scripts/validation/validate_seed_parity.py:34, 235
  - 2: Configuration error (missing canonical, missing CI prompt source on main, or git unavailable) — scripts/validation/validate_seed_parity.py:36, 228

## Invokes — required
- reference analyst — scripts/validation/validate_seed_parity.py:56
- reference architect — scripts/validation/validate_seed_parity.py:57
- reference qa — scripts/validation/validate_seed_parity.py:58
- reference security — scripts/validation/validate_seed_parity.py:59
- reference devops — scripts/validation/validate_seed_parity.py:60
- reference roadmap — scripts/validation/validate_seed_parity.py:61
- doc ADR-035 — scripts/validation/validate_seed_parity.py:32

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `canonical review-axis` — scripts/validation/validate_seed_parity.py:2 — used here
- `FORENSIC TOOL` — scripts/validation/validate_seed_parity.py:4 — defined here | used here
- `REQ-008-01` — scripts/validation/validate_seed_parity.py:6 — used here
- `Output Schema` — scripts/validation/validate_seed_parity.py:10 — used here
- `ADR-035` — scripts/validation/validate_seed_parity.py:32 — used here
- `ALL_ROLES` — scripts/validation/validate_seed_parity.py:55 — defined here
- `ParityError` — scripts/validation/validate_seed_parity.py:65 — defined here
- `_strip_appended_output_schema` — scripts/validation/validate_seed_parity.py:78 — defined here
- `_strip_balanced_fence` — scripts/validation/validate_seed_parity.py:92 — defined here
- `check_role` — scripts/validation/validate_seed_parity.py:156 — defined here

## Structure
- Background. — scripts/validation/validate_seed_parity.py:6
- What this script does. — scripts/validation/validate_seed_parity.py:14
- When this script will FAIL by design. — scripts/validation/validate_seed_parity.py:19
- Usage:: — scripts/validation/validate_seed_parity.py:27
- Exit codes (per ADR-035): — scripts/validation/validate_seed_parity.py:32

## Scripts — required if type is script or the skill ships scripts
- path: scripts/validation/validate_seed_parity.py
- language: Python
- lines: 242
- documented invocation:
  - "    python3 scripts/validation/validate_seed_parity.py        # all 6 roles" — scripts/validation/validate_seed_parity.py:29
  - "    python3 scripts/validation/validate_seed_parity.py analyst architect" — scripts/validation/validate_seed_parity.py:30
- executed: yes
- actual command run: `python3 scripts/validation/validate_seed_parity.py`
- abridged stdout: `role=analyst status=mismatch source=main canonical_hash=99aef49a6d4b7b1c ci_hash=b250c6de90248521 ... role=ALL status=mismatch count=6`
- actual exit code: 1
- documented exit codes vs. actual exit paths:
  - documented:
    - "0  Canonical body and CI prompt body match (verbatim seed intact)." — scripts/validation/validate_seed_parity.py:33
    - "1  Mismatch (canonical was edited after seed, or never seeded verbatim). NOT a regression on a post-#1934 tree." — scripts/validation/validate_seed_parity.py:34-35
    - "2  Configuration error (missing canonical, missing CI prompt source on main, or git unavailable). Always a real problem." — scripts/validation/validate_seed_parity.py:36-37
  - actual exit paths:
    - scripts/validation/validate_seed_parity.py:228: `return 2` on ParityError
    - scripts/validation/validate_seed_parity.py:235: `return 1` if mismatches > 0
    - scripts/validation/validate_seed_parity.py:237: `return 0`
    - scripts/validation/validate_seed_parity.py:241: `sys.exit(main())`
- for validators/gates:
  - can it exit non-zero: yes (exits 1 on hash mismatch; exits 2 on missing files or git failure)
  - does it fail on the source repo's own default branch: yes (exits 1 as documented because post-seed intentional changes landed in PR #1965)
- does the output match what the documentation claims: yes (correctly fails by design reporting hash mismatches across all 6 roles)

## Defects — required
none

## Observations
- Explicit non-CI design: The script explicitly states in line 4: "This is a FORENSIC TOOL, not a regression gate. Do NOT add it to CI."
- Intentional failure contract: Non-zero exit codes on current trees reflect deliberate downstream divergence rather than implementation defects.
- Historical git extraction: Uses `_ci_source_from_main` (lines 127-154) to query git history on `main` to avoid circular comparisons against regenerated working tree prompt copies.

## Context cost
File size: 8,418 bytes (~2,100 tokens). Standalone Python script requiring only standard library modules.
