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
Two copies exist as harness-specific ports of the code simplification command: `.gemini/commands/code-simplify.toml` targets Gemini CLI, while `commands/code-simplify.toml` targets Claude Code. No generator or build output relationship is declared in the repository (`undeclared`), indicating they are manually maintained parallel variants.

## Hunks — required, verbatim, complete

### Hunk 1 — .gemini/commands/code-simplify.toml:8 ↔ commands/code-simplify.toml:8
- **class:** harness-substitution
- **canonical says:** "1. Read GEMINI.md and study project conventions" — .gemini/commands/code-simplify.toml:8
- **variant says:** "1. Read AGENTS.md and study project conventions" — commands/code-simplify.toml:8
- **meaning:** Substitutes the project instruction file name: Gemini CLI references `GEMINI.md`, while the root command references `AGENTS.md`.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** `GEMINI.md` ↔ `AGENTS.md` harness instruction file convention for code conventions.
- **Defects:** none
