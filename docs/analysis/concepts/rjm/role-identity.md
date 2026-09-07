---
package: rjm
name: Role Identity
slug: role-identity
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/agent-architecture-patterns.md, sha256: 144e4d54f12f0d052ddca63e3d1f72022bbcd0720809e105b87449d1bab95253}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Role Identity

## Definition — verbatim
> "2. **Role Identity**: Specific persona, decision-making style, authority limits" — .claude/skills/analyze/references/agent-architecture-patterns.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/agent-architecture-patterns.md | 18 | defined here | Step 2 of the 6-step prompt design specifying persona, decision-making style, and authority limits. |

## Consumes
Organizational hierarchy, agent domain mandate, and permission boundaries.

## Produces
Defined persona section in agent prompt outlining posture and decision limits.

## When applied
Applied during prompt authoring to ground an agent's perspective and operational limits.

## Sub-concepts
none

## Part of
6-step-structured-prompt-design

## Implementation status
defects: missing-path

## Design notes
Role Identity establishes the behavioral stance, analytical perspective, and explicit decision-making authority of an agent. Rather than allowing generalist models to drift, specifying an unambiguous role identity anchors agent evaluation, prevents unauthorized scope expansion, and ensures consistent decision standards across tasks.
