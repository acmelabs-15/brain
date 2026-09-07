---
package: rjm
name: When to Use
slug: when-to-use
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-interview-protocol.md, sha256: 95223d27cb07804a0af3fb3a999aca337b7ce53477673e250cbe1547d7e997d2}
  - {path: .agents/governance/interview-response-template.md, sha256: ce90ef506e805f7ff9e945fb97ea609c0f56cfaa5fda3aac08c327770f3b680a}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/github-url-intercept/SKILL.md, sha256: 598a7fda8d4d2d6d3308524266285eeec763778d3f7998d49ff35b39054abbd8}
  - {path: .claude/skills/reflect/SKILL.md, sha256: 645403addd017edc990804ffecd3e577ef8c2b3a15e7e841b599c2e901b33c77}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# When to Use

## Definition — verbatim
(used, not defined)

> "Provides clear entry criteria for orchestrator routing." — .agents/governance/agent-interview-protocol.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-interview-protocol.md | 92 | defined here | Defined as Question 7 of the interview protocol providing priority-tiered invocation scenarios and entry criteria. |
| .agents/governance/interview-response-template.md | 145 | used here | Section heading for Question 7 in the interview response template structured into P0, P1, and P2 priority levels. |
| .claude/skills/codebase-documenter/SKILL.md | 28 | defined here | Section heading defining conditions and trigger criteria for bootstrapping codebase documentation. |
| .claude/skills/github-url-intercept/SKILL.md | 66 | defined here | Section heading defining activation criteria for intercepting GitHub URLs in user prompts. |
| .claude/skills/reflect/SKILL.md | 40 | defined here | Section heading specifying triggers for capturing conversation learnings into memory. |
| .claude/skills/research-and-incorporate/SKILL.md | 66 | defined here | Section heading specifying scenarios for researching external concepts and persisting findings to memory. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
- 8-standardized-questions
- agent-interview-response-template

## Implementation status
defects: doc-drift, missing-path (from .claude/skills/github-url-intercept/SKILL.md script directory drift and missing relative links; .claude/skills/research-and-incorporate/SKILL.md memory tag drift and missing front-gate skill path)

## Design notes
A standardized section heading and protocol question appearing across skill definitions and interview templates rather than an executable lifecycle concept.
