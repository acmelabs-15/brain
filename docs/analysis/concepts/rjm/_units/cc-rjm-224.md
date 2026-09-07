---
unit: cc-rjm-224
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-224

## Files assigned
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md
- [x] sources/rjm/scripts/eval/_optimizer_adapters.py
- [x] sources/rjm/templates/agents/roadmap.shared.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-templates-threat-model-template-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval--optimizer-adapters-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-roadmap-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/security-architecture-review.md (1359 bytes)
- docs/analysis/concepts/rjm/component-diagram.md (1225 bytes)
- docs/analysis/concepts/rjm/sequence-diagram.md (1291 bytes)
- docs/analysis/concepts/rjm/deployment-diagram.md (1298 bytes)
- docs/analysis/concepts/rjm/external-entities.md (1352 bytes)
- docs/analysis/concepts/rjm/processes.md (1243 bytes)
- docs/analysis/concepts/rjm/data-stores.md (1268 bytes)
- docs/analysis/concepts/rjm/data-flows.md (1613 bytes)
- docs/analysis/concepts/rjm/trust-boundaries.md (1638 bytes)
- docs/analysis/concepts/rjm/s-poofing.md (1360 bytes)
- docs/analysis/concepts/rjm/t-ampering.md (1313 bytes)
- docs/analysis/concepts/rjm/r-epudiation.md (1280 bytes)
- docs/analysis/concepts/rjm/i-nfo-disclosure.md (1339 bytes)
- docs/analysis/concepts/rjm/d-enial-of-service.md (1379 bytes)
- docs/analysis/concepts/rjm/e-levation-of-privilege.md (1375 bytes)
- docs/analysis/concepts/rjm/risk-rating.md (1258 bytes)
- docs/analysis/concepts/rjm/likelihood.md (1185 bytes)
- docs/analysis/concepts/rjm/mitigate.md (1287 bytes)
- docs/analysis/concepts/rjm/accept.md (1574 bytes)
- docs/analysis/concepts/rjm/transfer.md (1360 bytes)
- docs/analysis/concepts/rjm/cyber-kill-chain.md (1411 bytes)
- docs/analysis/concepts/rjm/scope.md (1496 bytes)
- docs/analysis/concepts/rjm/architecture-overview.md (1356 bytes)
- docs/analysis/concepts/rjm/trust-boundary.md (1345 bytes)
- docs/analysis/concepts/rjm/external-entity.md (1312 bytes)
- docs/analysis/concepts/rjm/data-store.md (1301 bytes)
- docs/analysis/concepts/rjm/spoofing.md (1353 bytes)
- docs/analysis/concepts/rjm/tampering.md (1343 bytes)
- docs/analysis/concepts/rjm/threat-matrix-summary.md (1317 bytes)
- docs/analysis/concepts/rjm/mitigations.md (1288 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-224.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/security-architecture-review.md docs/analysis/concepts/rjm/component-diagram.md docs/analysis/concepts/rjm/sequence-diagram.md docs/analysis/concepts/rjm/deployment-diagram.md docs/analysis/concepts/rjm/external-entities.md docs/analysis/concepts/rjm/processes.md docs/analysis/concepts/rjm/data-stores.md docs/analysis/concepts/rjm/data-flows.md docs/analysis/concepts/rjm/trust-boundaries.md docs/analysis/concepts/rjm/s-poofing.md docs/analysis/concepts/rjm/t-ampering.md docs/analysis/concepts/rjm/r-epudiation.md docs/analysis/concepts/rjm/i-nfo-disclosure.md docs/analysis/concepts/rjm/d-enial-of-service.md docs/analysis/concepts/rjm/e-levation-of-privilege.md docs/analysis/concepts/rjm/risk-rating.md docs/analysis/concepts/rjm/likelihood.md docs/analysis/concepts/rjm/mitigate.md docs/analysis/concepts/rjm/accept.md docs/analysis/concepts/rjm/transfer.md docs/analysis/concepts/rjm/cyber-kill-chain.md docs/analysis/concepts/rjm/scope.md docs/analysis/concepts/rjm/architecture-overview.md docs/analysis/concepts/rjm/trust-boundary.md docs/analysis/concepts/rjm/external-entity.md docs/analysis/concepts/rjm/data-store.md docs/analysis/concepts/rjm/spoofing.md docs/analysis/concepts/rjm/tampering.md docs/analysis/concepts/rjm/threat-matrix-summary.md docs/analysis/concepts/rjm/mitigations.md` (exit code 0, 35 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-224 authors 30 concept cards focused on security threat modeling, architecture decomposition, STRIDE taxonomy, risk prioritization, and epic scope specification:
  1. Architecture decomposition diagrams and DFD elements: `security-architecture-review`, `component-diagram`, `sequence-diagram`, `deployment-diagram`, `external-entities`, `processes`, `data-stores`, `data-flows`, `trust-boundaries`, `architecture-overview`, `trust-boundary`, `external-entity`, `data-store`.
  2. STRIDE threat taxonomy: Markdown-table extracted bold initials `s-poofing`, `t-ampering`, `r-epudiation`, `i-nfo-disclosure`, `d-enial-of-service`, `e-levation-of-privilege`, alongside template section headers `spoofing` and `tampering`.
  3. Risk assessment and mitigation strategies: `risk-rating`, `likelihood`, `mitigate`, `accept`, `transfer`, `threat-matrix-summary`, `mitigations`.
  4. Cross-domain concepts: `accept` links threat modeling risk acceptance (`.claude/skills/threat-modeling/SKILL.md:244`) with optimizer adapter held-out gate acceptance thresholds (`scripts/eval/_optimizer_adapters.py:21`); `scope` links threat model boundary specification (`.claude/skills/threat-modeling/templates/threat-model-template.md:11`) with epic In/Out scope definition in product roadmaps (`templates/agents/roadmap.shared.md:106`).
  5. External reference methodology: `cyber-kill-chain` references Lockheed Martin's campaign progression framework for advanced multi-stage attack analysis.
- All 34 occurrences across 4 source files and 4 inventory cards specified in `facts/cc-rjm-224.txt` are included as rows in the cards' `Where used` tables.
- Inventory card defects were mapped to `Implementation status`: `defects: exit-code-mismatch, missing-path` for threat-modeling skill concepts; `clean` for threat-model-template concepts; `defects: exit-code-mismatch, missing-path, other` for `accept`; and `defects: doc-drift` for `scope`.
- All 30 concept cards pass `quote-check.ts` cleanly with 0 failures (35 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~15,000 tokens across 4 source files and 4 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards and 1 unit report.
