---
package: rjm
name: Strategic programming
slug: strategic-programming
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

# Strategic programming

## Definition — verbatim
> "**Strategic programming**: investing in design now to make future change cheaper. Opposite of tactical, where each change is the smallest local fix." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 20 | defined here | Defined in core vocabulary as the discipline of investing in upfront design to make future modifications cheaper. |

## Consumes
Design evaluation time and architectural rigor during feature implementation.

## Produces
Robust, deep abstractions and sustained long-term codebase velocity.

## When applied
"Default to strategic on shared code: agent prompts, orchestrator hooks, public skill interfaces, anything imported in more than one place." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:164

## Sub-concepts
design-it-twice, pull-complexity-downward

## Part of
none

## Implementation status
clean

## Design notes
An engineering mindset mandated for shared surfaces in rjm. By taking extra time to design deep modules and eliminate errors upfront, it prevents incremental degradation of agent prompts, tools, and shared orchestrator seams.
