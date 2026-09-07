---
package: rjm
name: Law 1
slug: law-1
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-guardrails-template.md, sha256: 9cb3f3b258fa15cfa4a6bfec04f0de8d93e7b340285b21b84b153b056f97ac07}
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Law 1

## Definition — verbatim
(used, not defined)

> "declare its scope and refuse outside it (Law 1)? Does any new destructive or" — .claude/skills/security-scan/references/agent-guardrails-template.md:63

## Also called — verbatim
> "- Agent guardrails template: Law 1 (do not act outside declared scope) is the" — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:75

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 63 | used here | PR review lens question verifying that agent changes declare scope and refuse actions outside it. |
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 75 | used here | Cited as the primary safety law broken when an agent performs unauthorized memory inferences. |

## Consumes
Declared agent permissions and proposed tool actions.

## Produces
Fast refusals for any action falling outside upfront declared scope boundaries.

## When applied
Enforced continuously at runtime and verified during PR review of agent capabilities.

## Sub-concepts
none

## Part of
the-four-laws-of-agent-safety

## Implementation status
clean

## Design notes
The highest-priority rule in the Four Laws of Agent Safety ("Do not take actions outside the declared scope"). Law 1 strictly dominates all other safety considerations, ensuring an agent immediately refuses out-of-scope requests rather than attempting well-intentioned but unauthorized actions.
