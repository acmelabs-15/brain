---
package: rjm
name: Source Attribution
slug: source-attribution
kind: gate
package_phase: cross-phase
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

# Source Attribution

## Definition — verbatim
> "Link every insight to specific execution artifacts" — .claude/agents/retrospective.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 31 | defined here | Agent requirement mandating explicit citation linking insights to execution artifacts. |

## Consumes
Retrospective insights, execution transcripts, issue numbers, PR files, and commit hashes.

## Produces
Traceable citations linking analytical findings directly to execution artifacts.

## When applied
Applied whenever the retrospective agent documents an insight, diagnostic root cause, or proposed action item.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Source Attribution establishes strict provenance for all retrospective deductions by requiring bidirectional linkage between conclusions and their originating execution artifacts. This prevents unsubstantiated claims from drifting into persistent storage and allows subsequent auditing of agent reasoning.
