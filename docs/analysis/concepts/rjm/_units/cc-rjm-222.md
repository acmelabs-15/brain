---
unit: cc-rjm-222
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-222

## Files assigned
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/risk-rating-guide.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/security-defense-in-depth.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/security-least-privilege.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/security-owasp-top-10.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/security-zero-trust.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-risk-rating-guide-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-defense-in-depth-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-least-privilege-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-owasp-top-10-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-security-zero-trust-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md

## Outputs produced
- docs/analysis/concepts/rjm/dread.md (1280 bytes)
- docs/analysis/concepts/rjm/owasp-risk-rating-methodology.md (1249 bytes)
- docs/analysis/concepts/rjm/cvss-calculator.md (1230 bytes)
- docs/analysis/concepts/rjm/fair-risk-quantification.md (1258 bytes)
- docs/analysis/concepts/rjm/redundancy-in-defense-diversity-in-mechanism.md (1309 bytes)
- docs/analysis/concepts/rjm/protection-layer-model.md (1378 bytes)
- docs/analysis/concepts/rjm/independence.md (1310 bytes)
- docs/analysis/concepts/rjm/diversity.md (1455 bytes)
- docs/analysis/concepts/rjm/cost-latency-tradeoff.md (1406 bytes)
- docs/analysis/concepts/rjm/mitigation-checklist.md (1298 bytes)
- docs/analysis/concepts/rjm/zero-trust.md (2155 bytes)
- docs/analysis/concepts/rjm/principle-of-least-privilege.md (1495 bytes)
- docs/analysis/concepts/rjm/service-accounts.md (1053 bytes)
- docs/analysis/concepts/rjm/database-access.md (1036 bytes)
- docs/analysis/concepts/rjm/api-scopes.md (1018 bytes)
- docs/analysis/concepts/rjm/azure-managed-identity.md (1056 bytes)
- docs/analysis/concepts/rjm/common-violations.md (1002 bytes)
- docs/analysis/concepts/rjm/broken-access-control.md (1546 bytes)
- docs/analysis/concepts/rjm/cryptographic-failures.md (1391 bytes)
- docs/analysis/concepts/rjm/injection.md (1331 bytes)
- docs/analysis/concepts/rjm/insecure-design.md (1334 bytes)
- docs/analysis/concepts/rjm/security-misconfiguration.md (1366 bytes)
- docs/analysis/concepts/rjm/vulnerable-components.md (1331 bytes)
- docs/analysis/concepts/rjm/authentication-failures.md (1356 bytes)
- docs/analysis/concepts/rjm/integrity-failures.md (1341 bytes)
- docs/analysis/concepts/rjm/logging-failures.md (1319 bytes)
- docs/analysis/concepts/rjm/stride-to-owasp-mapping.md (1444 bytes)
- docs/analysis/concepts/rjm/verify-explicitly.md (1298 bytes)
- docs/analysis/concepts/rjm/least-privilege-access.md (1322 bytes)
- docs/analysis/concepts/rjm/context-based-decision-making.md (1368 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-222.md (7411 bytes)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/dread.md docs/analysis/concepts/rjm/owasp-risk-rating-methodology.md docs/analysis/concepts/rjm/cvss-calculator.md docs/analysis/concepts/rjm/fair-risk-quantification.md docs/analysis/concepts/rjm/redundancy-in-defense-diversity-in-mechanism.md docs/analysis/concepts/rjm/protection-layer-model.md docs/analysis/concepts/rjm/independence.md docs/analysis/concepts/rjm/diversity.md docs/analysis/concepts/rjm/cost-latency-tradeoff.md docs/analysis/concepts/rjm/mitigation-checklist.md docs/analysis/concepts/rjm/zero-trust.md docs/analysis/concepts/rjm/principle-of-least-privilege.md docs/analysis/concepts/rjm/service-accounts.md docs/analysis/concepts/rjm/database-access.md docs/analysis/concepts/rjm/api-scopes.md docs/analysis/concepts/rjm/azure-managed-identity.md docs/analysis/concepts/rjm/common-violations.md docs/analysis/concepts/rjm/broken-access-control.md docs/analysis/concepts/rjm/cryptographic-failures.md docs/analysis/concepts/rjm/injection.md docs/analysis/concepts/rjm/insecure-design.md docs/analysis/concepts/rjm/security-misconfiguration.md docs/analysis/concepts/rjm/vulnerable-components.md docs/analysis/concepts/rjm/authentication-failures.md docs/analysis/concepts/rjm/integrity-failures.md docs/analysis/concepts/rjm/logging-failures.md docs/analysis/concepts/rjm/stride-to-owasp-mapping.md docs/analysis/concepts/rjm/verify-explicitly.md docs/analysis/concepts/rjm/least-privilege-access.md docs/analysis/concepts/rjm/context-based-decision-making.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-222 completes 30 concept cards across rjm threat modeling references:
  1. Quantitative risk frameworks and external rating methodologies (`dread`, `owasp-risk-rating-methodology`, `cvss-calculator`, `fair-risk-quantification`) from `risk-rating-guide.md`.
  2. Defense in depth architectural patterns, layer models, principles, and validation gates (`redundancy-in-defense-diversity-in-mechanism`, `protection-layer-model`, `independence`, `diversity`, `cost-latency-tradeoff`, `mitigation-checklist`) from `security-defense-in-depth.md`.
  3. Core security architectures (`zero-trust`, `principle-of-least-privilege`) with multi-file citations spanning `SKILL.md` and reference guides.
  4. Implementation example headings in `security-least-privilege.md` classified as `kind: name-only` per D-023 (`service-accounts`, `database-access`, `api-scopes`, `azure-managed-identity`, `common-violations`).
  5. OWASP Top 10 vulnerability categories and STRIDE cross-referencing (`broken-access-control`, `cryptographic-failures`, `injection`, `insecure-design`, `security-misconfiguration`, `vulnerable-components`, `authentication-failures`, `integrity-failures`, `logging-failures`, `stride-to-owasp-mapping`) from `security-owasp-top-10.md` and `security-least-privilege.md`.
  6. Zero Trust principles and contextual access models (`verify-explicitly`, `least-privilege-access`, `context-based-decision-making`) from `security-zero-trust.md`.
- All 35 occurrences cited in `facts/cc-rjm-222.txt` are faithfully represented in the respective Where used tables.
- Defect statuses from citing inventory entries have been correctly mapped to `Implementation status` (`clean`, `defects: missing-path`, `defects: exit-code-mismatch, missing-path`).
- Every concept card passes byte-exact verification with `bun scripts/synthesis/quote-check.ts` (exit code 0, 30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~35,800 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~12,800 tokens across 30 authored concept cards and 1 unit report.
