---
package: rjm
name: tactical
slug: tactical
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# tactical

## Definition — verbatim
> "Opposite of tactical, where each change is the smallest local fix." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:20

## Also called — verbatim
Tactical programming — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:160

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 20 | defined here | Defined in core vocabulary by contrast as a development mode where each change is the smallest local fix. |

## Consumes
Immediate localized task or bug fix requirements.

## Produces
Short-term fixes and throwaway implementations.

## When applied
"Tactical is appropriate for one-off scripts, throwaway analyses, and code with a known short life." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:165

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A development mode strictly restricted in rjm to one-off scripts and disposable tasks. When applied to shared codebase infrastructure, tactical changes accumulate into technical debt that shifts comprehension costs onto future readers.
