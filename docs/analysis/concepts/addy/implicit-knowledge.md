---
package: addy
name: Implicit knowledge
slug: implicit-knowledge
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

# Implicit knowledge

## Definition — verbatim
> "| Implicit knowledge | Agent doesn't know project-specific rules | Write it down in rules files — if it's not written, it doesn't exist |" — skills/context-engineering/SKILL.md:261

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 261 | defined here | Listed in the Anti-Patterns table as an operational failure when team conventions are unwritten. |

## Consumes
Uncodified tribal knowledge, unwritten team norms, and undocumented architecture constraints.

## Produces
Repeated guideline violations, incorrect defaults, and friction during code generation.

## When applied
Identified when agents repeatedly violate unwritten rules; remedied by formalizing constraints in persistent rules files like CLAUDE.md.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
An organizational anti-pattern where project conventions exist only in human memory and are never documented in rules files. Because agents cannot access tribal knowledge, unwritten rules are effectively non-existent and must be formally committed to repository rules files.
