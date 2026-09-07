---
package: rjm
name: Template Path Parameterization
slug: template-path-parameterization
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Template Path Parameterization

## Definition — verbatim
> "Template Path Parameterization (NEW, addresses P0-8)" — .agents/projects/v0.4.0/PLAN.md:349

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.4.0/PLAN.md | 349 | defined here | Architectural pattern abstracting hardcoded output path directives across 14 agent templates to support consumer directory configurations. |

## Consumes
Agent templates with hard-coded output path directives (`templates/agents/*.shared.md`).

## Produces
Parameterized templates compatible with consumer directory configurations via environment variables (`${AWESOME_AI_OUTPUT_DIR}`).

## When applied
Applied during framework extraction when adapting shared agent templates to operate inside downstream consumer repositories.

## Sub-concepts
none

## Part of
v0-4-0-milestone-framework-extraction-awesome-ai

## Implementation status
defects: missing-path, doc-drift

## Design notes
Template Path Parameterization is an architectural pattern in rjm's framework extraction plan that abstracts repository-specific output paths across 14 agent templates. By replacing fixed paths like `.agents/analysis/` with environment variables such as `${AWESOME_AI_OUTPUT_DIR}/analysis/`, it allows the multi-agent framework to be distributed as a reusable plugin without forcing consuming repositories to adopt identical directory hierarchies.
