---
package: rjm
name: Close the Inverse
slug: close-the-inverse
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Close the Inverse

## Definition — verbatim
> "## Mirror Obligation: Close the Inverse (Before Writing a Fix)" — .claude/agents/implementer.md:320

## Also called — verbatim
> "## Mirror Obligation: Close the Inverse (Before Writing a Fix)" — templates/agents/implementer.shared.md:309

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 320 | defined here | Section heading defining the mirror obligation technique to address reciprocal breaking cases. |
| templates/agents/implementer.shared.md | 309 | defined here | Section heading mandating inverse case planning before implementing behavioral fixes in shared templates. |

## Consumes
A proposed bug fix or behavior change and existing regression test suites.

## Produces
Paired test assertions and code updates closing both the target issue and its reciprocal failure cases.

## When applied
Prior to writing any bug fix or behavior modification to proactively identify what the change could break.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Close the Inverse imposes a mirror obligation on implementers in rjm: before modifying behavior, the agent must identify and handle the inverse condition that could break. It prevents over-firing guards, handles unaddressed sibling branches, and flips old-contract tests in the same diff.
