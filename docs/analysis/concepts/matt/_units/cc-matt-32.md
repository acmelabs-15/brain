---
unit: cc-matt-32
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-32

## Files assigned
- [x] sources/matt/skills/engineering/wizard/SKILL.md
- [x] sources/matt/skills/engineering/wizard/template.sh
- [x] sources/matt/skills/in-progress/README.md
- [x] sources/matt/skills/in-progress/claude-handoff/SKILL.md
- [x] sources/matt/skills/in-progress/claude-handoff/agents/openai.yaml
- [x] sources/matt/skills/in-progress/implement-spec/SKILL.md
- [x] sources/matt/skills/productivity/handoff/SKILL.md
- [x] sources/matt/skills/productivity/teach/SKILL.md
- [x] docs/analysis/inventory/matt/skills-engineering-wizard-skill-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-wizard-template-sh.md
- [x] docs/analysis/inventory/matt/skills-in-progress-claude-handoff-agents-openai-yaml.md
- [x] docs/analysis/inventory/matt/skills-in-progress-claude-handoff-skill-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-readme-md.md
- [x] docs/analysis/inventory/matt/skills-in-progress-implement-spec-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-handoff-skill-md.md
- [x] docs/analysis/inventory/matt/skills-productivity-teach-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/write-env.md (1418 bytes)
- docs/analysis/concepts/matt/set-var.md (1385 bytes)
- docs/analysis/concepts/matt/pause.md (1304 bytes)
- docs/analysis/concepts/matt/confirm.md (1332 bytes)
- docs/analysis/concepts/matt/tput.md (833 bytes)
- docs/analysis/concepts/matt/env-file.md (856 bytes)
- docs/analysis/concepts/matt/banner.md (1131 bytes)
- docs/analysis/concepts/matt/note.md (961 bytes)
- docs/analysis/concepts/matt/warn.md (1068 bytes)
- docs/analysis/concepts/matt/wslview.md (843 bytes)
- docs/analysis/concepts/matt/explorer-exe.md (836 bytes)
- docs/analysis/concepts/matt/xdg-open.md (857 bytes)
- docs/analysis/concepts/matt/open.md (801 bytes)
- docs/analysis/concepts/matt/existing.md (1347 bytes)
- docs/analysis/concepts/matt/finish.md (1460 bytes)
- docs/analysis/concepts/matt/claude-handoff.md (1959 bytes)
- docs/analysis/concepts/matt/argument-hint.md (1343 bytes)
- docs/analysis/concepts/matt/handoff-summary.md (1550 bytes)
- docs/analysis/concepts/matt/claude-bg.md (1059 bytes)
- docs/analysis/concepts/matt/claude-agents.md (981 bytes)
- docs/analysis/concepts/matt/plans.md (1566 bytes)
- docs/analysis/concepts/matt/issues.md (1609 bytes)
- docs/analysis/concepts/matt/commits.md (1576 bytes)
- docs/analysis/concepts/matt/diffs.md (1529 bytes)
- docs/analysis/concepts/matt/sensitive-information.md (1132 bytes)
- docs/analysis/concepts/matt/api-keys.md (1088 bytes)
- docs/analysis/concepts/matt/passwords.md (1057 bytes)
- docs/analysis/concepts/matt/personally-identifiable-information.md (1144 bytes)
- docs/analysis/concepts/matt/blocking-relationships.md (1485 bytes)
- docs/analysis/concepts/matt/maximum-concurrency.md (1378 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-32.md (this file)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/<card>.md (exit code 0; 31 PASS, 0 FAIL across all 30 concept cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-32 completes the 30 concept cards assigned from `facts/cc-matt-32.txt`.
- Thirteen cards (`write-env`, `set-var`, `pause`, `confirm`, `tput`, `env-file`, `banner`, `note`, `warn`, `wslview`, `explorer-exe`, `xdg-open`, `open`) were pre-existing and verified clean under quote-check.
- Seventeen missing cards were authored with byte-exact citations, exhaustive Where used rows, and appropriate kind classification:
  - Wizard bash helpers (`existing` / `_existing`, `finish`) classified as `kind: technique`.
  - Background delegation and orchestration concepts (`claude-handoff` as `kind: technique`, `handoff-summary` as `kind: artifact`, `blocking-relationships` as `kind: pattern`, `maximum-concurrency` as `kind: pattern`).
  - Cross-phase referenced artifacts (`plans`, `issues`, `commits`, `diffs`) classified as `kind: artifact`.
  - Configuration directives, external CLI commands, and security/privacy classification terms (`argument-hint`, `claude-bg`, `claude-agents`, `sensitive-information`, `api-keys`, `passwords`, `personally-identifiable-information`) classified as `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~14,000 tokens across 8 source files and 8 inventory cards.
Approximate tokens of output written: ~6,500 tokens across 17 authored cards and unit report.
