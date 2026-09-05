---
unit: inv-matt-33
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-33

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/wizard.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-wizard-md.md` (12675 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-33 covers `external/wizard.md` (363,000 bytes, 71 lines), the external HTML documentation snapshot for `/wizard` hosted at `https://aihero.dev/skills-wizard`.
- Architectural relationships with other skills in Matt's package:
  - `grill-with-docs` and `to-spec`: Positioned as scoping/discovery precursors (`/grill-with-docs → /to-spec → /wizard`). The external doc clarifies that `grill-with-docs` and `to-spec` are for deciding *what* to build, whereas `wizard` is for executing manual procedural actions once blocked by dashboard setups or migrations.
  - `setup-matt-pocock-skills`: Nearest neighbor, both existing to bring a repository into a working state. `setup-matt-pocock-skills` sets up Matt's skill suite, whereas `wizard` generates interactive setup scripts for any third-party services or external dependencies.
  - `implement`: Directly pairs with `wizard`. When `implement` lands a feature that requires manual cutover or credentials, a wizard script handles the human half.
  - `ask-matt`: High-level router that directs users to `wizard` when encountering manual setup barriers.
- Documentation drift findings:
  - Series classification drift: The website navigation groups `/wizard` under `4 Upkeep` (section item 4.5), while in the repository it is located under `skills/engineering/wizard/`, and the prose explicitly defines it as a standalone rather than a chain step.
  - Invocation evolution: Highlights transition from user-invoked to model-invoked, allowing the AI agent to reach for it autonomously when encountering credentials or dashboard walls.
- None of this unit's files appears in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence card needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~90,750 tokens (363,000 bytes raw HTML snapshot; ~2,500 words / ~3,500 tokens core article text); approximate tokens of output written: ~3,800 tokens across inventory card (12,675 bytes) and unit report.
