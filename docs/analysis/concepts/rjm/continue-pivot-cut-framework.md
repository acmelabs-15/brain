---
package: rjm
name: Continue/Pivot/Cut Framework
slug: continue-pivot-cut-framework
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/high-level-advisor.md, sha256: 11ba70e40c7367c36fd869fad306307f57c749e00bb18c00d4081f8268cf42cf}
  - {path: templates/agents/high-level-advisor.shared.md, sha256: 1480a8eb6fbceee187f8b31f38d59cbbf96b4362d5c75bf23191fb9ba0ba0edb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Continue/Pivot/Cut Framework

## Definition — verbatim
(used, not defined)

> "## Verdict: CONTINUE | PIVOT | CUT" — .claude/agents/high-level-advisor.md:217

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/high-level-advisor.md | 211 | defined here | Markdown decision template evaluating ongoing initiatives across Situation, Verdict, Reasoning, Immediate Action, and Warning Signs. |
| templates/agents/high-level-advisor.shared.md | 202 | defined here | Shared markdown decision template evaluating ongoing initiatives across Continue, Pivot, and Cut outcomes. |

## Consumes
In-progress projects, experimental features, underperforming architecture tracks.

## Produces
Strategic verdict artifact containing Situation, Verdict (CONTINUE / PIVOT / CUT), Reasoning, Immediate Action, and Warning Signs.

## When applied
Applied during periodic project health assessments or when deciding the fate of struggling initiatives.

## Sub-concepts
none

## Part of
high-level-advisor

## Implementation status
defects: missing-path

## Design notes
The Continue/Pivot/Cut Framework combats the sunk cost fallacy in software development. By evaluating struggling efforts against explicit criteria and demanding a binary verdict—continue as planned, pivot the approach, or terminate the initiative—it prevents zombie projects from draining resources.
