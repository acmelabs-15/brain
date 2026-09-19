# DEC-001: Lint with Oxlint and format with Oxfmt, through Ultracite's presets

Decided 2026-09-19 by Peter, for every ACMElabs repo; applied to brain here.

brain lints its own TypeScript with Oxlint 1.83.0 and formats it with Oxfmt 0.68.0,
both configured by hand from Ultracite 7.12.0's presets. The TypeScript compiler check
stays a separate step. No initializer runs over the repo, and no autofix runs over
vendored or seeded files: the lint and format paths cover `scripts/` and the two
config files only. brain has no CSS, so Stylelint is not added.

The presets are not accepted silently. Every deviation is a decision:

| Where | Preset says | brain does | Reason |
|---|---|---|---|
| Oxfmt | 80 columns | 100 columns | plain scripts with long path strings; 80 wraps every template literal |
| Oxfmt | ES5 trailing commas | trailing commas everywhere | one convention across ACMElabs repos |
| Oxlint | `func-style` expression | off | declarations hoist, so a file reads top-down |
| Oxlint | `sort-keys` | off | object keys are ordered by meaning, not alphabet |
| Oxlint | `no-await-in-loop` | off | the sync is sequential by design: ordered writes, and a collision check that finishes before the first write |
| Oxlint | `consistent-type-definitions` interface | `type` | the spec's code style uses `type` |

Everything else in the core preset applies as shipped. The first lint over the
upstream-sync scripts found 22 rule kinds; four became the relaxations above, the
other eighteen were fixed in the code.

Commands: `bun run lint`, `bun run format`, `bun run format:check`, and `bun run check`
for all four gates together. CI runs typecheck, lint, format check and tests.

Source: the design-system decision at `notes/decisions/lint-toolchain.md` and its
analysis at `notes/analysis/developer-tooling.md`, both dated 2026-09-19.
