---
package: rjm
path: scripts/validation/check_skill_contract_tests.py
type: script
bytes: 6880
unit: inv-rjm-284
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_contract_tests.py

## Purpose — required, verbatim
> "Fail when a skill documents executable contracts that no test binds." — scripts/validation/check_skill_contract_tests.py:2

## Design intent — required
Prevents specification drift between documented executable contracts in `SKILL.md` files and actual script behavior. When a skill documents script invocations and specific exit code semantics without a test asserting those behaviors, changes to script implementations can break documented contracts while CI remains green. Following a silent regression in `pr-autofix` (issue #2308), this gate requires every skill documenting exit codes alongside script calls to be named within the `tests/` test corpus, unless explicitly grandfathered in `skill_contract_test_baseline.txt`.

## Phase — required
cross-phase

## Inputs — required
- CLI options:
  - `--repo-root`: "repository root" — scripts/validation/check_skill_contract_tests.py:109
  - `--baseline`: "newline-delimited skill names exempted while the debt is burned down" — scripts/validation/check_skill_contract_tests.py:113
- Target directories and files:
  - Skill files: `SKILL.md` under `SCAN_ROOTS = ("src/copilot-cli/skills", ".claude/skills")` (`SCAN_ROOTS` — scripts/validation/check_skill_contract_tests.py:52)
  - Test suites: files matching `*.py`, `*.ps1`, `*.sh` under `TEST_ROOT = "tests"` (`TEST_ROOT` — scripts/validation/check_skill_contract_tests.py:53)
  - Baseline exemptions file: `scripts/validation/skill_contract_test_baseline.txt` (scripts/validation/check_skill_contract_tests.py:112)

## Outputs — required
- Standard output reports:
  - Pass report: "Skill contract binding OK." — scripts/validation/check_skill_contract_tests.py:192
  - Failure header: "Skills documenting executable contracts with no binding test:" — scripts/validation/check_skill_contract_tests.py:181
  - Summary count line: `{len(unbound)} unbound of {in_scope} in-scope skill(s); {len(baseline)} grandfathered.` (scripts/validation/check_skill_contract_tests.py:186-187)
  - Detailed diagnostic per unbound skill rendered by `Unbound.render`: path, skill name, exit codes, and prompt to add test under `tests/` (scripts/validation/check_skill_contract_tests.py:68-76, 183)
- Diagnostic stderr reports:
  - Missing SKILL.md error: "error: no SKILL.md files found; refusing to report success on an" — scripts/validation/check_skill_contract_tests.py:128
  - Missing test corpus error: "refusing to report success" — scripts/validation/check_skill_contract_tests.py:138
  - Read failure error on unreadable file: `error: cannot read {path}: {exc}` (scripts/validation/check_skill_contract_tests.py:84)
- Process exit codes:
  - "0 - every in-scope skill is bound by a test" — scripts/validation/check_skill_contract_tests.py:22
  - "1 - at least one unbound skill" — scripts/validation/check_skill_contract_tests.py:23
  - "2 - usage or I/O error" — scripts/validation/check_skill_contract_tests.py:24

## Invokes — required
- script portability_baseline — scripts/validation/check_skill_contract_tests.py:46
- config skill_contract_test_baseline.txt — scripts/validation/check_skill_contract_tests.py:112

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `SKILL.md` — scripts/validation/check_skill_contract_tests.py:4 — used here
- `pr-autofix` — scripts/validation/check_skill_contract_tests.py:9 — used here
- `test_check_skill_md_exec_portability.py` — scripts/validation/check_skill_contract_tests.py:18 — used here
- `portability_baseline` — scripts/validation/check_skill_contract_tests.py:38 — used here
- `portability_floor` — scripts/validation/check_skill_contract_tests.py:38 — used here
- `refuse_oversized_baseline` — scripts/validation/check_skill_contract_tests.py:47 — used here
- `refuse_symlinked_baseline` — scripts/validation/check_skill_contract_tests.py:48 — used here
- `refuse_undiffable_baseline` — scripts/validation/check_skill_contract_tests.py:49 — used here
- `SCAN_ROOTS` — scripts/validation/check_skill_contract_tests.py:52 — defined here
- `TEST_ROOT` — scripts/validation/check_skill_contract_tests.py:53 — defined here
- `EXIT_CODE` — scripts/validation/check_skill_contract_tests.py:56 — defined here
- `SCRIPT_CALL` — scripts/validation/check_skill_contract_tests.py:59 — defined here
- `Unbound` — scripts/validation/check_skill_contract_tests.py:63 — defined here
- `documented_contracts` — scripts/validation/check_skill_contract_tests.py:79 — defined here
- `test_corpus` — scripts/validation/check_skill_contract_tests.py:92 — defined here
- `main` — scripts/validation/check_skill_contract_tests.py:107 — defined here

## Structure
- Module docstring with contract binding rationale and exit codes (scripts/validation/check_skill_contract_tests.py:1-25)
- Standard library imports and path setup (scripts/validation/check_skill_contract_tests.py:27-45)
- Import of baseline security guards from `portability_baseline` (scripts/validation/check_skill_contract_tests.py:46-50)
- Root paths and regex definitions for exit codes and script calls (scripts/validation/check_skill_contract_tests.py:52-60)
- `Unbound` dataclass and error message rendering (scripts/validation/check_skill_contract_tests.py:62-77)
- `documented_contracts` parser function for SKILL.md files (scripts/validation/check_skill_contract_tests.py:79-90)
- `test_corpus` reader aggregating tests/ sources (scripts/validation/check_skill_contract_tests.py:92-105)
- `main` CLI function discovering skills, evaluating bindings, and enforcing gate (scripts/validation/check_skill_contract_tests.py:107-195)
- Script execution wrapper (scripts/validation/check_skill_contract_tests.py:198-199)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/validation/check_skill_contract_tests.py`
- **language:** Python (python3)
- **lines:** 200
- **documented invocation:**
  - `python3 scripts/validation/check_skill_contract_tests.py`
- **executed:** yes
- **actual command run:** `python3 scripts/validation/check_skill_contract_tests.py`
- **abridged stdout:** `Skill contract binding OK. 59 in-scope skill(s), 9 grandfathered.`
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - every in-scope skill is bound by a test" — scripts/validation/check_skill_contract_tests.py:22
    - "1 - at least one unbound skill" — scripts/validation/check_skill_contract_tests.py:23
    - "2 - usage or I/O error" — scripts/validation/check_skill_contract_tests.py:24
  - Actual exit paths in code:
    - `raise SystemExit(2) from exc` — scripts/validation/check_skill_contract_tests.py:85
    - `return 2` — scripts/validation/check_skill_contract_tests.py:132
    - `return 2` — scripts/validation/check_skill_contract_tests.py:141
    - `return 2` — scripts/validation/check_skill_contract_tests.py:146
    - `return 2` — scripts/validation/check_skill_contract_tests.py:148
    - `return 2` — scripts/validation/check_skill_contract_tests.py:150
    - `return 1` — scripts/validation/check_skill_contract_tests.py:189
    - `return 0` — scripts/validation/check_skill_contract_tests.py:195
    - `sys.exit(main())` — scripts/validation/check_skill_contract_tests.py:199
  - Result: Documented exit codes match actual exit paths in code.
- **for validators/gates:**
  - Can exit non-zero: Exits 1 when one or more in-scope skills document exit codes and script invocations without a binding test under `tests/`; exits 2 on I/O, empty scan, missing tests directory, or baseline refusal.
  - Verified on repository: Exits 0 on the pinned repository commit with `Skill contract binding OK. 59 in-scope skill(s), 9 grandfathered.`.
- **does the output match what the documentation claims:** Yes, outputs binding success with counts of in-scope and grandfathered skills.

## Defects — required
- orphan · scripts/validation/check_skill_contract_tests.py:1 · Not invoked or imported by any in-scope file in the manifest graph (referenced only in out-of-scope rules and excluded test suites).

## Observations
- Binds natural-language documentation to automated verification: ensures that when agents or humans document script command contracts, tests are written to verify them.
- Whole-token matching on skill identifier (`(?<![a-zA-Z0-9_-])<name>(?![a-zA-Z0-9_-])` at line 173) prevents substring false positives across the test corpus.
- Baseline hardening: checks baseline files with refusal helpers (`refuse_symlinked_baseline`, `refuse_undiffable_baseline`, `refuse_oversized_baseline`) to prevent circumventing gate checks.
- Vacuity protection: refuses empty scans where no `SKILL.md` files or no test sources are discovered (exiting 2).

## Context cost
6880 bytes, 200 lines, ~1800 tokens (plus imported `scripts/validation/portability_baseline.py` 20208 bytes).
