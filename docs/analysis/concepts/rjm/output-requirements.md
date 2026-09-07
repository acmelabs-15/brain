---
package: rjm
name: Output Requirements
slug: output-requirements
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
  - {path: templates/agents/negotiation.shared.md, sha256: f3c95963b9fcb4b3824e2ae1bfc03e514aca724e316bce209a0742f8394023a5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Output Requirements

## Definition — verbatim
(used, not defined)

> "## Output Requirements" — .claude/skills/review/references/roadmap.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/roadmap.md | 108 | defined here | Section heading specifying format requirements for roadmap review deliverables. |
| .claude/skills/review/references/security.md | 106 | defined here | Section heading mandating output formatting and leading verdict requirements for security reviews. |
| .claude/skills/review/references/spec-compliance.md | 95 | defined here | Section heading prescribing the output template for spec compliance evaluation. |
| templates/agents/negotiation.shared.md | 200 | defined here | Section heading detailing mandatory analysis and counter-offer sections for the negotiation agent. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
standard-envelope

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205, .claude/skills/review/references/security.md:233, .claude/skills/review/references/spec-compliance.md:136); clean in templates/agents/negotiation.shared.md

## Design notes
`Output Requirements` is a recurring structural section heading across agent definitions and review prompts specifying deliverable schemas, classified as `kind: name-only` per D-023.
