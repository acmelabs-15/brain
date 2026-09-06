---
unit: inv-matt-41
phase: 1
package: matt
session: 011
subagent_returned: complete
---

# Unit inv-matt-41

## Files assigned
- [x] sources/matt/skills/engineering/tdd/agents/openai.yaml
- [x] sources/matt/skills/engineering/tdd/mocking.md
- [x] sources/matt/skills/engineering/tdd/SKILL.md
- [x] sources/matt/skills/engineering/tdd/tests.md
- [x] sources/matt/skills/engineering/to-spec/agents/openai.yaml
- [x] sources/matt/skills/engineering/to-spec/SKILL.md
- [x] sources/matt/skills/engineering/to-tickets/agents/openai.yaml
- [x] sources/matt/skills/engineering/to-tickets/SKILL.md
- [x] sources/matt/skills/engineering/triage/AGENT-BRIEF.md
- [x] sources/matt/skills/engineering/triage/agents/openai.yaml
- [x] sources/matt/skills/engineering/triage/OUT-OF-SCOPE.md
- [x] sources/matt/skills/engineering/triage/SKILL.md

## Outputs produced
- docs/analysis/inventory/matt/skills-engineering-tdd-agents-openai-yaml.md (2032 bytes)
- docs/analysis/inventory/matt/skills-engineering-tdd-mocking-md.md (2550 bytes)
- docs/analysis/inventory/matt/skills-engineering-tdd-skill-md.md (4736 bytes)
- docs/analysis/inventory/matt/skills-engineering-tdd-tests-md.md (2346 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-spec-agents-openai-yaml.md (2102 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-spec-skill-md.md (4720 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-tickets-agents-openai-yaml.md (2175 bytes)
- docs/analysis/inventory/matt/skills-engineering-to-tickets-skill-md.md (4765 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-agent-brief-md.md (4023 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-agents-openai-yaml.md (2135 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-out-of-scope-md.md (3167 bytes)
- docs/analysis/inventory/matt/skills-engineering-triage-skill-md.md (5247 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All Phase 1V verification findings from `_verification.md` for `inv-matt-41` were addressed:
  - `skills/engineering/tdd/agents/openai.yaml`: missing concepts `interface`, `display_name`, `short_description` included.
  - `skills/engineering/tdd/mocking.md`: missing concepts `Time/randomness` (line 7), `File system` (line 8), `generic fetchers` (line 37) included.
  - `skills/engineering/to-spec/agents/openai.yaml`: missing concepts `interface`, `display_name`, `short_description`, `policy` included.
  - `skills/engineering/to-tickets/agents/openai.yaml`: missing concepts `interface`, `display_name`, `short_description`, `policy` included.
  - `skills/engineering/triage/agents/openai.yaml`: missing concepts `interface`, `display_name`, `short_description`, `policy` included.
  - `openai.yaml` files consistently list parent skills under `## Invoked by` while clarifying harness companion status.
- `skills/engineering/to-spec/SKILL.md`, `skills/engineering/to-tickets/SKILL.md`, and `skills/engineering/triage/SKILL.md` all instruct the user to run `/setup-matt-pocock-skills` if tracker configuration is missing, which exists as a skill at `skills/engineering/setup-matt-pocock-skills/` rather than a slash command under `commands/`.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~35,627 bytes (~8,900 tokens). Output written: ~42,218 bytes (~10,500 tokens).
