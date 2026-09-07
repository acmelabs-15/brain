---
package: rjm
name: Dependency scrutiny
slug: dependency-scrutiny
kind: gate
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

# Dependency scrutiny

## Definition — verbatim
> "2. **Dependency scrutiny (`programming-advisor`)**. When the spec proposes a new external dependency (a library, SaaS, or OSS package), invoke Skill(skill="programming-advisor") to evaluate it." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:189

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 189 | defined here | Evaluates maintenance, license, supply-chain, and fit risks via programming-advisor whenever external packages are proposed. |

## Consumes
Proposals for new external libraries, SaaS tools, or OSS packages, and buy-vs-build outcomes.

## Produces
A formal dependency assessment embedded into the PRD, or a halt if a buy recommendation lacks vendor evaluation.

## When applied
Applied in Step 4 following a buy-vs-build decision that recommends building with dependencies or buying.

## Sub-concepts
none

## Part of
step-4-provenance-and-dependency-gates

## Implementation status
defects: missing-path, doc-drift

## Design notes
A risk gate evaluating external dependencies for maintenance activity, licensing compatibility, and security posture before they are approved for incorporation into a specification.
