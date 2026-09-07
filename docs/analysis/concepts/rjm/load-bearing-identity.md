---
package: rjm
name: load-bearing identity
slug: load-bearing-identity
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# load-bearing identity

## Definition — verbatim
> "Before assigning a root cause, ask: is any conclusion here protecting a tool, a methodology, or an author's identity rather than following the evidence?" — .claude/agents/retrospective.md:178

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 178 | defined here | First rule under Keep Your Identity Small instructing agents to detect identity-protecting conclusions. |

## Consumes
Candidate root causes and failure explanations during retrospective diagnosis.

## Produces
Identification and removal of defensive rationalizations that shield preferred tools or methodologies.

## When applied
Invoked prior to finalizing any root cause attribution during retrospective analysis.

## Sub-concepts
none

## Part of
keep-your-identity-small

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Load-bearing identity describes the cognitive vulnerability where an analytical conclusion exists primarily to protect an individual's or team's self-image ("am I incompetent?") rather than to explain what actually occurred. Naming it explicitly exposes motivated reasoning and redirects the diagnosis back to verifiable facts.
