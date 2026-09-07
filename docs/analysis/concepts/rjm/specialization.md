---
package: rjm
name: Specialization
slug: specialization
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Specialization

## Definition — verbatim
> "Each agent excels at one thing rather than being mediocre at many" — .agents/AGENT-SYSTEM.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 20 | defined here | Listed in the Key Benefits table defining specialization across domain agents. |

## Consumes
Task classification and domain decomposition requirements.

## Produces
Domain-specific agent profiles, bounded prompts, and focused capabilities.

## When applied
Applied when designing agent personas and decomposing complex engineering problems into specialized domains.

## Sub-concepts
none

## Part of
multi-agent-orchestration-system

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The design principle that AI agents achieve superior output quality when dedicated to a narrow domain of expertise rather than attempting generalist end-to-end execution. Specialization scopes prompts, tools, and evaluation criteria to a single discipline (e.g., architecture, implementation, critique, or QA), preventing cognitive dilution and prompt bloat.
