---
package: matt
name: subagent_type=Explore
slug: subagent-type-explore
kind: name-only
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# subagent_type=Explore

## Definition — verbatim
(used, not defined)

> "The exploration step names Claude Code&#x27;s <code class=\"ah-code-inline\">Agent</code> tool with <code class=\"ah-code-inline\">subagent_type=Explore</code> directly, so a <a class=\"decoration-primary/40 underline-offset-4 hover:decoration-primary\" data-state=\"closed\" href=\"/ai-coding-dictionary/harness\">harness</a> without that tool may skip the parallel exploration rather than substitute its own." — external/improve-codebase-architecture.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/improve-codebase-architecture.md | 64 | used here | Claude Code Agent tool parameter specifically invoked to execute parallel codebase exploration. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
improve-codebase-architecture

## Implementation status
defects: doc-drift (external/improve-codebase-architecture.md:64 documents that the skill hardcodes Claude Code's subagent_type=Explore parameter, which causes non-Claude Code harnesses to skip parallel exploration)

## Design notes
A specific parameter value passed to Claude Code's Agent tool for codebase exploration subagents, classified as name-only because it is a tool configuration value rather than an agent lifecycle concept.
