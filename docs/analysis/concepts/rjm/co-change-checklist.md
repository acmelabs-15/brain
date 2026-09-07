---
package: rjm
name: Co-change checklist
slug: co-change-checklist
kind: checklist
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

# Co-change checklist

## Definition — verbatim
> "When the requirement touches a shared token (a regex pattern, an enum value, an exit-code table, a status string) that appears at more than one site, the generated `REQ-NNN-{slug}.md` MUST include a `## Co-change checklist` section listing every site." — .claude/skills/spec-generator/references/spec-prior-art-schema.md:243

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 241 | defined here | Defines the co-change checklist section format and triggering conditions in requirements artifacts. |

## Consumes
Shared token modification scope identified via opt-in user response or heuristics in PRD and Step 0 Q4.

## Produces
`## Co-change checklist` section in `REQ-NNN-{slug}.md` enumerating affected sites and required alterations.

## When applied
> "When the requirement touches a shared token (a regex pattern, an enum value, an exit-code table, a status string) that appears at more than one site" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:243

## Sub-concepts
none

## Part of
requirement-schema, spec-generator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Prevents verdict-token cascades and iterative bot-review discovery loops by forcing authors to systematically enumerate all repository sites affected by a shared token modification during initial specification rather than uncovering missing call sites across multiple review round trips.
