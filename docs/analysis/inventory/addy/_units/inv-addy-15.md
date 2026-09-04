---
unit: inv-addy-15
phase: 1
package: addy
session: 014
subagent_returned: complete
---

# Unit inv-addy-15

## Files assigned
- [x] `external/doubt-driven-development.md` (26,502 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-doubt-driven-development-md.md` (16,780 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-15.md` (3,429 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Build Phase Placement vs Define Contradiction (inv-addy-15 vs inv-addy-18 / interview-me)**:
  `external/doubt-driven-development.md:5, 12` explicitly positions `doubt-driven-development` in the `Build phase`, aligning with `CLAUDE.md:23`, `README.md:253, 361`, and `skills/using-agent-skills/SKILL.md:176`. However, `skills/interview-me/SKILL.md:14` contradicts this by categorizing `doubt-driven-development` alongside `idea-refine` and `spec-driven-development` as one of "The other Define-phase skills" that "stress-tests a plan after you've drafted one."
- **Command Binding Ambiguity (/build vs inv-addy-23 incremental-implementation)**:
  The external page displays `Command /build` for `doubt-driven-development` (`external/doubt-driven-development.md:12`). However, `/build` (`commands/build.toml:1-44`, `.claude/commands/build.md:1-44`) primarily executes `incremental-implementation` (`inv-addy-23`) alongside `test-driven-development` (`inv-addy-22`). It references `doubt-driven-development` solely as a conditional exception handler in autonomous mode (`/build auto`, line 38) when a task is high-risk or irreversible. The repository ships no dedicated `/doubt` slash command.
- **Omission in AGENTS.md Lifecycle Mapping**:
  `AGENTS.md:42` defines the implicit command lifecycle for OpenCode as `BUILD → incremental-implementation + test-driven-development`, completely omitting `doubt-driven-development`.
- **Anatomy Template Drift**:
  The external page asserts a rigid 6-part anatomy ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"). In the underlying repository file `skills/doubt-driven-development/SKILL.md`, Section 03 is titled `## The Process` (line 49), Section 04 is titled `## Common Rationalizations` (line 193), and the file features an unrepresented major section `## Loading Constraints` (line 42) detailing the prohibition of running as a persona or inside subagents.
- **Orchestration and Subagent Constraints**:
  `skills/doubt-driven-development/SKILL.md:42-48` imposes a load-bearing architectural constraint: the skill must be run by the main-session orchestrator so that Step 3 (DOUBT) can spawn a fresh-context reviewer. Attaching the skill to a subagent persona is forbidden as an anti-pattern ("personas do not invoke other personas"), and running it in subagents forces a degraded self-questioning fallback.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~6,625 tokens (26,502 bytes across 1 file).
- Approximate tokens of output written: ~4,400 tokens across 1 inventory card and 1 unit report.
