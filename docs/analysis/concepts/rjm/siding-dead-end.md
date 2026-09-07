---
package: rjm
name: Siding/Dead End
slug: siding-dead-end
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
  - {path: .claude/skills/adr-review/SKILL.md, sha256: ecdf41ac4ac4750345c2beaf41790c0f4bfbf7b59b8ce3e953666f20a81a1662}
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Siding/Dead End

## Definition — verbatim
> "Switches topic away from the actual decision" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:139

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 139 | defines | Tabulated as a review anti-pattern where the reviewer switches topics away from the actual decision under review. |
| .claude/skills/adr-review/references/debate-protocol.md | 122 | applies | Cited in Step 3 of debate consolidation as topic drift derailing the review from the core architectural decision. |
| .claude/skills/adr-review/references/zimmermann-review-guidance.md | 49 | defines | Tabulated as a review anti-pattern where an agent derails discussion into tangential bikeshedding (e.g., naming, formatting) missing the core decision. |
| .claude/skills/adr-review/SKILL.md | 254 | applies | Tabulated in the review anti-patterns table as switching topics and deviating from the ADR. |

## Consumes
Review critique focused on tangential topics, bikeshedding, or irrelevant implementation details.

## Produces
Consolidation intervention steering debate back to the primary decision drivers.

## When applied
Detected when review feedback drifts into peripheral controversies that do not affect the main decision outcome.

## Sub-concepts
none

## Part of
review-anti-patterns

## Implementation status
defects: missing-path, doc-drift

## Design notes
Siding/Dead End (or bikeshedding) occurs when a reviewer derails an architectural evaluation into endless debate over tangential details—such as variable naming conventions or minor formatting quirks—while neglecting the central architectural trade-offs. In rjm's debate protocol, the consolidator prunes these side tracks to ensure the review remains focused on the core technical fork.
