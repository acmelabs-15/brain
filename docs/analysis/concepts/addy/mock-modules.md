---
package: addy
name: Mock Modules
slug: mock-modules
kind: technique
package_phase: addy:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/testing-patterns.md, sha256: f0bf05acd0edcadc27297ad5b74f104c8103ccfedba1a05cd6d6ae4af8364c56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Mock Modules

## Definition — verbatim
> "### Mock Modules" — references/testing-patterns.md:99

## Also called — verbatim
> "// Mock an entire module" — references/testing-patterns.md:102

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/testing-patterns.md | 99 | defined here | Subsection heading demonstrating whole-module and partial-export mocking via jest.mock |

## Consumes
ES module or CommonJS import paths representing external infrastructure or utility modules.

## Produces
Module-level mock replacements that substitute export definitions across the entire runtime environment of a test file.

## When applied
When replacing database adapters, third-party libraries, or specific helper functions that are imported directly by target modules.

## Sub-concepts
none

## Part of
mocking-patterns

## Implementation status
clean

## Design notes
Mock Modules enables interception of imported dependencies at the module resolution boundary using `jest.mock`. It allows full module substitution (such as replacing a database client with in-memory stubs) or partial overriding via `jest.requireActual`, isolating tests from heavy external libraries while preserving unaffected exports.
