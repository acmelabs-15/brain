---
package: rjm
path: scripts/validation/skill_contract_test_baseline.txt
type: script
bytes: 342
unit: inv-rjm-304
in_scope_via: scripts/validation/check_skill_contract_tests.py
aliases: []
memo_inputs:
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/skill_contract_test_baseline.txt

## Purpose — required, verbatim
> "# Skills documenting exit-code contracts with no binding test." — scripts/validation/skill_contract_test_baseline.txt:1

## Design intent — required
Maintains a ratchet baseline of grandfathered skills that document exit-code contracts in their documentation or docstrings but lack binding automated test suites verifying those contracts. Used by `scripts/validation/check_skill_contract_tests.py` to enforce that while existing untested skills are tolerated, no new untested skills can be added, and grandfathered skills can only be removed as test coverage is implemented (burn-down ratchet).

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- script skill_contract_test_baseline.txt — scripts/validation/check_skill_contract_tests.py:112

## Concepts named — required, verbatim
- `Ratchet` — scripts/validation/skill_contract_test_baseline.txt:2 — defined here
- `ai-agents-build-and-env` — scripts/validation/skill_contract_test_baseline.txt:3 — defined here
- `ai-agents-change-control` — scripts/validation/skill_contract_test_baseline.txt:4 — defined here
- `ai-agents-debugging-playbook` — scripts/validation/skill_contract_test_baseline.txt:5 — defined here
- `ai-agents-diagnostics-toolkit` — scripts/validation/skill_contract_test_baseline.txt:6 — defined here
- `ai-agents-validation-and-qa` — scripts/validation/skill_contract_test_baseline.txt:7 — defined here
- `benchmark-models` — scripts/validation/skill_contract_test_baseline.txt:8 — defined here
- `github-url-intercept` — scripts/validation/skill_contract_test_baseline.txt:9 — defined here
- `memory-maintenance` — scripts/validation/skill_contract_test_baseline.txt:10 — defined here
- `prose-self-check` — scripts/validation/skill_contract_test_baseline.txt:11 — defined here

## Structure
- Baseline purpose and ratchet constraint comments — scripts/validation/skill_contract_test_baseline.txt:1-2
- Grandfathered skill identifier list — scripts/validation/skill_contract_test_baseline.txt:3-11

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/skill_contract_test_baseline.txt`, language: Text baseline, lines: 12
- documented invocation:
  - "default=\"scripts/validation/skill_contract_test_baseline.txt\"," — scripts/validation/check_skill_contract_tests.py:112
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/check_skill_contract_tests.py --repo-root sources/rjm`
- abridged stdout:
```
Skill contract binding OK. 59 in-scope skill(s), 9 grandfathered.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented: none (plain text data file)
  - Actual exit paths: N/A (configuration file consumed by Python validator `check_skill_contract_tests.py`)
- for validators/gates:
  - Can exit non-zero: N/A (data configuration consumed by `scripts/validation/check_skill_contract_tests.py`)
  - Verified on repository default branch: valid text baseline containing 9 grandfathered skills verified by test suite
- does output match what the documentation claims: yes, lists exactly 9 grandfathered skills matching validator output

## Defects — required
none

## Observations
- Classified as `type: script` in the manifest partition table for `scripts/validation/` files.
- Operates as a one-way ratchet: line 2 mandates that `entries may be removed, never added. Burn down over time.`

## Context cost
342 bytes, 12 lines, ~85 tokens.
