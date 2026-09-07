---
package: rjm
name: meta-identity exception
slug: meta-identity-exception
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

# meta-identity exception

## Definition — verbatim
> "Watch for the meta-identity exception." — .claude/agents/retrospective.md:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 181 | defined here | Fourth rule of Keep Your Identity Small distinguishing commitment to truth-seeking processes from commitment to conclusions. |

## Consumes
Stated team identities, principles, and cultural mottos.

## Produces
Alignment around procedural commitments (evidence, learning) rather than substantive conclusions.

## When applied
Applied when analyzing root causes to determine whether an identity attachment is productive or obstructive.

## Sub-concepts
none

## Part of
keep-your-identity-small

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The meta-identity exception carves out an allowable form of identity attachment: identifying with the process of following evidence and learning is net positive because it commits to an objective method rather than defending a specific conclusion. Identifying with a conclusion shuts down analysis, whereas identifying with empirical discovery preserves it.
