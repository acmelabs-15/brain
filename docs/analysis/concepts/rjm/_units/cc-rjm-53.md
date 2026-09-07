---
unit: cc-rjm-53
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-53

## Files assigned
- [x] .agents/governance/agent-design-principles.md
- [x] .agents/governance/agent-interview-protocol.md
- [x] .agents/governance/ears-format.md
- [x] .agents/governance/interview-response-template.md
- [x] .claude/skills/codebase-documenter/SKILL.md
- [x] .claude/skills/github-url-intercept/SKILL.md
- [x] .claude/skills/reflect/SKILL.md
- [x] .claude/skills/research-and-incorporate/SKILL.md
- [x] docs/agent-governance.md

## Outputs produced
- docs/analysis/concepts/rjm/composability.md (1997 bytes)
- docs/analysis/concepts/rjm/verifiable-success.md (1960 bytes)
- docs/analysis/concepts/rjm/consistent-interface.md (1886 bytes)
- docs/analysis/concepts/rjm/input-contract.md (1720 bytes)
- docs/analysis/concepts/rjm/output-contract.md (1706 bytes)
- docs/analysis/concepts/rjm/principle-compliance-matrix.md (1733 bytes)
- docs/analysis/concepts/rjm/agent-interview-protocol.md (2036 bytes)
- docs/analysis/concepts/rjm/8-standardized-questions.md (1777 bytes)
- docs/analysis/concepts/rjm/core-specialty.md (1133 bytes)
- docs/analysis/concepts/rjm/specific-tasks.md (1141 bytes)
- docs/analysis/concepts/rjm/limitations.md (1165 bytes)
- docs/analysis/concepts/rjm/agent-pairings.md (1125 bytes)
- docs/analysis/concepts/rjm/input-expectations.md (1171 bytes)
- docs/analysis/concepts/rjm/when-to-use.md (2056 bytes)
- docs/analysis/concepts/rjm/when-not-to-use.md (1239 bytes)
- docs/analysis/concepts/rjm/interview-process.md (1841 bytes)
- docs/analysis/concepts/rjm/quality-assurance-checklist.md (1622 bytes)
- docs/analysis/concepts/rjm/interview-cadence.md (1631 bytes)
- docs/analysis/concepts/rjm/capabilities-matrix.md (1140 bytes)
- docs/analysis/concepts/rjm/basic-syntax.md (1003 bytes)
- docs/analysis/concepts/rjm/when.md (1414 bytes)
- docs/analysis/concepts/rjm/the-system-shall.md (1391 bytes)
- docs/analysis/concepts/rjm/ubiquitous-requirements.md (1552 bytes)
- docs/analysis/concepts/rjm/event-driven-requirements.md (1520 bytes)
- docs/analysis/concepts/rjm/state-driven-requirements.md (1601 bytes)
- docs/analysis/concepts/rjm/optional-feature-requirements.md (1594 bytes)
- docs/analysis/concepts/rjm/unwanted-behavior-requirements.md (1607 bytes)
- docs/analysis/concepts/rjm/complex-requirements.md (1580 bytes)
- docs/analysis/concepts/rjm/agent-interview-response-template.md (1673 bytes)
- docs/analysis/concepts/rjm/technical-limitations.md (968 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-53.md (4893 bytes)

## Scripts executed
- scripts/synthesis/quote-check.ts, bun scripts/synthesis/quote-check.ts <30 cards>, exit code 0

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards assigned to unit cc-rjm-53 were authored in this session from .agents/governance/ and related skill/doc sources:
  - Agent design principles: `composability`, `verifiable-success`, `consistent-interface` (`kind: pattern`).
  - Interface contracts and audit matrix: `input-contract` (`kind: template`), `output-contract` (`kind: template`), `principle-compliance-matrix` (`kind: artifact`).
  - Agent capability discovery & interview framework: `agent-interview-protocol` (`kind: technique`), `8-standardized-questions` (`kind: checklist`), `interview-process` (`kind: technique`), `quality-assurance-checklist` (`kind: checklist`), `interview-cadence` (`kind: reference`), and `agent-interview-response-template` (`kind: template`).
  - EARS requirements grammar: `when` (`kind: pattern`), `the-system-shall` (`kind: pattern`), `ubiquitous-requirements` (`kind: pattern`), `event-driven-requirements` (`kind: pattern`), `state-driven-requirements` (`kind: pattern`), `optional-feature-requirements` (`kind: pattern`), `unwanted-behavior-requirements` (`kind: pattern`), and `complex-requirements` (`kind: pattern`).
  - Section headings, question prompts, and unmaintained artifacts recorded with `kind: name-only` per D-023: `core-specialty`, `specific-tasks`, `limitations`, `agent-pairings`, `input-expectations`, `when-to-use`, `when-not-to-use`, `capabilities-matrix`, `basic-syntax`, and `technical-limitations`.
- All 30 cards pass byte-exact verification via `bun scripts/synthesis/quote-check.ts` (32 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~45,000 tokens across 9 source files and 9 citing inventory cards; approximate tokens of output written: ~16,500 tokens across 30 concept cards and this unit report.
