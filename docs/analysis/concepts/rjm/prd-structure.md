---
package: rjm
name: PRD Structure
slug: prd-structure
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PRD Structure

## Definition — verbatim
> "Write each section. No section is optional unless marked." — .claude/agents/explainer.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 82 | defined here | Defines the 10-section schema for Product Requirement Documents written to `.agents/planning/PRD-[feature-name].md`. |
| templates/agents/explainer.shared.md | 88 | defined here | Shared template defining the 10-section schema for PRDs across agent implementations. |

## Consumes
Feature requests, problem descriptions, stakeholder requirements.

## Produces
Standardized PRD document covering Overview, Goals, Non-Goals, Stories, Functional Requirements, AC, Metrics, Questions, and Considerations.

## When applied
Applied when specifying features or capabilities before architecture and implementation planning.

## Sub-concepts
none

## Part of
explainer

## Implementation status
defects: missing-path

## Design notes
PRD Structure provides a comprehensive schema for requirement definition. By strictly disallowing omitted sections and mandating explicit non-goals, INVEST user stories, and pass/fail verifiable acceptance criteria, it eliminates ambiguity before engineering resources are committed.
