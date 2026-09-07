---
package: rjm
name: Output Structure
slug: output-structure
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Output Structure

## Definition — verbatim
> "## Output Structure" — docs/autonomous-pr-monitor.md:359
> "Your response should follow this structure:" — docs/autonomous-pr-monitor.md:361
> "## Output Structure" — templates/agents/analyst.shared.md:247
> "Return findings in this format:" — templates/agents/analyst.shared.md:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 359 | defined here | Specifies the four-stage response format (Session Analysis, Tool Calls, Final Response, Session End Activities) for PR monitoring. |
| templates/agents/analyst.shared.md | 247 | defined here | Defines the structured investigation findings format (Problem Framing, Hypotheses, Evidence, Findings, Root Cause, Recommendation, Open Questions) for the analyst agent. |

## Consumes
Agent analysis, tool execution logs, investigation findings, hypotheses, and recommendations.

## Produces
Standardized, structured textual responses and investigation documents conforming to agent communication contracts.

## When applied
Applied when formatting agent responses in autonomous PR monitoring sessions and when structuring investigation deliverables in the analyst agent.

## Sub-concepts
none

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Output Structure provides standardized response templates across autonomous workflows and analytical investigations, ensuring that findings, hypotheses, tool calls, and wrap-up actions are presented in consistent, predictable schemas.
