---
package: rjm
name: userPromptTransformed
slug: userprompttransformed
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

# userPromptTransformed

## Definition — verbatim
> "userPromptTransformed" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Listed in verified facts table as a native Copilot CLI hook event. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 105 | defined here | Documented in official hook contract reference table of native events. |

## Consumes
Transformed user prompt payload after slash command or middleware processing.

## Produces
Audit log records or secondary validation of modified prompt text.

## When applied
Fired by the CLI harness after prompt transformation pipelines and middleware modifications complete.

## Sub-concepts
none

## Part of
official-hook-contracts

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
`userPromptTransformed` is a native Copilot CLI hook event executed following prompt transformation pipelines. In rjm, it provides an observability checkpoint to verify prompt mutations, ensuring that prompt steering or slash-command expansions remain compliant with audit requirements.
