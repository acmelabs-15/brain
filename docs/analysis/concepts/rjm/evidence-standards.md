---
package: rjm
name: Evidence Standards
slug: evidence-standards
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Evidence Standards

## Definition — verbatim
> "## Evidence Standards (Read Before Writing Any Claim)" — .claude/agents/implementer.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 22 | defined here | Section heading establishing the four-level epistemic hierarchy and citation requirements before writing any claim. |
| .claude/skills/review/references/qa.md | 273 | defined here | QA review standard defining explicit evidence criteria for evaluating code and workflow pull requests. |
| templates/agents/implementer.shared.md | 31 | defined here | Shared implementer template defining evidence verification standards across client environments. |

## Consumes
Assertions, code comments, docstrings, test claims, and pull request justifications.

## Produces
Verifiable evidence citations ranked according to epistemic grounding tiers.

## When applied
Mandatory pre-assertion gate applied before writing any claim into code, comments, docstrings, tests, or PR text.

## Sub-concepts
four-level-hierarchy, tool-output-from-this-session, memory-or-files-read-this-session, web-search, training-knowledge, mirror-claim-rule, canonical-source-citation, mirror-obligation

## Part of
quality-gates

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
Evidence Standards enforce strict epistemic rigor across all agent operations in rjm. By prohibiting ungrounded assertions and forcing agents to back every factual claim with reproducible tool output or direct file inspection rather than parametric memory, this gate prevents the weaponization of reader trust and halts the propagation of hallucinations across multi-agent handoffs.
