---
unit: cc-rjm-60
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-60

## Files assigned
- [x] sources/rjm/.agents/security/ADR-045-framework-extraction-security-review.md
- [x] sources/rjm/.agents/security/architecture-security-template.md
- [x] sources/rjm/.agents/security/static-analysis-checklist.md
- [x] sources/rjm/.claude/agents/security.md
- [x] sources/rjm/.claude/skills/review/references/security.md
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/scripts/security/invoke_security_retrospective.py
- [x] sources/rjm/scripts/security/run_semgrep.py
- [x] docs/analysis/inventory/rjm/agents-security-adr-045-framework-extraction-security-review-md.md
- [x] docs/analysis/inventory/rjm/agents-security-architecture-security-template-md.md
- [x] docs/analysis/inventory/rjm/agents-security-static-analysis-checklist-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-security-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-security-invoke-security-retrospective-py.md
- [x] docs/analysis/inventory/rjm/scripts-security-run-semgrep-py.md

## Outputs produced
- docs/analysis/concepts/rjm/blast-radius-assessment.md (1701 bytes)
- docs/analysis/concepts/rjm/owasp-agentic-top-10.md (1741 bytes)
- docs/analysis/concepts/rjm/architecture-security-audit-template.md (1945 bytes)
- docs/analysis/concepts/rjm/privilege-boundaries.md (1704 bytes)
- docs/analysis/concepts/rjm/trust-zones.md (1678 bytes)
- docs/analysis/concepts/rjm/attack-surfaces.md (1651 bytes)
- docs/analysis/concepts/rjm/sensitive-data-flows.md (1652 bytes)
- docs/analysis/concepts/rjm/privilege-boundary-analysis.md (1748 bytes)
- docs/analysis/concepts/rjm/privilege-escalation-paths.md (1729 bytes)
- docs/analysis/concepts/rjm/trust-boundary-map.md (1654 bytes)
- docs/analysis/concepts/rjm/boundary-controls.md (1630 bytes)
- docs/analysis/concepts/rjm/attack-surface-analysis.md (2042 bytes)
- docs/analysis/concepts/rjm/sensitive-data-flow-analysis.md (1726 bytes)
- docs/analysis/concepts/rjm/dependency-security.md (1930 bytes)
- docs/analysis/concepts/rjm/dependency-risk-matrix.md (1658 bytes)
- docs/analysis/concepts/rjm/security-controls-assessment.md (1742 bytes)
- docs/analysis/concepts/rjm/static-analysis-checklist.md (1879 bytes)
- docs/analysis/concepts/rjm/cwe.md (2141 bytes)
- docs/analysis/concepts/rjm/common-weakness-enumeration.md (1538 bytes)
- docs/analysis/concepts/rjm/os-command-injection.md (1634 bytes)
- docs/analysis/concepts/rjm/cwe-79.md (1159 bytes)
- docs/analysis/concepts/rjm/cross-site-scripting.md (1579 bytes)
- docs/analysis/concepts/rjm/xss.md (1147 bytes)
- docs/analysis/concepts/rjm/content-security-policy.md (1555 bytes)
- docs/analysis/concepts/rjm/csp.md (1194 bytes)
- docs/analysis/concepts/rjm/cwe-89.md (1480 bytes)
- docs/analysis/concepts/rjm/sql-injection.md (1622 bytes)
- docs/analysis/concepts/rjm/cwe-200.md (1176 bytes)
- docs/analysis/concepts/rjm/exposure-of-sensitive-information.md (1699 bytes)
- docs/analysis/concepts/rjm/cwe-287.md (1486 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-60.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/blast-radius-assessment.md docs/analysis/concepts/rjm/owasp-agentic-top-10.md docs/analysis/concepts/rjm/architecture-security-audit-template.md docs/analysis/concepts/rjm/privilege-boundaries.md docs/analysis/concepts/rjm/trust-zones.md docs/analysis/concepts/rjm/attack-surfaces.md docs/analysis/concepts/rjm/sensitive-data-flows.md docs/analysis/concepts/rjm/privilege-boundary-analysis.md docs/analysis/concepts/rjm/privilege-escalation-paths.md docs/analysis/concepts/rjm/trust-boundary-map.md docs/analysis/concepts/rjm/boundary-controls.md docs/analysis/concepts/rjm/attack-surface-analysis.md docs/analysis/concepts/rjm/sensitive-data-flow-analysis.md docs/analysis/concepts/rjm/dependency-security.md docs/analysis/concepts/rjm/dependency-risk-matrix.md docs/analysis/concepts/rjm/security-controls-assessment.md docs/analysis/concepts/rjm/static-analysis-checklist.md docs/analysis/concepts/rjm/cwe.md docs/analysis/concepts/rjm/common-weakness-enumeration.md docs/analysis/concepts/rjm/os-command-injection.md docs/analysis/concepts/rjm/cwe-79.md docs/analysis/concepts/rjm/cross-site-scripting.md docs/analysis/concepts/rjm/xss.md docs/analysis/concepts/rjm/content-security-policy.md docs/analysis/concepts/rjm/csp.md docs/analysis/concepts/rjm/cwe-89.md docs/analysis/concepts/rjm/sql-injection.md docs/analysis/concepts/rjm/cwe-200.md docs/analysis/concepts/rjm/exposure-of-sensitive-information.md docs/analysis/concepts/rjm/cwe-287.md` (exit code 0, 30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-60 authors 30 concept cards covering security architecture review patterns, trust zones, privilege boundary evaluation, attack surface analysis, dependency risk matrices, static analysis checklists, and priority CWE vulnerability classes.
- All 30 concepts were newly authored; 0 existed prior to this unit.
- Non-lifecycle concepts including recurring document section headings (`blast-radius-assessment`), Common Weakness Enumeration identifiers (`cwe-79`, `cwe-89`, `cwe-200`, `cwe-287`), and acronyms (`xss`, `csp`) were categorized as `kind: name-only` per METHOD.md D-023.
- Core architecture security methods and artifacts (`architecture-security-audit-template` as `template`, `privilege-boundary-analysis`, `attack-surface-analysis`, and `sensitive-data-flow-analysis` as `technique`, `trust-boundary-map` and `dependency-risk-matrix` as `artifact`, `boundary-controls`, `dependency-security`, `security-controls-assessment`, and `static-analysis-checklist` as `checklist`, `owasp-agentic-top-10`, `cwe`, and `common-weakness-enumeration` as `reference`, and vulnerability flaw classes as `pattern`) were categorized under standard lifecycle kinds.
- Implementation status fields were populated from the citing inventory cards' `Defects` sections (`missing-path`, `exit-code-mismatch`, `internal-contradiction`, `doc-drift`, and `orphan`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~38,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~14,500 tokens across 30 authored concept cards and 1 unit report.
