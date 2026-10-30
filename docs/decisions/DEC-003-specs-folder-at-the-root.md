---
id: DEC-003
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: true
  real-trade-off: true
from: user
evidence: []
decided: 2026-10-29 by Peter
---
# DEC-003: The spec folder is specs/ at the root again

brain's default spec folder is `specs/SPEC-NNN-<slug>/` at the repo's root, not `docs/specs/SPEC-NNN-<slug>/`. This supersedes the answer to open question 2, the Decisions row "Spec folder location (open question 2)" in `docs/intent/workspace-and-stateful-interview.md`, which put specs under `docs/` for one reason: "every numbered document under `docs/`, one tree for the check and any index". The reason for the change: Peter, 2026-10-29.

## Considered Options

- `docs/specs/`, the answer to open question 2, which brain 0.10.0 and 0.11.0 shipped.
- `specs/` at the root, the intent doc's first layout (its Layout section). Chosen.

## Consequences

- The default moves in two places: `paths.specs` in setup-brain's `workspace.md` template, and the default in `scripts/workspace/config.ts`. A new install and a layout 1 migration get `specs/`.
- A re-run of setup-brain keeps each folder that an existing `workspace.md` names. A repo that migrated on 0.10.0 or 0.11.0 keeps `docs/specs/`, and nothing moves.
- `brain check`, `brain status`, `brain plan` and `brain new-doc` read `paths.specs`, so the decisions, research and ideas stay under `docs/` and the check reads all four folders from the one file.
- The release is a minor change, not a breaking one: no existing workspace changes.
