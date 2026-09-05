---
package: rjm
path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md
type: agent
bytes: 28960
unit: inv-rjm-48
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-103-skill-output-python-contract-correction.md

## Purpose — required, verbatim
> "Supersede ADR-056 items 2 and 6, and its enforcement scope, as follows." — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:88

## Design intent — required
Aligns the repository's architectural decisions with its Python runtime implementation by formally superseding ADR-056 items 2 and 6 under the GDS Way bounded rule ("Decision change after any implementation: create a new superseding ADR. Never delete the old one"). When skill scripts were migrated from PowerShell to Python (ADR-042), the runtime output helper (`scripts/github_core/output.py`) adopted `--output-format` and nested `Error.Code` and `Error.Type` inside an `Error` object rather than using PowerShell parameter `-OutputFormat` and a flat `ErrorCode`. ADR-103 standardizes this Python contract, resolves enforcement discrepancies by making `Error.Type` and `Data` required fields in both the JSON schema (`.agents/schemas/skill-output.schema.json`) and the standalone validator (`scripts/validate_skill_output.py`), aligns producer guards in `write_skill_error` to reject empty messages and boolean exit codes, and explicitly separates implementation from enforcement while tracking CI hook integration as follow-up issue #5299.

## Phase — required
cross-phase

## Inputs — required
- "standardizes a JSON envelope for skill script output." — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:53
- "implementation, `scripts/github_core/output.py`, uses a `--output-format`" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:57
- "already carries `implemented: true`, and this repository's own documented" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:65
- "the JSON schema (`.agents/schemas/skill-output.schema.json`)" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:74
- "and the standalone validator (`scripts/validate_skill_output.py`) both treat" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:75
- "the envelope's `Error.Type` field as optional" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:76

## Outputs — required
- "Supersede ADR-056 items 2 and 6, and its enforcement scope, as follows." — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:88
- "All skill scripts MUST wrap output in a standard envelope with `Success`, `Data`, `Error`, and `Metadata` fields." — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:91-92
- "**Scripts MUST accept `--output-format`** argument with values `json`," — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:93
- "**Error responses use the standard envelope's `Error` field**: a nested" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:102
- "one of `NotFound`, `ApiError`, `AuthError`, `InvalidParams`, `RateLimitError`, `Timeout`, `General`, `VerificationFailed`" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:104-105
- "`Error.Type` moved into the object's `required` array." — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:252
- "Reports a missing or empty `Error.Type` as an error rather than skipping the check." — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:262-263
- "Tracked as a fast follow-up: issue #5299." — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:162-163

## Invokes — required
- doc ADR-056 — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:16
- doc ADR-042 — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:56
- script scripts/github_core/output.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:57
- reference .claude/skills/adr-generator/references/adr-best-practices.md — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:66
- file .agents/schemas/skill-output.schema.json — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:74
- script scripts/validate_skill_output.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:75
- doc ADR-035 — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:103
- doc ADR-028 — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:135
- config lefthook.yml — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:154
- script scripts/validation/pre_pr_sequence.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:155
- script tests/test_validate_envelope.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:156
- script tests/test_skill_output.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:157
- script tests/test_skill_output_schema.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:158
- script tests/test_skill_output_cli.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:159
- script .claude/skills/github/scripts/pr/edit_pr_body.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:214
- script scripts/sync_plugin_lib.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:248
- script build/scripts/build_all.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:249
- doc .claude/rules/generated-artifacts.md — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:250
- doc ADR-051 — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:259
- file pyproject.toml — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:373
- doc .agents/critique/ADR-103-debate-log.md — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:379
- script tests/test_github_pr_diagnostics.py — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:456
- doc ADR-073 — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:466
- doc .agents/critique/issue-5201-adr-028-031-056-debate-log.md — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:474

## Invoked by — required
- doc ADR-103 — .agents/architecture/README.md:153
- doc ADR-103 — .agents/architecture/ADR-056-skill-output-format-standardization.md:7
- script ADR-103 — scripts/validate_skill_output.py:1
- script ADR-103 — scripts/github_core/output.py:8

## Concepts named — required, verbatim
- `Skill Output Format Standardization` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:12 — defined here
- `Python Contract Correction` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:12 — defined here
- `implemented: true` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:21 — used here
- `write_skill_error` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:22 — used here
- `adr-review` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:24 — used here
- `validate_envelope` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:25 — used here
- `status: accepted` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:28 — used here
- `Phase 4 convergence check` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:28 — used here
- `GitHub Copilot` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:64 — used here
- `ADR Mutability and Superseding` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:67 — used here
- `GDS Way bounded rule` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:67 — used here
- `standard envelope` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:91 — defined here
- `--output-format` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:93 — defined here
- `json` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:93 — defined here
- `human` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:94 — defined here
- `auto` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:94 — defined here
- `NotFound` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:104 — defined here
- `ApiError` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:104 — defined here
- `AuthError` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:104 — defined here
- `InvalidParams` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:104 — defined here
- `RateLimitError` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:105 — defined here
- `Timeout` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:105 — defined here
- `General` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:105 — defined here
- `VerificationFailed` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:105 — defined here
- `VALID_ERROR_TYPES` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:245 — defined here
- `sync-before-build chain` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:250 — used here
- `Cursor Bugbot` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:287 — used here
- `taste-lint` — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:356 — used here

## Structure
# ADR-103: Skill Output Format Standardization, Python Contract Correction — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:12
## Status — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:14
## Date — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:46
## Context — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:50
## Decision — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:86
## Rationale — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:113
### Alternatives Considered — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:115
### Trade-offs — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:123
## Consequences — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:131
### Positive — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:133
### Negative — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:146
### Neutral — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:224
## Implementation Notes — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:241
## Related Decisions — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:460
## References — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:470

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-103-skill-output-python-contract-correction.md:450 · References `orphan-ref-validator/scripts/envelope.py` which does not exist at that path (the actual file is at `.claude/skills/orphan-ref-validator/scripts/envelope.py`).

## Observations
- Demonstrates strict adherence to the GDS Way bounded rule ("Decision change after any implementation: create a new superseding ADR. Never delete the old one"), creating ADR-103 to supersede ADR-056 rather than retroactively modifying an accepted record marked `implemented: true`.
- Documents an extensive 6-seat Phase 4 convergence review process (architect, critic, security, independent-thinker, analyst, high-level-advisor) spanning five rounds, capturing how peer seats caught edge cases such as boolean exit code parsing (`isinstance(True, int)`), empty string error messages, unhashable error types, and missing envelope fields.
- Highlights an important distinction between implementation and automated enforcement: while `implemented: true` records that schemas, validators, and helper libraries match the prose, `validate_envelope` is not wired into pre-commit hooks or CI workflows (tracked as follow-up issue #5299).
- Notes runtime behavioral changes where envelopes that previously crashed uncaught or silently passed are now rejected with explicit findings.
- References the repository's 500-line taste-lint ceiling which necessitated splitting unit tests from `tests/test_skill_output.py` into `tests/test_skill_output_cli.py` and `tests/test_validate_envelope.py`.

## Context cost
28960 bytes, approximately 7240 tokens.
