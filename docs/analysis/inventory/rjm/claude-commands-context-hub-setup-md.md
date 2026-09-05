---
package: rjm
path: .claude/commands/context-hub-setup.md
type: command
bytes: 4816
unit: inv-rjm-74
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/commands/context-hub-setup.md, sha256: df6e2fd17f0cae46d889f77dc4c7169422c86095ece9aace0c584738b429522f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/commands/context-hub-setup.md

## Purpose — required, verbatim
> "Use when setting up new development environment or troubleshooting MCP connectivity. Configures Context Hub dependencies including Forgetful MCP server and plugin prerequisites." — .claude/commands/context-hub-setup.md:2

## Design intent — required
Provides an interactive environment setup and troubleshooting command for the Context Hub subsystem. It verifies and guides installation of Claude Code plugin prerequisites (Serena for symbolic code analysis, Context7 for framework documentation) and configures the Forgetful MCP server (via uvx with SQLite storage or custom remote backends), reporting an explicit status table and stop condition upon completion.

## Phase — required
cross-phase

## Inputs — required
- CLI plugin listing via claude command ("claude plugins list" — .claude/commands/context-hub-setup.md:21)
- MCP server listing via claude command ("claude mcp list | grep -i forgetful" — .claude/commands/context-hub-setup.md:58)
- User setup preference selection ("How would you like to configure Forgetful?" — .claude/commands/context-hub-setup.md:71)
- External configuration documentation URL ("https://github.com/ScottRBK/forgetful/blob/main/docs/configuration.md" — .claude/commands/context-hub-setup.md:99)

## Outputs — required
- User-scoped Forgetful MCP configuration ("claude mcp add forgetful --scope user -- uvx forgetful-ai" — .claude/commands/context-hub-setup.md:81)
- Persistent SQLite database at home path ("~/.forgetful/forgetful.db" — .claude/commands/context-hub-setup.md:165)
- Context Hub Setup Status block ("Context Hub Setup Status:" — .claude/commands/context-hub-setup.md:114)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Context Hub Setup` — .claude/commands/context-hub-setup.md:5 — defined here
- `Serena` — .claude/commands/context-hub-setup.md:13 — used here
- `Context7` — .claude/commands/context-hub-setup.md:14 — used here
- `Forgetful MCP` — .claude/commands/context-hub-setup.md:53 — used here
- `uvx` — .claude/commands/context-hub-setup.md:75 — used here
- `Completion Criteria` — .claude/commands/context-hub-setup.md:167 — defined here
- `Stop Condition` — .claude/commands/context-hub-setup.md:178 — defined here

## Structure
- # Context Hub Setup — .claude/commands/context-hub-setup.md:5
- ## Prerequisites — .claude/commands/context-hub-setup.md:9
- ## Step 1: Check Plugin Prerequisites — .claude/commands/context-hub-setup.md:16
- ## Step 2: Configure Forgetful MCP — .claude/commands/context-hub-setup.md:53
- ### Setup Options — .claude/commands/context-hub-setup.md:67
- ### Standard Setup — .claude/commands/context-hub-setup.md:78
- ### Custom Setup — .claude/commands/context-hub-setup.md:92
- ## Step 3: Verify Complete Setup — .claude/commands/context-hub-setup.md:109
- ## Step 4: Quick Test (Optional) — .claude/commands/context-hub-setup.md:126
- ## Troubleshooting — .claude/commands/context-hub-setup.md:148
- ## Notes — .claude/commands/context-hub-setup.md:161
- ## Completion Criteria — .claude/commands/context-hub-setup.md:167
- ### Stop Condition — .claude/commands/context-hub-setup.md:178

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .claude/commands/context-hub-setup.md:120 · References `/context-gather` and `/encode-repo-serena` as slash commands, but they exist as skills under `.claude/skills/`.

## Observations
- Provides an explicit Completion Criteria table and Stop Condition to prevent unbounded agent polling loops.
- Sets up third-party tooling (`forgetful-ai`, `serena`, `context7`) outside repository boundaries in user home directory (`~/.forgetful/`, `~/.claude.json`).

## Context cost
4,816 bytes. Approximately 1,200 tokens.
