---
package: rjm
name: Flag Unresolved Risks
slug: flag-unresolved-risks
kind: technique
package_phase: rjm:implement
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Flag Unresolved Risks

## Definition — verbatim
> "List any risks you cannot resolve within the current scope:" — .claude/agents/implementer.md:777

## Also called — verbatim
> "### Step 3: Flag Unresolved Risks" — .claude/agents/implementer.md:775

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 775 | defines | Procedural step in the Self-Critique Pass requiring explicit documentation of out-of-scope risks. |

## Consumes
Implementation observations, unresolved technical debt, environmental limitations, or architectural edge cases.

## Produces
Structured markdown table of unresolved risks, underlying constraints, and recommended follow-up actions.

## When applied
Applied during the implementer's self-critique pass prior to completion handoff.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Enforces explicit disclosure of scope limitations and known residual risks. Rather than allowing workers to sweep ambiguous issues or untestable edge cases under the rug, this technique requires documenting what remains unresolved and assigning clear recommendations for subsequent iterations.
