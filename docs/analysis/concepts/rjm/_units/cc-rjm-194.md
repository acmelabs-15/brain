---
unit: cc-rjm-194
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-194

## Files assigned
- [x] sources/rjm/.claude/skills/security-scan/SKILL.md
- [x] sources/rjm/.claude/skills/security-scan/references/agent-memory-inference-leakage.md
- [x] sources/rjm/.claude/skills/security-scan/references/autonomous-execution-guardrails.md
- [x] sources/rjm/.claude/skills/security-scan/references/vulnerability-patterns.md
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_constants.py
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_format.py
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_patterns.py
- [x] sources/rjm/.claude/skills/security-scan/scripts/scan_vulnerabilities.py
- [x] sources/rjm/.claude/skills/skillforge/.gitignore
- [x] sources/rjm/.claude/skills/slo-designer/scripts/calculate_error_budget.py
- [x] sources/rjm/.claude/skills/style-enforcement/SKILL.md
- [x] sources/rjm/.claude/skills/taste-lints/SKILL.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-references-agent-memory-inference-leakage-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-references-autonomous-execution-guardrails-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-references-vulnerability-patterns-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-constants-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-format-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-patterns-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-scripts-scan-vulnerabilities-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-slo-designer-scripts-calculate-error-budget-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-security-scan-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-style-enforcement-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-taste-lints-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge--gitignore.md

