---
unit: cc-rjm-190
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-190

## Files assigned
- [x] sources/rjm/.claude/skills/review/SKILL.md
- [x] sources/rjm/.claude/skills/review/references/security.md
- [x] sources/rjm/.claude/skills/review/references/spec-compliance.md
- [x] sources/rjm/.claude/skills/review/scripts/validate_findings_scope.py
- [x] sources/rjm/.claude/skills/review/scripts/validate_review_marker.py
- [x] sources/rjm/scripts/ai_review_common/cache_guard.py
- [x] sources/rjm/scripts/ci/parse_ai_review_output.py
- [x] sources/rjm/scripts/quality_gate/check_critical_failures.py
- [x] sources/rjm/scripts/quality_gate/external_signal_gate.py
- [x] sources/rjm/scripts/quality_gate/spec_external_signal_gate.py
- [x] sources/rjm/scripts/validation/validate_review_marker.py
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-security-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-spec-compliance-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-scripts-validate-findings-scope-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-ai-review-common-cache-guard-py.md
- [x] docs/analysis/inventory/rjm/scripts-ci-parse-ai-review-output-py.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate-check-critical-failures-py.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate-external-signal-gate-py.md
- [x] docs/analysis/inventory/rjm/scripts-quality-gate-spec-external-signal-gate-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-scripts-validate-review-marker-py.md
- [x] docs/analysis/inventory/rjm/scripts-validation-validate-review-marker-py.md

