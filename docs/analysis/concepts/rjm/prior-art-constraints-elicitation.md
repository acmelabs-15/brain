---
package: rjm
name: Prior Art / Constraints elicitation
slug: prior-art-constraints-elicitation
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

# Prior Art / Constraints elicitation

## Definition — verbatim
> "Check 9d, Prior Art / Constraints elicitation" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:310

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 310 | defined here | Defines drift check 9d validating the presence and completeness of the Prior Art / Constraints section in the PRD. |

## Consumes
PRD document containing `## Prior Art / Constraints` section and its memory/knowledge-graph subsections.

## Produces
Binary PASS/FAIL drift verdict and blocking finding if prior art section or valid coverage notes are absent.

## When applied
> "Evaluate 9d independently from ontology checks: missing or present `## Ontology` and `## Data model` content cannot satisfy, fail, or distract from the required `## Prior Art / Constraints` section." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:311

## Sub-concepts
none

## Part of
binary-drift-checks, critic

## Implementation status
defects: missing-path, doc-drift

## Design notes
Binary drift check 9d executed by the critic subagent to ensure that Step 0.5 memory-first gate outputs (prior ADRs, historical context, or explicit coverage notes) were fully preserved in the PRD and not dropped during specification drafting.