## Outputs produced
- docs/analysis/concepts/rjm/standing-order.md (1395 bytes)
- docs/analysis/concepts/rjm/bounded-autonomy.md (1312 bytes)
- docs/analysis/concepts/rjm/cwe-285.md (966 bytes)
- docs/analysis/concepts/rjm/pre-merge-checklist.md (1398 bytes)
- docs/analysis/concepts/rjm/won-t-fix-protocol.md (1313 bytes)
- docs/analysis/concepts/rjm/addressing.md (1234 bytes)
- docs/analysis/concepts/rjm/vulnerability-pattern-reference.md (1424 bytes)
- docs/analysis/concepts/rjm/exit-vulnerabilities.md (906 bytes)
- docs/analysis/concepts/rjm/vulnerabilitylike.md (941 bytes)
- docs/analysis/concepts/rjm/scanresultlike.md (918 bytes)
- docs/analysis/concepts/rjm/format-console-output.md (910 bytes)
- docs/analysis/concepts/rjm/cwe78-patterns.md (872 bytes)
- docs/analysis/concepts/rjm/vulnerability.md (882 bytes)
- docs/analysis/concepts/rjm/gitenumerationerror.md (913 bytes)
- docs/analysis/concepts/rjm/get-language.md (886 bytes)
- docs/analysis/concepts/rjm/get-directory-files.md (947 bytes)
- docs/analysis/concepts/rjm/is-line-suppressed.md (938 bytes)
- docs/analysis/concepts/rjm/format-json-output.md (1175 bytes)
- docs/analysis/concepts/rjm/taint-analysis.md (1388 bytes)
- docs/analysis/concepts/rjm/python-security-extended-qls.md (1208 bytes)
- docs/analysis/concepts/rjm/actions-security-extended-qls.md (1205 bytes)
- docs/analysis/concepts/rjm/codeql-config-yml.md (1134 bytes)
- docs/analysis/concepts/rjm/pre-commit-security-gates.md (1170 bytes)
- docs/analysis/concepts/rjm/sast.md (1257 bytes)
- docs/analysis/concepts/rjm/cwe-78-command-injection.md (936 bytes)
- docs/analysis/concepts/rjm/detection-heuristics.md (1164 bytes)
- docs/analysis/concepts/rjm/security-scan-workflow.md (1224 bytes)
- docs/analysis/concepts/rjm/suppression.md (1508 bytes)
- docs/analysis/concepts/rjm/virtual-environments.md (874 bytes)
- docs/analysis/concepts/rjm/ide.md (778 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-194.md (this report)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/standing-order.md docs/analysis/concepts/rjm/bounded-autonomy.md docs/analysis/concepts/rjm/cwe-285.md docs/analysis/concepts/rjm/pre-merge-checklist.md docs/analysis/concepts/rjm/won-t-fix-protocol.md docs/analysis/concepts/rjm/addressing.md docs/analysis/concepts/rjm/vulnerability-pattern-reference.md docs/analysis/concepts/rjm/exit-vulnerabilities.md docs/analysis/concepts/rjm/vulnerabilitylike.md docs/analysis/concepts/rjm/scanresultlike.md docs/analysis/concepts/rjm/format-console-output.md docs/analysis/concepts/rjm/cwe78-patterns.md docs/analysis/concepts/rjm/vulnerability.md docs/analysis/concepts/rjm/gitenumerationerror.md docs/analysis/concepts/rjm/get-language.md docs/analysis/concepts/rjm/get-directory-files.md docs/analysis/concepts/rjm/is-line-suppressed.md docs/analysis/concepts/rjm/format-json-output.md docs/analysis/concepts/rjm/taint-analysis.md docs/analysis/concepts/rjm/python-security-extended-qls.md docs/analysis/concepts/rjm/actions-security-extended-qls.md docs/analysis/concepts/rjm/codeql-config-yml.md docs/analysis/concepts/rjm/pre-commit-security-gates.md docs/analysis/concepts/rjm/sast.md docs/analysis/concepts/rjm/cwe-78-command-injection.md docs/analysis/concepts/rjm/detection-heuristics.md docs/analysis/concepts/rjm/security-scan-workflow.md docs/analysis/concepts/rjm/suppression.md docs/analysis/concepts/rjm/virtual-environments.md docs/analysis/concepts/rjm/ide.md` (exit code 0, 31 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-194 covers 30 concept cards across security scanning, execution guardrails, memory inference safety, and script implementations:
  1. AI safety and memory inference governance (`standing-order`, `bounded-autonomy`, `cwe-285`) from `agent-memory-inference-leakage.md`.
  2. Autonomous execution guardrails and review gate protocols (`pre-merge-checklist`, `won-t-fix-protocol`, `addressing`) from `autonomous-execution-guardrails.md`.
  3. Vulnerability pattern references, detection heuristics, workflows, and gating (`vulnerability-pattern-reference`, `taint-analysis`, `pre-commit-security-gates`, `sast`, `cwe-78-command-injection`, `detection-heuristics`, `security-scan-workflow`, `suppression`).
  4. Script identifiers and helper routines (`exit-vulnerabilities`, `vulnerabilitylike`, `scanresultlike`, `format-console-output`, `cwe78-patterns`, `vulnerability`, `gitenumerationerror`, `get-language`, `get-directory-files`, `is-line-suppressed`, `format-json-output`).
  5. Configuration files, query suites, and gitignore section headings (`python-security-extended-qls`, `actions-security-extended-qls`, `codeql-config-yml`, `virtual-environments`, `ide`).
- Multi-occurrence concepts: `format-json-output` (2 occurrences: `scan_vulnerabilities.py` and `calculate_error_budget.py`) and `suppression` (3 occurrences: `security-scan/SKILL.md`, `style-enforcement/SKILL.md`, and `taste-lints/SKILL.md`) have all their occurrence rows documented in their Where used tables.
- All non-lifecycle concepts representing identifiers, functions, classes, configuration files, and section headings were authored with `kind: name-only` and `(used, not defined)` definitions per D-023.
- Defect annotations from citing inventory cards were systematically propagated to `Implementation status` (including `clean` when inventory card reported no defects).
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (31 PASS, 0 FAIL, 0 MISSING source).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~23,000 tokens across 12 source files and 12 inventory cards.
Approximate tokens of output written: ~11,000 tokens across 30 concept cards and 1 unit report.
