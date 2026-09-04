---
package: addy
ledger_id: V2
canonical: commands/code-simplify.toml
variant: .gemini/commands/code-simplify.toml
shared_ratio: 0.95
hunks: 1
declared_provenance: none
unit: inv-addy-1
---

# commands/code-simplify.toml ↔ .gemini/commands/code-simplify.toml

## Why two copies exist — required
Two copies exist because `commands/code-simplify.toml` targets Claude Code / generic CLI workflows referencing `AGENTS.md`, whereas `.gemini/commands/code-simplify.toml` targets Gemini Code Assist / Gemini CLI referencing `GEMINI.md`. There is no declared generator or build script in the repository; both files are maintained as parallel copies under their respective command root directories.

## Hunks — required, verbatim, complete

### Hunk 1 — commands/code-simplify.toml:8 ↔ .gemini/commands/code-simplify.toml:8
- **class:** harness-substitution
- **canonical says:** "1. Read AGENTS.md and study project conventions" — commands/code-simplify.toml:8
- **variant says:** "1. Read GEMINI.md and study project conventions" — .gemini/commands/code-simplify.toml:8
- **meaning:** Harness-specific instruction substitution mapping generic agent conventions (`AGENTS.md`) to Gemini-specific configuration (`GEMINI.md`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** `AGENTS.md` ↔ `GEMINI.md` conventions loading instruction.
- **Defects:** none
