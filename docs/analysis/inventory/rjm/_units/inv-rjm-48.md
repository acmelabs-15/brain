---
unit: inv-rjm-48
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-48

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-103-skill-output-python-contract-correction.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-103-skill-output-python-contract-correction-md.md (13389 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-48.md (1993 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-103 supersedes ADR-056 items 2 and 6 under the GDS Way bounded rule, updating the skill output contract from PowerShell parameters (`-OutputFormat`) and flat error codes (`ErrorCode`) to Python `--output-format` and nested structured error objects (`Error.Message`, `Error.Code`, `Error.Type`).
- Cross-references unit inv-rjm-36 (ADR-086) regarding local git hooks: ADR-103 verifies that `validate_envelope` is not wired into `lefthook.yml`, `.github/workflows/`, or `pre_pr` scripts, tracking CI gate enforcement in follow-up issue #5299.
- Connects directly to `scripts/github_core/output.py` and `scripts/validate_skill_output.py`, making `Error.Type` and `Data` required fields across prose, validator, and JSON schema (`.agents/schemas/skill-output.schema.json`).
- Defect identified: references `orphan-ref-validator/scripts/envelope.py` at line 450, which is missing the leading `.claude/skills/` path component.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~7,240 tokens (28,960 bytes)
Approximate tokens of output written: ~3,800 tokens (card + unit report)
