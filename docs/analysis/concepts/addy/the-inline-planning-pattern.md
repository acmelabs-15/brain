---
package: addy
name: The Inline Planning Pattern
slug: the-inline-planning-pattern
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Inline Planning Pattern

## Definition — verbatim
> "For multi-step tasks, emit a lightweight plan before executing:" — skills/context-engineering/SKILL.md:241

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 239 | defined here | Defines an inline planning technique for multi-step tasks that emits a brief plan before execution. |

## Consumes
Multi-step task requirements, architectural context, and intended modification steps.

## Produces
A concise numbered execution plan ending with an optimistic confirmation trigger (`Executing unless you redirect.`).

## When applied
Applied for multi-step tasks before executing modifications, investing 30 seconds to catch wrong architectural directions before implementation.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
A lightweight pre-execution alignment pattern where the agent emits a 3-step numbered plan and proceeds optimistically unless redirected. This creates a low-overhead checkpoint that catches wrong directions before significant code is written without creating unnecessary latency.
