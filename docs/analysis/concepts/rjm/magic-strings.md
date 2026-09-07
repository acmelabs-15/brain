---
package: rjm
name: Magic strings
slug: magic-strings
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Magic strings

## Definition — verbatim
> "| Magic strings | `\"production\"` literal in multiple files |" — .claude/skills/golden-principles/references/design-dry-principle.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 30 | defined here | Listed in the common violations table as repeated string literals that disperse domain knowledge across files. |

## Consumes
Hardcoded string literals, environment names, route keys, role identifiers, and configuration strings scattered in source code.

## Produces
Named string constants, domain enumerations, configuration lookups, and type-safe symbolic representations.

## When applied
Flagged during code reviews, refactoring, and static analysis whenever identical string literals are re-typed across multiple files or methods.

## Sub-concepts
extract-constants

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
In rjm's engineering standards, magic strings represent unmanaged domain knowledge duplicated across files. Typos in string literals produce silent runtime failures that bypass compiler checks. Extracting magic strings into centralized, named constants or enums provides compile-time safety, enables global renaming, and guarantees a single authoritative definition.
