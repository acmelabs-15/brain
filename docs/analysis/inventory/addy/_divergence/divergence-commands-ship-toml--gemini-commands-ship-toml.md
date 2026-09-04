---
package: addy
ledger_id: V3
canonical: commands/ship.toml
variant: .gemini/commands/ship.toml
shared_ratio: 0.92
hunks: 2
declared_provenance: none
unit: inv-addy-1
---

# commands/ship.toml ↔ .gemini/commands/ship.toml

## Why two copies exist — required
Two copies exist because `commands/ship.toml` uses generic CLI phrasing ("The CLI", "your global configuration", "the CLI's scope priority table"), whereas `.gemini/commands/ship.toml` explicitly targets the Gemini Code Assist / Gemini CLI ecosystem ("Gemini CLI", "~/.gemini/agents/", "Gemini CLI's subagent model"). There is no declared generator or build pipeline in the repository; both files are maintained as parallel copies.

## Hunks — required, verbatim, complete

### Hunk 1 — commands/ship.toml:10 ↔ .gemini/commands/ship.toml:10
- **class:** harness-substitution
- **canonical says:** "Spawn three subagents concurrently. The CLI exposes each custom subagent in `agents/` as a tool with the same name — so `code-reviewer.md` becomes a `code-reviewer` tool the main agent can call, and `@code-reviewer` works as an explicit invocation in the prompt. **Issue all three subagent tool calls in a single assistant turn so they execute in parallel** — sequential calls defeat the purpose of this command." — commands/ship.toml:10
- **variant says:** "Spawn three subagents concurrently. Gemini CLI exposes each custom subagent in `agents/` as a tool with the same name — so `code-reviewer.md` becomes a `code-reviewer` tool the main agent can call, and `@code-reviewer` works as an explicit invocation in the prompt. **Issue all three subagent tool calls in a single assistant turn so they execute in parallel** — sequential calls defeat the purpose of this command." — .gemini/commands/ship.toml:10
- **meaning:** Harness-specific substitution replacing generic "The CLI" references with "Gemini CLI".

### Hunk 2 — commands/ship.toml:18-25 ↔ .gemini/commands/ship.toml:18-25
- **class:** harness-substitution
- **canonical says:** "If subagents are unavailable in the current CLI version, invoke each persona's system prompt sequentially in the main context and treat their outputs as if returned in parallel — the merge phase still works." — commands/ship.toml:18
- **variant says:** "If subagents are unavailable in the current Gemini CLI version, invoke each persona's system prompt sequentially in the main context and treat their outputs as if returned in parallel — the merge phase still works." — .gemini/commands/ship.toml:18
- **meaning:** Harness-specific substitutions adapting fallback execution phrasing, subagent constraints, and persona resolution paths (generic configuration vs `~/.gemini/agents/`).

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Gemini CLI custom subagents exposure pattern ↔ generic CLI subagent tool binding; user-level configuration path `~/.gemini/agents/`.
- **Defects:** none
