---
unit: cc-matt-36
phase: 2
package: matt
session: 015
subagent_returned: complete
---

# Unit cc-matt-36

## Files assigned
- [x] sources/matt/skills/misc/README.md
- [x] sources/matt/skills/misc/git-guardrails-claude-code/SKILL.md
- [x] sources/matt/skills/misc/git-guardrails-claude-code/scripts/block-dangerous-git.sh
- [x] sources/matt/skills/misc/migrate-to-shoehorn/SKILL.md
- [x] docs/analysis/inventory/matt/skills-misc-readme-md.md
- [x] docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-skill-md.md
- [x] docs/analysis/inventory/matt/skills-misc-git-guardrails-claude-code-scripts-block-dangerous-git-sh.md
- [x] docs/analysis/inventory/matt/skills-misc-migrate-to-shoehorn-skill-md.md

## Outputs produced
- docs/analysis/concepts/matt/git-clean-f.md — 1072 bytes
- docs/analysis/concepts/matt/git-branch-d.md — 1085 bytes
- docs/analysis/concepts/matt/git-checkout.md — 1092 bytes
- docs/analysis/concepts/matt/git-restore.md — 1072 bytes
- docs/analysis/concepts/matt/push-force.md — 906 bytes
- docs/analysis/concepts/matt/reset-hard.md — 906 bytes
- docs/analysis/concepts/matt/git-guardrails-claude-code.md — 1711 bytes
- docs/analysis/concepts/matt/claude-code-hooks.md — 1444 bytes
- docs/analysis/concepts/matt/pretooluse-hook.md — 1272 bytes
- docs/analysis/concepts/matt/force.md — 866 bytes
- docs/analysis/concepts/matt/this-project-only.md — 1024 bytes
- docs/analysis/concepts/matt/all-projects.md — 1023 bytes
- docs/analysis/concepts/matt/chmod-x.md — 860 bytes
- docs/analysis/concepts/matt/settings-json.md — 984 bytes
- docs/analysis/concepts/matt/hooks-pretooluse.md — 1005 bytes
- docs/analysis/concepts/matt/migrate-to-shoehorn.md — 1622 bytes
- docs/analysis/concepts/matt/partial-test-data.md — 1315 bytes
- docs/analysis/concepts/matt/total-typescript-shoehorn.md — 1212 bytes
- docs/analysis/concepts/matt/shoehorn.md — 1201 bytes
- docs/analysis/concepts/matt/type-safe-alternatives.md — 1161 bytes
- docs/analysis/concepts/matt/test-code-only.md — 1085 bytes
- docs/analysis/concepts/matt/production-code.md — 1069 bytes
- docs/analysis/concepts/matt/double-as.md — 1094 bytes
- docs/analysis/concepts/matt/npm-i-total-typescript-shoehorn.md — 847 bytes
- docs/analysis/concepts/matt/frompartial.md — 1205 bytes
- docs/analysis/concepts/matt/as-type.md — 1057 bytes
- docs/analysis/concepts/matt/as-unknown-as-type.md — 1123 bytes
- docs/analysis/concepts/matt/fromany.md — 1140 bytes
- docs/analysis/concepts/matt/fromexact.md — 1144 bytes
- docs/analysis/concepts/matt/type-check.md — 1336 bytes
- docs/analysis/concepts/matt/_units/cc-matt-36.md — this report

## Scripts executed
- bun scripts/synthesis/quote-check.ts docs/analysis/concepts/matt/git-clean-f.md docs/analysis/concepts/matt/git-branch-d.md docs/analysis/concepts/matt/git-checkout.md docs/analysis/concepts/matt/git-restore.md docs/analysis/concepts/matt/push-force.md docs/analysis/concepts/matt/reset-hard.md docs/analysis/concepts/matt/git-guardrails-claude-code.md docs/analysis/concepts/matt/claude-code-hooks.md docs/analysis/concepts/matt/pretooluse-hook.md docs/analysis/concepts/matt/force.md docs/analysis/concepts/matt/this-project-only.md docs/analysis/concepts/matt/all-projects.md docs/analysis/concepts/matt/chmod-x.md docs/analysis/concepts/matt/settings-json.md docs/analysis/concepts/matt/hooks-pretooluse.md docs/analysis/concepts/matt/migrate-to-shoehorn.md docs/analysis/concepts/matt/partial-test-data.md docs/analysis/concepts/matt/total-typescript-shoehorn.md docs/analysis/concepts/matt/shoehorn.md docs/analysis/concepts/matt/type-safe-alternatives.md docs/analysis/concepts/matt/test-code-only.md docs/analysis/concepts/matt/production-code.md docs/analysis/concepts/matt/double-as.md docs/analysis/concepts/matt/npm-i-total-typescript-shoehorn.md docs/analysis/concepts/matt/frompartial.md docs/analysis/concepts/matt/as-type.md docs/analysis/concepts/matt/as-unknown-as-type.md docs/analysis/concepts/matt/fromany.md docs/analysis/concepts/matt/fromexact.md docs/analysis/concepts/matt/type-check.md — exit 0 (36 PASS, 0 FAIL)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The unit covers two specialized developer tooling skills under `skills/misc/`:
  1. `git-guardrails-claude-code`: Sets up safety hooks in Claude Code configuration (`settings.json`, `hooks.PreToolUse`) executing a shell script (`block-dangerous-git.sh`) via `PreToolUse hook` to block destructive git operations (`git clean -f`, `git branch -D`, `git checkout .`, `git restore .`, `push --force`, `reset --hard`, `--force`). Scope options include local repository configuration (`this project only`) or global installation (`all projects`), with executable permissions applied via `chmod +x`.
  2. `migrate-to-shoehorn`: Guides migrating test suites from fragile and unsafe TypeScript type assertions (`as Type`, `as unknown as Type` / `Double-as`) to `@total-typescript/shoehorn` helper functions (`fromPartial`, `fromAny`, `fromExact`). The pattern strictly enforces `Test code only` (prohibiting usage in `production code`), providing `type-safe alternatives` when mocking `partial test data` and concluding with a `type check` verification gate.
- CLI commands, options, configuration keys, and shell commands (`git clean -f`, `git branch -D`, `git checkout .`, `git restore .`, `push --force`, `reset --hard`, `--force`, `chmod +x`, `settings.json`, `hooks.PreToolUse`, `npm i @total-typescript/shoehorn`, `as Type`, `as unknown as Type`, `this project only`, `all projects`) are categorized as `kind: name-only` per D-023.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~6,300 bytes (~1,500 tokens) across 4 source files and ~15,000 bytes (~3,500 tokens) across 4 citing inventory cards.
Approximate output written: ~36,500 bytes (~8,500 tokens) across 30 concept cards and this unit report.
