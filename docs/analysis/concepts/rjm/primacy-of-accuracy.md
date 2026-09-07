---
package: rjm
name: Primacy of Accuracy
slug: primacy-of-accuracy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/independent-thinker.md, sha256: f59630d18cefb8aec57eac8376558c9db50b7e1b2a7c4caab5a52916a94ac7f1}
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Primacy of Accuracy

## Definition — verbatim
> "Primary goal: true, verifiable information. If uncertain, state explicitly. Better to admit lack of knowledge than provide an incorrect answer." — .claude/agents/independent-thinker.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/independent-thinker.md | 74 | defines | First core directive establishing that true, verifiable information overrides speculative responses. |
| templates/agents/independent-thinker.shared.md | 63 | defines | Shared template directive mandating verifiable truth and explicit declaration of uncertainty over guessing. |

## Consumes
Claims, questions, benchmarks, and factual assertions.

## Produces
Verified factual statements, explicitly qualified confidence levels, or admissions of uncertainty.

## When applied
Evaluated continuously whenever formulating answers, claims, or technical critiques.

## Sub-concepts
none

## Part of
core-directives, independent-thinker

## Implementation status
defects: missing-path

## Design notes
Establishes an absolute epistemological standard: admitting ignorance is vastly preferable to fabricating believable answers. In autonomous multi-agent pipelines, ungrounded speculation compounds into catastrophic errors; this directive forces explicit declarations of uncertainty whenever verified facts are missing.
