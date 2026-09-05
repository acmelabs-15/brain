---
unit: inv-addy-5
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-5

## Files assigned
- [x] sources/addy/docs/comparison.md
- [x] sources/addy/docs/copilot-setup.md
- [x] sources/addy/docs/cursor-setup.md
- [x] sources/addy/docs/developer-onboarding.md
- [x] sources/addy/docs/gemini-cli-setup.md
- [x] sources/addy/docs/getting-started.md

## Outputs produced
- docs/analysis/inventory/addy/docs-comparison-md.md (6807 bytes)
- docs/analysis/inventory/addy/docs-copilot-setup-md.md (3177 bytes)
- docs/analysis/inventory/addy/docs-cursor-setup-md.md (5663 bytes)
- docs/analysis/inventory/addy/docs-developer-onboarding-md.md (4371 bytes)
- docs/analysis/inventory/addy/docs-gemini-cli-setup-md.md (5220 bytes)
- docs/analysis/inventory/addy/docs-getting-started-md.md (7519 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/comparison.md` provides an explicit comparative taxonomy across `agent-skills`, `Superpowers`, and `Matt Pocock's skills`, identifying key architectural differences (e.g. broad lifecycle validation vs. deep autonomous inner loops vs. interrogation loops).
- `docs/developer-onboarding.md` codifies the five composable layers of `agent-skills` (Skills, Personas, Commands, References, Evals) and forbids persona-to-persona invocation, enforcing orchestration solely through users or slash commands.
- `docs/gemini-cli-setup.md` documents the `/plan` -> `/planning` command rename to avoid conflict with Gemini CLI internal commands.
- `docs/getting-started.md` documents living working artifacts (`SPEC.md`, `tasks/plan.md`, `tasks/todo.md`) and tracks the single-skill install portability gap regarding `references/` (issue #361).
- `docs/copilot-setup.md` highlights that GitHub Copilot silently ignores custom agents unless named `*.agent.md`.
- `docs/cursor-setup.md` warns against pasting full skills into `.cursor/rules/*.mdc` rules to conserve context.

## Blocked or uncertain
none

## Time and size
Approximate source read: 47,822 bytes (~11,955 tokens). Approximate output written: 32,757 bytes (~8,189 tokens).
