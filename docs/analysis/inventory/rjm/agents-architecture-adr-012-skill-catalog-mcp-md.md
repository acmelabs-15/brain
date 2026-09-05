---
package: rjm
path: .agents/architecture/ADR-012-skill-catalog-mcp.md
type: agent
bytes: 16823
unit: inv-rjm-7
deprecated: false
in_scope_via: inv-rjm-7
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-012-skill-catalog-mcp.md

## Purpose — required, verbatim
> "The ai-agents project maintains two skill repositories:" — .agents/architecture/ADR-012-skill-catalog-mcp.md:24 (no explicit purpose statement)

## Design intent — required
Proposes a unified Skill Catalog MCP server to bridge the divide between executable Claude skills (`.claude/skills/` PowerShell scripts) and learned Agent patterns (`.agents/skills/` markdown documentation). Addresses widespread protocol violations identified in retrospectives (such as agents executing raw `gh` commands instead of using existing skills) by establishing a searchable unified index, context-aware suggestions (`suggest_skills`), automated citation tracking (`cite_skill`), and programmatic BLOCKING gates (`check_skill_exists`, `validate_no_raw_commands`) that prevent raw command execution when matching skills exist.

## Phase — required
cross-phase

## Inputs — required
Executable Claude Skills in `.claude/skills/` (including `SKILL.md` capability indexes and PowerShell scripts) (.agents/architecture/ADR-012-skill-catalog-mcp.md:26, 39, 411-425), learned Agent Skills in `.agents/skills/` (e.g. `linting.md`, `documentation.md`, `multi-agent-workflow.md`) (.agents/architecture/ADR-012-skill-catalog-mcp.md:27, 40, 428-442), category index memories in Serena (`.serena/memories/skills-*`) (.agents/architecture/ADR-012-skill-catalog-mcp.md:41, 444-451), retrospective findings on `skill-usage-mandatory` violations (.agents/architecture/ADR-012-skill-catalog-mcp.md:31), and task descriptions and planned agent commands for suggestion and validation (.agents/architecture/ADR-012-skill-catalog-mcp.md:233-236, 257).

## Outputs — required
Skill Catalog MCP tools (`search_skills`, `get_skill`, `check_skill_exists`, `cite_skill`, `suggest_skills`, `validate_no_raw_commands`) (.agents/architecture/ADR-012-skill-catalog-mcp.md:68-73, 95-271), MCP resources (`skills://catalog`, `skills://categories`, `skills://usage`, `skills://suggestions`) (.agents/architecture/ADR-012-skill-catalog-mcp.md:68-71, 275-392), and Serena JSON memories (`skill-catalog-index`, `skill-usage-citations`, `skill-suggestions-cache`) (.agents/architecture/ADR-012-skill-catalog-mcp.md:398-402, 454).

## Invokes — required
- reference ADR-005 — .agents/architecture/ADR-012-skill-catalog-mcp.md:526
- reference ADR-006 — .agents/architecture/ADR-012-skill-catalog-mcp.md:527
- reference ADR-011 — .agents/architecture/ADR-012-skill-catalog-mcp.md:528
- reference skill-usage-mandatory — .agents/architecture/ADR-012-skill-catalog-mcp.md:532
- reference SKILL.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:533
- reference README.md — .agents/architecture/ADR-012-skill-catalog-mcp.md:534

## Invoked by — required
- agent ADR-013 — .agents/architecture/ADR-013-agent-orchestration-mcp.md:597
- agent ADR-048 — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:166
- agent ADR-064 — .agents/architecture/ADR-064-commands-to-skills-migration.md:285
- doc mcp-ecosystem — docs/mcp-ecosystem.md:110

## Concepts named — required, verbatim
- `ADR-012` — .agents/architecture/ADR-012-skill-catalog-mcp.md:12 — defined here
- `Skill Catalog MCP` — .agents/architecture/ADR-012-skill-catalog-mcp.md:12 — defined here
- `Claude Skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:26 — used here
- `Agent Skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:27 — used here
- `skill-usage-mandatory` — .agents/architecture/ADR-012-skill-catalog-mcp.md:31 — used here
- `search_skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:68 — defined here
- `get_skill` — .agents/architecture/ADR-012-skill-catalog-mcp.md:69 — defined here
- `check_skill_exists` — .agents/architecture/ADR-012-skill-catalog-mcp.md:70 — defined here
- `cite_skill` — .agents/architecture/ADR-012-skill-catalog-mcp.md:71 — defined here
- `suggest_skills` — .agents/architecture/ADR-012-skill-catalog-mcp.md:72 — defined here
- `validate_no_raw_commands` — .agents/architecture/ADR-012-skill-catalog-mcp.md:73 — defined here
- `skills://catalog` — .agents/architecture/ADR-012-skill-catalog-mcp.md:68 — defined here
- `skills://categories` — .agents/architecture/ADR-012-skill-catalog-mcp.md:69 — defined here
- `skills://usage` — .agents/architecture/ADR-012-skill-catalog-mcp.md:70 — defined here
- `skills://suggestions` — .agents/architecture/ADR-012-skill-catalog-mcp.md:71 — defined here
- `skill-catalog-index` — .agents/architecture/ADR-012-skill-catalog-mcp.md:400 — defined here
- `skill-usage-citations` — .agents/architecture/ADR-012-skill-catalog-mcp.md:401 — defined here
- `skill-suggestions-cache` — .agents/architecture/ADR-012-skill-catalog-mcp.md:402 — defined here
- `atomicity` — .agents/architecture/ADR-012-skill-catalog-mcp.md:163 — used here
- `anti_pattern` — .agents/architecture/ADR-012-skill-catalog-mcp.md:167 — used here

