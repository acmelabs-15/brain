---
package: rjm
name: Exit Code Conventions
slug: exit-code-conventions
kind: checklist
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

# Exit Code Conventions

## Definition — verbatim
> "Consistent exit codes for script chaining." — .claude/skills/skillforge/references/script-patterns-catalog.md:445

## Also called — verbatim
> "### Pattern 7: Exit Code Conventions" — .claude/skills/skillforge/references/script-patterns-catalog.md:443

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 443 | defined here | Defines the standardized taxonomy of integer exit codes for script composability and error diagnosis. |

## Consumes
Execution outcomes, exception types, and validation results.

## Produces
Deterministic integer process exit codes (0, 1, 2, 3, 4, 10, 11, 20, 21, 30).

## When applied
When terminating any skill script to signal specific execution outcomes to calling processes.

## Sub-concepts
exitcode

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Enforces explicit numerical process exit codes across all automation scripts so agents and CI pipelines can differentiate between validation failures, missing files, permission errors, and timeouts.
