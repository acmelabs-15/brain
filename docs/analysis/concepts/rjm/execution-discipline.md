---
package: rjm
name: execution discipline
slug: execution-discipline
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

# execution discipline

## Definition — verbatim
> "Distinguish identity from execution discipline." — .claude/agents/retrospective.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 180 | defined here | Third rule of Keep Your Identity Small separating necessary rigorous habits from dogmatic analytical attachment. |

## Consumes
Operational norms, coding habits, testing practices, and team standards.

## Produces
Separation between rigid habits necessary for execution consistency and the open-minded flexibility required for objective analysis.

## When applied
Applied during retrospective diagnosis when evaluating standard operating procedures and habits.

## Sub-concepts
none

## Part of
keep-your-identity-small

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Execution discipline recognizes that while strong identity attachments can be useful for driving relentless consistency during execution (such as "we always write tests first"), they become hazardous during retrospective analysis. By sourcing execution discipline from systems and norms rather than identity, teams retain consistency without becoming blind to their own methodology's failures.
