---
package: rjm
name: User Sovereignty
slug: user-sovereignty
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
  - {path: .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md, sha256: 664b46f110094bbed7c45aab168811441cde25fb9bfc05eaae862beca4c4e09c}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# User Sovereignty

## Definition — verbatim
> "`.claude/rules/builder-ethos.md` (User Sovereignty): present the" — .claude/skills/ai-agents-research-methodology/SKILL.md:219

## Also called — verbatim
Sovereignty — .claude/skills/autoplan/SKILL.md:170

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 343 | used here | Invoked to override 6-agent review dissent and proceed with user-chosen enforcement direction. |
| .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md | 302 | used here | Cited as the authority under which the repository owner overruled reviewer consensus to descope developer-only machinery. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 219 | defined here \| used here | Defined as the governance principle mandating that agent and model recommendations never override user direction. |
| .claude/skills/autoplan/SKILL.md | 136 | used here | Applied as a precedence rule where user command or skill naming supersedes automated router table selection. |

## Consumes
User directives, agent recommendations, debate logs, and cross-model evaluation findings.

## Produces
Final binding decisions that supersede automated routing, agent consensus, or dissenting multi-agent reviews.

## When applied
Whenever an agent decision conflicts with user explicit intent, or when high-impact architectural or irreversible choices require explicit user confirmation.

## Sub-concepts
none

## Part of
builder-ethos, autonomy-guardrails

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
User Sovereignty is a foundational governance and architectural principle across rjm. It establishes that autonomous agents and multi-agent review panels operate as advisors, not deciders. Whenever model consensus, automated routing, or architectural review panels disagree with the human user, the user's explicit preference prevails unconditionally. This ensures that agent autonomy never compromises human agency or repository governance.
