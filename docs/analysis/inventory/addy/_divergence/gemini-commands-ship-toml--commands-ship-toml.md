---
package: addy
ledger_id: V3
canonical: .gemini/commands/ship.toml
variant: commands/ship.toml
shared_ratio: 0.92
hunks: 2
declared_provenance: none
unit: inv-addy-4
---

# .gemini/commands/ship.toml ↔ commands/ship.toml

## Why two copies exist — required
Two copies exist as platform-specific variants between Gemini CLI (`.gemini/commands/ship.toml`) and Claude Code / generic CLI environments (`commands/ship.toml`). The repository maintains both copies by hand without an explicit generator declaration.

## Hunks — required, verbatim, complete

### Hunk 1 — .gemini/commands/ship.toml:7-13 ↔ commands/ship.toml:7-13
- **class:** harness-substitution
- **canonical says:** "Spawn three subagents concurrently. Gemini CLI exposes each custom subagent in `agents/` as a tool with the same name — so `code-reviewer.md` becomes a `code-reviewer` tool the main agent can call, and `@code-reviewer` works as an explicit invocation in the prompt. **Issue all three subagent tool calls in a single assistant turn so they execute in parallel** — sequential calls defeat the purpose of this command." — .gemini/commands/ship.toml:10
- **variant says:** "Spawn three subagents concurrently. The CLI exposes each custom subagent in `agents/` as a tool with the same name — so `code-reviewer.md` becomes a `code-reviewer` tool the main agent can call, and `@code-reviewer` works as an explicit invocation in the prompt. **Issue all three subagent tool calls in a single assistant turn so they execute in parallel** — sequential calls defeat the purpose of this command." — commands/ship.toml:10
- **meaning:** Replaces Gemini CLI-specific naming with generic CLI terminology for tool exposure of subagents.

### Hunk 2 — .gemini/commands/ship.toml:15-28 ↔ commands/ship.toml:15-28
- **class:** harness-substitution
- **canonical says:** "If subagents are unavailable in the current Gemini CLI version, invoke each persona's system prompt sequentially in the main context and treat their outputs as if returned in parallel — the merge phase still works." — .gemini/commands/ship.toml:18
- **variant says:** "If subagents are unavailable in the current CLI version, invoke each persona's system prompt sequentially in the main context and treat their outputs as if returned in parallel — the merge phase still works." — commands/ship.toml:18
- **meaning:** Replaces Gemini-specific references ("Gemini CLI", "Gemini CLI's subagent model", and `~/.gemini/agents/`) with generic CLI equivalents ("CLI", "CLI's subagent model", and "your global configuration").

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Maps Gemini CLI subagent resolution conventions (`~/.gemini/agents/`) to Claude Code / generic configuration scope priority.
- **Defects:** none
