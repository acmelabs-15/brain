---
unit: inv-addy-6
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-6

## Files assigned
[x] sources/addy/docs/opencode-setup.md
[x] sources/addy/docs/skill-anatomy.md
[x] sources/addy/docs/windsurf-setup.md
[x] sources/addy/evals/cases/api-and-interface-design.json
[x] sources/addy/evals/cases/browser-testing-with-devtools.json
[x] sources/addy/evals/cases/ci-cd-and-automation.json
[x] sources/addy/evals/cases/code-review-and-quality.json
[x] sources/addy/evals/cases/code-simplification.json
[x] sources/addy/evals/cases/constraint-driven-development.json
[x] sources/addy/evals/cases/context-engineering.json
[x] sources/addy/evals/cases/debugging-and-error-recovery.json
[x] sources/addy/evals/cases/deprecation-and-migration.json

## Outputs produced
- docs/analysis/inventory/addy/docs-opencode-setup-md.md (4401 bytes)
- docs/analysis/inventory/addy/docs-skill-anatomy-md.md (4384 bytes)
- docs/analysis/inventory/addy/docs-windsurf-setup-md.md (2485 bytes)
- docs/analysis/inventory/addy/evals-cases-api-and-interface-design-json.md (2952 bytes)
- docs/analysis/inventory/addy/evals-cases-browser-testing-with-devtools-json.md (2977 bytes)
- docs/analysis/inventory/addy/evals-cases-ci-cd-and-automation-json.md (2684 bytes)
- docs/analysis/inventory/addy/evals-cases-code-review-and-quality-json.md (2790 bytes)
- docs/analysis/inventory/addy/evals-cases-code-simplification-json.md (2577 bytes)
- docs/analysis/inventory/addy/evals-cases-constraint-driven-development-json.md (3642 bytes)
- docs/analysis/inventory/addy/evals-cases-context-engineering-json.md (2708 bytes)
- docs/analysis/inventory/addy/evals-cases-debugging-and-error-recovery-json.md (3120 bytes)
- docs/analysis/inventory/addy/evals-cases-deprecation-and-migration-json.md (2715 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/opencode-setup.md` and `docs/windsurf-setup.md` demonstrate alternative harness integration strategies for agent skills beyond Claude Code: OpenCode supports agent-driven discovery (via `skill` tool) and command-driven workflows; Windsurf relies on `.windsurfrules` with tight context limitations requiring on-demand pasting of non-essential skills.
- `docs/skill-anatomy.md` is the central structural specification for skills in `sources/addy/`, referenced widely by `CLAUDE.md`, `AGENTS.md`, `CONTRIBUTING.md`, `README.md`, and `scripts/lib/skill-lint.js`. It defines standard section anatomy, frontmatter schemas, rationalization patterns, and the separation between skill-local supporting files and repository-root shared references (`references/`).
- The 9 eval cases files (`evals/cases/*.json`) configure routing and behavioral checks for the corresponding skills. `constraint-driven-development.json` uses `kind: "dialogue"` across 3 evaluation cases (omitting files arrays since transcript is the artifact). `debugging-and-error-recovery.json` defines a notable anti-rationalization eval testing adherence to evidence-gathering and reproduction under stakeholder emergency pressure.
- All fixture paths referenced by execution evals (`evals/fixtures/*`) were verified to exist on disk.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,740 tokens (34,947 bytes).
Approximate tokens of output written: ~10,100 tokens (~40,500 bytes across 12 cards and unit report).
