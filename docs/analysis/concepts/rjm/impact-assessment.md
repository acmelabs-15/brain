---
package: rjm
name: Impact Assessment
slug: impact-assessment
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Impact Assessment

## Definition — verbatim
(used, not defined)

> "### Impact Assessment" — .agents/governance/agent-consolidation-process.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 76 | defined here | Template evaluating affected artifacts, user impact, and risk assessment during agent consolidation. |
| .claude/skills/review/references/analyst.md | 112 | defined here | Required section in PR analyst review covering code-quality surface, verification risk, and affected analyst concern. |

## Consumes
Proposed pull request diffs or agent consolidation proposals.

## Produces
Structured impact evaluations detailing blast radius, affected artifacts, verification risks, and user impact.

## When applied
Generated during PR code review by the analyst agent and during Phase 2 Evaluation of agent consolidations.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, other

## Design notes
A standardized analytical artifact section used across governance and review phases in rjm. It forces agents to assess the second-order consequences, blast radius, and verification risks of proposed changes before implementation or merge.
