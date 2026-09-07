---
package: rjm
name: userPromptSubmitted
slug: userpromptsubmitted
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# userPromptSubmitted

## Definition — verbatim
> "userPromptSubmitted" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Listed in verified facts table as a native Copilot CLI hook event. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 104 | defined here | Documented in the official hook contract reference table of native events. |

## Consumes
Raw user prompt text, submission timestamp, and current working directory.

## Produces
Pre-execution prompt validation, context injection, or steering directive matching.

## When applied
Fired by the CLI harness immediately upon the human user submitting a prompt.

## Sub-concepts
none

## Part of
official-hook-contracts

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
`userPromptSubmitted` (aliased to `UserPromptSubmit` in Claude Code compatibility mappings) is the primary user input hook event. In rjm's architecture, it enables inspecting incoming user prompts before model submission, matching dynamic steering rules, and enforcing security or policy gates.
