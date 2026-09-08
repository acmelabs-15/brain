---
package: rjm
name: model_tier
slug: model-tier
kind: artifact
package_phase: rjm:Implement
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# model_tier

## Definition — verbatim
> "model_tier: opus" — templates/agents/implementer.shared.md:3

## Also called — verbatim
`model_tier: sonnet` — scripts/validation/spec_contradiction.py:7

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/spec_contradiction.py | 7 | used here | Verified as a load-bearing claim axis compared against agent frontmatter declarations. |
| templates/agents/implementer.shared.md | 3 | defined here | Frontmatter metadata specifying the execution model tier for the implementer agent. |

## Consumes
Agent definition templates and PR specification text.

## Produces
Execution-tier configuration and contradiction validation findings.

## When applied
Configured in agent shared frontmatter and validated when verifying PR coverage against committed code.

## Sub-concepts
none

## Part of
none

## Implementation status
- `scripts/validation/spec_contradiction.py`: clean
- `templates/agents/implementer.shared.md`: defects: internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Represents the model capability tier (such as opus, sonnet, or haiku) assigned to an agent template. In rjm's architecture, `model_tier` specifies the required model intelligence level for agent execution across platforms, and is checked by validation tooling to prevent drift between pull request claims and committed agent configurations.
