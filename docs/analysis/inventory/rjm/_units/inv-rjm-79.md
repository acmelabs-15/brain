---
unit: inv-rjm-79
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-79

## Files assigned
- [x] .claude/skills/agent-harness-reference/references/official-hook-contracts.md
- [x] .claude/skills/agent-harness-reference/references/probe-evidence.md
- [x] .claude/skills/agent-harness-reference/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-agent-harness-reference-references-official-hook-contracts-md.md (11749 bytes)
- docs/analysis/inventory/rjm/claude-skills-agent-harness-reference-references-probe-evidence-md.md (6986 bytes)
- docs/analysis/inventory/rjm/claude-skills-agent-harness-reference-skill-md.md (8562 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-79.md (2401 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The `agent-harness-reference` skill is an authoritative facts and policy nexus referenced by core lifecycle entry points (`.claude/commands/build.md`, `.claude/commands/test.md`) as well as cross-harness portability and debugging skills (`ai-agents-portability-campaign`, `ai-agents-empirical-probe-toolkit`, `ai-agents-architecture-contract`, `ai-agents-debugging-playbook`).
- Crucial architecture evolution notes: ADR-097 retired all vendored hooks from `.claude/hooks/hooks.json` and deleted `_dispatch.py` from `src/copilot-cli/hooks/hooks.json`, leaving 0 vendored hook registrations while retaining 7 repo-local registrations in `.claude/settings.json`.
- A significant resilience insight in issue #4672 overturned prior guidance (issues #3321, #3332) against launcher existence checks: for PreToolUse and PostToolUse, any non-zero exit is treated by Copilot CLI as a policy denial, which would cause complete protection loss when users uninstall a wedged plugin; degrade-and-warn fail-open provides strictly superior expected security.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,100 tokens (48,286 bytes). Approximate tokens of output written: ~7,200 tokens (28,981 bytes).
