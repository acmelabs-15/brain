---
unit: cc-rjm-200
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-200

## Files assigned
- [x] sources/rjm/.claude/skills/skillforge/references/specification-template.md
- [x] sources/rjm/.claude/skills/skillforge/references/synthesis-protocol.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-specification-template-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-skillforge-references-synthesis-protocol-md.md

## Outputs produced
- docs/analysis/concepts/rjm/lenses-applied.md (874 bytes)
- docs/analysis/concepts/rjm/questioning-rounds.md (914 bytes)
- docs/analysis/concepts/rjm/problem-statement.md (872 bytes)
- docs/analysis/concepts/rjm/existing-landscape.md (869 bytes)
- docs/analysis/concepts/rjm/user-profile.md (853 bytes)
- docs/analysis/concepts/rjm/requirements.md (869 bytes)
- docs/analysis/concepts/rjm/explicit.md (820 bytes)
- docs/analysis/concepts/rjm/implicit.md (856 bytes)
- docs/analysis/concepts/rjm/discovered.md (875 bytes)
- docs/analysis/concepts/rjm/evolution-analysis.md (935 bytes)
- docs/analysis/concepts/rjm/generation-instructions.md (938 bytes)
- docs/analysis/concepts/rjm/quality.md (1168 bytes)
- docs/analysis/concepts/rjm/evolution.md (1165 bytes)
- docs/analysis/concepts/rjm/multi-agent-synthesis-protocol.md (1395 bytes)
- docs/analysis/concepts/rjm/wisdom-of-crowds.md (1184 bytes)
- docs/analysis/concepts/rjm/design-agent.md (1238 bytes)
- docs/analysis/concepts/rjm/audience-agent.md (1274 bytes)
- docs/analysis/concepts/rjm/evolution-agent.md (1266 bytes)
- docs/analysis/concepts/rjm/consensus-check.md (1135 bytes)
- docs/analysis/concepts/rjm/design-architecture-agent.md (1285 bytes)
- docs/analysis/concepts/rjm/audience-usability-agent.md (1282 bytes)
- docs/analysis/concepts/rjm/parallel-agent-launch.md (1202 bytes)
- docs/analysis/concepts/rjm/individual-evaluation.md (1235 bytes)
- docs/analysis/concepts/rjm/consensus-aggregation.md (1214 bytes)
- docs/analysis/concepts/rjm/iteration-protocol.md (1231 bytes)
- docs/analysis/concepts/rjm/human-review-required.md (1254 bytes)
- docs/analysis/concepts/rjm/issue-severity-definitions.md (1297 bytes)
- docs/analysis/concepts/rjm/design-agent-system-prompt.md (1204 bytes)
- docs/analysis/concepts/rjm/audience-agent-system-prompt.md (1223 bytes)
- docs/analysis/concepts/rjm/evolution-agent-system-prompt.md (1229 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-200.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/lenses-applied.md docs/analysis/concepts/rjm/questioning-rounds.md docs/analysis/concepts/rjm/problem-statement.md docs/analysis/concepts/rjm/existing-landscape.md docs/analysis/concepts/rjm/user-profile.md docs/analysis/concepts/rjm/requirements.md docs/analysis/concepts/rjm/explicit.md docs/analysis/concepts/rjm/implicit.md docs/analysis/concepts/rjm/discovered.md docs/analysis/concepts/rjm/evolution-analysis.md docs/analysis/concepts/rjm/generation-instructions.md docs/analysis/concepts/rjm/quality.md docs/analysis/concepts/rjm/evolution.md docs/analysis/concepts/rjm/multi-agent-synthesis-protocol.md docs/analysis/concepts/rjm/wisdom-of-crowds.md docs/analysis/concepts/rjm/design-agent.md docs/analysis/concepts/rjm/audience-agent.md docs/analysis/concepts/rjm/evolution-agent.md docs/analysis/concepts/rjm/consensus-check.md docs/analysis/concepts/rjm/design-architecture-agent.md docs/analysis/concepts/rjm/audience-usability-agent.md docs/analysis/concepts/rjm/parallel-agent-launch.md docs/analysis/concepts/rjm/individual-evaluation.md docs/analysis/concepts/rjm/consensus-aggregation.md docs/analysis/concepts/rjm/iteration-protocol.md docs/analysis/concepts/rjm/human-review-required.md docs/analysis/concepts/rjm/issue-severity-definitions.md docs/analysis/concepts/rjm/design-agent-system-prompt.md docs/analysis/concepts/rjm/audience-agent-system-prompt.md docs/analysis/concepts/rjm/evolution-agent-system-prompt.md` (exit code 0, 35 PASS, 0 FAIL, 0 MISSING source across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-200 produces 30 concept cards spanning two reference specifications in SkillForge (`specification-template.md` and `synthesis-protocol.md`):
  1. Specification template structure and XML elements (`lenses-applied`, `questioning-rounds`, `problem-statement`, `existing-landscape`, `user-profile`, `requirements`, `explicit`, `implicit`, `discovered`, `evolution-analysis`, `generation-instructions`), plus validation checklist dimensions (`quality`, `evolution`). All XML schema elements/identifiers that are not lifecycle concepts were classified as `kind: name-only` per D-023.
  2. Multi-Agent Synthesis Protocol and panel architecture (`multi-agent-synthesis-protocol`, `wisdom-of-crowds`, `design-agent`, `audience-agent`, `evolution-agent`, `consensus-check`, `design-architecture-agent`, `audience-usability-agent`, `parallel-agent-launch`, `individual-evaluation`, `consensus-aggregation`, `iteration-protocol`, `human-review-required`, `issue-severity-definitions`, `design-agent-system-prompt`, `audience-agent-system-prompt`, `evolution-agent-system-prompt`).
- All 30 occurrences from `facts/cc-rjm-200.txt` are faithfully mapped to the respective Where used tables.
- Defect status from citing inventory cards was correctly propagated: `clean` for specification-template.md concepts, and `defects: doc-drift` for synthesis-protocol.md concepts.
- Quote check verification passed with exit code 0 (35 PASS, 0 FAIL, 0 MISSING across 30 cards).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,000 tokens across 2 source files and 2 inventory cards.
Approximate tokens of output written: ~8,500 tokens across 30 concept cards and 1 unit report.
