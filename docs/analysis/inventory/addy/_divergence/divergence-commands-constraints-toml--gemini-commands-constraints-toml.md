---
package: addy
ledger_id: V1
canonical: commands/constraints.toml
variant: .gemini/commands/constraints.toml
shared_ratio: 0.95
hunks: 1
declared_provenance: none
unit: inv-addy-1
---

# commands/constraints.toml ↔ .gemini/commands/constraints.toml

## Why two copies exist — required
Two copies exist because `commands/constraints.toml` targets Claude Code / generic CLI workflows referencing `CLAUDE.md`, whereas `.gemini/commands/constraints.toml` targets Gemini Code Assist / Gemini CLI referencing `GEMINI.md`. There is no declared generator or build script in the repository; both files are maintained as parallel copies under their respective command root directories.

## Hunks — required, verbatim, complete

### Hunk 1 — commands/constraints.toml:24 ↔ .gemini/commands/constraints.toml:24
- **class:** harness-substitution
- **canonical says:** "6. **Point the agent at it.** Add a line to AGENTS.md and CLAUDE.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — commands/constraints.toml:24
- **variant says:** "6. **Point the agent at it.** Add a line to AGENTS.md and GEMINI.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — .gemini/commands/constraints.toml:24
- **meaning:** Harness-specific instruction substitution mapping Claude Code configuration file (`CLAUDE.md`) to Gemini Code Assist configuration file (`GEMINI.md`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** `CLAUDE.md` ↔ `GEMINI.md` harness configuration reference.
- **Defects:** none
