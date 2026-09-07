---
package: rjm
name: Graceful Dependency Fallback
slug: graceful-dependency-fallback
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Graceful Dependency Fallback

## Definition — verbatim
> "Handle optional dependencies gracefully." — .claude/skills/skillforge/references/script-patterns-catalog.md:382

## Also called — verbatim
> "### Pattern 6: Graceful Dependency Fallback" — .claude/skills/skillforge/references/script-patterns-catalog.md:380

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 380 | defined here | Documents implementation patterns for falling back to standard library functionality when optional packages are missing. |

## Consumes
Optional third-party packages (e.g. `PyYAML`, `rich`) and fallback standard library equivalents.

## Produces
Portable scripts that function across environments without mandatory external dependencies.

## When applied
Whenever a skill script utilizes non-standard library packages, ensuring functionality remains intact.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Ensures skill scripts execute reliably across diverse runtime environments by wrapping third-party imports in try/except blocks and falling back to built-in Python standard library primitives.
