---
package: rjm
name: Keep Your Identity Small
slug: keep-your-identity-small
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

# Keep Your Identity Small

## Definition — verbatim
> "### Bias Guard: Keep Your Identity Small" — .claude/agents/retrospective.md:167

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 167 | used here | Bias guard heading and doctrine applied during Step 3 Analyze and Phase 2 Diagnosis. |
| templates/agents/retrospective.shared.md | 163 | defined here | Core bias guard section detailing identity traps and five analytical heuristics. |

## Consumes
Agent self-reflection, proposed root causes, and candidate failure explanations.

## Produces
Objective root-cause analyses uncorrupted by defensive attachments to tools, roles, or past decisions.

## When applied
Applied during analysis and diagnosis (Phase 0 Step 3 and Phase 2) whenever identifying failure causes.

## Sub-concepts
load-bearing-identity, execution-discipline, meta-identity-exception, conformist-test

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Derived from Paul Graham's essays, Keep Your Identity Small protects retrospective analysis from ego-defense and tribal dogma. When an agent or team identifies strongly with a tool, architecture, or practice ("we are a microservices shop"), diagnosing failures involving that practice threatens their identity. Keeping identity small ensures that evidence can challenge any technical choice without cognitive resistance.
