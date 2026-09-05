---
package: addy
ledger_id: V3
canonical: .gemini/commands/ship.toml
variant: commands/ship.toml
shared_ratio: 0.92
hunks: 2
declared_provenance: none
unit: inv-addy-2
---

# .gemini/commands/ship.toml ↔ commands/ship.toml

## Why two copies exist — required
Two copies exist as harness-specific configurations of the pre-launch ship command: `.gemini/commands/ship.toml` specializes subagent invocation and persona resolution rules for Gemini CLI, whereas `commands/ship.toml` uses generic CLI terminology suitable for Claude Code and other harnesses. No generator is declared in the repository (`undeclared`), indicating manual maintenance.

## Hunks — required, verbatim, complete

### Hunk 1 — .gemini/commands/ship.toml:10 ↔ commands/ship.toml:10
- **class:** harness-substitution
- **canonical says:** "Spawn three subagents concurrently. Gemini CLI exposes each custom subagent in `agents/` as a tool with the same name — so `code-reviewer.md` becomes a `code-reviewer` tool the main agent can call, and `@code-reviewer` works as an explicit invocation in the prompt. **Issue all three subagent tool calls in a single assistant turn so they execute in parallel** — sequential calls defeat the purpose of this command." — .gemini/commands/ship.toml:10
- **variant says:** "Spawn three subagents concurrently. The CLI exposes each custom subagent in `agents/` as a tool with the same name — so `code-reviewer.md` becomes a `code-reviewer` tool the main agent can call, and `@code-reviewer` works as an explicit invocation in the prompt. **Issue all three subagent tool calls in a single assistant turn so they execute in parallel** — sequential calls defeat the purpose of this command." — commands/ship.toml:10
- **meaning:** Replaces "Gemini CLI exposes" with generic "The CLI exposes" for tool naming exposition.

### Hunk 2 — .gemini/commands/ship.toml:18-25 ↔ commands/ship.toml:18-25
- **class:** harness-substitution
- **canonical says:** "If subagents are unavailable in the current Gemini CLI version, invoke each persona's system prompt sequentially in the main context and treat their outputs as if returned in parallel — the merge phase still works." — .gemini/commands/ship.toml:18
- **variant says:** "If subagents are unavailable in the current CLI version, invoke each persona's system prompt sequentially in the main context and treat their outputs as if returned in parallel — the merge phase still works." — commands/ship.toml:18
- **meaning:** Replaces Gemini CLI-specific version checks, subagent model constraints, user-level config paths (`~/.gemini/agents/`), and scope priority tables with generic CLI wording and global configuration.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Gemini CLI custom subagent tool exposure and user configuration override hierarchy (`~/.gemini/agents/`) ↔ Claude Code custom agent resolution.
- **Defects:** none
