---
package: rjm
name: Required Analysis Process
slug: required-analysis-process
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Required Analysis Process

## Definition — verbatim
> "## Required Analysis Process" — docs/autonomous-pr-monitor.md:269
> "Before providing your final response, work through your analysis inside a thinking block in `<session_analysis>` tags." — docs/autonomous-pr-monitor.md:271

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 269 | defined here | Prescribes the 9-part structured reasoning sequence that must be completed within `<session_analysis>` tags before returning responses. |

## Consumes
Conversation indicators, memory key listings, PR status, technical risk patterns, and per-issue handoff context.

## Produces
Comprehensive multi-section analysis covering session state, PR review planning, memory relevance, delegation, and wrap-up plans.

## When applied
Applied before providing final responses or invoking execution tools in autonomous PR monitoring sessions.

## Sub-concepts
none

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Required Analysis Process enforces thorough upfront reasoning across nine defined sections within `<session_analysis>` thinking tags, ensuring that autonomous agents deliberate systematically before performing irreversible git or API operations.
