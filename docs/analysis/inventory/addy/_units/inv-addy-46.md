---
unit: inv-addy-46
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-46

## Files assigned
- [x] sources/addy/skills/source-driven-development/SKILL.md (9949 bytes, 217 lines)
- [x] sources/addy/skills/spec-driven-development/SKILL.md (12163 bytes, 246 lines)
- [x] sources/addy/skills/test-driven-development/SKILL.md (16483 bytes, 399 lines)
- [x] sources/addy/skills/using-agent-skills/SKILL.md (10426 bytes, 193 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-source-driven-development-skill-md.md (6586 bytes)
- docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md (7454 bytes)
- docs/analysis/inventory/addy/skills-test-driven-development-skill-md.md (10415 bytes)
- docs/analysis/inventory/addy/skills-using-agent-skills-skill-md.md (10010 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/source-driven-development/SKILL.md`: Interacts closely with `hooks/SDD-CACHE.md` (unit inv-addy-34) which specifies a citation caching mechanism across sessions. Note that `hooks/SDD-CACHE.md:51` instructs the user/agent to "Use `/source-driven-development`", but no slash command `/source-driven-development` exists in the repository.
- `skills/spec-driven-development/SKILL.md`: Invoked by slash command `/spec` (`.claude/commands/spec.md` and `commands/spec.toml` in inv-addy-1). Delegates task and planning formats to `planning-and-task-breakdown` (inv-addy-8). Mentions module specs (`SPEC-identity.md`, `SPEC-billing.md`) resulting from capability maps, whereas `.claude/commands/spec.md` specifies `SPEC.md`.
- `skills/test-driven-development/SKILL.md`: Invoked by slash commands `/test` and `/build` (`.claude/commands/test.md`, `.claude/commands/build.md` in inv-addy-1). References `../../references/testing-patterns.md` (inv-addy-31) and `browser-testing-with-devtools` (inv-addy-2).
- `skills/using-agent-skills/SKILL.md`: The overarching meta-skill and routing entry point for all 24 lifecycle skills. Automatically injected on session start via `hooks/session-start.sh` (inv-addy-33). References the global `../../references/definition-of-done.md` (inv-addy-31).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~12,255 tokens (49,021 bytes across 4 files)
Approximate tokens of output written: ~8,616 tokens (34,465 bytes across 4 cards)
