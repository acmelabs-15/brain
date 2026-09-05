---
unit: inv-matt-13
phase: 1
package: matt
session: 002
subagent_returned: complete
---

# Unit inv-matt-13

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt-external/diagnosing-bugs.md`

## Outputs produced
- `docs/analysis/inventory/matt/external-diagnosing-bugs-md.md` (9458 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-13 covers `external/diagnosing-bugs.md` (358,695 bytes, 79 lines), the external HTML documentation snapshot for `/diagnosing-bugs` hosted at `https://aihero.dev/skills-diagnosing-bugs`.
- Architectural relationships with other skills in Matt's package:
  - `triage`: Sits upstream of `diagnosing-bugs` for raw bug reports from external users. The external doc explicitly notes that `triage` Step 3 is a shallower, bounded version of `diagnosing-bugs` Phases 1–2, but neither skill references the other.
  - `improve-codebase-architecture`: Directly invoked by `diagnosing-bugs` Phase 5 via an architectural escape hatch: when an agent cannot lock down a bug because no correct test seam exists at the call site, the absence is documented as a finding and routed to `improve-codebase-architecture` for post-mortem refactoring.
  - `prototype` and `tdd`: Positioned as situational alternatives to `diagnosing-bugs` (exploring design questions vs. test-first planned behavior vs. isolating defects).
  - `ask-matt`: Routes "Something's broken" inquiries directly to `diagnosing-bugs`.
- Documentation drift findings:
  - Redaction: External doc FAQ asserts that repro outputs and artifacts are not sanitised by instruction and that redaction guardrails remain open/unimplemented (GitHub issue #674). However, in-repo `skills/engineering/diagnosing-bugs/SKILL.md:12-14` already specifies an explicit `## Redact` instruction ("Redact every secret first: write <REDACTED> in its place.").
  - Rename: Documents that `/diagnose` was renamed to `/diagnosing-bugs` in v1.0.0.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md` (no ledger duplicates; no divergence card needed).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~89,700 tokens (358,695 bytes raw HTML snapshot; ~3,000 words / ~4,000 tokens core article text); approximate tokens of output written: ~3,400 tokens across inventory card (9,458 bytes) and unit report.
