---
unit: cc-rjm-83
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-83

## Files assigned
- [x] sources/rjm/.claude/agents/security/references/dependency-risk-scoring.md
- [x] sources/rjm/.claude/agents/security/references/powershell-security-checklist.md
- [x] sources/rjm/.claude/agents/security/references/threat-model-template.md
- [x] sources/rjm/.claude/agents/silent-failure-hunter.md
- [x] sources/rjm/.claude/skills/analyze/SKILL.md
- [x] sources/rjm/.claude/skills/context-optimizer/scripts/path_validation.py
- [x] sources/rjm/.claude/skills/github-url-intercept/references/patterns.md
- [x] sources/rjm/.claude/skills/planner/scripts/executor.py
- [x] sources/rjm/.claude/skills/review/references/qa.md
- [x] sources/rjm/.claude/skills/skillforge/references/phase4-synthesis-deep-dive.md
- [x] sources/rjm/.claude/skills/skillforge/scripts/validate-skill.py
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/.claude/skills/threat-modeling/templates/threat-model-template.md
- [x] sources/rjm/scripts/security/invoke_security_retrospective.py
- [x] sources/rjm/templates/agents/silent-failure-hunter.shared.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-references-dependency-risk-scoring-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-references-powershell-security-checklist-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-security-references-threat-model-template-md.md
- [x] docs/analysis/inventory/rjm/claude-agents-silent-failure-hunter-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-analyze-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-context-optimizer-scripts-path-validation-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-github-url-intercept-references-patterns-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-planner-scripts-executor-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-review-references-qa-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-phase4-synthesis-deep-dive-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-scripts-validate-skill-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-templates-threat-model-template-md.md
- [x] docs/analysis/inventory/rjm/scripts-security-invoke-security-retrospective-py.md
- [x] docs/analysis/inventory/rjm/templates-agents-silent-failure-hunter-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/adr-approval.md (1265 bytes)
- docs/analysis/concepts/rjm/input-validation.md (1312 bytes)
- docs/analysis/concepts/rjm/validatepattern.md (950 bytes)
- docs/analysis/concepts/rjm/validateset.md (972 bytes)
- docs/analysis/concepts/rjm/validatescript.md (978 bytes)
- docs/analysis/concepts/rjm/invoke-expression.md (917 bytes)
- docs/analysis/concepts/rjm/validaterange.md (936 bytes)
- docs/analysis/concepts/rjm/validatelength.md (931 bytes)
- docs/analysis/concepts/rjm/command-injection-prevention.md (1587 bytes)
- docs/analysis/concepts/rjm/path-traversal-prevention.md (1517 bytes)
- docs/analysis/concepts/rjm/cwe-23.md (1041 bytes)
- docs/analysis/concepts/rjm/cwe-36.md (1030 bytes)
- docs/analysis/concepts/rjm/getfullpath.md (974 bytes)
- docs/analysis/concepts/rjm/join-path.md (869 bytes)
- docs/analysis/concepts/rjm/secrets-and-credentials.md (1306 bytes)
- docs/analysis/concepts/rjm/convertto-securestring.md (1000 bytes)
- docs/analysis/concepts/rjm/pscredential.md (978 bytes)
- docs/analysis/concepts/rjm/error-handling.md (2177 bytes)
- docs/analysis/concepts/rjm/set-strictmode.md (974 bytes)
- docs/analysis/concepts/rjm/erroractionpreference.md (1000 bytes)
- docs/analysis/concepts/rjm/code-execution.md (1329 bytes)
- docs/analysis/concepts/rjm/cwe-94.md (1255 bytes)
- docs/analysis/concepts/rjm/cwe-95.md (926 bytes)
- docs/analysis/concepts/rjm/assets.md (1352 bytes)
- docs/analysis/concepts/rjm/threat-actors.md (1197 bytes)
- docs/analysis/concepts/rjm/attack-vectors.md (1186 bytes)
- docs/analysis/concepts/rjm/data-flow-diagram.md (1679 bytes)
- docs/analysis/concepts/rjm/recommended-controls.md (1181 bytes)
- docs/analysis/concepts/rjm/silent-failure-hunter-agent.md (1409 bytes)
- docs/analysis/concepts/rjm/core-principles.md (1350 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-83.md

## Scripts executed
- bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0
- bun scripts/synthesis/memo.ts stamp-unit cc-rjm-83 --model "Gemini 3.8 Flash" --effort high, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-83 authors 30 concept cards spanning PowerShell security rules, threat modeling components, silent failure hunting, and error handling:
  1. PowerShell security verification items and patterns: `input-validation`, `validatepattern`, `validateset`, `validatescript`, `invoke-expression`, `validaterange`, `validatelength`, `command-injection-prevention`, `path-traversal-prevention`, `cwe-23`, `cwe-36`, `getfullpath`, `join-path`, `secrets-and-credentials`, `convertto-securestring`, `pscredential`, `set-strictmode`, `erroractionpreference`, `code-execution`, `cwe-94`, `cwe-95`.
  2. Architecture decision record gating: `adr-approval` for dependencies exceeding risk score thresholds.
  3. Threat model template structural sections: `assets`, `threat-actors`, `attack-vectors`, `data-flow-diagram`, `recommended-controls`.
  4. Silent failure hunter agent definition and operating axioms: `silent-failure-hunter-agent`, `core-principles`.
  5. Cross-cutting error handling conventions: `error-handling`.
- All 45 occurrences recorded in `facts/cc-rjm-83.txt` across 15 source files and 15 inventory cards are populated in the respective concept cards' `Where used` tables.
- All 30 concept cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (135 PASS, 0 FAIL, 0 MISSING source) and are stamped with `memo.ts stamp-unit cc-rjm-83`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~45,000 tokens across 15 source files and 15 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and 1 unit report.
