---
package: rjm
name: Self-apply gate
slug: self-apply-gate
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Self-apply gate

## Definition — verbatim
> "6. **Self-apply gate for detection tools.** If this slice adds a guard, warning, or detector (hook, linter, threshold check), run it against the current branch NOW before committing." — .claude/commands/build.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 49 | defined here | Enforced as step 6 of the implementer loop to test new detectors against the branch prior to commit. |

## Consumes
Newly authored or modified detection tools, linters, hook scripts, or threshold checkers.

## Produces
Empirical confirmation that detection logic fires on existing trigger conditions, or required bugfixes before commit.

## When applied
During the `/build` slice implementation cycle whenever introducing or updating a warning or detection tool.

## Sub-concepts
none

## Part of
build-command

## Implementation status
clean

## Design notes
The Self-apply gate prevents silent failures in developer tooling by mandating that any new detection tool, linter, or hook be tested against the active branch before committing. If a detector does not fire on the exact defect conditions it was created to identify, the logic or threshold is demonstrably broken, preventing inert or misconfigured guardrails from entering the codebase.
