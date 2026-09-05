---
package: rjm
path: .agents/architecture/ADR-012-skill-catalog-mcp.md
type: agent
bytes: 16823
unit: inv-rjm-7
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-012-skill-catalog-mcp.md

## Purpose — required, verbatim
> "Create a **Skill Catalog MCP** that:" — .agents/architecture/ADR-012-skill-catalog-mcp.md:52

## Design intent — required
Architecture Decision Record proposing a Model Context Protocol (MCP) server that indexes both executable Claude Skills (`.claude/skills/`) and learned Agent Skills (`.agents/skills/`) into a unified, searchable catalog. Solves the problem of skill underutilization and duplicate implementations caused by agents running raw CLI commands without checking available tooling. Introduces a programmatic blocking gate (`check_skill_exists`) to intercept raw commands, a citation mechanism (`cite_skill`) to track usage and measure effectiveness, and context-aware skill recommendations (`suggest_skills`).

## Phase — required
cross-phase

## Inputs — required
- Executable skills in `.claude/skills/` — .agents/architecture/ADR-012-skill-catalog-mcp.md:26
- Learned patterns in `.agents/skills/` — .agents/architecture/ADR-012-skill-catalog-mcp.md:27
- Serena memory skill indexes in `.serena/memories/skills-*` — .agents/architecture/ADR-012-skill-catalog-mcp.md:41
- Query parameters (keyword, category, capability, operation name) — .agents/architecture/ADR-012-skill-catalog-mcp.md:100-106
- Task context and files affected for suggestions — .agents/architecture/ADR-012-skill-catalog-mcp.md:232-236

## Outputs — required
- Unified catalog index memory `skill-catalog-index` — .agents/architecture/ADR-012-skill-catalog-mcp.md:400
- Citation history memory `skill-usage-citations` — .agents/architecture/ADR-012-skill-catalog-mcp.md:401
- Suggestions cache memory `skill-suggestions-cache` — .agents/architecture/ADR-012-skill-catalog-mcp.md:402
- MCP resources `skills://catalog` (.agents/architecture/ADR-012-skill-catalog-mcp.md:275), `skills://categories` (.agents/architecture/ADR-012-skill-catalog-mcp.md:312), `skills://usage` (.agents/architecture/ADR-012-skill-catalog-mcp.md:341), `skills://suggestions` (.agents/architecture/ADR-012-skill-catalog-mcp.md:368)
- Command validation results and violations — .agents/architecture/ADR-012-skill-catalog-mcp.md:260-264

## Invokes — required
- agent ADR-005-powershell-only-scripting.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:526
- agent ADR-006-thin-workflows-testable-modules.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:527
- agent ADR-011-session-state-mcp.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:528
- reference skill-usage-mandatory — .agents/architecture/ADR-012-skill-catalog-mcp.md:532
- skill .claude/skills/github/SKILL.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:533
- doc .agents/skills/README.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:534

## Invoked by — required
- agent .agents/architecture/README.md — .agents/architecture/README.md:162

## Concepts named — required, verbatim
- `Claude Skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:26 — used here
- `Agent Skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:27 — used here
- `skill-usage-mandatory` — .agents/architecture/ADR-012-skill-catalog-mcp.md:31 — used here
- `Skill Catalog MCP` — .agents/architecture/ADR-012-skill-catalog-mcp.md:52 — defined here
- `search_skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:68 — defined here
- `get_skill` — .agents/architecture/ADR-012-skill-catalog-mcp.md:69 — defined here
- `check_skill_exists` — .agents/architecture/ADR-012-skill-catalog-mcp.md:70 — defined here
- `cite_skill` — .agents/architecture/ADR-012-skill-catalog-mcp.md:71 — defined here
- `suggest_skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:72 — defined here
- `validate_no_raw_commands` — .agents/architecture/ADR-012-skill-catalog-mcp.md:73 — defined here
- `Get-ApplicableSteering.ps1` — .agents/architecture/ADR-012-skill-catalog-mcp.md:82 — used here
- `Skill-Lint-001` — .agents/architecture/ADR-012-skill-catalog-mcp.md:85 — used here
- `Get-PRContext.ps1` — .agents/architecture/ADR-012-skill-catalog-mcp.md:200 — used here
- `Post-PRCommentReply.ps1` — .agents/architecture/ADR-012-skill-catalog-mcp.md:201 — used here
- `Set-IssueLabels.ps1` — .agents/architecture/ADR-012-skill-catalog-mcp.md:203 — used here
- `skills://catalog` — .agents/architecture/ADR-012-skill-catalog-mcp.md:275 — defined here
- `skills://categories` — .agents/architecture/ADR-012-skill-catalog-mcp.md:312 — defined here
- `skills://usage` — .agents/architecture/ADR-012-skill-catalog-mcp.md:341 — defined here
- `skills://suggestions` — .agents/architecture/ADR-012-skill-catalog-mcp.md:368 — defined here
- `skill-catalog-index` — .agents/architecture/ADR-012-skill-catalog-mcp.md:400 — defined here
- `skill-usage-citations` — .agents/architecture/ADR-012-skill-catalog-mcp.md:401 — defined here
- `skill-suggestions-cache` — .agents/architecture/ADR-012-skill-catalog-mcp.md:402 — defined here

