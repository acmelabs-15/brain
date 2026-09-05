---
package: rjm
path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md
type: reference
bytes: 15662
unit: inv-rjm-79
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/agent-harness-reference/references/official-hook-contracts.md

## Purpose — required, verbatim
> "This sidecar pins the official sources used by `agent-harness-reference`." — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:5

## Design intent — required
Definitive registry and pinning document of official vendor hook contracts and specifications for GitHub Copilot CLI and Claude Code. It establishes a rigorous 5-tier source priority hierarchy (vendor reference pages, pinned source commits, CLI changelogs, empirical probes, and deprecating DeepWiki for runtime authority), catalogs official URLs and commit SHAs, details the complete 14-event Copilot and 30-event Claude lifecycle matrices, and records exact configuration schemas. It specifies JSON payload structures for input and decision output (PreToolUse, PermissionRequest, Stop), exit code behaviors, matcher regular expression semantics, cloud agent sandbox constraints, and plugin-root environment variables. Without it, agent authors, generators, and shims would rely on unverified assumptions, hallucinated payloads, or open-ended web research, causing cross-harness drift, permission failures, and silent session wedging.

## Phase — required
cross-phase

## Inputs — required
- Vendor documentation and repository sources for GitHub Copilot CLI: hook reference (`https://docs.github.com/en/copilot/reference/hooks-reference`), pinned hook reference commit (`https://github.com/github/docs/blob/0b02cd6336f4eebda1e409b45a89dab5c2193d9a/content/copilot/reference/hooks-reference.md`), cloud hook guide, pinned cloud hook guide commit (`https://github.com/github/docs/blob/3af7cb3042ac2f16645785e9f6dc89922d5e5588/content/copilot/how-tos/copilot-on-github/customize-copilot/customize-cloud-agent/use-hooks.md`), CLI plugin reference, permission guide, configuration guide, and pinned Copilot CLI changelog (`https://raw.githubusercontent.com/github/copilot-cli/fd24cea5cb11da4e630485ff2d9269318b8c2a4e/changelog.md`).
- Vendor documentation for Claude Code: hooks reference (`https://code.claude.com/docs/en/hooks`).
- DeepWiki cross-check index (`https://deepwiki.com/search/crosscheck-the-repository-for_89942bc1-641b-4aa2-bc9a-2f090ddd30fb`).
- Local versioned empirical probes from `references/probe-evidence.md`.

## Outputs — required
none

## Invokes — required
- reference probe-evidence.md — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:81
- skill agent-harness-reference — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:5

## Invoked by — required
- skill agent-harness-reference — .claude/skills/agent-harness-reference/SKILL.md:24
- skill ai-agents-portability-campaign — .claude/skills/ai-agents-portability-campaign/SKILL.md:32
- doc .claude/rules/tool-use-hook-bar.md — .claude/rules/tool-use-hook-bar.md:47
- doc .claude/rules/generated-artifacts.md — .claude/rules/generated-artifacts.md:230

## Concepts named — required, verbatim
- `Source priority` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:8 — defined here
- `GitHub Copilot CLI` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:23 — used here
- `Configuration contract` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:44 — defined here
- `Permission controls` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:67 — defined here
- `Exact native events` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:87 — defined here
- `agentStop` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:92 — defined here
- `errorOccurred` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:93 — defined here
- `notification` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:94 — defined here
- `permissionRequest` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:95 — defined here
- `postToolUse` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:96 — defined here
- `postToolUseFailure` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:97 — defined here
- `preCompact` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:98 — defined here
- `preToolUse` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:99 — defined here
- `sessionEnd` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:100 — defined here
- `sessionStart` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:101 — defined here
- `subagentStart` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:102 — defined here
- `subagentStop` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:103 — defined here
- `userPromptSubmitted` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:104 — defined here
- `userPromptTransformed` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:105 — defined here
- `Stop` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:112 — used here
- `ErrorOccurred` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:113 — used here
- `PostToolUse` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:114 — used here
- `PostToolUseFailure` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:115 — used here
- `PreCompact` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:116 — used here
- `PreToolUse` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:117 — used here
- `SessionEnd` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:118 — used here
- `SessionStart` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:119 — used here
- `SubagentStop` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:120 — used here
- `UserPromptSubmit` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:121 — used here
- `Matchers` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:130 — defined here
- `Claude-format matchers` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:151 — used here
- `PermissionRequest output and failure` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:197 — defined here
- `Stop output` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:217 — defined here
- `Exit codes and stderr` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:272 — defined here
- `Cloud agent` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:287 — defined here
- `Plugin-root variables` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:304 — defined here
- `Claude Code` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:316 — used here
- `Refresh procedure` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:443 — defined here

## Structure
- Official Hook Contracts — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:1
- Source priority — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:8
- GitHub Copilot CLI — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:23
- Primary sources — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:25
- Configuration contract — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:44
- Permission controls — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:67
- Exact native events — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:87
- Matchers — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:130
- PreToolUse output and failure — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:162
- PermissionRequest output and failure — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:197
- Stop output — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:217
- Other output fields — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:242
- Exit codes and stderr — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:272
- Cloud agent — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:287
- Plugin-root variables — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:304
- Claude Code — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:316
- Primary source — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:318
- Exact documented event set — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:325
- PostToolUseFailure input — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:364
- PostToolUseFailure output — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:378
- PreToolUse deny — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:397
- Stop output — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:417
- Matcher contract — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:433
- Refresh procedure — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:443

## Scripts
none

## Defects — required
- doc-drift · .claude/skills/agent-harness-reference/references/official-hook-contracts.md:60 · vendor hook documentation conflicts on loading precedence ("policy, then user, then project, then plugins" vs bullet list placing repository files before user files).
- internal-contradiction · .claude/skills/agent-harness-reference/references/official-hook-contracts.md:281 · vendor documentation conflicts internally on exit-2 stderr (general exit table surfaces stderr to user, while PermissionRequest section ignores stderr on exit 2).

## Observations
- Establishes a clear standard separating vendor-documented features from `DOCS SILENT` areas (e.g. PreCompact/UserPromptSubmitted config-file output fields, whether stderr enters model context, fine-grained committed repo permission policies).
- Highlights critical structural differences between harnesses: Copilot CLI uses top-level JSON objects (`permissionDecision`, `behavior`), whereas Claude Code nests them in `hookSpecificOutput` envelopes.
- Identifies that Copilot CLI hook output parsing concatenates remaining stdout and runs `JSON.parse` once; multiple hooks outputting individual JSON objects produce invalid concatenated JSON, requiring a consolidated dispatcher to merge outputs into a single object.

## Context cost
15662 bytes, ~3,900 tokens.
