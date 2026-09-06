---
package: addy
name: native skills system
slug: native-skills-system
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/gemini-cli-setup.md, sha256: 982d9cdc469fb26cbd4dd6a2d26d1894f2b93e2f821dd8646c188dacb8150803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# native skills system

## Definition — verbatim
(used, not defined)
> "Gemini CLI has a native skills system that auto-discovers `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` directories." — docs/gemini-cli-setup.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/gemini-cli-setup.md | 7 | used here | Described as Gemini CLI's built-in mechanism that auto-discovers SKILL.md files in .gemini/skills/ or .agents/skills/. |

## Consumes
`SKILL.md` skill definition files organized in platform standard directories (`.gemini/skills/` or `.agents/skills/`).

## Produces
On-demand discovery and execution of matching skill workflows in the Gemini CLI runtime.

## When applied
When initializing or running tasks in Gemini CLI workspace or user scopes.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The native skills system represents host-level skill auto-discovery and on-demand invocation natively supported by the Gemini CLI. By automatically detecting `SKILL.md` files in `.gemini/skills/` or `.agents/skills/` and activating them only when relevant to the user's prompt, it avoids monolithic system instruction files and preserves context budget.
