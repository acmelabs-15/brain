---
package: rjm
name: devil's advocate
slug: devil-s-advocate
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: .claude/skills/adr-review/references/agent-prompts.md, sha256: 58a13dd3adc40229b5a77f394c0ffcfc5e20588f166f961bfc00dc877cd6598e}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# devil's advocate

## Definition — verbatim
> "**Core Question:** What's the strongest argument against this approach?" — .claude/skills/skillforge/references/multi-lens-framework.md:162

## Also called — verbatim
> "Contrarian analyst" — .claude/agents/independent-thinker.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 3 | applies | Role description citing devil's advocate for opposing critique, trade-off analysis, and verification. |
| .claude/skills/adr-review/references/agent-prompts.md | 201 | applies | Review prompt directive instructing agents to be the devil's advocate and verify rather than validate. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 160 | defines | Lens 6 of the multi-lens framework formalizing adversarial counter-argument generation. |

## Consumes
Design proposals, architectural decisions, and ADR claims.

## Produces
Opposing arguments, identified design vulnerabilities, and strengthened or abandoned decisions.

## When applied
Applied during architectural decision review, skill specification design, and assumption auditing.

## Sub-concepts
none

## Part of
multi-lens-framework, independent-thinker

## Implementation status
defects: missing-path

## Design notes
A structured adversarial thinking lens designed to puncture confirmation bias in multi-agent workflows. By systematically formulating the strongest counter-argument to a proposed design, it exposes hidden edge cases, brittle assumptions, and trade-offs before implementation begins.
