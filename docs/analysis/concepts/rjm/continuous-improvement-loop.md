---
package: rjm
name: Continuous Improvement Loop
slug: continuous-improvement-loop
kind: pattern
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: templates/agents/retrospective.shared.md, sha256: 7bfa93cdfe1f7bfab6198e16bd6fc921a8e62405837e36b024955a558f4f3c6c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Continuous Improvement Loop

## Definition — verbatim
> "Execution --> Reflection --> Skill Update --> Improved Execution" — .claude/agents/retrospective.md:1349

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 1346 | defined here | ASCII architectural diagram defining the closed feedback loop connecting execution and skill updates. |
| templates/agents/retrospective.shared.md | 1382 | defined here | Mermaid flowchart modeling the feedback loop from execution to improved execution. |

## Consumes
Task execution logs, retrospective reflection artifacts, and skillbook update PRs.

## Produces
Systematic updates to agent skills and Serena memories that enhance subsequent execution runs.

## When applied
Applied continuously across system sessions to drive evolutionary improvement.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Continuous Improvement Loop represents the core evolutionary engine of the rjm package. By linking execution traces to reflective diagnosis, skill updates, and subsequent execution, it turns transient operational errors into permanent institutional capabilities.
