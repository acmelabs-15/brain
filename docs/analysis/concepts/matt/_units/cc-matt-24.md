---
unit: cc-matt-24
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-24

## Files assigned
- [x] sources/matt-external/wait-what.md
- [x] sources/matt-external/wayfinder.md
- [x] sources/matt-external/wizard.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md
- [x] sources/matt/skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md
- [x] sources/matt/skills/engineering/wayfinder/SKILL.md
- [x] sources/matt/skills/engineering/wizard/SKILL.md
- [x] docs/analysis/inventory/matt/external-wait-what-md.md
- [x] docs/analysis/inventory/matt/external-wayfinder-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-gitlab-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-wayfinder-skill-md.md
- [x] docs/analysis/inventory/matt/external-wizard-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-setup-matt-pocock-skills-issue-tracker-github-md.md
- [x] docs/analysis/inventory/matt/skills-engineering-wizard-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/re-pitches.md (1402 bytes)
- docs/analysis/concepts/matt/plain-english.md (1335 bytes)
- docs/analysis/concepts/matt/wait.md (1664 bytes)
- docs/analysis/concepts/matt/tldr.md (1365 bytes)
- docs/analysis/concepts/matt/no-fluff.md (1365 bytes)
- docs/analysis/concepts/matt/talk-normal.md (1400 bytes)
- docs/analysis/concepts/matt/caveman-register.md (1377 bytes)
- docs/analysis/concepts/matt/domain-vocabulary.md (1340 bytes)
- docs/analysis/concepts/matt/project-nouns.md (1297 bytes)
- docs/analysis/concepts/matt/notes.md (1963 bytes)
- docs/analysis/concepts/matt/prototyping.md (1364 bytes)
- docs/analysis/concepts/matt/manual-procedure.md (1411 bytes)
- docs/analysis/concepts/matt/one-off-migration.md (1277 bytes)
- docs/analysis/concepts/matt/env.md (1223 bytes)
- docs/analysis/concepts/matt/github-actions-secrets.md (1313 bytes)
- docs/analysis/concepts/matt/gh.md (1418 bytes)
- docs/analysis/concepts/matt/secrets.md (1299 bytes)
- docs/analysis/concepts/matt/vars.md (1197 bytes)
- docs/analysis/concepts/matt/pure-action.md (1261 bytes)
- docs/analysis/concepts/matt/template-sh.md (1411 bytes)
- docs/analysis/concepts/matt/wsl.md (1329 bytes)
- docs/analysis/concepts/matt/hidden-entry.md (1226 bytes)
- docs/analysis/concepts/matt/idempotent.md (1156 bytes)
- docs/analysis/concepts/matt/upserts.md (1196 bytes)
- docs/analysis/concepts/matt/closing-summary.md (1226 bytes)
- docs/analysis/concepts/matt/bash-n.md (1211 bytes)
- docs/analysis/concepts/matt/shellcheck.md (1289 bytes)
- docs/analysis/concepts/matt/ephemeral-by-default.md (1252 bytes)
- docs/analysis/concepts/matt/readline.md (1333 bytes)
- docs/analysis/concepts/matt/read-r.md (1337 bytes)
- docs/analysis/concepts/matt/_units/cc-matt-24.md (this report)

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/re-pitches.md docs/analysis/concepts/matt/plain-english.md docs/analysis/concepts/matt/wait.md docs/analysis/concepts/matt/tldr.md docs/analysis/concepts/matt/no-fluff.md docs/analysis/concepts/matt/talk-normal.md docs/analysis/concepts/matt/caveman-register.md docs/analysis/concepts/matt/domain-vocabulary.md docs/analysis/concepts/matt/project-nouns.md docs/analysis/concepts/matt/notes.md docs/analysis/concepts/matt/prototyping.md docs/analysis/concepts/matt/manual-procedure.md docs/analysis/concepts/matt/one-off-migration.md docs/analysis/concepts/matt/env.md docs/analysis/concepts/matt/github-actions-secrets.md docs/analysis/concepts/matt/gh.md docs/analysis/concepts/matt/secrets.md docs/analysis/concepts/matt/vars.md docs/analysis/concepts/matt/pure-action.md docs/analysis/concepts/matt/template-sh.md docs/analysis/concepts/matt/wsl.md docs/analysis/concepts/matt/hidden-entry.md docs/analysis/concepts/matt/idempotent.md docs/analysis/concepts/matt/upserts.md docs/analysis/concepts/matt/closing-summary.md docs/analysis/concepts/matt/bash-n.md docs/analysis/concepts/matt/shellcheck.md docs/analysis/concepts/matt/ephemeral-by-default.md docs/analysis/concepts/matt/readline.md docs/analysis/concepts/matt/read-r.md (exit 0, 38 PASS, 0 FAIL across 30 cards)
- bun scripts/synthesis/coverage.ts (exit 0 on matt concepts; 0 missing required sections, 0 orphan cards)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit cc-matt-24 synthesizes 30 concepts across three primary clusters in Matt's ecosystem:
  1. `/wait-what` prompt shaping and conversational register (`re-pitches`, `plain English`, `wait`, `/tldr`, `/no-fluff`, `/talk-normal`, `caveman register`, `domain-vocabulary`, `Project nouns`). It addresses cognitive over-correction where models drop into terse "caveman" registers instead of using clear domain nouns and ASD-STE100 Simplified Technical English.
  2. `Wayfinder` execution and planning mechanics (`notes`, `prototyping`). `Notes` operates with a dual role: as a section on a Wayfinder map issue holding standing effort context and override directives (creating an escape hatch that bypasses the "plan, don't do" constraint, recorded as a governance defect in `skills-engineering-wayfinder-skill-md.md`), and as GitLab issue comments via `glab issue note`.
  3. `Wizard` automation patterns (`manual procedure`, `one-off migration`, `.env`, `GitHub Actions secrets`, `gh`, `secrets.*`, `vars.*`, `pure action`, `template.sh`, `WSL`, `hidden entry`, `idempotent`, `upserts`, `closing summary`, `bash -n`, `shellcheck`, `ephemeral by default`, `Readline`, `read -r`). These describe script generation for step-by-step human onboarding and setup, featuring static verification (`bash -n`, `shellcheck`), hidden secret input, idempotent file modification, and documented terminal bugs (such as `read -r` lacking GNU Readline support leading to escape sequences on arrow keys, issue #741).
- Concepts representing file names, syntax tokens, or CLI tools (`.env`, `secrets.*`, `vars.*`, `template.sh`, `bash -n`, `read -r`) were appropriately classified as `kind: name-only` or `reference` per METHOD.md R6 and D-023.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~140,000 tokens across 7 cited source files and 7 inventory cards.
Approximate tokens of output written: ~12,000 tokens across 30 concept cards (40,237 bytes) and 1 unit report.
