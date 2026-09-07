---
unit: cc-rjm-89
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-89

## Files assigned
- [x] sources/rjm/.claude/skills/adr-generator/SKILL.md
- [x] sources/rjm/.claude/skills/adr-generator/references/ad-quality-frameworks.md
- [x] sources/rjm/.claude/skills/adr-generator/references/adr-best-practices.md
- [x] sources/rjm/.claude/skills/adr-generator/references/adr-template.md
- [x] sources/rjm/.claude/skills/adr-review/SKILL.md
- [x] sources/rjm/.claude/skills/adr-review/references/debate-protocol.md
- [x] sources/rjm/.claude/skills/adr-review/references/zimmermann-review-guidance.md
- [x] sources/rjm/AGENTS.md
- [x] sources/rjm/scripts/eval/examples/example-scenarios.json
- [x] sources/rjm/templates/agents/architect.shared.md
- [x] docs/analysis/inventory/rjm/agents-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-references-ad-quality-frameworks-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-references-adr-best-practices-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-references-adr-template-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-generator-skill-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-references-debate-protocol-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-references-zimmermann-review-guidance-md.md
- [x] docs/analysis/inventory/rjm/claude-skills-adr-review-skill-md.md
- [x] docs/analysis/inventory/rjm/scripts-eval-examples-example-scenarios-json.md
- [x] docs/analysis/inventory/rjm/templates-agents-architect-shared-md.md

## Outputs produced
- docs/analysis/concepts/rjm/past-trouble.md
- docs/analysis/concepts/rjm/start.md
- docs/analysis/concepts/rjm/most-responsible-moment.md
- docs/analysis/concepts/rjm/start-checklist.md
- docs/analysis/concepts/rjm/ecadr.md
- docs/analysis/concepts/rjm/ecadr-checklist.md
- docs/analysis/concepts/rjm/adr-author-pledge.md
- docs/analysis/concepts/rjm/adr-review-checklist.md
- docs/analysis/concepts/rjm/adr-creation-anti-patterns.md
- docs/analysis/concepts/rjm/fairy-tale.md
- docs/analysis/concepts/rjm/sales-pitch.md
- docs/analysis/concepts/rjm/free-lunch-coupon.md
- docs/analysis/concepts/rjm/dummy-alternative.md
- docs/analysis/concepts/rjm/sprint-rush.md
- docs/analysis/concepts/rjm/tunnel-vision.md
- docs/analysis/concepts/rjm/maze.md
- docs/analysis/concepts/rjm/blueprint-policy-in-disguise.md
- docs/analysis/concepts/rjm/mega-adr.md
- docs/analysis/concepts/rjm/false-urgency.md
- docs/analysis/concepts/rjm/problem-solution-mismatch.md
- docs/analysis/concepts/rjm/pseudo-accuracy.md
- docs/analysis/concepts/rjm/review-anti-patterns.md
- docs/analysis/concepts/rjm/pass-through.md
- docs/analysis/concepts/rjm/copy-edit.md
- docs/analysis/concepts/rjm/siding-dead-end.md
- docs/analysis/concepts/rjm/self-promotion.md
- docs/analysis/concepts/rjm/power-game.md
- docs/analysis/concepts/rjm/offended-reaction.md
- docs/analysis/concepts/rjm/groundhog-day.md
- docs/analysis/concepts/rjm/rationale.md
- docs/analysis/concepts/rjm/_units/cc-rjm-89.md (this file)

## Scripts executed
- `bun scripts/synthesis/quote-check.ts` (evaluated all 30 cards of cc-rjm-89, exit code 0, 30 PASS, 0 FAIL)
- `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-89 --model "Gemini 3.8 Flash" --effort high` (stamped all 30 cards with memo inputs, method_sha, and template_sha, exit code 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concept cards in unit cc-rjm-89 authored under docs/analysis/concepts/rjm/<slug>.md.
- Covers ADR quality frameworks derived primarily from Olaf Zimmermann's guidance:
  - Architectural significance criteria: `past-trouble`
  - Definition of ready and entry gating: `start`, `start-checklist`, `most-responsible-moment`
  - Definition of done and exit gating: `ecadr`, `ecadr-checklist`
  - Author and reviewer pledges and checklists: `adr-author-pledge`, `adr-review-checklist`
  - Authoring anti-patterns: `adr-creation-anti-patterns`, `fairy-tale`, `sales-pitch`, `free-lunch-coupon`, `dummy-alternative`, `sprint-rush`, `tunnel-vision`, `maze`, `blueprint-policy-in-disguise`, `mega-adr`, `false-urgency`, `problem-solution-mismatch`, `pseudo-accuracy`
  - Review anti-patterns: `review-anti-patterns`, `pass-through`, `copy-edit`, `siding-dead-end`, `self-promotion`, `power-game`, `offended-reaction`, `groundhog-day`
  - Core ADR decision component: `rationale`
- All 59 occurrences specified in `facts/cc-rjm-89.txt` are included as rows in the respective `Where used` tables.
- All 30 cards pass byte-exact verification with `bun scripts/synthesis/quote-check.ts` (30 PASS, 0 FAIL).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~32,000 tokens across 10 source files and 10 inventory cards.
Approximate tokens of output written: ~15,000 tokens across 30 concept cards and this unit report.
