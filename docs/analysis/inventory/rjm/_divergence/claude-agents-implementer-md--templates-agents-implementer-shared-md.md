---
package: rjm
ledger_id: V6
canonical: .claude/agents/implementer.md
variant: templates/agents/implementer.shared.md
shared_ratio: 0.94
hunks: 7
declared_provenance: "<!-- vendor-portability: This template declares its `.agents/` session-scaffold path dependencies and tells vendored consumers how to proceed when the scaffold is absent. Issue #4580. -->" — templates/agents/implementer.shared.md:15
unit: inv-rjm-67
---

# .claude/agents/implementer.md ↔ templates/agents/implementer.shared.md

## Why two copies exist — required
Two copies exist due to the repository's two-source agent template architecture (ADR-036). The template under `templates/agents/implementer.shared.md` is intended as the portable base specification supporting multiple execution runtimes (VS Code, Copilot CLI, and Claude Code) with declared toolsets and vendor-portability fallback guidance (Issue #4580). The file `.claude/agents/implementer.md` represents the active prompt tailored for Claude Code, which retains local harness-specific additions including the Degraded Mode Protocol and blocking test rigor verification commands.

## Hunks — required, verbatim, complete

### Hunk 1 — .claude/agents/implementer.md:1-14 ↔ templates/agents/implementer.shared.md:1-23
- **class:** harness-substitution
- **canonical says:** "model: opus" — .claude/agents/implementer.md:4
- **variant says:** "model_tier: opus" — templates/agents/implementer.shared.md:2
- **meaning:** Maps Claude Code agent frontmatter metadata (`name`, `model`, `metadata.role`) to shared cross-platform schema (`role`, `model_tier`, `tools_vscode`, `tools_copilot`) and adds vendor portability comment.

### Hunk 2 — .claude/agents/implementer.md:67-73 ↔ templates/agents/implementer.shared.md:76-80
- **class:** content
- **canonical says:** "- When you cannot get to level 1-3 in this session (the file is unreachable, the test cannot run, the API is offline), say so explicitly and downgrade the claim or remove it." — .claude/agents/implementer.md:68
- **variant says:** "A docstring that says \"matches the validator\" with no path is a level-4 claim dressed as level-1. The reviewer has no choice but to either trust it or open the validator themselves; if they trust it and you were wrong, the cost is a follow-up commit. Pay the cost at write time; it is roughly zero." — templates/agents/implementer.shared.md:79
- **meaning:** Shared template adds an explicit admonition on docstrings claiming to match validators without paths being disguised level-4 claims.

### Hunk 3 — .claude/agents/implementer.md:74-80 ↔ templates/agents/implementer.shared.md:85-89
- **class:** content
- **canonical says:** "- What architectural constraints apply from `.agents/ARCHITECTURE.md` (if present)?" — .claude/agents/implementer.md:77
- **variant says:** "- Are there binding ADRs under `.agents/architecture/` that constrain this change?" — templates/agents/implementer.shared.md:84
- **meaning:** Shared template drops `.agents/ARCHITECTURE.md` from the list of initial questions to answer before starting implementation.

### Hunk 4 — .claude/agents/implementer.md:82-88 ↔ templates/agents/implementer.shared.md:92-96
- **class:** content
- **canonical says:** "5. .agents/ARCHITECTURE.md: system design decisions (if present)" — .claude/agents/implementer.md:85
- **variant says:** "4. .agents/architecture/ADR-*.md: list titles; open any ADR that binds the area you are changing" — templates/agents/implementer.shared.md:92
- **meaning:** Shared template removes `.agents/ARCHITECTURE.md` from the mandatory documentation read order.

### Hunk 5 — .claude/agents/implementer.md:91-102 ↔ templates/agents/implementer.shared.md:100-109
- **class:** content
- **canonical says:** "**Success definition**: When `.agents/AGENT-INSTRUCTIONS.md` exists, you can state four things in one sentence each. They are: (a) project constraints, (b) Claude-specific requirements, (c) any binding ADRs, and (d) architectural constraints." — .claude/agents/implementer.md:98
- **variant says:** "**Success definition**: When `.agents/AGENT-INSTRUCTIONS.md` exists, you can state three things in one sentence each. They are: (a) project constraints, (b) Claude-specific requirements, and (c) any binding ADRs." — templates/agents/implementer.shared.md:107
- **meaning:** Shared template removes the fallback line for missing `.agents/ARCHITECTURE.md` and reduces the success definition from four required statements to three.

### Hunk 6 — .claude/agents/implementer.md:295-321 ↔ templates/agents/implementer.shared.md:303-310
- **class:** content
- **canonical says:** "**Test rigor (BLOCKING for code changes)**: Every new function MUST have positive AND negative tests." — .claude/agents/implementer.md:299
- **variant says:** "**Testability as leverage**: If it is hard to test, that signals poor encapsulation, tight coupling, weak cohesion, or procedural thinking. Always ask \"how would I test this?\" even without writing tests." — templates/agents/implementer.shared.md:301
- **meaning:** Canonical file retains an extensive blocking test rigor checklist and multi-language block coverage commands that are omitted in the shared template.

### Hunk 7 — .claude/agents/implementer.md:858-883 ↔ templates/agents/implementer.shared.md:847-852
- **class:** content
- **canonical says:** "## Degraded Mode Protocol" — .claude/agents/implementer.md:861
- **variant says:** "Prefer existing skill scripts (`.claude/skills/`) over raw commands. Use `github` skill for PR/issue operations." — templates/agents/implementer.shared.md:845
- **meaning:** Canonical file includes the full Degraded Mode Protocol section and tool fallback table, which is absent from the shared template.

## Consequences — required
- **Phase 3 concordance rows raised:** Hunks 2, 3, 4, 5, 6, 7 represent substantive behavior differences regarding evidence rigor for validator matching, `.agents/ARCHITECTURE.md` dependency checks, test rigor checklists, and degraded mode tool fallback protocols.
- **Phase 5 parity notes:** Hunk 1 maps Claude Code frontmatter metadata (`name`, `model`, `metadata.role`) to platform-independent toolset and model tier definitions (`role`, `model_tier`, `tools_vscode`, `tools_copilot`).
- **Defects:** `doc-drift` between the canonical Claude Code agent prompt and the shared cross-platform template regarding documentation read requirements and testing rigor enforcement.
