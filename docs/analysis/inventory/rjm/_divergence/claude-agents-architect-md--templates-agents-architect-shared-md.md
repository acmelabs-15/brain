---
package: rjm
ledger_id: V29
canonical: .claude/agents/architect.md
variant: templates/agents/architect.shared.md
shared_ratio: 0.69
hunks: 10
declared_provenance: none
unit: inv-rjm-64
---

# .claude/agents/architect.md ↔ templates/agents/architect.shared.md

## Why two copies exist — required
Platform-specific harness adaptation and multi-target template maintenance: undeclared. `.claude/agents/architect.md` is configured for Claude Code runtime, declaring Opus model tier, isolation requirement, direct file editing scopes (`.agents/architecture/`), Memory Router CLI, and extensive reversibility/lock-in checklists. `templates/agents/architect.shared.md` is the cross-platform template declaring Copilot toolsets, strategic knowledge memories (Chesterton's fence, path dependence, core vs context), and extended MADR templates incorporating legacy migration patterns and engineering frameworks.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/architect.md:1-12 ↔ templates/agents/architect.shared.md:1-13
- **class:** harness-substitution
- **canonical says:** "model: opus" — .claude/agents/architect.md:4
- **variant says:** "tools_vscode:" — templates/agents/architect.shared.md:7
- **meaning:** Replaces Claude Code frontmatter metadata (`model: opus`, `metadata.role: strategic`, `isolation_required: true`) with cross-platform tool declarations (`tools_vscode`, `tools_copilot`).

### Hunk 2 — .claude/agents/architect.md:20-28 ↔ templates/agents/architect.shared.md:21-34
- **class:** content
- **canonical says:** "- Diagrams: mermaid format, max 15 nodes, max 3 nesting levels" — .claude/agents/architect.md:23
- **variant says:** "Agent-specific requirements:" — templates/agents/architect.shared.md:25
- **meaning:** Expands style guide section with explicit agent-specific bullet points in the shared template.

### Hunk 3 — .claude/agents/architect.md:32-51 ↔ templates/agents/architect.shared.md:38-66
- **class:** content
- **canonical says:** "## Claude Code Tools" — .claude/agents/architect.md:35
- **variant says:** "## Strategic Knowledge Available" — templates/agents/architect.shared.md:40
- **meaning:** Canonical lists Claude Code tool capabilities and Memory Router scripts; variant provides a comprehensive catalog of architectural Serena memories (Chesterton's fence, path-dependence, core-vs-context, Conway's law, CAP theorem).

### Hunk 4 — .claude/agents/architect.md:271-277 ↔ templates/agents/architect.shared.md:286-299
- **class:** content
- **canonical says:** "### Confirmation" — .claude/agents/architect.md:271
- **variant says:** "### Legacy Migration Strategy" — templates/agents/architect.shared.md:290
- **meaning:** Shared template adds a required Legacy Migration Strategy section to the ADR template.

### Hunk 5 — .claude/agents/architect.md:298-308 ↔ templates/agents/architect.shared.md:320-364
- **class:** content
- **canonical says:** "## More Information" — .claude/agents/architect.md:302
- **variant says:** "## Strategic Considerations" — templates/agents/architect.shared.md:324
- **meaning:** Shared template adds Strategic Considerations and Engineering Knowledge Applied checklist (Cynefin, Wardley Mapping, Three Horizons, Conway's Law, Lindy Effect) to the ADR template.

### Hunk 6 — .claude/agents/architect.md:317-341 ↔ templates/agents/architect.shared.md:373-406
- **class:** content
- **canonical says:** "When reviewing an ADR exception request, apply Chesterton's Fence analysis:" — .claude/agents/architect.md:320
- **variant says:** "When reviewing an ADR exception request, apply Chesterton's Fence analysis per ADR-053." — templates/agents/architect.shared.md:375
- **meaning:** Shared template cites ADR-053 directly and expands exception rejection criteria with concrete formatting checklists.

### Hunk 7 — .claude/agents/architect.md:350-412 ↔ templates/agents/architect.shared.md:415-423
- **class:** content
- **canonical says:** "## Reversibility Assessment" — .claude/agents/architect.md:356
- **variant says:** "" — templates/agents/architect.shared.md:423
- **meaning:** Canonical includes extensive Reversibility Assessment and Vendor Lock-in Assessment sections with explicit lock-in levels (None through Critical) that are omitted in the shared template.

### Hunk 8 — .claude/agents/architect.md:500-505 ↔ templates/agents/architect.shared.md:511-675
- **class:** content
- **canonical says:** "A document that exceeds these caps signals either fan-out across unrelated decisions" — .claude/agents/architect.md:501
- **variant says:** "## Strategic Architecture Principles" — templates/agents/architect.shared.md:553
- **meaning:** Inserts strategic architecture principles (Chesterton's Fence, Path Dependence, Second-System Effect, Core vs Context) and legacy modernization patterns (Strangler Fig, Expand/Contract, Sacrificial Architecture).

### Hunk 9 — .claude/agents/architect.md:549-606 ↔ templates/agents/architect.shared.md:718-718
- **class:** harness-substitution
- **canonical says:** "## Memory Protocol" — .claude/agents/architect.md:552
- **variant says:** "" — templates/agents/architect.shared.md:718
- **meaning:** Removes Claude Code-specific Memory Router and Degraded Mode Protocol sections, which were moved and adapted to cloudmcp-manager tools earlier in the shared template.

### Hunk 10 — .claude/agents/architect.md:652-658 ↔ templates/agents/architect.shared.md:769-775
- **class:** harness-substitution
- **canonical says:** "4. Return to orchestrator: \"Architecture review complete. Recommend orchestrator routes to [agent] for [next step]\"" — .claude/agents/architect.md:655
- **variant says:** "4. Announce: \"Architecture review complete. Handing off to [agent] for [next step]\"" — templates/agents/architect.shared.md:772
- **meaning:** Adapts handoff return instruction from subagent return recommendation to direct announcement phrasing.

## Consequences — required
- **Phase 3 concordance rows raised:** Candidate concordance row on ADR template extensions (Legacy Migration Strategy, Strategic Considerations, Engineering Knowledge Applied vs Reversibility and Vendor Lock-in checklists).
- **Phase 5 parity notes:** Claude Code frontmatter execution constraints (`model: opus`, `isolation_required: true`) ↔ Copilot toolset bindings (`tools_vscode`, `tools_copilot`).
- **Defects:** none