## Structure
- # ADR-012: Skill Catalog MCP — .agents/architecture/ADR-012-skill-catalog-mcp.md:12
- ## Status — .agents/architecture/ADR-012-skill-catalog-mcp.md:14
- ## Date — .agents/architecture/ADR-012-skill-catalog-mcp.md:18
- ## Context — .agents/architecture/ADR-012-skill-catalog-mcp.md:22
- ### Current State — .agents/architecture/ADR-012-skill-catalog-mcp.md:35
- ### Problems — .agents/architecture/ADR-012-skill-catalog-mcp.md:43
- ## Decision — .agents/architecture/ADR-012-skill-catalog-mcp.md:50
- ### Architecture — .agents/architecture/ADR-012-skill-catalog-mcp.md:60
- ## Tool Interface Design — .agents/architecture/ADR-012-skill-catalog-mcp.md:93
- ### search_skills — .agents/architecture/ADR-012-skill-catalog-mcp.md:95
- ### get_skill — .agents/architecture/ADR-012-skill-catalog-mcp.md:136
- ### check_skill_exists — .agents/architecture/ADR-012-skill-catalog-mcp.md:175
- ### cite_skill — .agents/architecture/ADR-012-skill-catalog-mcp.md:206
- ### suggest_skills — .agents/architecture/ADR-012-skill-catalog-mcp.md:227
- ### validate_no_raw_commands — .agents/architecture/ADR-012-skill-catalog-mcp.md:251
- ## Resource URIs — .agents/architecture/ADR-012-skill-catalog-mcp.md:273
- ### skills://catalog — .agents/architecture/ADR-012-skill-catalog-mcp.md:275
- ### skills://categories — .agents/architecture/ADR-012-skill-catalog-mcp.md:312
- ### skills://usage — .agents/architecture/ADR-012-skill-catalog-mcp.md:341
- ### skills://suggestions — .agents/architecture/ADR-012-skill-catalog-mcp.md:368
- ## Serena Integration — .agents/architecture/ADR-012-skill-catalog-mcp.md:394
- ### Memory Schema — .agents/architecture/ADR-012-skill-catalog-mcp.md:396
- ### Index Building — .agents/architecture/ADR-012-skill-catalog-mcp.md:404
- ## Rationale — .agents/architecture/ADR-012-skill-catalog-mcp.md:460
- ### Alternatives Considered — .agents/architecture/ADR-012-skill-catalog-mcp.md:462
- ### Trade-offs — .agents/architecture/ADR-012-skill-catalog-mcp.md:471
- ## Consequences — .agents/architecture/ADR-012-skill-catalog-mcp.md:477
- ### Positive — .agents/architecture/ADR-012-skill-catalog-mcp.md:479
- ### Negative — .agents/architecture/ADR-012-skill-catalog-mcp.md:487
- ### Neutral — .agents/architecture/ADR-012-skill-catalog-mcp.md:493
- ## Implementation Notes — .agents/architecture/ADR-012-skill-catalog-mcp.md:498
- ### Phase 1: Core Catalog (P0) — .agents/architecture/ADR-012-skill-catalog-mcp.md:500
- ### Phase 2: Validation (P1) — .agents/architecture/ADR-012-skill-catalog-mcp.md:506
- ### Phase 3: Usage Tracking (P2) — .agents/architecture/ADR-012-skill-catalog-mcp.md:512
- ### Phase 4: Smart Suggestions (P3) — .agents/architecture/ADR-012-skill-catalog-mcp.md:518
- ## Related Decisions — .agents/architecture/ADR-012-skill-catalog-mcp.md:524
- ## References — .agents/architecture/ADR-012-skill-catalog-mcp.md:530

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-012-skill-catalog-mcp.md:200 Referenced skill script ".claude/skills/github/scripts/pr/Get-PRContext.ps1" does not exist in repository; directory ".claude/skills/github/" is absent.
- missing-path · .agents/architecture/ADR-012-skill-catalog-mcp.md:201 Referenced skill script ".claude/skills/github/scripts/pr/Post-PRCommentReply.ps1" does not exist in repository; directory ".claude/skills/github/" is absent.
- missing-path · .agents/architecture/ADR-012-skill-catalog-mcp.md:203 Referenced skill script ".claude/skills/github/scripts/issue/Set-IssueLabels.ps1" does not exist in repository; directory ".claude/skills/github/" is absent.
- missing-path · .agents/architecture/ADR-012-skill-catalog-mcp.md:82 Referenced PowerShell script ".claude/skills/steering-matcher/Get-ApplicableSteering.ps1" does not exist; script was migrated to Python as "get_applicable_steering.py".
- missing-path · .agents/architecture/ADR-012-skill-catalog-mcp.md:532 Referenced memory document "../.serena/memories/skill-usage-mandatory.md" does not exist.
- other · .agents/architecture/ADR-012-skill-catalog-mcp.md:9 Frontmatter records "implemented: false" and "status: proposed"; Skill Catalog MCP was never implemented as an MCP server.

## Observations
Addresses the fragmentation between executable tooling (`.claude/skills/`) and conceptual playbook patterns (`.agents/skills/`). Emphasizes the need for programmatic gating against raw command execution (`check_skill_exists` and `validate_no_raw_commands`) to ensure agents utilize specialized skills rather than fallback CLI invocations. Also introduces citation tracking (`cite_skill`) to audit which skills influence agent behavior. While the proposed MCP server was not implemented, the concept of bridging Claude and Agent skill catalogs and verifying skill usage informed subsequent skill governance in ADR-064.

## Context cost
16,823 bytes, ~4,200 tokens. Isolated markdown document with no direct file inclusions at runtime.
