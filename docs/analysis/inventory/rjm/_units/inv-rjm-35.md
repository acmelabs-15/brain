---
unit: inv-rjm-35
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-35

## Files assigned
- [x] `.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md` (56562 bytes, 929 lines, sha256 664b46f110094bbe)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-085-cross-harness-permission-surface-asymmetry-md.md (15915 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-35.md (2206 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-085 is a pivotal architectural decision record resolving the cross-harness asymmetry between Claude Code and Copilot CLI permissions and hooks. It directly affects and interacts with multiple other ADRs:
  - ADR-068 & ADR-071: amended to reflect derived dispatcher metrics and runtime contract changes resulting from ADR-085 Decision 7 (`copilotExclude`) and Decision 8 (deletion of `push_pr_script_identity_guard`).
  - ADR-084: establishes the vendored-hook ROI bar; ADR-085 complies with ADR-084's carve-out explicitly stating that actual security controls cannot be retired via ROI cost-benefit vetos, instead grounding the deletion of `push_pr_script_identity_guard` on owner security judgment of bounded threat models.
  - ADR-086 & PR #3259: adopts Lefthook as sole Git-hook scheduler, receiving the markdown linting responsibilities vacated by the deleted `markdownlint_guard` and `markdown_auto_lint` hooks.
  - ADR-097: completes the retirement of `observation_sync` hook locally.
- Identified missing paths: `.github/hooks/require-subagent-model.json`, `src/copilot-cli/hooks/PreToolUse/_manifest.json`, and `tests/build_scripts/test_copilot_dispatcher_artifact.py`.

## Blocked or uncertain
none

## Time and size
Source read: 56562 bytes (~14000 tokens). Output written: ~18000 bytes (~4500 tokens).
