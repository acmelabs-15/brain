---
unit: cc-rjm-362
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-362

## Files assigned
- [x] sources/rjm/scripts/validation/pre_pr.py
- [x] sources/rjm/scripts/validation/pre_pr_sequence.py
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-pre-pr-sequence-py.md

## Outputs produced
- docs/analysis/concepts/rjm/mypy-changed-files-ratchet.md (1394 bytes)
- docs/analysis/concepts/rjm/markdown-linting.md (1253 bytes)
- docs/analysis/concepts/rjm/workflow-yaml-validation.md (1291 bytes)
- docs/analysis/concepts/rjm/copilot-cli-version-pin.md (1259 bytes)
- docs/analysis/concepts/rjm/ci-dependency-pins.md (1328 bytes)
- docs/analysis/concepts/rjm/adr-lifecycle-frontmatter-ratchet.md (1398 bytes)
- docs/analysis/concepts/rjm/adr-link-resolution.md (1234 bytes)
- docs/analysis/concepts/rjm/design-review-frontmatter.md (1418 bytes)
- docs/analysis/concepts/rjm/build-command-exit-gates.md (1379 bytes)
- docs/analysis/concepts/rjm/stale-script-references.md (1200 bytes)
- docs/analysis/concepts/rjm/citation-freshness-added-lines.md (1371 bytes)
- docs/analysis/concepts/rjm/documented-interpreter-portability.md (1340 bytes)
- docs/analysis/concepts/rjm/orphaned-build-deferrals.md (1250 bytes)
- docs/analysis/concepts/rjm/generated-artifact-staleness.md (1270 bytes)
- docs/analysis/concepts/rjm/spec-id-uniqueness.md (1149 bytes)
- docs/analysis/concepts/rjm/skill-markdown-portability.md (1247 bytes)
- docs/analysis/concepts/rjm/skill-shell-detection.md (1146 bytes)
- docs/analysis/concepts/rjm/skill-skip-clause-routing.md (1197 bytes)
- docs/analysis/concepts/rjm/skill-memory-references.md (1210 bytes)
- docs/analysis/concepts/rjm/colocated-skill-tests.md (1179 bytes)
- docs/analysis/concepts/rjm/rule-activation-coverage.md (1234 bytes)
- docs/analysis/concepts/rjm/copilot-routing-exclusions.md (1197 bytes)
- docs/analysis/concepts/rjm/sync-registry-provenance.md (1125 bytes)
- docs/analysis/concepts/rjm/agent-catalog-drift.md (1171 bytes)
- docs/analysis/concepts/rjm/shipped-skill-routes.md (1171 bytes)
- docs/analysis/concepts/rjm/canonical-citation-check.md (1323 bytes)
- docs/analysis/concepts/rjm/orchestrator-citation-check.md (1229 bytes)
- docs/analysis/concepts/rjm/em-en-dash-prohibition.md (1142 bytes)
- docs/analysis/concepts/rjm/spec-contradiction-check.md (1344 bytes)
- docs/analysis/concepts/rjm/model-pin-governance-warn.md (1232 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-362.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/mypy-changed-files-ratchet.md docs/analysis/concepts/rjm/markdown-linting.md docs/analysis/concepts/rjm/workflow-yaml-validation.md docs/analysis/concepts/rjm/copilot-cli-version-pin.md docs/analysis/concepts/rjm/ci-dependency-pins.md docs/analysis/concepts/rjm/adr-lifecycle-frontmatter-ratchet.md docs/analysis/concepts/rjm/adr-link-resolution.md docs/analysis/concepts/rjm/design-review-frontmatter.md docs/analysis/concepts/rjm/build-command-exit-gates.md docs/analysis/concepts/rjm/stale-script-references.md docs/analysis/concepts/rjm/citation-freshness-added-lines.md docs/analysis/concepts/rjm/documented-interpreter-portability.md docs/analysis/concepts/rjm/orphaned-build-deferrals.md docs/analysis/concepts/rjm/generated-artifact-staleness.md docs/analysis/concepts/rjm/spec-id-uniqueness.md docs/analysis/concepts/rjm/skill-markdown-portability.md docs/analysis/concepts/rjm/skill-shell-detection.md docs/analysis/concepts/rjm/skill-skip-clause-routing.md docs/analysis/concepts/rjm/skill-memory-references.md docs/analysis/concepts/rjm/colocated-skill-tests.md docs/analysis/concepts/rjm/rule-activation-coverage.md docs/analysis/concepts/rjm/copilot-routing-exclusions.md docs/analysis/concepts/rjm/sync-registry-provenance.md docs/analysis/concepts/rjm/agent-catalog-drift.md docs/analysis/concepts/rjm/shipped-skill-routes.md docs/analysis/concepts/rjm/canonical-citation-check.md docs/analysis/concepts/rjm/orchestrator-citation-check.md docs/analysis/concepts/rjm/em-en-dash-prohibition.md docs/analysis/concepts/rjm/spec-contradiction-check.md docs/analysis/concepts/rjm/model-pin-governance-warn.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-362 completes 30 concept cards representing ordered shift-left verification gates defined in `scripts/validation/pre_pr_sequence.py` and documented in `scripts/validation/pre_pr.py`:
  1. Static analysis, style, and syntax gates: `mypy-changed-files-ratchet`, `markdown-linting`, `workflow-yaml-validation`, `em-en-dash-prohibition`.
  2. Pin and dependency governance gates: `copilot-cli-version-pin`, `ci-dependency-pins`, `model-pin-governance-warn`.
  3. Architecture and design review gates: `adr-lifecycle-frontmatter-ratchet`, `adr-link-resolution`, `design-review-frontmatter`.
  4. Build and execution gates: `build-command-exit-gates`, `stale-script-references`, `documented-interpreter-portability`, `orphaned-build-deferrals`, `generated-artifact-staleness`.
  5. Specification and citation integrity gates: `spec-id-uniqueness`, `canonical-citation-check`, `orchestrator-citation-check`, `citation-freshness-added-lines`, `spec-contradiction-check`.
  6. Skill and agent packaging and routing gates: `skill-markdown-portability`, `skill-shell-detection`, `skill-skip-clause-routing`, `skill-memory-references`, `colocated-skill-tests`, `rule-activation-coverage`, `copilot-routing-exclusions`, `sync-registry-provenance`, `agent-catalog-drift`, `shipped-skill-routes`.
- All 30 concepts are categorized as `kind: gate` with `package_phase: cross-phase`, reflecting their role as shift-left verification gates executing sequentially in the pre-PR pipeline.
- All 34 occurrences across `scripts/validation/pre_pr_sequence.py` (30 occurrences) and `scripts/validation/pre_pr.py` (4 occurrences) cited in `facts/cc-rjm-362.txt` are mapped in the Where used tables.
- Implementation status is recorded as `clean` for the 26 cards whose sole cited source is `pre_pr_sequence.py` (inventory defect: none), and `defects: doc-drift` for the 4 cards that also cite `pre_pr.py` (`design-review-frontmatter`, `build-command-exit-gates`, `canonical-citation-check`, `spec-contradiction-check`), reflecting doc-drift recorded on `scripts-validation-pre-pr-py.md`.
- All 30 cards pass byte-exact verification via `quote-check.ts` with zero failures.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
