---
unit: cc-matt-31
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-31

## Files assigned
- [x] sources/matt/skills/engineering/to-tickets/SKILL.md
- [x] sources/matt/skills/engineering/triage/AGENT-BRIEF.md
- [x] sources/matt/skills/engineering/triage/OUT-OF-SCOPE.md
- [x] sources/matt/skills/engineering/triage/SKILL.md
- [x] sources/matt/skills/engineering/wayfinder/SKILL.md
- [x] sources/matt/skills/engineering/wizard/SKILL.md
- [x] sources/matt/skills/engineering/wizard/template.sh
- [x] sources/matt/skills/in-progress/claude-handoff/SKILL.md
- [x] docs/analysis/inventory/matt/skills-engineering-to-tickets-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-triage-agent-brief-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-triage-out-of-scope-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-triage-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-wayfinder-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-wizard-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-wizard-template-sh.md
- [x] docs/analysis/inventory/matt/skills-in-progress-claude-handoff-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/issue-template.md — 1347 bytes
- docs/analysis/concepts/matt/afk-agent.md — 1547 bytes
- docs/analysis/concepts/matt/durability-over-precision.md — 1365 bytes
- docs/analysis/concepts/matt/behavioral-not-procedural.md — 1351 bytes
- docs/analysis/concepts/matt/complete-acceptance-criteria.md — 1343 bytes
- docs/analysis/concepts/matt/explicit-scope-boundaries.md — 1273 bytes
- docs/analysis/concepts/matt/institutional-memory.md — 1325 bytes
- docs/analysis/concepts/matt/deduplication.md — 1354 bytes
- docs/analysis/concepts/matt/dark-mode.md — 939 bytes
- docs/analysis/concepts/matt/prior-requests.md — 1248 bytes
- docs/analysis/concepts/matt/category.md — 1171 bytes
- docs/analysis/concepts/matt/state.md — 1226 bytes
- docs/analysis/concepts/matt/triage-notes.md — 1235 bytes
- docs/analysis/concepts/matt/shared-map.md — 1558 bytes
- docs/analysis/concepts/matt/name.md — 1432 bytes
- docs/analysis/concepts/matt/index.md — 1230 bytes
- docs/analysis/concepts/matt/child-issue.md — 1279 bytes
- docs/analysis/concepts/matt/question.md — 971 bytes
- docs/analysis/concepts/matt/wayfinder-type.md — 1062 bytes
- docs/analysis/concepts/matt/claims.md — 1414 bytes
- docs/analysis/concepts/matt/assignee.md — 1208 bytes
- docs/analysis/concepts/matt/native.md — 1142 bytes
- docs/analysis/concepts/matt/unblocked.md — 1372 bytes
- docs/analysis/concepts/matt/chart-the-map.md — 1408 bytes
- docs/analysis/concepts/matt/work-through-the-map.md — 1350 bytes
- docs/analysis/concepts/matt/resolution-comment.md — 1442 bytes
- docs/analysis/concepts/matt/hidden-secret-entry.md — 1206 bytes
- docs/analysis/concepts/matt/say.md — 1225 bytes
- docs/analysis/concepts/matt/open-url.md — 1366 bytes
- docs/analysis/concepts/matt/ask-secret.md — 1447 bytes
- docs/analysis/concepts/matt/_units/cc-matt-31.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/issue-template.md docs/analysis/concepts/matt/afk-agent.md docs/analysis/concepts/matt/durability-over-precision.md docs/analysis/concepts/matt/behavioral-not-procedural.md docs/analysis/concepts/matt/complete-acceptance-criteria.md docs/analysis/concepts/matt/explicit-scope-boundaries.md docs/analysis/concepts/matt/institutional-memory.md docs/analysis/concepts/matt/deduplication.md docs/analysis/concepts/matt/dark-mode.md docs/analysis/concepts/matt/prior-requests.md docs/analysis/concepts/matt/category.md docs/analysis/concepts/matt/state.md docs/analysis/concepts/matt/triage-notes.md docs/analysis/concepts/matt/shared-map.md docs/analysis/concepts/matt/name.md docs/analysis/concepts/matt/index.md docs/analysis/concepts/matt/child-issue.md docs/analysis/concepts/matt/question.md docs/analysis/concepts/matt/wayfinder-type.md docs/analysis/concepts/matt/claims.md docs/analysis/concepts/matt/assignee.md docs/analysis/concepts/matt/native.md docs/analysis/concepts/matt/unblocked.md docs/analysis/concepts/matt/chart-the-map.md docs/analysis/concepts/matt/work-through-the-map.md docs/analysis/concepts/matt/resolution-comment.md docs/analysis/concepts/matt/hidden-secret-entry.md docs/analysis/concepts/matt/say.md docs/analysis/concepts/matt/open-url.md docs/analysis/concepts/matt/ask-secret.md — exit 0 (30 PASS, 0 FAIL across 30 cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-31 completes the concept analysis across several core engineering skills in the Matt package: ticket templating (`to-tickets`), autonomous/AFK agent briefing and issue triage (`triage`), multi-session exploration and map tracking (`wayfinder`), interactive bash wizard generation (`wizard`), and handoff conventions (`claude-handoff`).
- Triage concepts establish clear operating principles for autonomous AFK agent work (`afk-agent`, `durability-over-precision`, `behavioral-not-procedural`, `complete-acceptance-criteria`, `explicit-scope-boundaries`), rejection recording (`institutional-memory`, `deduplication`, `dark-mode`, `prior-requests`), and ticket classification axes (`category`, `state`, `triage-notes`).
- Wayfinder concepts establish a distributed tracker-based multi-session planning system (`shared-map`, `name`, `index`, `child-issue`, `question`, `wayfinder-type`). Coordination is achieved through tracker-native mechanisms: `claims` via the `assignee` field, `native` tracker blocking dependencies, and readiness gating on the `unblocked` frontier. Operational execution divides into `chart-the-map` (initial exploration) and `work-through-the-map` (iterative resolution), terminating in a persistent `resolution-comment`.
- Wizard concepts encapsulate human-in-the-loop setup automation (`hidden-secret-entry`), providing CLI helpers `say` (formatting plain text guidance), `open-url` (cross-platform URL opening), and `ask-secret` (hidden credential entry with re-run persistence).

## Blocked or uncertain
none

## Time and size
Approximate source read: ~22,000 tokens (~43,000 bytes across 8 source files and 8 inventory cards).
Approximate output written: ~11,000 tokens across 30 concept cards (38,836 bytes) and this unit report.
