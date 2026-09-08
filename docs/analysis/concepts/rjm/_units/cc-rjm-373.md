---
unit: cc-rjm-373
phase: 2
package: rjm
session: 018
subagent_returned: complete
---

# Unit cc-rjm-373

## Files assigned
- [x] sources/rjm/templates/agents/architect.shared.md
- [x] sources/rjm/templates/agents/backlog-generator.shared.md
- [x] sources/rjm/templates/agents/code-reviewer.shared.md
- [x] sources/rjm/templates/agents/code-simplifier.shared.md
- [x] sources/rjm/templates/agents/comment-analyzer.shared.md
- [x] sources/rjm/templates/agents/critic.shared.md
- [x] sources/rjm/templates/agents/debug.shared.md
- [x] sources/rjm/templates/agents/dependency-auditor.shared.md
- [x] sources/rjm/templates/agents/qa.shared.md
- [x] docs/analysis/inventory/rjm/templates-agents-architect-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-backlog-generator-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-code-reviewer-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-code-simplifier-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-comment-analyzer-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-critic-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-debug-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-dependency-auditor-shared-md.md
- [x] docs/analysis/inventory/rjm/templates-agents-qa-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/architecture-principles.md (914 bytes)
- docs/analysis/concepts/rjm/conways-law.md (1215 bytes)
- docs/analysis/concepts/rjm/ask-before-vs-proceed-with-default.md (1280 bytes)
- docs/analysis/concepts/rjm/adr-anti-patterns-to-avoid.md (1258 bytes)
- docs/analysis/concepts/rjm/status-definitions.md (1152 bytes)
- docs/analysis/concepts/rjm/adr-and-design-review-length-bounds.md (1190 bytes)
- docs/analysis/concepts/rjm/strategic-architecture-principles.md (1332 bytes)
- docs/analysis/concepts/rjm/legacy-modernization-patterns.md (1269 bytes)
- docs/analysis/concepts/rjm/sacrificial-architecture.md (1342 bytes)
- docs/analysis/concepts/rjm/architecture-review-process.md (1333 bytes)
- docs/analysis/concepts/rjm/output-location.md (1009 bytes)
- docs/analysis/concepts/rjm/complexity-based-model-routing.md (1366 bytes)
- docs/analysis/concepts/rjm/guidelines.md (876 bytes)
- docs/analysis/concepts/rjm/tool-use.md (812 bytes)
- docs/analysis/concepts/rjm/code-simplifier-agent.md (1307 bytes)
- docs/analysis/concepts/rjm/needs-decomposition.md (1492 bytes)
- docs/analysis/concepts/rjm/security-flag.md (1260 bytes)
- docs/analysis/concepts/rjm/comment-analyzer-agent.md (1286 bytes)
- docs/analysis/concepts/rjm/approved-with-concerns.md (1173 bytes)
- docs/analysis/concepts/rjm/escalation.md (1303 bytes)
- docs/analysis/concepts/rjm/anti-patterns-to-catch.md (1215 bytes)
- docs/analysis/concepts/rjm/debug-agent.md (1237 bytes)
- docs/analysis/concepts/rjm/when-to-run.md (856 bytes)
- docs/analysis/concepts/rjm/supported-ecosystems.md (915 bytes)
- docs/analysis/concepts/rjm/net.md (771 bytes)
- docs/analysis/concepts/rjm/npm.md (761 bytes)
- docs/analysis/concepts/rjm/pip-uv.md (791 bytes)
- docs/analysis/concepts/rjm/cargo.md (788 bytes)
- docs/analysis/concepts/rjm/detect-ecosystems.md (838 bytes)
- docs/analysis/concepts/rjm/exit.md (818 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-373.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/architecture-principles.md docs/analysis/concepts/rjm/conways-law.md docs/analysis/concepts/rjm/ask-before-vs-proceed-with-default.md docs/analysis/concepts/rjm/adr-anti-patterns-to-avoid.md docs/analysis/concepts/rjm/status-definitions.md docs/analysis/concepts/rjm/adr-and-design-review-length-bounds.md docs/analysis/concepts/rjm/strategic-architecture-principles.md docs/analysis/concepts/rjm/legacy-modernization-patterns.md docs/analysis/concepts/rjm/sacrificial-architecture.md docs/analysis/concepts/rjm/architecture-review-process.md docs/analysis/concepts/rjm/output-location.md docs/analysis/concepts/rjm/complexity-based-model-routing.md docs/analysis/concepts/rjm/guidelines.md docs/analysis/concepts/rjm/tool-use.md docs/analysis/concepts/rjm/code-simplifier-agent.md docs/analysis/concepts/rjm/needs-decomposition.md docs/analysis/concepts/rjm/security-flag.md docs/analysis/concepts/rjm/comment-analyzer-agent.md docs/analysis/concepts/rjm/approved-with-concerns.md docs/analysis/concepts/rjm/escalation.md docs/analysis/concepts/rjm/anti-patterns-to-catch.md docs/analysis/concepts/rjm/debug-agent.md docs/analysis/concepts/rjm/when-to-run.md docs/analysis/concepts/rjm/supported-ecosystems.md docs/analysis/concepts/rjm/net.md docs/analysis/concepts/rjm/npm.md docs/analysis/concepts/rjm/pip-uv.md docs/analysis/concepts/rjm/cargo.md docs/analysis/concepts/rjm/detect-ecosystems.md docs/analysis/concepts/rjm/exit.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-373 completes 30 concept cards across 9 shared agent templates (`architect.shared.md`, `backlog-generator.shared.md`, `code-reviewer.shared.md`, `code-simplifier.shared.md`, `comment-analyzer.shared.md`, `critic.shared.md`, `debug.shared.md`, `dependency-auditor.shared.md`, and `qa.shared.md`):
  1. System architecture principles and governance (`architecture-principles`, `conways-law`, `ask-before-vs-proceed-with-default`, `adr-anti-patterns-to-avoid`, `status-definitions`, `adr-and-design-review-length-bounds`, `strategic-architecture-principles`, `legacy-modernization-patterns`, `sacrificial-architecture`, `architecture-review-process`, `output-location`).
  2. Backlog generation and model routing (`complexity-based-model-routing`, `guidelines`).
  3. Code review and support agent roles and guardrails (`tool-use`, `code-simplifier-agent`, `needs-decomposition`, `security-flag`, `comment-analyzer-agent`).
  4. Adversarial critique and escalation protocols (`approved-with-concerns`, `escalation`, `anti-patterns-to-catch`).
  5. Debugging protocol and agent role (`debug-agent`).
  6. Dependency auditing processes and ecosystem tooling (`when-to-run`, `supported-ecosystems`, `net`, `npm`, `pip-uv`, `cargo`, `detect-ecosystems`, `exit`).
- Non-lifecycle names (headings, runtime/tool identifiers, section titles) are classified as `kind: name-only` and `package_phase: none` per D-023 (`architecture-principles`, `output-location`, `guidelines`, `tool-use`, `when-to-run`, `supported-ecosystems`, `net`, `npm`, `pip-uv`, `cargo`, `detect-ecosystems`, `exit`).
- Lifecycle roles (`code-simplifier-agent`, `comment-analyzer-agent`, `debug-agent`), gates (`ask-before-vs-proceed-with-default`, `adr-and-design-review-length-bounds`, `needs-decomposition`, `security-flag`, `approved-with-concerns`), patterns (`conways-law`, `sacrificial-architecture`, `complexity-based-model-routing`, `escalation`), checklists (`adr-anti-patterns-to-avoid`, `architecture-review-process`, `anti-patterns-to-catch`), and references (`status-definitions`, `strategic-architecture-principles`, `legacy-modernization-patterns`) are categorized with standard lifecycle kinds.
- All 32 occurrences listed in `facts/cc-rjm-373.txt` are fully mapped into the respective `Where used` tables (including the two occurrences for `output-location` across `architect.shared.md` and `qa.shared.md`, and the two occurrences for `needs-decomposition` across `code-simplifier.shared.md` and `comment-analyzer.shared.md`).
- Inventory defect statuses are cleanly mapped into `Implementation status` (`defects: missing-path`, `defects: doc-drift`, or `clean`).
- Byte-exact verification via `quote-check.ts` passes with 30 PASS and 0 FAIL.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,000 tokens across 9 source files and 9 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
