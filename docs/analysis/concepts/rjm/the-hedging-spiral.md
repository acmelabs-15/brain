---
package: rjm
name: The Hedging Spiral
slug: the-hedging-spiral
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The Hedging Spiral

## Definition — verbatim
> "Instructions that encourage uncertainty compound into paralysis." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1512

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1510 | defined here | Defined as an anti-pattern where instructions encouraging uncertainty compound into agent paralysis. |
| .claude/skills/prompt-engineer/references/workflow.md | 305 | used here | Audited in Phase 4 prompt optimization checks to eliminate accumulated uncertainty language. |

## Consumes
Overly cautious instructions, hedging qualifiers, and defensive checks.

## Produces
Agent hesitation, conversational stalls, and failure to make environmental progress.

## When applied
> "Re-consult the reference's Anti-Patterns section. Verify the optimized prompt doesn't exhibit:" — .claude/skills/prompt-engineer/references/workflow.md:303

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Hedging Spiral occurs when a prompt includes multiple instructions urging caution (e.g. "if you're not sure, ask", "verify before proceeding"). These conditions compound into an escalating hesitation spiral where the model second-guesses routine tasks. rjm counters this by replacing defensive hedging with error normalization, instructing agents to proceed with supplied inputs and adapt if an error occurs.
