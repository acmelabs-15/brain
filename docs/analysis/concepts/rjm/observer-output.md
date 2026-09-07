---
package: rjm
name: "Observer output"
slug: observer-output
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Observer output

## Definition — verbatim
> "Active PostToolUse text merges into one `additionalContext`; dormant SessionStart, PreCompact, and UserPromptSubmit adapters discard output; unclassified events stay direct" — .claude/skills/ai-agents-portability-campaign/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 51 | used here | Contract specification governing how stdout from observer hooks is aggregated into additional context or discarded. |

## Consumes
Standard output emitted by non-blocking observer hook scripts during tool execution or session lifecycle events.

## Produces
Unified `additionalContext` string injected into agent turns, or discard decisions for dormant adapters.

## When applied
Applied during Copilot CLI hook result translation for active and dormant observer events.

## Sub-concepts
modifiedresult

## Part of
ai-agents-portability-campaign

## Implementation status
defects: doc-drift, missing-path

## Design notes
An architectural integration pattern that reconciles hook output differences between Claude Code (which consumes raw hook text) and GitHub Copilot CLI (which expects structured JSON). Observer stdout from active post-tool execution is collapsed and wrapped into a single structured `additionalContext` object to avoid JSON parse errors.
