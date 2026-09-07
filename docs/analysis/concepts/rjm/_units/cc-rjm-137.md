---
unit: cc-rjm-137
phase: 2
package: rjm
session: 017
subagent_returned: complete
---

# Unit cc-rjm-137

## Files assigned
- [x] sources/rjm/.claude/skills/cynefin-classifier/SKILL.md
- [x] sources/rjm/.claude/skills/cynefin-classifier/references/domain-transitions.md
- [x] sources/rjm/.claude/skills/cynefin-classifier/references/software-applications.md
- [x] sources/rjm/.claude/skills/cynefin-classifier/scripts/classify.py
- [x] sources/rjm/.claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md
- [x] sources/rjm/docs/skill-reference.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-references-domain-transitions-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-references-software-applications-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-cynefin-classifier-scripts-classify-py.md
- [x] docs/analysis/inventory/rjm/claude-skills-decision-critic-references-critical-thinking-brandolinis-law-md.md
- [x] docs/analysis/inventory/rjm/docs-skill-reference-md.md

## Outputs produced
- docs/analysis/concepts/rjm/detecting-transitions.md (1377 bytes)
- docs/analysis/concepts/rjm/safe-to-fail-probes.md (1946 bytes)
- docs/analysis/concepts/rjm/domain-patterns-by-activity.md (1423 bytes)
- docs/analysis/concepts/rjm/requirements-and-planning.md (1382 bytes)
- docs/analysis/concepts/rjm/architecture-and-design.md (1638 bytes)
- docs/analysis/concepts/rjm/development-and-debugging.md (1353 bytes)
- docs/analysis/concepts/rjm/operations.md (1295 bytes)
- docs/analysis/concepts/rjm/common-misclassifications.md (1386 bytes)
- docs/analysis/concepts/rjm/decision-trees.md (1296 bytes)
- docs/analysis/concepts/rjm/team-practices-by-domain.md (1374 bytes)
- docs/analysis/concepts/rjm/metrics-by-domain.md (1325 bytes)
- docs/analysis/concepts/rjm/integration-with-agile.md (1388 bytes)
- docs/analysis/concepts/rjm/story-classification.md (1360 bytes)
- docs/analysis/concepts/rjm/safe-to-fail-experiment-culture.md (1903 bytes)
- docs/analysis/concepts/rjm/productive-failure.md (1815 bytes)
- docs/analysis/concepts/rjm/uncertainty-premium.md (1823 bytes)
- docs/analysis/concepts/rjm/spikes.md (1802 bytes)
- docs/analysis/concepts/rjm/sense-categorize-respond.md (2075 bytes)
- docs/analysis/concepts/rjm/sense-analyze-respond.md (2050 bytes)
- docs/analysis/concepts/rjm/probe-sense-respond.md (2092 bytes)
- docs/analysis/concepts/rjm/act-sense-respond.md (2160 bytes)
- docs/analysis/concepts/rjm/gather-information.md (2150 bytes)
- docs/analysis/concepts/rjm/temporal-note.md (1375 bytes)
- docs/analysis/concepts/rjm/boundary-note.md (1363 bytes)
- docs/analysis/concepts/rjm/compound-note.md (1349 bytes)
- docs/analysis/concepts/rjm/good-practice.md (1670 bytes)
- docs/analysis/concepts/rjm/temporal-state.md (1845 bytes)
- docs/analysis/concepts/rjm/compound-problems.md (1877 bytes)
- docs/analysis/concepts/rjm/escalation-criteria.md (1761 bytes)
- docs/analysis/concepts/rjm/bullshit-asymmetry-principle.md (2099 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-137.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts docs/analysis/concepts/rjm/detecting-transitions.md docs/analysis/concepts/rjm/safe-to-fail-probes.md docs/analysis/concepts/rjm/domain-patterns-by-activity.md docs/analysis/concepts/rjm/requirements-and-planning.md docs/analysis/concepts/rjm/architecture-and-design.md docs/analysis/concepts/rjm/development-and-debugging.md docs/analysis/concepts/rjm/operations.md docs/analysis/concepts/rjm/common-misclassifications.md docs/analysis/concepts/rjm/decision-trees.md docs/analysis/concepts/rjm/team-practices-by-domain.md docs/analysis/concepts/rjm/metrics-by-domain.md docs/analysis/concepts/rjm/integration-with-agile.md docs/analysis/concepts/rjm/story-classification.md docs/analysis/concepts/rjm/safe-to-fail-experiment-culture.md docs/analysis/concepts/rjm/productive-failure.md docs/analysis/concepts/rjm/uncertainty-premium.md docs/analysis/concepts/rjm/spikes.md docs/analysis/concepts/rjm/sense-categorize-respond.md docs/analysis/concepts/rjm/sense-analyze-respond.md docs/analysis/concepts/rjm/probe-sense-respond.md docs/analysis/concepts/rjm/act-sense-respond.md docs/analysis/concepts/rjm/gather-information.md docs/analysis/concepts/rjm/temporal-note.md docs/analysis/concepts/rjm/boundary-note.md docs/analysis/concepts/rjm/compound-note.md docs/analysis/concepts/rjm/good-practice.md docs/analysis/concepts/rjm/temporal-state.md docs/analysis/concepts/rjm/compound-problems.md docs/analysis/concepts/rjm/escalation-criteria.md docs/analysis/concepts/rjm/bullshit-asymmetry-principle.md` (exit code 0, 30 PASS, 0 FAIL, 0 MISSING source across 30 cards)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-137 --model "Gemini 3.8 Flash" --effort high` (exit code 0, 30 card(s) stamped, 36 input(s))

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-rjm-137 delivers 30 concept cards spanning the Cynefin Framework problem sense-making taxonomy, software engineering patterns and Agile rituals, cognitive response strategies, classifier output structures, and review skepticism:
  1. Cynefin Cognitive Response Strategies: The five core response patterns mapped directly to domains (`sense-categorize-respond` for Clear, `sense-analyze-respond` for Complicated, `probe-sense-respond` for Complex, `act-sense-respond` for Chaotic, and `gather-information` for Confusion), defining the reasoning lifecycle across engineering activities.
  2. Software Engineering and Agile Integration: Operational patterns including `safe-to-fail-probes`, `safe-to-fail-experiment-culture`, `productive-failure`, `uncertainty-premium`, and `spikes`, showing how Cynefin informs sprint planning, estimation modifiers, and experimental risk containment.
  3. Dynamic Problem Evolution and Governance: Dynamic concepts (`temporal-state`, `compound-problems`, `good-practice`, and `escalation-criteria`) governing how problems transition across domains over time, how compound multi-domain problems are decomposed and sequenced, and when autonomous agents must halt and escalate low-confidence classifications.
  4. Classifier Architecture and Taxonomy Headings: Dataclass output properties (`temporal-note`, `boundary-note`, `compound-note`) and section headings/labels (`detecting-transitions`, `domain-patterns-by-activity`, `requirements-and-planning`, `architecture-and-design`, `development-and-debugging`, `operations`, `common-misclassifications`, `decision-trees`, `team-practices-by-domain`, `metrics-by-domain`, `integration-with-agile`, `story-classification`) categorized as `kind: name-only` per D-023.
  5. Critical Thinking: The `bullshit-asymmetry-principle` (Brandolini's Law) from `decision-critic`, establishing review burden allocation to prevent unverified assertions from overwhelming review bandwidth.
- All 36 occurrences recorded in `facts/cc-rjm-137.txt` are mapped in the respective Where used tables.
- Defect annotations from citing inventory cards were propagated to `Implementation status` (`clean`, `defects: missing-path`, `defects: unimplemented-feature`, `defects: doc-drift`, and `defects: unimplemented-feature, doc-drift`).
- All 30 cards pass byte-exact quotation verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL, 0 MISSING source).
- All 30 cards have been stamped with `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-137 --model "Gemini 3.8 Flash" --effort high`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~21,000 tokens across 6 source files and 6 inventory cards.
Approximate tokens of output written: ~15,000 tokens across 30 authored concept cards and 1 unit report.
