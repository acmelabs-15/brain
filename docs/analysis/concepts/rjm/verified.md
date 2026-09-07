---
package: rjm
name: VERIFIED
slug: verified
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
  - {path: .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md, sha256: 9b965f79cb3d9306372944d26d89fad405b9479e7515201709191307e45bfa21}
  - {path: .claude/skills/decision-critic/references/critical-thinking-falsifiability.md, sha256: 16b92ac278886404388a0459346144c6d32187344443c3d57185d6abf438d1d6}
  - {path: .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md, sha256: 4fecb4c15025c5d210c0eb5c3d456700fb637c758c8e7fc2cca1ad5ad114192a}
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
  - {path: .claude/skills/decision-critic/references/mental-models-conways-law.md, sha256: b73b17cb46fe4c9b84b9e5eb953fe661a53ceac27d983cd23139cc18392dbeb9}
  - {path: .claude/skills/decision-critic/references/mental-models-fat-tails.md, sha256: f4af14542219adb7a4adc77a2aa8dc73cd33cffd6526a255d2384da7772a27f3}
  - {path: .claude/skills/decision-critic/references/mental-models-galls-law.md, sha256: 02e959738698d10d405c028c1a165cd63f81e23e53535bbbe2a8323f8204cf6a}
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
  - {path: .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md, sha256: d501f1ba7cb7251ea8f3ea5cba3eb2c9d611908ebc12d1a78e3125634c259fd6}
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# VERIFIED

## Definition — verbatim
> "VERIFIED - Answers are consistent with the claim" — .claude/skills/decision-critic/scripts/decision-critic.py:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md | 68 | used here | Sets acceptance criteria before marking high-consequence claim decisions as VERIFIED. |
| .claude/skills/decision-critic/references/critical-thinking-falsifiability.md | 54 | used here | Mandates treating claims without failure conditions as UNCERTAIN rather than VERIFIED. |
| .claude/skills/decision-critic/references/critical-thinking-survivorship-bias.md | 57 | used here | Requires examining failure cases before accepting evidence-based claims as VERIFIED. |
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 46 | used here | Requires understanding original purpose before accepting remove/replace decisions as VERIFIED. |
| .claude/skills/decision-critic/references/mental-models-conways-law.md | 59 | used here | Requires identified component owners before accepting boundary decisions as VERIFIED. |
| .claude/skills/decision-critic/references/mental-models-fat-tails.md | 65 | used here | Requires verifying distribution tail characteristics before marking probability claims as VERIFIED. |
| .claude/skills/decision-critic/references/mental-models-galls-law.md | 59 | used here | Requires identifying simplest working versions before marking design decisions as VERIFIED. |
| .claude/skills/decision-critic/references/quality-boy-scout-rule.md | 32 | used here | Defines VERIFIED criteria for code improvement decisions staying within touched areas. |
| .claude/skills/decision-critic/references/strategic-thinking-systems-thinking.md | 75 | used here | Requires defined system boundaries before accepting decisions as VERIFIED. |
| .claude/skills/decision-critic/scripts/decision-critic.py | 194 | defined here | Defines the VERIFIED classification where factored answers are consistent with the claim. |
| .claude/skills/decision-critic/SKILL.md | 30 | defined here | Lists VERIFIED as one of the three primary classification statuses in the Verification phase. |

## Consumes
Decomposed claims or assumptions and answers to independent verification questions.

## Produces
A verified rating on a claim item enabling it to support a final STAND verdict.

## When applied
Applied during Step 4 (Factored Verification) when evidence and independent question answers confirm a claim.

## Sub-concepts
none

## Part of
decision-critic

## Implementation status
defects: missing-path, doc-drift, internal-contradiction (.claude/skills/decision-critic/SKILL.md); exit-code-mismatch, doc-drift (.claude/skills/decision-critic/scripts/decision-critic.py)

## Design notes
VERIFIED is an item-level gate status indicating that a decomposed claim, assumption, or constraint has withstood factored verification and aligns with empirical evidence. It forms the evidential foundation necessary for an overall proposal to receive a clean STAND verdict.
