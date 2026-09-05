---
package: rjm
ledger_id: V26
canonical: .claude/agents/independent-thinker.md
variant: templates/agents/independent-thinker.shared.md
shared_ratio: 0.73
hunks: 7
declared_provenance: none
unit: inv-rjm-68
---

# .claude/agents/independent-thinker.md ↔ templates/agents/independent-thinker.shared.md

## Why two copies exist — required
Harness adaptation and specialization divergence. While `templates/agents/independent-thinker.shared.md` defines the shared baseline for multi-platform tooling (`tools_vscode`, `tools_copilot`), `.claude/agents/independent-thinker.md` contains substantial Claude Code specific additions (Claude Code Tools, Persona Traits, Rejection of AI Tropes, Evidence-Based Reasoning, Verification Protocol, Output Format, and When to Use sections) accounting for 73% shared lines.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/independent-thinker.md:1-10 ↔ templates/agents/independent-thinker.shared.md:1-20
- **class:** harness-substitution
- **canonical says:** "name: independent-thinker" — .claude/agents/independent-thinker.md:2
- **variant says:** "role: strategic" — templates/agents/independent-thinker.shared.md:2
- **meaning:** Frontmatter configuration: Claude Code declares `name`, `model: opus`, and `metadata.role`, while the shared template specifies root `role: strategic` and toolsets for VS Code and GitHub Copilot.

### Hunk 2 — .claude/agents/independent-thinker.md:23-27 ↔ templates/agents/independent-thinker.shared.md:33-37
- **class:** content
- **canonical says:** "**Key Style Requirements for Contrarian Analysis:**" — .claude/agents/independent-thinker.md:26
- **variant says:** "**Agent-Specific Requirements:**" — templates/agents/independent-thinker.shared.md:36
- **meaning:** Heading terminology variation between the contrarian-specific phrasing in Claude Code and generic agent requirements in the shared template.

### Hunk 3 — .claude/agents/independent-thinker.md:36-63 ↔ templates/agents/independent-thinker.shared.md:46-46
- **class:** content
- **canonical says:** "## Claude Code Tools" — .claude/agents/independent-thinker.md:39
- **variant says:** "## Core Mission" — templates/agents/independent-thinker.shared.md:47
- **meaning:** Claude Code agent introduces explicit `Claude Code Tools` and `Persona Traits` sections not present in the shared template.

### Hunk 4 — .claude/agents/independent-thinker.md:101-115 ↔ templates/agents/independent-thinker.shared.md:90-90
- **class:** content
- **canonical says:** "### Rejection of AI Tropes" — .claude/agents/independent-thinker.md:104
- **variant says:** "## Behavioral Principles" — templates/agents/independent-thinker.shared.md:91
- **meaning:** Claude Code agent adds explicit `Rejection of AI Tropes` and `Evidence-Based Reasoning` directives that are omitted in the shared template.

### Hunk 5 — .claude/agents/independent-thinker.md:127-141 ↔ templates/agents/independent-thinker.shared.md:108-108
- **class:** content
- **canonical says:** "## Verification Protocol" — .claude/agents/independent-thinker.md:130
- **variant says:** "## Memory Protocol" — templates/agents/independent-thinker.shared.md:111
- **meaning:** Claude Code agent introduces a 3-step `Verification Protocol` (Fact-Checking, Source Citation, Uncertainty Declaration) absent from the shared template.

### Hunk 6 — .claude/agents/independent-thinker.md:142-148 ↔ templates/agents/independent-thinker.shared.md:115-120
- **class:** harness-substitution
- **canonical says:** "uv run python .claude/skills/memory/scripts/search_memory.py --query \"analysis challenges [topic/assumption]\"" — .claude/agents/independent-thinker.md:145
- **variant says:** "python3 .claude/skills/memory/scripts/search_memory.py --query \"analysis challenges [topic/assumption]\"" — templates/agents/independent-thinker.shared.md:118
- **meaning:** CLI runner syntax substitution: Claude Code invokes Memory Router with `uv run python`, whereas the shared template specifies `python3`.

### Hunk 7 — .claude/agents/independent-thinker.md:243-278 ↔ templates/agents/independent-thinker.shared.md:216-220
- **class:** content
- **canonical says:** "## Output Format" — .claude/agents/independent-thinker.md:246
- **variant says:** "## Execution Mindset" — templates/agents/independent-thinker.shared.md:219
- **meaning:** Claude Code agent provides structured `Output Format` and `When to Use` operational guidelines that are absent from the shared template.

## Consequences — required
- **Phase 3 concordance rows raised:** Hunk 3 (`Claude Code Tools`, `Persona Traits`), Hunk 4 (`Rejection of AI Tropes`), Hunk 5 (`Verification Protocol`), and Hunk 7 (`Output Format`) represent substantive content additions in the Claude Code specialization that should be considered for concordance alignment.
- **Phase 5 parity notes:** CLI invocation syntax (`uv run python` vs `python3`) and toolset mappings (`tools_vscode`, `tools_copilot`).
- **Defects:** none
