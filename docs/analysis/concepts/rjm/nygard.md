---
package: rjm
name: Nygard
slug: nygard
kind: template
package_phase: rjm:Architect
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md, sha256: 753b2079b2f8ad0d65f9142ba030eab785afdf790b91d3a5283898c887b66458}
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Nygard

## Definition — verbatim
> "| **Nygard** | Low | Fast-paced teams, simple decisions | Minimal: Context, Decision, Consequences |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-073-adr-lifecycle-frontmatter.md | 38 | used here | Cited in research review of upstream ADR specifications regarding supersession metadata |
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 11 | defined here | Listed in catalog as lightweight ADR template structure covering Context, Decision, and Consequences |
| .claude/skills/adr-generator/SKILL.md | 4 | used here | Listed in skill description as one of the supported architectural decision record formats |

## Consumes
Decision context, options, and expected outcomes.

## Produces
A minimalist architectural decision record markdown document.

## When applied
Selected when fast-paced teams require lightweight capture of straightforward architectural choices.

## Sub-concepts
none

## Part of
adr-templates-catalog

## Implementation status
defects: missing-path

## Design notes
Nygard refers to the pioneering minimalist architectural decision record template created by Michael Nygard, featuring only Context, Decision, and Consequences sections. In rjm's ADR catalog, it serves as the lightweight option for fast-paced decisions where heavyweight frameworks would impose unnecessary overhead.
