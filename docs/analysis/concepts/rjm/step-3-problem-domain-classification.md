---
package: rjm
name: Step 3 problem-domain classification
slug: step-3-problem-domain-classification
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Step 3 problem-domain classification

## Definition — verbatim
> "#### Step 3 problem-domain classification (Cynefin)" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:162

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 162 | defined here | Specifies problem-domain classification using the Cynefin framework (Clear, Complicated, Complex, Chaotic) orthogonal to engineering tiers. |

## Consumes
Structured PRD and domain problem characteristics.

## Produces
A 2D `tier x domain` classification block in PRD frontmatter, or a blocking halt if the domain is Chaotic.

## When applied
Executed in Step 3 after engineering tier classification.

## Sub-concepts
cynefin

## Part of
step-3

## Implementation status
defects: missing-path, doc-drift

## Design notes
Employs the Cynefin framework to evaluate problem-domain predictability independently of engineering size, enforcing probe-sense-respond experimentation for Complex domains and halting specifications in Chaotic domains until stability is reached.
