---
package: rjm
name: When to Produce vs When to Ask
slug: when-to-produce-vs-when-to-ask
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# When to Produce vs When to Ask

## Definition — verbatim
> "## When to Produce vs When to Ask" — templates/agents/analyst.shared.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/analyst.shared.md | 84 | defined here | Decision rubric guiding whether the analyst agent produces an artifact immediately or queries the user for clarification. |

## Consumes
Problem framing, user request, symptom descriptions, and scope boundaries.

## Produces
Decision to produce an investigation plan, comparison analysis, ask clarifying questions, or push back on vague requests.

## When applied
Applied at the start of an investigation upon receiving an inquiry or task delegation.

## Sub-concepts
none

## Part of
analyst

## Implementation status
defects: missing-path

## Design notes
"When to Produce vs When to Ask" is a decision rubric that governs agent autonomy and interaction, instructing the analyst to immediately generate structured plans or analyses when scope and symptoms are clear, but to halt and ask clarifying questions or push back when requests are ambiguous or underspecified.
