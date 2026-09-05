---
unit: inv-matt-24
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-24

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/setup-matt-pocock-skills.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-setup-matt-pocock-skills-md.md` (10269 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-24 inventories the single external documentation file `sources/matt-external/setup-matt-pocock-skills.md` (356,510 bytes, 71 lines) corresponding to manifest row `external/setup-matt-pocock-skills.md`.
- Key findings and cross-unit relationships:
  - `external/setup-matt-pocock-skills.md` is an HTML snapshot of `https://aihero.dev/skills-setup-matt-pocock-skills`, which serves as the public documentation and onboarding guide for the `setup-matt-pocock-skills` command and skill (`sources/matt/skills/engineering/setup-matt-pocock-skills/SKILL.md`).
  - Core architectural principle: "Config is death" — skills are intentionally immutable and opinionated, with repository variances recorded declaratively in git-committed markdown files under `docs/agents/` rather than in global user config (`~/.claude`).
  - Precondition of the engineering lifecycle: The setup skill is defined as "the run-once setup for the engineering flow, the precondition everything else assumes rather than a step in the chain." It configures three critical components:
    1. Issue tracker: GitHub (`gh` CLI), GitLab (`glab` CLI), local markdown under `.scratch/<feature>/`, or custom "Other" trackers described in prose (Jira, Linear, Azure DevOps, Beads).
    2. Triage labels: canonical 5 roles (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`).
    3. Domain docs layout: single-context (`CONTEXT.md` + `docs/adr/`) or monorepo multi-context (`CONTEXT-MAP.md`).
  - Downstream consumers:
    - `triage` reads `docs/agents/triage-labels.md` to map tracker-specific labels to the canonical roles.
    - `to-spec` and `to-tickets` publish into the tracker specified in `docs/agents/issue-tracker.md`.
    - `wayfinder` inspects the "Wayfinding operations" section of `docs/agents/issue-tracker.md` to determine how maps, child tickets, and blocking graphs are persisted.
    - `domain-modeling` lazily populates the domain doc architecture (`CONTEXT.md`, ADRs) defined during setup.
    - `ask-matt` acts as the overarching router for the entire suite.
  - Documented defects and drift:
    - The file-selection rule inspects whether `CLAUDE.md` exists rather than detecting the running harness, causing configuration to land in legacy Claude files when executing under Codex.
    - Setup generates `triage-labels.md` as a label mapping but does not physically create the labels in the tracker CLI (`gh label create`), causing subsequent `wayfinder` issue creations to fail if missing labels are passed to `gh`.
    - Guidance drift regarding re-running after skill updates: author recommendation in Q&A suggests re-running, while the skill's own closing message indicates re-running is only needed when switching trackers or starting over.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~89,000 tokens (356,510 bytes across 1 file); approximate tokens of output written: ~2,600 tokens (10,269 bytes in inventory card).
