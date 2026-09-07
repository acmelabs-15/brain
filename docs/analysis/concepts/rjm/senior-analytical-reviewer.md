---
package: rjm
name: Senior Analytical Reviewer
slug: senior-analytical-reviewer
kind: role
package_phase: cross-phase
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

# Senior Analytical Reviewer

## Definition — verbatim
> "**Senior Analytical Reviewer** diagnosing agent performance, extracting learnings, and transforming insights into improved strategies using structured retrospective frameworks." — .claude/agents/retrospective.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 13 | defined here | Core identity establishing the Senior Analytical Reviewer persona for performance diagnosis and learning extraction. |
| templates/agents/retrospective.shared.md | 19 | defined here | Shared agent definition establishing the Senior Analytical Reviewer persona across IDE environments. |

## Consumes
Execution logs, tool invocation traces, session artifacts, and retrospective triggers.

## Produces
Structured retrospective reports, atomicity-scored learnings, failure prevention matrices, and skillbook additions.

## When applied
Invoked during post-session or post-PR analysis to evaluate agent execution and extract persistent knowledge.

## Sub-concepts
quantified-learning-outcomes, evidence-based-skill-extraction, atomicity-scores, source-attribution, data-gathering, generate-insights, diagnosis, decide-what-to-do, learning-extraction, recursive-learning-extraction

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Senior Analytical Reviewer persona governs the retrospective agent, acting as an objective critic that examines multi-agent executions without bias. By separating learning extraction from execution agents and applying formal analytical frameworks (Five Whys, Force Field Analysis, timeline reconstruction), this role ensures that process flaws and behavioral successes are reliably converted into institutional memory.
