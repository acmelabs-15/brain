---
unit: inv-matt-41
phase: 1
package: matt
session: 003
subagent_returned: complete
---

# Unit inv-matt-41

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/tdd/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/tdd/mocking.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/tdd/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/tdd/tests.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/to-spec/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/to-spec/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/to-tickets/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/to-tickets/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/triage/AGENT-BRIEF.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/triage/agents/openai.yaml`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/triage/OUT-OF-SCOPE.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/matt/skills/engineering/triage/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/matt/skills-engineering-tdd-agents-openai-yaml.md` (1627 bytes)
- `docs/analysis/inventory/matt/skills-engineering-tdd-mocking-md.md` (2150 bytes)
- `docs/analysis/inventory/matt/skills-engineering-tdd-skill-md.md` (4070 bytes)
- `docs/analysis/inventory/matt/skills-engineering-tdd-tests-md.md` (1913 bytes)
- `docs/analysis/inventory/matt/skills-engineering-to-spec-agents-openai-yaml.md` (1569 bytes)
- `docs/analysis/inventory/matt/skills-engineering-to-spec-skill-md.md` (3430 bytes)
- `docs/analysis/inventory/matt/skills-engineering-to-tickets-agents-openai-yaml.md` (1682 bytes)
- `docs/analysis/inventory/matt/skills-engineering-to-tickets-skill-md.md` (3524 bytes)
- `docs/analysis/inventory/matt/skills-engineering-triage-agent-brief-md.md` (2935 bytes)
- `docs/analysis/inventory/matt/skills-engineering-triage-agents-openai-yaml.md` (1557 bytes)
- `docs/analysis/inventory/matt/skills-engineering-triage-out-of-scope-md.md` (2628 bytes)
- `docs/analysis/inventory/matt/skills-engineering-triage-skill-md.md` (4885 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-matt-41 inventories 12 files across 4 key engineering skills:
  - `tdd`: reference specification defining red-green vertical slicing at confirmed public seams, mocking only at system boundaries, and excising refactoring to `code-review`.
  - `to-spec`: non-interview conversational synthesis into issue tracker specifications, anchoring testing by confirming the highest possible test seam.
  - `to-tickets`: DAG decomposition of specs/plans into self-contained tracer-bullet tickets with explicit blocking edges, handling wide refactors via expand-contract sequences.
  - `triage`: state machine for evaluating external issues and PRs (treating PRs as issues with attached code), featuring claim verification, `.out-of-scope/` deduplication, and durable agent brief authoring.
- None of this unit's files appear in `docs/analysis/manifest/matt-duplicates.md`.
- No scripts shipped with these skills.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~8,900 tokens (35,627 bytes across 12 files); approximate tokens of output written: ~8,000 tokens (31,970 bytes across 12 inventory cards).
