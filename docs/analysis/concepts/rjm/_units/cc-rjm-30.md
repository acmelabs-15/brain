---
unit: cc-rjm-30
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-30

## Files assigned
- [x] .agents/architecture/ADR-061-hook-matcher-shims-delegate-pattern.md
- [x] .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md
- [x] .claude/skills/ai-agents-generation-and-release/SKILL.md
- [x] .claude/skills/autoplan/SKILL.md
- [x] .claude/skills/review/scripts/validate_review_marker.py
- [x] AGENTS.md
- [x] scripts/validation/check_canonical_citations.py
- [x] scripts/validation/check_citation_freshness.py
- [x] scripts/validation/run_install_parity_ci.py
- [x] scripts/validation/validate_agent_catalog.py

## Outputs produced
- docs/analysis/concepts/rjm/dry-at-the-knowledge-level.md (1330 bytes)
- docs/analysis/concepts/rjm/canonical-source-mirror-md.md (1652 bytes)
- docs/analysis/concepts/rjm/deep-modules.md (1052 bytes)
- docs/analysis/concepts/rjm/delegate-shims.md (1315 bytes)
- docs/analysis/concepts/rjm/inline-body-shims.md (1320 bytes)
- docs/analysis/concepts/rjm/idempotency-sentinels.md (1271 bytes)
- docs/analysis/concepts/rjm/shim-max-stdin-bytes.md (1054 bytes)
- docs/analysis/concepts/rjm/shim-dispatch.md (980 bytes)
- docs/analysis/concepts/rjm/shim-runtime-py.md (955 bytes)
- docs/analysis/concepts/rjm/req-003-m5-t2.md (976 bytes)
- docs/analysis/concepts/rjm/one-body-many-matchers.md (1142 bytes)
- docs/analysis/concepts/rjm/install-parity.md (1486 bytes)
- docs/analysis/concepts/rjm/crash-policy.md (1170 bytes)
- docs/analysis/concepts/rjm/validate-install-parity-py.md (1109 bytes)
- docs/analysis/concepts/rjm/adr-053.md (941 bytes)
- docs/analysis/concepts/rjm/conditional-lsp-first-navigation-enforcement.md (1224 bytes)
- docs/analysis/concepts/rjm/runtime-enforcement-layer.md (1153 bytes)
- docs/analysis/concepts/rjm/static-steering.md (1076 bytes)
- docs/analysis/concepts/rjm/serena-init.md (1020 bytes)
- docs/analysis/concepts/rjm/three-tier-navigation-preference.md (1227 bytes)
- docs/analysis/concepts/rjm/true-positive.md (977 bytes)
- docs/analysis/concepts/rjm/false-positives.md (991 bytes)
- docs/analysis/concepts/rjm/spawn-tax.md (1125 bytes)
- docs/analysis/concepts/rjm/language-server-protocol.md (1231 bytes)
- docs/analysis/concepts/rjm/native-lsp.md (1082 bytes)
- docs/analysis/concepts/rjm/symbol-navigation.md (1215 bytes)
- docs/analysis/concepts/rjm/read-gate.md (1104 bytes)
- docs/analysis/concepts/rjm/graduated-read-gate.md (1127 bytes)
- docs/analysis/concepts/rjm/warmup.md (1122 bytes)
- docs/analysis/concepts/rjm/soft-warn.md (1051 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-30.md (4940 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts: `bun scripts/synthesis/quote-check.ts <cards>`, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-30 authored under `docs/analysis/concepts/rjm/`.
- Concepts span:
  - Architecture decision records: `adr-053` (name-only).
  - Software design principles & patterns: `dry-at-the-knowledge-level` (pattern), `deep-modules` (pattern), `one-body-many-matchers` (pattern), `crash-policy` (pattern).
  - Hook infrastructure & generator architecture: `delegate-shims` (artifact), `inline-body-shims` (artifact), `idempotency-sentinels` (pattern).
  - Drift verification & release gates: `install-parity` (gate).
  - LSP navigation governance: `conditional-lsp-first-navigation-enforcement` (pattern), `runtime-enforcement-layer` (gate), `static-steering` (technique), `three-tier-navigation-preference` (pattern), `language-server-protocol` (reference), `native-lsp` (technique), `symbol-navigation` (technique), `read-gate` (gate), `graduated-read-gate` (gate), `warmup` (gate), `soft-warn` (gate), `spawn-tax` (reference).
  - Out-of-scope boundary integrations: `serena-init` (gate, implementation_in_scope: false per rjm memory boundary).
  - Non-lifecycle concepts representing rule files, scripts, task identifiers, internal constants/functions, and telemetry metrics classified as `kind: name-only` per D-023: `canonical-source-mirror-md`, `shim-max-stdin-bytes`, `shim-dispatch`, `shim-runtime-py`, `req-003-m5-t2`, `validate-install-parity-py`, `true-positive`, `false-positives`.
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (50 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~70,000 tokens across 10 source files and citing inventory cards; approximate tokens of output written: ~11,000 tokens across 30 concept cards and this unit report.
