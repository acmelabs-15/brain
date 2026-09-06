---
unit: inv-rjm-133
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-133

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/pipeline-validator/references/error-patterns.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/pipeline-validator/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-pipeline-validator-references-error-patterns-md.md (8137 bytes)
- docs/analysis/inventory/rjm/claude-skills-pipeline-validator-skill-md.md (10133 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-133.md (3115 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Composition and invocation: `.claude/skills/pipeline-validator/SKILL.md` is invoked by `.claude/commands/ship.md:63` and `.claude/skills/windows-image-updater/SKILL.md:173, 203, 226`. It is designed as an autonomous post-PR CI/CD validation and auto-fix loop for Azure DevOps pipelines.
- Scope and harness context: The skill focuses heavily on Azure DevOps (`az pipelines`, `az repos pr`, `az devops invoke`), sequential execution (PR Build → Buddy Build → Buddy Release), and .NET 10 upgrade error remediation.
- Host differences: `.claude/commands/ship.md` documents an important architectural distinction where `pipeline-validator` applies for ADO/GitHub PR validation, but for GitHub-specific deferred checks without open PRs, `ship.md` falls back to `get_pr_checks.py`.
- CLI parameter discipline: In Step 2 (`Validate PR`), `az repos pr show` explicitly forbids `--project` and `--repository` arguments because PR ID is globally scoped within the organization; passing them fails with unrecognized argument errors (verified upstream by `tests/skills/pipeline_validator/test_ado_pr_argument_scope.py`).
- Upstream defects noted:
  - `references/error-patterns.md`: Corrupted/truncated document structure where pattern headings for patterns 6, 7, 8, 9, 10, and 12 are missing or merged into diagnosis blocks; Action Options jumps from header to item `3.` without items 1 and 2; decision tree contains duplicate `YES` branches for compilation errors.
  - `SKILL.md`: References non-existent skill `dotnet10-upgrade` at lines 12 and 414; header level mismatch for `Quick Reference: Error-to-Fix Map` (H3 inside H3); duration estimate in quick reference (`30-180 min`) drifts from worst-case configuration polling limits.
- Duplication ledger: Neither file appears in `docs/analysis/manifest/rjm-duplicates.md` (0 exact aliases, 0 variant pairs; no divergence cards required).

## Blocked or uncertain
none

## Time and size
Source read: 25,083 bytes across 2 files (~6,270 tokens). Outputs written: 22,110 bytes across 3 deliverables (~5,525 tokens).
