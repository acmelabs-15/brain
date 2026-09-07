---
package: rjm
name: Parallel Operation
slug: parallel-operation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Parallel Operation

## Definition — verbatim
(used, not defined)

> "### Step 3: Parallel Operation" — .agents/governance/agent-consolidation-process.md:188

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 188 | defined here | Step in consolidation process maintaining both deprecated and surviving agents for two weeks to catch issues. |

## Consumes
Updated surviving agent definitions and deprecated predecessor agents.

## Produces
Real-world user feedback and operational telemetry validating that the surviving agent successfully handles migrated responsibilities.

## When applied
Executed during Phase 4 Execution for two weeks before retiring the deprecated agent.

## Sub-concepts
none

## Part of
agent-consolidation-process

## Implementation status
defects: missing-path

## Design notes
A risk-mitigation technique in agent governance that runs overlapping agents simultaneously during migration. It prevents sudden workflow disruptions by ensuring the merged agent works in production before the legacy agent is deleted.
