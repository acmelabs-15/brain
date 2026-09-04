---
package: addy
ledger_id: V4
canonical: commands/webperf.toml
variant: .gemini/commands/webperf.toml
shared_ratio: 0.83
hunks: 2
declared_provenance: none
unit: inv-addy-1
---

# commands/webperf.toml ↔ .gemini/commands/webperf.toml

## Why two copies exist — required
Two copies exist because `commands/webperf.toml` specifies subagent invocation conventions ("Spawn the `web-performance-auditor` subagent...") and explicit environment variable security guidance (`$CRUX_API_KEY or $GOOGLE_API_KEY environment variables — never hard-code these values in config files`), whereas `.gemini/commands/webperf.toml` uses single-agent persona adoption phrasing ("Act as the web-performance-auditor persona (agents/web-performance-auditor.md) and follow it exactly") and plain API key names. There is no declared generator or build pipeline in the repository; both files are maintained as parallel copies.

## Hunks — required, verbatim, complete

### Hunk 1 — commands/webperf.toml:11 ↔ .gemini/commands/webperf.toml:11
- **class:** harness-substitution
- **canonical says:** "- A CrUX API response (requires $CRUX_API_KEY or $GOOGLE_API_KEY environment variables — never hard-code these values in config files)" — commands/webperf.toml:11
- **variant says:** "- A CrUX API response (requires CRUX_API_KEY or GOOGLE_API_KEY)" — .gemini/commands/webperf.toml:11
- **meaning:** Explicit environment variable notation and security caution in canonical command vs plain key identifiers in Gemini command.

### Hunk 2 — commands/webperf.toml:20-27 ↔ .gemini/commands/webperf.toml:20-27
- **class:** harness-substitution
- **canonical says:** "Spawn the `web-performance-auditor` subagent (the CLI exposes each custom subagent in `agents/` as a tool with the same name). Pass it explicitly:" — commands/webperf.toml:20
- **variant says:** "Act as the web-performance-auditor persona (agents/web-performance-auditor.md) and follow it exactly. Work from:" — .gemini/commands/webperf.toml:20
- **meaning:** Multi-agent subagent delegation mechanism (subagent spawned via CLI tool call) in canonical vs in-context persona adoption in Gemini variant.

## Consequences — required
- **Phase 3 concordance rows raised:** none
- **Phase 5 parity notes:** Subagent delegation via CLI tool dispatch ↔ in-context persona adoption; environment variable security conventions.
- **Defects:** none
