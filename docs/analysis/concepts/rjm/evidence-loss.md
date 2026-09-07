---
package: rjm
name: "evidence loss"
slug: evidence-loss
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/scripts/assess.py, sha256: 9e103c80873a8d3846198c6929818430e317822507f1b47ba0eec238264abaeb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# evidence loss

## Definition — verbatim
> "unscored at head (evidence loss)" — .claude/skills/code-qualities-assessment/scripts/assess.py:1063

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/scripts/assess.py | 1063 | defined here | Emits stderr warning and triggers exit code 10 when a quality scored at base becomes unscored at head. |

## Consumes
Comparison between base revision file assessment and head revision file assessment for a changed file.

## Produces
Gate failure diagnosis and exit code 10 blocking the pull request due to dropped measurability.

## When applied
Triggered in regression mode when a quality metric had positive confidence (> 0.0) at the merge base but falls to 0.0 at head.

## Sub-concepts
none

## Part of
gate-enforcement

## Implementation status
defects: doc-drift, missing-path, always-failing-gate

## Design notes
`evidence loss` is an essential safety gate in rjm's regression assessment model that prevents circumventing quality enforcement by obfuscating code. If a refactoring causes the symbol parser or quality scoring heuristics to lose visibility into a previously measurable quality—such as dropping parsable definitions, switching to unanalyzed constructs, or unhandled syntax—the gate treats this loss of diagnostic evidence as a regression rather than a neutral score change. Without this check, breaking the analyzer would pass the gate silently.
