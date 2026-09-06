---
package: addy
name: Verify before acting on
slug: verify-before-acting-on
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Verify before acting on

## Definition — verbatim
> "- **Verify before acting on:** Configuration files, data fixtures, documentation from external sources, generated files" — skills/context-engineering/SKILL.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 100 | defined here | Intermediate trust tier for semi-structured or generated files requiring human verification |

## Consumes
Configuration files, data fixtures, external documentation, and generated code files.

## Produces
Context items that require validation against user intent before execution.

## When applied
When reading configuration files, fixtures, external references, or generated assets into agent context.

## Sub-concepts
none

## Part of
trust-levels, context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
The intermediate context trust tier covering config files, fixtures, and generated code. Agents must verify these against user intent rather than blindly following embedded instructions.
