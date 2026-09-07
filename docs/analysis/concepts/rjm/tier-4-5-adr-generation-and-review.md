---
package: rjm
name: Tier 4-5 ADR generation and review
slug: tier-4-5-adr-generation-and-review
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

# Tier 4-5 ADR generation and review

## Definition — verbatim
> "#### Step 6 Tier 4-5 ADR generation and review (BLOCKING)" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:232

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 232 | defined here | Enforces mandatory ADR generation via adr-generator and blocking review via adr-review for all Tier 4 and Tier 5 specifications. |

## Consumes
Generated REQ, DESIGN, and TASK artifacts for Tier 4-5 specifications.

## Produces
Bidirectionally linked `ADR-NNN-{slug}.md` and a blocking gate verdict from `adr-review`.

## When applied
Executed at Step 6 immediately after spec files are generated for Tier 4-5 problems.

## Sub-concepts
adr-generator, adr-review

## Part of
step-6

## Implementation status
defects: missing-path, doc-drift

## Design notes
A blocking architectural gate ensuring that high-complexity (Tier 4 Staff and Tier 5 Principal) specifications formalize architectural decisions as ADRs and achieve an approved review verdict before advancing to implementation planning.
