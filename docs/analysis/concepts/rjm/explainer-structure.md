---
package: rjm
name: Explainer Structure
slug: explainer-structure
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

# Explainer Structure

## Definition — verbatim
(used, not defined)

> "1. **What is it?** (1 paragraph, no jargon)" — .claude/agents/explainer.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 97 | defined here | Defines the 7-part outline (What, Why, How, Key components, Example, Common pitfalls, Related topics) for technical explainers. |
| templates/agents/explainer.shared.md | 103 | defined here | Shared template defining the 7-part outline for technical explainers written to `.agents/planning/EXPLAINER-[topic].md`. |

## Consumes
Complex concepts, architecture topics, workflow designs, or system mechanics.

## Produces
Educational documentation formatted to `.agents/planning/EXPLAINER-[topic].md`.

## When applied
Applied when writing technical explainers, onboarding guides, or conceptual deep-dives.

## Sub-concepts
none

## Part of
explainer

## Implementation status
defects: missing-path

## Design notes
Explainer Structure standardizes conceptual and pedagogical documentation. Moving progressively from high-level plain language ("What is it?", "Why does it matter?") to technical mechanics, concrete examples, and common pitfalls, it ensures complex technical systems are understandable to junior developers.
