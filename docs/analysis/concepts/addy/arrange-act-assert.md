---
package: addy
name: Arrange → Act → Assert
slug: arrange-act-assert
kind: pattern
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/test-engineer.md, sha256: c4acde91d6307d88515387344a129a2d0679134e587596c3517d73faffcd5aa6}
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Arrange → Act → Assert

## Definition — verbatim
> "// Arrange → Act → Assert" — agents/test-engineer.md:42

## Also called — verbatim
> "The principles (Arrange-Act-Assert, naming, mock discipline, anti-patterns) apply in any ecosystem" — references/testing-patterns.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/test-engineer.md | 42 | applies | Inline comment illustrating the standard three-part test block structure for descriptive tests. |
| references/testing-patterns.md | 3 | references | Identifies Arrange-Act-Assert as a universal testing principle across development ecosystems. |

## Consumes
Test fixtures, mock boundaries, tested functions, and expected assertions.

## Produces
Cleanly structured, readable test cases with distinct setup, execution, and verification phases.

## When applied
Applied inside the body of every unit, integration, and component test.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Arrange-Act-Assert standardizes test anatomy into distinct setup, execution, and verification steps, making test failures straightforward to isolate and debug.
