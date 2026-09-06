---
package: rjm
path: .github/scripts/parse_pr_standards.py
type: script
bytes: 3867
unit: inv-rjm-184
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/parse_pr_standards.py, sha256: adc2d57b18d0bd54ff66d68244d1aaf1487755715dbc172042fc15d3442415f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/parse_pr_standards.py

## Purpose — required, verbatim
> "Parse PR description standards validation output for CI workflow." — .github/scripts/parse_pr_standards.py:2

The docstring continues:
"Runs validate_pr_description.py and writes parsed results to GITHUB_OUTPUT." — .github/scripts/parse_pr_standards.py:4
"Follows ADR-006 (thin workflows) by extracting parsing logic from YAML." — .github/scripts/parse_pr_standards.py:5

## Design intent — required
Extracts validation results from `validate_pr_description.py` into GitHub Actions step outputs (`GITHUB_OUTPUT`) following ADR-006 (thin workflows). It accepts PR title and body from environment variables, isolates the PR body in a collision-safe temporary file tagged with `GITHUB_RUN_ID` and `GITHUB_RUN_ATTEMPT`, invokes `.claude/skills/github/scripts/pr/validate_pr_description.py`, parses its JSON output, and writes heredoc-safe multiline step outputs (`keywords_status`, `template_status`, `template_message`, and `standards_warnings`). If the validator fails or emits invalid JSON, it emits fallback `SKIP` values so workflows degrade gracefully. Without this script, complex JSON parsing and heredoc output formatting would clutter workflow YAML files and risk injection or collision bugs.

## Phase — required
none

## Inputs — required
- Environment variable `PR_TITLE`: "PR_TITLE environment variable is required" — .github/scripts/parse_pr_standards.py:29
- Environment variable `PR_BODY`: PR body text — .github/scripts/parse_pr_standards.py:25
- Environment variable `GITHUB_OUTPUT`: Path to GitHub Actions output file — .github/scripts/parse_pr_standards.py:26
- Environment variable `GITHUB_RUN_ID`: Run identifier for temporary file naming — .github/scripts/parse_pr_standards.py:33
- Environment variable `GITHUB_RUN_ATTEMPT`: Run attempt counter for temporary file naming — .github/scripts/parse_pr_standards.py:34
- Validator script `.claude/skills/github/scripts/pr/validate_pr_description.py` — .github/scripts/parse_pr_standards.py:47

## Outputs — required
- Step output `keywords_status`: status of issue keywords check — .github/scripts/parse_pr_standards.py:75, 102
- Step output `template_status`: status of PR template compliance check — .github/scripts/parse_pr_standards.py:76, 103
- Step output `template_message`: message detailing template sections status — .github/scripts/parse_pr_standards.py:77, 105
- Step output `standards_warnings`: list of standards warnings — .github/scripts/parse_pr_standards.py:78, 108
- Temporary body file in "/tmp" — .github/scripts/parse_pr_standards.py:40
- Process exit code: 0 on success, 1 on validator failure/invalid JSON, 2 on missing PR_TITLE — .github/scripts/parse_pr_standards.py:8-10, 30, 65, 72, 84

## Invokes — required
- script .claude/skills/github/scripts/pr/validate_pr_description.py — .github/scripts/parse_pr_standards.py:47

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `validate_pr_description.py` — .github/scripts/parse_pr_standards.py:4 — used here
- `ADR-006` — .github/scripts/parse_pr_standards.py:5 — used here
- `ADR-035` — .github/scripts/parse_pr_standards.py:7 — used here
- `main` — .github/scripts/parse_pr_standards.py:23 — defined here
- `_write_outputs` — .github/scripts/parse_pr_standards.py:90 — defined here
- `_write_skip_outputs` — .github/scripts/parse_pr_standards.py:113 — defined here

## Structure
- Script docstring and exit codes — .github/scripts/parse_pr_standards.py:2
- Entry point `main` — .github/scripts/parse_pr_standards.py:23
- Output writer `_write_outputs` — .github/scripts/parse_pr_standards.py:90
- Skip output writer `_write_skip_outputs` — .github/scripts/parse_pr_standards.py:113

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/parse_pr_standards.py`
- language: Python (python3)
- lines: 120
- documented invocation:
  - none (CLI script reading environment variables; entry point defined in `main` — .github/scripts/parse_pr_standards.py:23)
- executed: yes
- actual command run: `PR_TITLE="feat: test PR" PR_BODY="Fixes #123. Closes issue." GITHUB_OUTPUT=/dev/stdout python3 sources/rjm/.github/scripts/parse_pr_standards.py`
- abridged stdout:
  ```text
  keywords_status=PASS
  template_status=WARN
  template_message<<TEMPLATE_EOF
  Template compliance: 0/4 sections complete
  TEMPLATE_EOF
  standards_warnings<<STANDARDS_EOF
  Incomplete template sections: Summary, SpecificationReferences, TypeOfChange, Changes
  STANDARDS_EOF
  Issue keywords: PASS
  Template compliance: WARN - Template compliance: 0/4 sections complete
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0 - Success (results written to GITHUB_OUTPUT)" — .github/scripts/parse_pr_standards.py:8
    - "1 - Validator produced no output or invalid JSON" — .github/scripts/parse_pr_standards.py:9
    - "2 - Usage/environment error" — .github/scripts/parse_pr_standards.py:10
  - Actual exit paths:
    - `return 2` — .github/scripts/parse_pr_standards.py:30
    - `return 1` — .github/scripts/parse_pr_standards.py:65
    - `return 1` — .github/scripts/parse_pr_standards.py:72
    - `return 0` — .github/scripts/parse_pr_standards.py:84
- for validators/gates: validator wrapper and parser. Can exit non-zero (exits 2 when PR_TITLE is missing; exits 1 when underlying validator outputs empty or invalid JSON). Exits 0 on source repository when valid PR_TITLE and PR_BODY are provided.
- does the output match what the documentation claims: yes (runs validator, parses output, and formats heredoc-safe outputs to GITHUB_OUTPUT with exact exit code semantics).

## Defects — required
- `orphan`: No in-scope lifecycle file invokes `.github/scripts/parse_pr_standards.py`; it is invoked only by `.github/workflows/pr-validation.yml:116`, which is outside the lifecycle manifest scope.

## Observations
- Uses `tempfile.NamedTemporaryFile` with a custom prefix incorporating `GITHUB_RUN_ID` and `GITHUB_RUN_ATTEMPT` at lines 33-44 to avoid race conditions and file collisions on shared runner environments.
- Formats multiline outputs (`template_message`, `standards_warnings`) using GitHub Actions heredoc syntax (`<<TEMPLATE_EOF`) to protect against truncation or formatting corruption.

## Context cost
3,867 bytes (approx. 970 tokens). Subprocess loads `.claude/skills/github/scripts/pr/validate_pr_description.py` (12,416 bytes, ~3,100 tokens), total combined cost ~16.3 KB (~4,070 tokens).