## Structure
- ADR-012: Skill Catalog MCP — .agents/architecture/ADR-012-skill-catalog-mcp.md:12
- Status — .agents/architecture/ADR-012-skill-catalog-mcp.md:14
- Date — .agents/architecture/ADR-012-skill-catalog-mcp.md:18
- Context — .agents/architecture/ADR-012-skill-catalog-mcp.md:22
- Current State — .agents/architecture/ADR-012-skill-catalog-mcp.md:35
- Problems — .agents/architecture/ADR-012-skill-catalog-mcp.md:43
- Decision — .agents/architecture/ADR-012-skill-catalog-mcp.md:50
- Architecture — .agents/architecture/ADR-012-skill-catalog-mcp.md:60
- Tool Interface Design — .agents/architecture/ADR-012-skill-catalog-mcp.md:93
- search_skills — .agents/architecture/ADR-012-skill-catalog-mcp.md:95
- get_skill — .agents/architecture/ADR-012-skill-catalog-mcp.md:136
- check_skill_exists — .agents/architecture/ADR-012-skill-catalog-mcp.md:175
- cite_skill — .agents/architecture/ADR-012-skill-catalog-mcp.md:206
- suggest_skills — .agents/architecture/ADR-012-skill-catalog-mcp.md:227
- validate_no_raw_commands — .agents/architecture/ADR-012-skill-catalog-mcp.md:251
- Resource URIs — .agents/architecture/ADR-012-skill-catalog-mcp.md:273
- skills://catalog — .agents/architecture/ADR-012-skill-catalog-mcp.md:275
- skills://categories — .agents/architecture/ADR-012-skill-catalog-mcp.md:312
- skills://usage — .agents/architecture/ADR-012-skill-catalog-mcp.md:341
- skills://suggestions — .agents/architecture/ADR-012-skill-catalog-mcp.md:368
- Serena Integration — .agents/architecture/ADR-012-skill-catalog-mcp.md:394
- Memory Schema — .agents/architecture/ADR-012-skill-catalog-mcp.md:396
- Index Building — .agents/architecture/ADR-012-skill-catalog-mcp.md:404
- Rationale — .agents/architecture/ADR-012-skill-catalog-mcp.md:460
- Alternatives Considered — .agents/architecture/ADR-012-skill-catalog-mcp.md:462
- Trade-offs — .agents/architecture/ADR-012-skill-catalog-mcp.md:471
- Consequences — .agents/architecture/ADR-012-skill-catalog-mcp.md:477
- Positive — .agents/architecture/ADR-012-skill-catalog-mcp.md:479
- Negative — .agents/architecture/ADR-012-skill-catalog-mcp.md:487
- Neutral — .agents/architecture/ADR-012-skill-catalog-mcp.md:493
- Implementation Notes — .agents/architecture/ADR-012-skill-catalog-mcp.md:498
- Phase 1: Core Catalog (P0) — .agents/architecture/ADR-012-skill-catalog-mcp.md:500
- Phase 2: Validation (P1) — .agents/architecture/ADR-012-skill-catalog-mcp.md:506
- Phase 3: Usage Tracking (P2) — .agents/architecture/ADR-012-skill-catalog-mcp.md:512
- Phase 4: Smart Suggestions (P3) — .agents/architecture/ADR-012-skill-catalog-mcp.md:518
- Related Decisions — .agents/architecture/ADR-012-skill-catalog-mcp.md:524
- References — .agents/architecture/ADR-012-skill-catalog-mcp.md:530

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-012-skill-catalog-mcp.md:532 · Markdown link `[skill-usage-mandatory](../.serena/memories/skill-usage-mandatory.md)` is broken; actual memory file is at `.serena/memories/usage-mandatory.md`, and `../.serena` relative to `.agents/architecture` resolves to nonexistent `.agents/.serena`.
- missing-path · .agents/architecture/ADR-012-skill-catalog-mcp.md:534 · Markdown link `[.agents/skills/README.md](../.agents/skills/README.md)` is broken; relative path resolves to `.agents/.agents/skills/README.md` instead of `.agents/skills/README.md` (`../skills/README.md`).
- internal-contradiction · .agents/architecture/ADR-012-skill-catalog-mcp.md:9 · Frontmatter declares `implemented: false` while architectural text and PRD describe concrete schemas, mock responses, and tool interfaces proposed for future adoption.

## Observations
Combines two disparate skill paradigms (executable PowerShell scripts in `.claude/skills/` and learned declarative markdown patterns in `.agents/skills/`) under a single discovery MCP. Proposes a pre-execution command interception model (`check_skill_exists` / `validate_no_raw_commands`) to prevent agents from falling back to raw CLI commands.

## Context cost
16823 bytes, ~4200 tokens. Loads no external files.
