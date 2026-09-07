---
package: rjm
name: conformist test
slug: conformist-test
kind: gate
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# conformist test

## Definition — verbatim
> "Apply the conformist test." — .claude/agents/retrospective.md:182

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 182 | defined here | Fifth rule of Keep Your Identity Small verifying whether a retrospective produced unexpected insights or merely conformed to expectations. |

## Consumes
Final retrospective findings, conclusions, and proposed remedies.

## Produces
Verification verdict on whether the retrospective engaged in genuine critical thinking or safe conformity.

## When applied
Applied at the conclusion of diagnosis before accepting retrospective findings.

## Sub-concepts
none

## Part of
keep-your-identity-small

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The conformist test acts as a quality gate on retrospective authenticity. If every conclusion reached by the retrospective is predictable and reinforces pre-existing orthodoxies, the analysis was likely performing conformity rather than critical thought. A healthy retrospective must occasionally deliver uncomfortable or surprising truths.
