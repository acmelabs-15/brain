---
package: rjm
name: agent specialization
slug: agent-specialization
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agent specialization

## Definition — verbatim
(used, not defined)

> "does the agent specialization beat a deliberately naive baseline at all?" — .agents/architecture/ADR-058-agent-eval-discipline.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 27 | used here | Identifies the architectural assumption that specialized prompts outperform naive baselines, requiring empirical validation. |

## Consumes
Domain-specific knowledge, specialized role instructions, persona definitions, and task-specific constraints.

## Produces
Specialized system prompts tailored to distinct engineering functions (security, qa, architect, analyst).

## When applied
Utilized when decomposing complex multi-agent engineering workflows into focused subagent roles.

## Sub-concepts
none

## Part of
agent-eval-discipline

## Implementation status
clean

## Design notes
The core multi-agent design pattern in rjm of creating dedicated agent personas with specialized prompt definitions. ADR-058 recognizes that agent specialization represents an unproven architectural hypothesis unless backed by empirical data demonstrating superior performance over generic baseline models.
