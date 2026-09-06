---
package: addy
name: Missing examples
slug: missing-examples
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

# Missing examples

## Definition — verbatim
> "| Missing examples | Agent invents a new style instead of following yours | Include one example of the pattern to follow |" — skills/context-engineering/SKILL.md:260

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 260 | defined here | Listed in the Anti-Patterns table as a cause of stylistic inconsistency when no concrete examples are provided. |

## Consumes
Tasks assigned without linking existing canonical code patterns or reference implementations.

## Produces
Novel or idiosyncratic styling, inconsistent component architecture, and divergent idioms.

## When applied
Identified when agent output diverges from existing codebase conventions; remedied by including one concrete exemplar file.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
An anti-pattern where an agent lacks an exemplar file for a requested task, leading it to invent novel patterns rather than conforming to project idioms. Providing even a single representative file anchors the agent's syntax and structure to the established codebase.
