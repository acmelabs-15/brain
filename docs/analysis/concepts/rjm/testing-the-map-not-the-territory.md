---
package: rjm
name: testing the map, not the territory
slug: testing-the-map-not-the-territory
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# testing the map, not the territory

## Definition — verbatim
> "You're testing the map, not the territory" — .agents/critique/ADR-023-debate-log.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 76 | defined here | Cited by High-Level-Advisor as a critique of over-indexing on prompt syntax rather than runtime behavior. |

## Consumes
Test suites asserting against document structure, prompt syntax, or markdown headings.

## Produces
Critical architectural heuristic warning against substituting representation checks for operational testing.

## When applied
Invoked during architecture reviews when test suites test superficial artifacts instead of actual runtime execution.

## Sub-concepts
none

## Part of
validate-structure-not-ai-behavior

## Implementation status
defects: internal-contradiction

## Design notes
"Testing the map, not the territory" is an architectural critique maxim in rjm highlighting the fallacy of validating superficial representations (like prompt text or syntax) while failing to test actual operational reality (the LLM's dynamic runtime responses and bug-catching behavior).