## Outputs produced
- docs/analysis/concepts/rjm/secret-detection.md (1197 bytes)
- docs/analysis/concepts/rjm/infrastructure-security.md (1381 bytes)
- docs/analysis/concepts/rjm/critical-fail-merge-blocked.md (1307 bytes)
- docs/analysis/concepts/rjm/for-code-and-workflow-prs.md (946 bytes)
- docs/analysis/concepts/rjm/for-docs-only-prs.md (909 bytes)
- docs/analysis/concepts/rjm/for-config-prs.md (882 bytes)
- docs/analysis/concepts/rjm/warn-proceed-with-caution.md (1311 bytes)
- docs/analysis/concepts/rjm/pass-standards-met.md (1261 bytes)
- docs/analysis/concepts/rjm/spec-compliance.md (1458 bytes)
- docs/analysis/concepts/rjm/stage-1.md (1346 bytes)
- docs/analysis/concepts/rjm/spec-linkage.md (1258 bytes)
- docs/analysis/concepts/rjm/acceptance-criteria-coverage.md (1316 bytes)
- docs/analysis/concepts/rjm/scope-fidelity.md (1303 bytes)
- docs/analysis/concepts/rjm/contradiction-with-the-spec.md (1352 bytes)
- docs/analysis/concepts/rjm/evidence-the-criterion-is-met.md (1310 bytes)
- docs/analysis/concepts/rjm/location.md (912 bytes)
- docs/analysis/concepts/rjm/three-dot-diff.md (1325 bytes)
- docs/analysis/concepts/rjm/pre-existing-not-in-this-pr-diff.md (1537 bytes)
- docs/analysis/concepts/rjm/needs-review.md (2069 bytes)
- docs/analysis/concepts/rjm/non-compliant.md (1781 bytes)
- docs/analysis/concepts/rjm/compliant.md (1443 bytes)
- docs/analysis/concepts/rjm/pre-existing-marker.md (903 bytes)
- docs/analysis/concepts/rjm/scope-adjustment.md (1274 bytes)
- docs/analysis/concepts/rjm/issue-1938.md (913 bytes)
- docs/analysis/concepts/rjm/reviewed-tip.md (1103 bytes)
- docs/analysis/concepts/rjm/sha-binding.md (1273 bytes)
- docs/analysis/concepts/rjm/marker-trailer-key.md (1154 bytes)
- docs/analysis/concepts/rjm/reviewmarker.md (984 bytes)
- docs/analysis/concepts/rjm/validationoutcome.md (1041 bytes)
- docs/analysis/concepts/rjm/stage-1-spec-compliance-gate.md (1340 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-190.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/secret-detection.md docs/analysis/concepts/rjm/infrastructure-security.md docs/analysis/concepts/rjm/critical-fail-merge-blocked.md docs/analysis/concepts/rjm/for-code-and-workflow-prs.md docs/analysis/concepts/rjm/for-docs-only-prs.md docs/analysis/concepts/rjm/for-config-prs.md docs/analysis/concepts/rjm/warn-proceed-with-caution.md docs/analysis/concepts/rjm/pass-standards-met.md docs/analysis/concepts/rjm/spec-compliance.md docs/analysis/concepts/rjm/stage-1.md docs/analysis/concepts/rjm/spec-linkage.md docs/analysis/concepts/rjm/acceptance-criteria-coverage.md docs/analysis/concepts/rjm/scope-fidelity.md docs/analysis/concepts/rjm/contradiction-with-the-spec.md docs/analysis/concepts/rjm/evidence-the-criterion-is-met.md docs/analysis/concepts/rjm/location.md docs/analysis/concepts/rjm/three-dot-diff.md docs/analysis/concepts/rjm/pre-existing-not-in-this-pr-diff.md docs/analysis/concepts/rjm/needs-review.md docs/analysis/concepts/rjm/non-compliant.md docs/analysis/concepts/rjm/compliant.md docs/analysis/concepts/rjm/pre-existing-marker.md docs/analysis/concepts/rjm/scope-adjustment.md docs/analysis/concepts/rjm/issue-1938.md docs/analysis/concepts/rjm/reviewed-tip.md docs/analysis/concepts/rjm/sha-binding.md docs/analysis/concepts/rjm/marker-trailer-key.md docs/analysis/concepts/rjm/reviewmarker.md docs/analysis/concepts/rjm/validationoutcome.md docs/analysis/concepts/rjm/stage-1-spec-compliance-gate.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-190 completes 30 concept cards spanning the `/review` phase and associated review gates, scripts, and validators:
  1. Security review rubric and verdict thresholds (`secret-detection`, `infrastructure-security`, `critical-fail-merge-blocked`, `for-code-and-workflow-prs`, `for-docs-only-prs`, `for-config-prs`, `warn-proceed-with-caution`, `pass-standards-met`).
  2. Stage-1 spec-compliance gating axis and focus areas (`spec-compliance`, `stage-1`, `spec-linkage`, `acceptance-criteria-coverage`, `scope-fidelity`, `contradiction-with-the-spec`, `evidence-the-criterion-is-met`, `stage-1-spec-compliance-gate`).
  3. Findings scope validation mechanics and verdicts (`location`, `three-dot-diff`, `pre-existing-not-in-this-pr-diff`, `pre-existing-marker`, `scope-adjustment`, `needs-review`, `non-compliant`, `compliant`).
  4. Git trailer SHA-bound review markers and validation types (`issue-1938`, `reviewed-tip`, `sha-binding`, `marker-trailer-key`, `reviewmarker`, `validationoutcome`).
- Non-lifecycle concepts representing headings, identifiers, and types (`for-code-and-workflow-prs`, `for-docs-only-prs`, `for-config-prs`, `location`, `pre-existing-marker`, `issue-1938`, `marker-trailer-key`, `reviewmarker`, `validationoutcome`) were authored with `kind: name-only` per D-023.
- All 48 occurrences recorded in `facts/cc-rjm-190.txt` are mapped into the respective `Where used` tables.
- Defect annotations from citing inventory cards were mapped to `Implementation status` (`defects: internal-contradiction`, `defects: missing-path`, `defects: missing-path, orphan`, `defects: internal-contradiction, missing-path`, or `clean`).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~28,000 tokens across 11 source files and 11 inventory cards.
Approximate tokens of output written: ~15,000 tokens across 30 authored concept cards and 1 unit report.
