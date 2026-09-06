---
package: addy
name: Tool-backed
slug: tool-backed
kind: pattern
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Tool-backed

## Definition — verbatim
> "3. **Tool-backed.** A dedicated runner that handles diff scoping, budgets, ratchets, and the guard checks. Use when the config outgrows a shell script." — skills/constraint-driven-development/SKILL.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 258 | defined here | Third tier of the constraint escalation path employing dedicated runners for complex checks |

## Consumes
Dedicated verification runners, diff plumbing, budget evaluators, and floor guard reference implementations.

## Produces
Sophisticated automated constraint enforcement covering diff scoping, ratchets, and AST-level evasion detection.

## When applied
Adopted when repository constraint checking logic outgrows standard shell scripts (typically >30 lines).

## Sub-concepts
floor-guard

## Part of
escalation-path, constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
The most sophisticated tier of the constraint escalation path. Dedicated runner tools (such as floor-guard.mjs) are introduced to handle requirements that exceed shell script capabilities, including diff-scoped analysis of untracked files, numerical ratchet comparisons, and AST-level detection of evasion tactics.
