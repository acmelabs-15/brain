---
id: DEC-006
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: true
  real-trade-off: true
from: user
evidence: []
decided: 2026-11-04 by Peter
---
# DEC-006: Drop the ask-user-question upstream; brain keeps the skill as its own files

acmelabs-15/ask-user-question is archived and will become private. `bun run sync` and `bun run sync -- --report` fetch every pin from codeload.github.com without sign-in (`scripts/sync/lib/fetch.ts`), so both would fail once the repo is private. brain drops the ask-user-question upstream first, and then Peter makes the repo private. `skills/ask-user-question/` stays as it is, as brain's own files, with no pin and no seed entry. This record supersedes DEC-002, which kept the pin so that `--report` showed upstream changes.

## Consequences

- `bun run sync -- --report` no longer shows upstream changes for `skills/ask-user-question/`.
- `bun run sync -- --check` does not change for these files, because it never guarded them (DEC-002).
