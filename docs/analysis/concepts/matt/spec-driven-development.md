---
package: matt
name: spec-driven-development
slug: spec-driven-development
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# spec-driven-development

## Definition — verbatim
(used, not defined)

> "when the skill runs inside another orchestration layer (a spec-driven-development wrapper, a multi-agent framework, a rule that invokes it as a step in someone else&#x27;s pipeline)" — external/grill-with-docs.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 44 | used here | Cites automated spec-driven-development wrappers as an environment where interactive file writing can fail. |

## Consumes
Upstream specifications and pipeline automation definitions.

## Produces
Executed lifecycle stages according to a structured specification pipeline.

## When applied
When executing agent workflows programmatically via automated frameworks rather than interactive human sessions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift

## Design notes
Spec-driven development describes an automation pattern where agent tasks are scripted and chained against formal specification artifacts. Matt's documentation highlights that running interactive conversational skills (like grilling) inside rigid automated spec pipelines can cause silent execution defects if file-writing assumptions are violated.
