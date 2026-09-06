---
package: addy
name: Confusion Management
slug: confusion-management
kind: technique
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

# Confusion Management

## Definition — verbatim
> "Even with good context, you will encounter ambiguity. How you handle it determines outcome quality." — skills/context-engineering/SKILL.md:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 192 | defined here | Core section establishing protocols for surfacing ambiguity, conflicting specifications, and incomplete requirements instead of guessing. |

## Consumes
Conflicting specifications, incomplete requirements, or ambiguous implementation details.

## Produces
Explicit ambiguity prompts (`CONFUSION:`, `MISSING REQUIREMENT:`) detailing concrete options for human resolution.

## When applied
Applied whenever an agent encounters conflicting context or missing requirements during development tasks.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
A structured approach for managing ambiguity and incomplete instructions. Rather than silently selecting an arbitrary interpretation or hallucinating missing specifications, the agent surfaces the exact conflict along with structured options (A, B, C) for human clarification.
