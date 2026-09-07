---
unit: cc-rjm-40
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-40

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-084-vendored-hook-roi-bar.md
- [x] sources/rjm/.agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md
- [x] sources/rjm/.agents/architecture/ADR-087-held-out-validated-improvement.md
- [x] sources/rjm/.agents/architecture/ADR-097-zero-tool-use-hooks.md
- [x] sources/rjm/.agents/governance/agent-consolidation-process.md
- [x] sources/rjm/.claude/skills/threat-modeling/SKILL.md
- [x] sources/rjm/.claude/skills/threat-modeling/references/risk-rating-guide.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-084-vendored-hook-roi-bar-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-085-cross-harness-permission-surface-asymmetry-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-087-held-out-validated-improvement-md.md
- [x] docs/analysis/inventory/rjm/agents-architecture-adr-097-zero-tool-use-hooks-md.md
- [x] docs/analysis/inventory/rjm/agents-governance-agent-consolidation-process-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-references-risk-rating-guide-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-threat-modeling-skill-md.md

## Outputs produced
- docs/analysis/concepts/rjm/zero-spawn-host-native-surfaces.md (1999 bytes)
- docs/analysis/concepts/rjm/self-neutering-hooks.md (1787 bytes)
- docs/analysis/concepts/rjm/customer-value.md (1313 bytes)
- docs/analysis/concepts/rjm/per-call-events.md (1755 bytes)
- docs/analysis/concepts/rjm/event-matcher-union.md (1743 bytes)
- docs/analysis/concepts/rjm/finding-3.md (1396 bytes)
- docs/analysis/concepts/rjm/retirement.md (2162 bytes)
- docs/analysis/concepts/rjm/timed-child-process-deny.md (2009 bytes)
- docs/analysis/concepts/rjm/residual-risk.md (2449 bytes)
- docs/analysis/concepts/rjm/copilotexclude.md (1396 bytes)
- docs/analysis/concepts/rjm/finding-1.md (1397 bytes)
- docs/analysis/concepts/rjm/finding-2.md (1396 bytes)
- docs/analysis/concepts/rjm/dangerous-metacharacters.md (1428 bytes)
- docs/analysis/concepts/rjm/command-chaining-bypass.md (1898 bytes)
- docs/analysis/concepts/rjm/portability.md (1876 bytes)
- docs/analysis/concepts/rjm/fidelity.md (1938 bytes)
- docs/analysis/concepts/rjm/policy-safety.md (1911 bytes)
- docs/analysis/concepts/rjm/repository-only-agent-time-carrier.md (2087 bytes)
- docs/analysis/concepts/rjm/generic-field-governance.md (2112 bytes)
- docs/analysis/concepts/rjm/reintroduction-gates.md (2045 bytes)
- docs/analysis/concepts/rjm/d-a.md (1327 bytes)
- docs/analysis/concepts/rjm/d-b.md (1320 bytes)
- docs/analysis/concepts/rjm/d-c.md (1401 bytes)
- docs/analysis/concepts/rjm/d-d.md (1374 bytes)
- docs/analysis/concepts/rjm/d-e.md (1363 bytes)
- docs/analysis/concepts/rjm/d-f.md (1352 bytes)
- docs/analysis/concepts/rjm/held-out-validation-for-iterated-improvement-claims.md (2079 bytes)
- docs/analysis/concepts/rjm/pre-registered-withholding.md (1916 bytes)
- docs/analysis/concepts/rjm/skillopt-gated.md (1404 bytes)
- docs/analysis/concepts/rjm/rubric-score.md (1877 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-40.md (this report)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts` (evaluated all 30 cards of cc-rjm-40, exit code 0, 30 PASS, 0 FAIL)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-40 --model "Gemini 3.8 Flash" --effort high` (stamped all 30 cards with memo inputs, method_sha, and template_sha, exit code 0)
- `bun scripts/synthesis/coverage.ts` (verified coverage metrics: 0 empty required fields, exit code 1 due to other units in progress across repository)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `event_matcher_union` links ADR-084 and ADR-097, articulating the dispatcher generator failure mode where an unreducible regex matcher forces an entire hook event to fire without filtering.
- `retirement` spans both hook architectural governance (ADR-085) and the agent consolidation process (agent-consolidation-process.md), defining terminal disposition for retired components.
- `residual-risk` spans security architecture review in ADR-085 and the threat-modeling skill/guide.
- Architectural decisions D-A through D-F in ADR-085 document discrete decisions on hook disposition, deletion, and placement.
- Evaluation concepts (`held-out-validation-for-iterated-improvement-claims`, `pre-registered-withholding`, `skillopt-gated`, `rubric-score`) link ADR-087 to earlier evaluator-optimizer loops (ADR-010, ADR-057, ADR-058).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~48,000 tokens across 7 source files and 7 inventory cards.
Approximate tokens of output written: ~14,000 tokens across 30 concept cards and this report.
