---
package: rjm
name: Threat Surface
slug: threat-surface
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Threat Surface

## Definition — verbatim
> "### 5. Threat Surface" — .claude/skills/review/references/agent-safety.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 83 | defined here | Focus area assessing new external integration points and untrusted inputs. |

## Consumes
External integration points, network endpoints, and agent input channels.

## Produces
Attack surface assessment and recommendations for dedicated threat-modeling passes.

## When applied
Applied when a PR introduces new external APIs, endpoints, or data ingress channels for an agent.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
defects: doc-drift, other

## Design notes
An agent safety review focus area in rjm assessing whether modifications introduce new external integration boundaries or untrusted inputs requiring formal threat modeling.
