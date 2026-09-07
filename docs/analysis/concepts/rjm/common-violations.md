---
package: rjm
name: Common Violations
slug: common-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Common Violations

## Definition — verbatim
(used, not defined)

> "## Common Violations" — .claude/skills/threat-modeling/references/security-least-privilege.md:85

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-least-privilege.md | 85 | defined here | Section heading introducing a reference table cataloging common least-privilege violations and risks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
`Common Violations` is a documentation section heading in `security-least-privilege.md` grouping privilege anti-patterns rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
