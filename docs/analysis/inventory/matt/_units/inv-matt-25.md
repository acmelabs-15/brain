---
unit: inv-matt-25
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-25

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/tdd.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-tdd-md.md` (9650 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-25 covers `external/tdd.md` (360,633 bytes, 70 lines), the external HTML documentation snapshot for Matt Pocock's `/tdd` engineering skill published at `https://aihero.dev/skills-tdd` and saved under `sources/matt-external/tdd.md`.
- Architectural relationships with other skills in Matt's package:
  - `to-spec`: Agrees on public test seams up front before any code or tests exist.
  - `implement`: Drives `tdd` per ticket during the build step of the main flow ("grill-with-docs → to-spec → to-tickets → implement → code-review").
  - `code-review`: Verifies afterwards that only agreed seams were tested, and takes ownership of refactoring (Fowler code smells) which was excised from `tdd`.
  - `codebase-design`: Shared vocabulary provider for deep modules, seams, adapters, leverage, and locality; interface design notes were moved here in v1.0.
  - `ask-matt`: High-level router directing users when uncertain which skill fits their situation.
- Core methodological principles:
  - Defines `tdd` as a reference rather than a driver; it holds the standards and rules of the loop rather than executing an autonomous loop directly.
  - Enforces red-green cycles and vertical slicing via tracer bullets, avoiding horizontal slicing (batching tests before implementation).
  - Requires pre-agreed public seams before any test is written; mocks are strictly limited to external system boundaries (network APIs, time, clock, filesystem).
  - Outlines three suite-ruining anti-patterns: implementation-coupled, tautological, and horizontal slicing.
- Operational friction and open issues:
  - Open issue #589: The description still says "red-green-refactor", but refactoring was intentionally dropped in June 2026.
  - Open issue #607: Candidate seams are presented as bare names without trade-offs or failure-mode context, leading to user friction when choosing seams.
  - Open issue #746: The skill decides where seams go, but lacks logic to judge whether a change is worth the TDD loop at all (e.g. trivial glue or CRUD changes).
  - Model compliance: Agents frequently default to writing implementation before tests despite instructions ("I read it. I just defaulted to my normal habit.").
- Duplication ledger:
  - None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence cards needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~90,150 tokens (360,633 bytes raw HTML snapshot; ~2,612 tokens core article text); approximate tokens of output written: ~2,500 tokens across inventory card (9,650 bytes) and unit report (~2,300 bytes).
