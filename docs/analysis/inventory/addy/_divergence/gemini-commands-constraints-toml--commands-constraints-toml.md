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
Hand copy and harness adaptation: undeclared. The repository provides commands under `commands/` for generic CLI / Claude Code environments and duplicates them under `.gemini/commands/` for Gemini CLI, substituting harness-specific configuration file references.

## Hunks — required, verbatim, complete

### Hunk 1 — .gemini/commands/constraints.toml:21-27 ↔ commands/constraints.toml:21-27
- **class:** harness-substitution
- **canonical says:** "6. **Point the agent at it.** Add a line to AGENTS.md and GEMINI.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — .gemini/commands/constraints.toml:24
- **variant says:** "6. **Point the agent at it.** Add a line to AGENTS.md and CLAUDE.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — commands/constraints.toml:24
- **meaning:** Maps the harness project-instructions file `GEMINI.md` in Gemini CLI to `CLAUDE.md` in Claude Code alongside root `AGENTS.md`.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** `GEMINI.md` (Gemini CLI) ↔ `CLAUDE.md` (Claude Code) convention pointer mapping for `CONSTRAINTS.md` enforcement.
- **Defects:** none
