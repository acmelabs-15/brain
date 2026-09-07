---
package: rjm
name: Is that true?
slug: is-that-true
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Is that true?

## Definition — verbatim
> "Apply it hardest to the claims that sound most obvious." — .claude/agents/independent-thinker.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 92 | defines | Bullet item establishing the reflex to question self-evident consensus claims like microservices or standard patterns. |
| templates/agents/independent-thinker.shared.md | 81 | defines | Shared template rule mandating the questioning of obvious assumptions. |

## Consumes
Common architectural tropes, industry consensus statements, and seemingly obvious claims.

## Produces
Critical inquiry into underlying evidence, benchmarks, or requirements supporting an assertion.

## When applied
Triggered especially when encountering claims that sound most obvious or standard ("everyone knows...", "the framework handles that").

## Sub-concepts
none

## Part of
how-to-think-for-yourself, independent-thinker

## Implementation status
defects: missing-path

## Design notes
A targeted heuristic within independent thinking designed to attack unexamined consensus. Because conventional wisdom often hides inside industry catchphrases ("microservices scale better", "ORMs prevent bugs"), this reflex triggers hardest on what sounds most obvious, requiring primary source evidence before accepting them.
