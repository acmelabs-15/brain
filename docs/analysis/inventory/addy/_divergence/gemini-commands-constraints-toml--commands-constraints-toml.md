---
package: addy
ledger_id: V1
canonical: .gemini/commands/constraints.toml
variant: commands/constraints.toml
shared_ratio: 0.95
hunks: 1
declared_provenance: none
unit: inv-addy-2
---

# .gemini/commands/constraints.toml ↔ commands/constraints.toml

## Why two copies exist — required
Two copies exist as harness-specific ports of the constraints command: `.gemini/commands/constraints.toml` targets Gemini CLI, while `commands/constraints.toml` targets Claude Code. No build script or generator is declared in the repository (`undeclared`), indicating they are manually maintained parallel variants.

## Hunks — required, verbatim, complete

### Hunk 1 — .gemini/commands/constraints.toml:24 ↔ commands/constraints.toml:24
- **class:** harness-substitution
- **canonical says:** "6. **Point the agent at it.** Add a line to AGENTS.md and GEMINI.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — .gemini/commands/constraints.toml:24
- **variant says:** "6. **Point the agent at it.** Add a line to AGENTS.md and CLAUDE.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — commands/constraints.toml:24
- **meaning:** Substitutes the harness configuration file: Gemini CLI directs agents to `GEMINI.md`, whereas Claude Code directs agents to `CLAUDE.md`.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** `GEMINI.md` ↔ `CLAUDE.md` harness instruction file convention for agent constraint pointers.
- **Defects:** none
