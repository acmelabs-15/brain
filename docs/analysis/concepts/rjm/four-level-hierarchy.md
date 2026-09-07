---
package: rjm
name: four-level hierarchy
slug: four-level-hierarchy
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# four-level hierarchy

## Definition — verbatim
> "### The four-level hierarchy" — .claude/agents/implementer.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 26 | defined here | Defines the four-tier ranking of grounding sources from reproducible session tool output down to training memory. |
| templates/agents/implementer.shared.md | 35 | defined here | Shared implementer template establishing the four-tier evidence hierarchy. |

## Consumes
Factual assertions, hypotheses, and external references formulated during development.

## Produces
Ranked evidence citations classified into Level 1 (Tool output), Level 2 (Session files/memory), Level 3 (Web search), or Level 4 (Training knowledge).

## When applied
Applied whenever an agent must provide evidence for a technical claim or contract assertion.

## Sub-concepts
tool-output-from-this-session, memory-or-files-read-this-session, web-search, training-knowledge

## Part of
evidence-standards

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
The four-level hierarchy establishes a clear ranking of epistemic reliability in rjm. It imposes a hard rule that agents must ground claims in the highest reachable level, forbidding reliance on parametric training memory when active tool execution or repository file inspection is available in the current session.
