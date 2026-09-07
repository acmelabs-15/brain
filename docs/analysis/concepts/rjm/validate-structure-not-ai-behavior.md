---
package: rjm
name: validate structure, not AI behavior
slug: validate-structure-not-ai-behavior
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

# validate structure, not AI behavior

## Definition — verbatim
> "- Tests validate structure, not AI behavior" — .agents/critique/ADR-023-debate-log.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 51 | defined here | Formulated by Independent-Thinker as a key limitation of static prompt testing. |

## Consumes
Prompt templates, markdown schema specifications, static test assertions.

## Produces
Clear architectural boundary distinguishing syntax/header verification from runtime LLM behavioral testing.

## When applied
Applied during AI quality gate test design to explicitly constrain test claims and avoid false assurance of efficacy.

## Sub-concepts
none

## Part of
adr-023

## Implementation status
defects: internal-contradiction

## Design notes
"Validate structure, not AI behavior" is a critical testing principle in rjm establishing that static assertions (such as verifying markdown headings, required sections, or schema fields in prompts) only validate document structure and do not prove or guarantee how an LLM will interpret or act upon those instructions at runtime.
