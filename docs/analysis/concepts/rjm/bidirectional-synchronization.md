---
package: rjm
name: Bidirectional Synchronization
slug: bidirectional-synchronization
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/AGENTS.md, sha256: a7373badc34caabb986446749a8f1bd93401cfe6a7ee09e091e483e3e738271d}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bidirectional Synchronization

## Definition — verbatim
> "### Rule 1: Bidirectional Synchronization (CRITICAL - ADR-036)" — .claude/agents/AGENTS.md:49

## Also called — verbatim
> "### Rule 2: Bidirectional Synchronization (CRITICAL - ADR-036)" — templates/AGENTS.md:93

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/AGENTS.md | 49 | defined here | Defined as Rule 1 (ADR-036) mandating manual content synchronization across Claude and template sources for universal updates. |
| templates/AGENTS.md | 93 | defined here | Defined as Rule 2 (ADR-036) outlining step-by-step procedures for cross-platform agent synchronization between templates and Claude sources. |

## Consumes
agent-changes

## Produces
synchronized-agent-sources

## When applied
> "when adding content that applies to ALL platforms, you MUST update BOTH sources:" — .claude/agents/AGENTS.md:53

## Sub-concepts
none

## Part of
agent-maintenance

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A mandatory maintenance discipline required by ADR-036 to bridge rjm's two-source agent architecture. Because build scripts generate VS Code and Copilot CLI agents from `templates/agents/` while Claude Code agents are hand-maintained in `src/claude/`, any universal prompt improvements or governance rules must be manually synchronized across both sources.
