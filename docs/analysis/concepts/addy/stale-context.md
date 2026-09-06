---
package: addy
name: Stale context
slug: stale-context
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

# Stale context

## Definition — verbatim
> "| Stale context | Agent references outdated patterns or deleted code | Start fresh sessions when context drifts |" — skills/context-engineering/SKILL.md:259

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 259 | defined here | Listed in the Anti-Patterns table as an operational issue caused by long-running sessions retaining outdated code. |

## Consumes
Long-running conversation history carrying superseded code versions, deleted files, or previous refactorings.

## Produces
Erroneous modifications based on outdated patterns or references to deleted structures.

## When applied
Identified when conversation drift causes an agent to resurrect superseded code; remedied by starting fresh sessions or compacting context.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
An operational anti-pattern arising in extended sessions where obsolete code edits remain in history, misleading the agent into referencing deleted structures or discarded design choices. Mitigated by starting clean sessions between major features.
