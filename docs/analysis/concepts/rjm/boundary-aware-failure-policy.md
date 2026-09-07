---
package: rjm
name: Boundary-Aware Failure Policy
slug: boundary-aware-failure-policy
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/silent-failure-hunter.md, sha256: fb277fb23fbb46edf07ff9f0b1de0108a3e159129be867919042453fc98c53e4}
  - {path: templates/agents/silent-failure-hunter.shared.md, sha256: 7edfe3cecb075fed987074b8a012b420750ea9ac1053089aa94d6f1dfb85598e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Boundary-Aware Failure Policy

## Definition — verbatim
> "### 5. Validate Against a Boundary-Aware Failure Policy" — .claude/agents/silent-failure-hunter.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/silent-failure-hunter.md | 106 | defined here | Policy gate defining cross-language rules for failure surfacing, logging paths, and explicit suppression. |
| templates/agents/silent-failure-hunter.shared.md | 116 | defined here | Shared template section specifying the universal boundary-aware failure policy. |

## Consumes
Architectural boundary transitions, cross-service calls, logger invocations, and exception contracts.

## Produces
Compliance validation determining whether errors surface to actors capable of resolving them.

## When applied
Applied as step 5 of the review process to ensure error handling adheres to cross-codebase reliability standards.

## Sub-concepts
none

## Part of
review-process

## Implementation status
defects: other

## Design notes
Boundary-Aware Failure Policy is a cross-language validation gate requiring that failures surface to actors capable of resolving them, observability paths follow repository conventions, secrets are never logged, and error suppression is explicitly documented.
