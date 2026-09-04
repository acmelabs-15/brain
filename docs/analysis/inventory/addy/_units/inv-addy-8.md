---
unit: inv-addy-8
phase: 1
package: addy
session: 013
subagent_returned: complete
---

# Unit inv-addy-8

## Files assigned
- [x] `external/browser-testing-with-devtools.md` (23,834 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/external-browser-testing-with-devtools-md.md` (16,264 bytes)
- `docs/analysis/inventory/addy/_units/inv-addy-8.md` (3,271 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- **Verify Phase Alignment and Relationship to inv-addy-21 / inv-addy-22**:
  `external/browser-testing-with-devtools.md` positions `browser-testing-with-devtools` alongside `debugging-and-error-recovery` (`inv-addy-21`) in the `Verify phase`, explicitly associating the phase with command `/test` (which primarily executes `test-driven-development`, `inv-addy-22`).
- **Command Binding Ambiguity**:
  While the external web landing page pairs `browser-testing-with-devtools` with `Command /test`, in-repo command definitions in `commands/test.toml:4, 18`, `.claude/commands/test.md:5, 19`, and `.gemini/commands/test.toml:4, 18` establish that `/test` primarily drives `test-driven-development`, invoking `browser-testing-with-devtools` only conditionally when browser issues arise. The repository contains no dedicated slash command (e.g. `/devtools` or `/browser-test`) for this skill.
- **Skill Anatomy Template vs Implementation Reality**:
  The external page asserts a rigid 6-part anatomy ("01 Overview", "02 When to Use", "03 Process", "04 Rationalizations", "05 Red Flags", "06 Verification"). However, the underlying repository skill `skills/browser-testing-with-devtools/SKILL.md` contains no section titled `Process`, providing instead multiple domain-specific sections (`Setting Up Chrome DevTools MCP`, `Security Boundaries`, `The DevTools Debugging Workflow`, `Writing Test Plans for Complex UI Bugs`, `Screenshot-Based Verification`, `Console Analysis Patterns`, `Accessibility Verification with DevTools`), and titles its rationalizations `## Common Rationalizations`.
- **MCP Server Dependency**:
  The external page presents `npx skills add addyosmani/agent-skills --skill browser-testing-with-devtools` as an isolated install, but in practice the skill requires external runtime configuration of the `chrome-devtools` MCP server in `.mcp.json` or agent harness settings to function.
- **Implicit Lifecycle Mapping Gap in AGENTS.md**:
  While `CLAUDE.md:24`, `README.md:261, 365`, and `skills/using-agent-skills/SKILL.md:181` classify `browser-testing-with-devtools` under `Verify`, `AGENTS.md:43` lists only `VERIFY → debugging-and-error-recovery`, omitting `browser-testing-with-devtools` from the implicit command lifecycle.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~5,958 tokens (23,834 bytes across 1 file).
- Approximate tokens of output written: ~4,200 tokens across 1 inventory card and 1 unit report.
