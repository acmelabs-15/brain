---
package: addy
ledger_id: V4
canonical: commands/webperf.toml
variant: .gemini/commands/webperf.toml
shared_ratio: 0.83
hunks: 2
declared_provenance: none
unit: inv-addy-4
---

# commands/webperf.toml ↔ .gemini/commands/webperf.toml

## Why two copies exist — required
Two copies exist as harness-adapted variants between generic CLI environments (`commands/webperf.toml`) and Gemini CLI (`.gemini/commands/webperf.toml`). The repository maintains both copies by hand without an automated build script or generator declaration.

## Hunks — required, verbatim, complete

### Hunk 1 — commands/webperf.toml:8-14 ↔ .gemini/commands/webperf.toml:8-14
- **class:** content
- **canonical says:** "- A CrUX API response (requires $CRUX_API_KEY or $GOOGLE_API_KEY environment variables — never hard-code these values in config files)" — commands/webperf.toml:11
- **variant says:** "- A CrUX API response (requires CRUX_API_KEY or GOOGLE_API_KEY)" — .gemini/commands/webperf.toml:11
- **meaning:** Adds an explicit security warning against hardcoding API keys in configuration files and specifies shell environment variable syntax (`$CRUX_API_KEY` / `$GOOGLE_API_KEY`).

### Hunk 2 — commands/webperf.toml:17-30 ↔ .gemini/commands/webperf.toml:17-30
- **class:** harness-substitution
- **canonical says:** "Spawn the `web-performance-auditor` subagent (the CLI exposes each custom subagent in `agents/` as a tool with the same name). Pass it explicitly:" — commands/webperf.toml:20
- **variant says:** "Act as the web-performance-auditor persona (agents/web-performance-auditor.md) and follow it exactly. Work from:" — .gemini/commands/webperf.toml:20
- **meaning:** Switches from in-context persona adoption (`Act as the web-performance-auditor persona`) in Gemini CLI to dedicated subagent tool invocation (`Spawn the web-performance-auditor subagent`) in Claude Code / CLI.

## Consequences — required
- **Phase 3 concordance rows raised:** Candidate concordance row for API key specification hygiene and secret handling rules in performance tooling.
- **Phase 5 parity notes:** Maps subagent tool spawning (`Spawn the subagent`) to in-context persona adoption (`Act as the persona`).
- **Defects:** none
