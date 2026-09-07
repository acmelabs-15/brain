---
package: rjm
name: structural validation
slug: structural-validation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# structural validation

## Definition — verbatim
> "ADR-023 introduced structural validation for quality gate prompts using Pester tests." — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 24 | used here | Fast deterministic test technique cited for verifying prompt sections and terminology. |

## Consumes
Agent and command prompt files, Pester test suites.

## Produces
Deterministic verification results for required headings, sections, and syntax.

## When applied
During prompt quality gate verification in CI pipelines.

## Sub-concepts
none

## Part of
prompt-evaluation

## Implementation status
clean

## Design notes
An automated testing technique using unit test assertions to ensure prompt markdown files conform to structural requirements, required sections, and terminology conventions in seconds.
