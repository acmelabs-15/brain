---
package: rjm
name: Four Laws of agent safety
slug: four-laws-of-agent-safety
kind: pattern
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Four Laws of agent safety

## Definition — verbatim
> "the Four Laws of agent safety (declared scope, verify before destructive ops, preserve audit trail, escalate when uncertain)." — .claude/skills/review/references/agent-safety.md:53

## Also called — verbatim
> "## The Four Laws Of Agent Safety" — .claude/skills/security-scan/references/agent-guardrails-template.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 53 | used here | Cited as reference principles for identifying which law an expanded agent capability fails to honor. |

## Consumes
Proposed agent actions, tool permissions, and operational scope.

## Produces
Hierarchical constraint boundaries governing autonomous agent behavior.

## When applied
Applied when reviewing changes that widen agent capability, permissions, or autonomous execution scope.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
clean

## Design notes
A hierarchical constraint model in rjm (declared scope, verify before destructive operations, preserve audit trail, escalate when uncertain) where lower-numbered laws strictly dominate in conflicts to enforce agent safety without incurring self-checking overhead.
