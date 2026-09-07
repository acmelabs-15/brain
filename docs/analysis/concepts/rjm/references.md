---
package: rjm
name: References
slug: references
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/skillforge/assets/templates/skill-md-template.md, sha256: 9763a68d08742fd8f643cd25ffbb78e32260e4376f0a3ce0bc462c01c3afa277}
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# References

## Definition — verbatim
(used, not defined)

> "## References" — .claude/skills/codebase-documenter/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/SKILL.md | 66 | defined here | Section heading tabulating external documentation guidelines and visual aid references. |
| .claude/skills/skillforge/assets/templates/skill-md-template.md | 77 | defined here | Section heading in template providing links and descriptions to companion reference files. |
| templates/agents/dependency-auditor.shared.md | 159 | defined here | Section heading listing tool documentation URLs for package managers and ecosystem scanners. |

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
defects: orphan

## Design notes
`References` is a markdown documentation section heading indexing external documentation links, reference guides, and tool specifications across skills and agent templates, classified as `kind: name-only` per D-023.
