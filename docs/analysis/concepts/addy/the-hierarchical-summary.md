---
package: addy
name: The Hierarchical Summary
slug: the-hierarchical-summary
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

# The Hierarchical Summary

## Definition — verbatim
> "For large projects, maintain a summary index:" — skills/context-engineering/SKILL.md:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 156 | defined here | Context packing strategy for large codebases recommending a high-level summary index. |

## Consumes
Large project codebase structure, module boundaries, architectural overview.

## Produces
A hierarchical project map or summary index dividing components, key files, and architectural patterns.

## When applied
Applied when navigating large codebases where full context exceeds budget, loading only the summary section relevant to the current task.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
A context packing strategy that avoids flooding the context window on large codebases by maintaining an index of module summaries and only loading the section relevant to the current task. Without it, agents either suffer context starvation by omitting critical modules or suffer context flooding by loading excessive source files.
