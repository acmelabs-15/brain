---
package: rjm
name: review-by
slug: review-by
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# review-by

## Definition — verbatim
> "optional: YYYY-MM-DD this record must be revisited; null when the decision carries no deadline" — .agents/architecture/ADR-TEMPLATE.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-TEMPLATE.md | 10 | defined here | Defined in ADR frontmatter as an optional revisit deadline timestamp for provisional decisions. |
| .claude/skills/adr-generator/references/adr-template.md | 137 | defined here | Section heading specifying guidelines and semantics for scheduling revisit dates in ADR frontmatter. |

## Consumes
Architectural decisions with provisional scopes, trial periods, or anticipated expiry dates.

## Produces
Machine-readable re-evaluation deadlines tracked by architectural governance tooling.

## When applied
Added to ADR frontmatter whenever a decision carries a provisional window, scheduled sunset, or re-review checkpoint.

## Sub-concepts
none

## Part of
adr

## Implementation status
defects: missing-path

## Design notes
`review-by` is an optional frontmatter date field in rjm's ADR template that establishes an explicit governance deadline for revisiting a technical decision. By capturing provisional windows, trial milestones, or sunset dates directly in YAML metadata, it ensures that temporary architectural compromises or evolving dependencies are systematically re-evaluated rather than forgotten.
