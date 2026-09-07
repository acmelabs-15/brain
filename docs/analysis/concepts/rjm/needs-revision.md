---
package: rjm
name: NEEDS-REVISION
slug: needs-revision
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/adr-045-feasibility-analysis.md, sha256: fabe8278f52716f18b7a1e30350ec8ff0c55d155dcc91000ec5ab6940cdebfab}
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
  - {path: .agents/critique/ADR-045-debate-log.md, sha256: 1a7c67dec37cdc5b039615e4f59a49517fc570566436ec2c344dd54473da1a82}
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
  - {path: templates/agents/critic.shared.md, sha256: 94cb41e3be663986453b13a24ae2df6f2036eeae38c7a07ef94499b76c457419}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# NEEDS-REVISION

## Definition — verbatim
> "Plan has gaps that must be closed" — templates/agents/critic.shared.md:146

## Also called — verbatim
> "needs-revision" — .agents/critique/ADR-023-debate-log.md:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/adr-045-feasibility-analysis.md | 201 | defined here | Records the feasibility analysis verdict concluding that ADR-045 has P0 blocking issues requiring revision. |
| .agents/critique/ADR-023-debate-log.md | 7 | defined here | Records the final review status of the prompt testing architectural decision. |
| .agents/critique/ADR-045-debate-log.md | 10 | defined here | Formulates the consolidated verdict of 5 out of 6 reviewing agents citing critical gaps. |
| .agents/security/ADR-045-framework-extraction-security-review.md | 6 | defined here | Assesses the security review verdict for the framework extraction proposal. |
| templates/agents/critic.shared.md | 146 | defined here | Defines the formal critique verdict when a plan has critical gaps in one or more axes. |

## Consumes
Architectural proposals, ADRs, specifications, or implementation plans submitted to critic review.

## Produces
A non-passing review verdict mandating specific revisions before the proposal can be approved or implemented.

## When applied
Applied when reviewing artifacts that exhibit critical gaps or deficiencies in 1+ evaluation axes but are not fundamentally blocked.

## Sub-concepts
none

## Part of
critic

## Implementation status
defects: cross-file-contradiction, internal-contradiction, missing-path

## Design notes
In rjm's critique and review system, NEEDS-REVISION functions as an essential non-terminal gate verdict. Rather than permanently rejecting or blocking a proposal, it signals that the conceptual direction is sound but specific actionable defects or critical gaps must be resolved by author agents before implementation can proceed.
