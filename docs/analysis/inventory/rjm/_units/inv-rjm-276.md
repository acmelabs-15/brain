---
unit: inv-rjm-276
phase: 1
package: rjm
session: 008
subagent_returned: complete
---

# Unit inv-rjm-276

## Files assigned
- [x] `sources/rjm/scripts/validation/check_adr_uniqueness.py` (5361 bytes)
- [x] `sources/rjm/scripts/validation/check_agent_skill_discriminator.py` (34655 bytes)
- [x] `sources/rjm/scripts/validation/check_build_gates.py` (7655 bytes)

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-validation-check-adr-uniqueness-py.md` (7394 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-check-agent-skill-discriminator-py.md` (16311 bytes)
- `docs/analysis/inventory/rjm/scripts-validation-check-build-gates-py.md` (8073 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-276.md` (3428 bytes)

## Scripts executed
- `scripts/validation/check_adr_uniqueness.py`: `python3 scripts/validation/check_adr_uniqueness.py`, exit code 0
- `scripts/validation/check_adr_uniqueness.py`: `python3 scripts/validation/check_adr_uniqueness.py --print-next`, exit code 0
- `scripts/validation/check_adr_uniqueness.py`: `python3 scripts/validation/check_adr_uniqueness.py --repo-root /tmp`, exit code 2
- `scripts/validation/check_agent_skill_discriminator.py`: `python3 scripts/validation/check_agent_skill_discriminator.py`, exit code 0
- `scripts/validation/check_agent_skill_discriminator.py`: `python3 scripts/validation/check_agent_skill_discriminator.py --all`, exit code 1
- `scripts/validation/check_agent_skill_discriminator.py`: `python3 scripts/validation/check_agent_skill_discriminator.py --all --baseline scripts/validation/agent_skill_discriminator_baseline.json`, exit code 2
- `scripts/validation/check_build_gates.py`: `python3 scripts/validation/check_build_gates.py`, exit code 0
- `scripts/validation/check_build_gates.py`: `python3 scripts/validation/check_build_gates.py --repo-root /tmp`, exit code 2

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/validation/check_agent_skill_discriminator.py` works closely with `scripts/validation/agent_skill_discriminator_baseline.py` (unit `inv-rjm-272`). The default baseline file `scripts/validation/agent_skill_discriminator_baseline.json` is missing from disk, causing runs with `--baseline` pointing to it to exit with code 2.
- `scripts/validation/check_build_gates.py` is invoked by `scripts/validation/checks_spec.py` (`validate_build_gates()`), checking `.claude/commands/build.md` for `## Mandatory Exit Gates` and mandatory invocations of `code-qualities-assessment`, `taste-lints`, and `doc-accuracy`. Its module docstring and error messages reference `.agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md`, which is missing on disk.
- `scripts/validation/check_adr_uniqueness.py` enforces zero-exception ADR integer uniqueness under `.agents/architecture/`, complementing `scripts/validation/check_adr_lifecycle.py` (unit `inv-rjm-273`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,900 tokens (47,671 bytes across 3 source files).
Approximate tokens of output written: ~7,900 tokens (31,778 bytes across 4 files).
