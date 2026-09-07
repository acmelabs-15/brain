---
package: rjm
name: RICE Scoring
slug: rice-scoring
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RICE Scoring

## Definition — verbatim
> "RICE = (Reach × Impact × Confidence) / Effort" — .claude/agents/roadmap.md:33

## Also called — verbatim
- `RICE scoring` — .agents/AGENT-SYSTEM.md:518
- `RICE` — .claude/agents/roadmap.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 518 | used here | Listed as an expected output capability of the analyst agent when evaluating feature requests. |
| .claude/agents/roadmap.md | 30 | defined here | Defined as a core prioritization formula calculating reach, impact, confidence, and effort. |
| templates/AGENTS.md | 174 | used here | Listed as a primary use case and core capability of the roadmap agent. |
| templates/agents/roadmap.shared.md | 36 | defined here | Defined in the shared roadmap agent prompt template with parameter scaling guidelines. |

## Consumes
Feature proposals, candidate epics, and estimated parameters: Reach (users per quarter), Impact (0.25 to 3), Confidence (0% to 100%), and Effort (person-months).

## Produces
A quantitative numerical score used to rank epics, features, and backlog items in priority order.

## When applied
> "Clear prioritization with available data" — .claude/agents/roadmap.md:20

## Sub-concepts
none

## Part of
- roadmap
- analyst

## Implementation status
defects: doc-drift, missing-path, internal-contradiction (from templates/agents/roadmap.shared.md undeclared tools, templates/AGENTS.md agent count drift, and .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
RICE scoring provides a quantitative, objective scoring model within rjm to prevent subjective prioritization and feature drift. Embedded in both the roadmap agent and analyst agent workflows, it forces feature evaluations to ground business value in explicit estimates of quarterly reach, impact severity, and certainty percentage divided by implementation effort. Without RICE scoring, roadmap decisions in rjm would lack defensible mathematical justification when triaging competing feature requests.
