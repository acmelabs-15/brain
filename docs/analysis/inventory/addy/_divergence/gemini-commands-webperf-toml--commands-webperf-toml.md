---
package: addy
ledger_id: V4
canonical: .gemini/commands/webperf.toml
variant: commands/webperf.toml
shared_ratio: 0.83
hunks: 2
declared_provenance: none
unit: inv-addy-2
---

# .gemini/commands/webperf.toml ↔ commands/webperf.toml

## Why two copies exist — required
Two copies exist representing different invocation mechanisms and environment recommendations: `.gemini/commands/webperf.toml` instructs the primary agent to directly adopt the auditor persona within the Gemini CLI session, while `commands/webperf.toml` instructs the harness to spawn the auditor as an isolated subagent tool and provides stricter guidance against hardcoding API keys. No generator is declared in the repository (`undeclared`).

## Hunks — required, verbatim, complete

### Hunk 1 — .gemini/commands/webperf.toml:11 ↔ commands/webperf.toml:11
- **class:** content
- **canonical says:** "- A CrUX API response (requires CRUX_API_KEY or GOOGLE_API_KEY)" — .gemini/commands/webperf.toml:11
- **variant says:** "- A CrUX API response (requires $CRUX_API_KEY or $GOOGLE_API_KEY environment variables — never hard-code these values in config files)" — commands/webperf.toml:11
- **meaning:** Variant adds explicit credential safety instructions advising the use of environment variables and warning against hard-coding API keys in configuration files.

### Hunk 2 — .gemini/commands/webperf.toml:20-27 ↔ commands/webperf.toml:20-27
- **class:** harness-substitution
- **canonical says:** "Act as the web-performance-auditor persona (agents/web-performance-auditor.md) and follow it exactly. Work from:" — .gemini/commands/webperf.toml:20
- **variant says:** "Spawn the `web-performance-auditor` subagent (the CLI exposes each custom subagent in `agents/` as a tool with the same name). Pass it explicitly:" — commands/webperf.toml:20
- **meaning:** Substitutes execution mechanism: canonical instructs the main agent to act directly as the auditor persona, whereas variant spawns a dedicated subagent tool.

## Consequences — required
- **Phase 3 concordance rows raised:** CrUX API key credential handling and environment variable configuration security guidance.
- **Phase 5 parity notes:** Direct persona adoption (`Act as the web-performance-auditor persona`) ↔ subagent tool spawning (`Spawn the web-performance-auditor subagent`).
- **Defects:** none
