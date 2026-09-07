---
package: matt
name: design principles
slug: design-principles
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# design principles

## Definition — verbatim
(used, not defined)

> "This is the right skill for a codebase with no ADRs, no domain language and no design principles" — external/grill-with-docs.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 50 | used here | Mentions design principles as fundamental architectural context that an undocumented codebase lacks. |

## Consumes
Architectural consensus, code analysis, and high-level engineering philosophy.

## Produces
Documented architectural design rules and constraints in project context files.

## When applied
When documenting a legacy repository or establishing foundational engineering conventions.

## Sub-concepts
none

## Part of
domain-modeling

## Implementation status
defects: orphan, doc-drift

## Design notes
Design principles in Matt's framework are high-level rules that govern architectural and structural choices across a codebase. Alongside domain glossaries and ADRs, documented design principles anchor agent decision-making, ensuring that generated code adheres to established patterns and conventions.
