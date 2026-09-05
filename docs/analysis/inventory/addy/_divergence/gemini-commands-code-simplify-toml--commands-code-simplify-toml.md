---
package: addy
ledger_id: V2
canonical: .gemini/commands/code-simplify.toml
variant: commands/code-simplify.toml
shared_ratio: 0.95
hunks: 1
declared_provenance: none
unit: inv-addy-2
---

# .gemini/commands/code-simplify.toml ↔ commands/code-simplify.toml

## Why two copies exist — required
Hand copy and harness adaptation: undeclared. The repository provides a command under `commands/` and duplicates it under `.gemini/commands/`, altering the project conventions file reference to match Gemini CLI conventions.

## Hunks — required, verbatim, complete

### Hunk 1 — .gemini/commands/code-simplify.toml:5-11 ↔ commands/code-simplify.toml:5-11
- **class:** harness-substitution
- **canonical says:** "1. Read GEMINI.md and study project conventions" — .gemini/commands/code-simplify.toml:8
- **variant says:** "1. Read AGENTS.md and study project conventions" — commands/code-simplify.toml:8
- **meaning:** Maps project conventions instruction file `GEMINI.md` in Gemini CLI to `AGENTS.md` in the generic CLI command.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** `GEMINI.md` (Gemini CLI) ↔ `AGENTS.md` (generic / Claude Code) convention file resolution.
- **Defects:** none
