---
unit: cc-matt-35
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-35

## Files assigned
- [x] sources/matt/skills/in-progress/writing-beats/SKILL.md
- [x] sources/matt/skills/in-progress/writing-fragments/SKILL.md
- [x] sources/matt/skills/in-progress/writing-shape/SKILL.md
- [x] sources/matt/skills/misc/git-guardrails-claude-code/SKILL.md
- [x] sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh
- [x] docs/analysis/inventory/matt/skills-in-progress-writing-beats-skill-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-writing-fragments-skill-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-writing-shape-skill-md.md
- [x] docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-skill-md.md
- [x] docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-scripts-block-dangerous-git-sh.md

## Outputs produced
- docs/analysis/concepts/matt/starting-beats.md — 1342 bytes
- docs/analysis/concepts/matt/next-beats.md — 1404 bytes
- docs/analysis/concepts/matt/term.md — 1358 bytes
- docs/analysis/concepts/matt/prerequisite.md — 1496 bytes
- docs/analysis/concepts/matt/introduced.md — 1488 bytes
- docs/analysis/concepts/matt/what-is-a-beat.md — 820 bytes
- docs/analysis/concepts/matt/pulling-from-the-pile.md — 1595 bytes
- docs/analysis/concepts/matt/ending-the-journey.md — 1384 bytes
- docs/analysis/concepts/matt/writing-rhythm.md — 1834 bytes
- docs/analysis/concepts/matt/explore.md — 1406 bytes
- docs/analysis/concepts/matt/fragment.md — 1403 bytes
- docs/analysis/concepts/matt/what-is-a-fragment.md — 860 bytes
- docs/analysis/concepts/matt/file-format.md — 894 bytes
- docs/analysis/concepts/matt/working-title.md — 1249 bytes
- docs/analysis/concepts/matt/input-pile.md — 1414 bytes
- docs/analysis/concepts/matt/the-loop.md — 1219 bytes
- docs/analysis/concepts/matt/conversational-feel.md — 1301 bytes
- docs/analysis/concepts/matt/format-arguments-to-actually-have.md — 989 bytes
- docs/analysis/concepts/matt/prose-vs-list.md — 1425 bytes
- docs/analysis/concepts/matt/inline-vs-callout.md — 1421 bytes
- docs/analysis/concepts/matt/table-vs-repeated-structure.md — 1419 bytes
- docs/analysis/concepts/matt/quote-vs-paraphrase.md — 1439 bytes
- docs/analysis/concepts/matt/code-block-vs-inline-code.md — 1461 bytes
- docs/analysis/concepts/matt/input.md — 871 bytes
- docs/analysis/concepts/matt/command.md — 931 bytes
- docs/analysis/concepts/matt/tool-input-command.md — 928 bytes
- docs/analysis/concepts/matt/dangerous-patterns.md — 1007 bytes
- docs/analysis/concepts/matt/git-push.md — 1089 bytes
- docs/analysis/concepts/matt/git-reset-hard.md — 1190 bytes
- docs/analysis/concepts/matt/git-clean-fd.md — 1141 bytes
- docs/analysis/concepts/matt/_units/cc-matt-35.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/starting-beats.md docs/analysis/concepts/matt/next-beats.md docs/analysis/concepts/matt/term.md docs/analysis/concepts/matt/prerequisite.md docs/analysis/concepts/matt/introduced.md docs/analysis/concepts/matt/what-is-a-beat.md docs/analysis/concepts/matt/pulling-from-the-pile.md docs/analysis/concepts/matt/ending-the-journey.md docs/analysis/concepts/matt/writing-rhythm.md docs/analysis/concepts/matt/explore.md docs/analysis/concepts/matt/fragment.md docs/analysis/concepts/matt/what-is-a-fragment.md docs/analysis/concepts/matt/file-format.md docs/analysis/concepts/matt/working-title.md docs/analysis/concepts/matt/input-pile.md docs/analysis/concepts/matt/the-loop.md docs/analysis/concepts/matt/conversational-feel.md docs/analysis/concepts/matt/format-arguments-to-actually-have.md docs/analysis/concepts/matt/prose-vs-list.md docs/analysis/concepts/matt/inline-vs-callout.md docs/analysis/concepts/matt/table-vs-repeated-structure.md docs/analysis/concepts/matt/quote-vs-paraphrase.md docs/analysis/concepts/matt/code-block-vs-inline-code.md docs/analysis/concepts/matt/input.md docs/analysis/concepts/matt/command.md docs/analysis/concepts/matt/tool-input-command.md docs/analysis/concepts/matt/dangerous-patterns.md docs/analysis/concepts/matt/git-push.md docs/analysis/concepts/matt/git-reset-hard.md docs/analysis/concepts/matt/git-clean-fd.md — exit 0 (30 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The unit covers two distinct skill clusters in `matt`:
  1. Multi-stage Authoring Pipeline (`writing-fragments`, `writing-beats`, `writing-shape`):
     - `writing-fragments`: Divergent exploratory phase (`explore`, `fragment`, `What is a fragment`, `File format`, `Working title`) that gathers disjoint thoughts into an initial repository of material.
     - `writing-beats`: Narrative progression architecture (`starting beats`, `next beats`, `term`, `Prerequisite`, `Introduced`, `What is a beat`, `Pulling from the pile`, `Ending the journey`, `Writing rhythm`). Maps reader prerequisite concepts to introduced concepts and selects discrete narrative beats.
     - `writing-shape`: Presentation synthesis (`input pile`, `The loop`, `Conversational feel`, `Format arguments to actually have`, `Prose vs. list`, `Inline vs. callout`, `Table vs. repeated structure`, `Quote vs. paraphrase`, `Code block vs. inline code`). Applies micro-structural rules for text formatting, callouts, lists, and code blocks.
  2. Git Guardrails Hook Script (`git-guardrails-claude-code/scripts/block-dangerous-git.sh`):
     - Provides PreToolUse Bash interception logic for Claude Code to prevent destructive git operations.
     - Command names, script variables, and payload property paths (`INPUT`, `COMMAND`, `tool_input.command`, `DANGEROUS_PATTERNS`, `git push`, `git reset --hard`, `git clean -fd`) are classified with `kind: name-only` per D-023. Sibling concepts from the same skill (`git clean -f`, `git branch -D`, `git checkout .`, `git restore .`) are tracked in `cc-matt-36`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~17,200 bytes (~4,000 tokens) across 5 source files and ~22,400 bytes (~5,200 tokens) across 5 citing inventory cards.
Approximate output written: ~37,800 bytes (~8,800 tokens) across 30 concept cards and ~3,800 bytes (~900 tokens) for this unit report.
