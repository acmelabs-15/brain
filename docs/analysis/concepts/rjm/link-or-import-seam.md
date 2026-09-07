---
package: rjm
name: Link or import seam
slug: link-or-import-seam
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Link or import seam

## Definition — verbatim
> "**Link or import seam**: replace a module-level dependency at test time (for example, a `requests` client, or a filesystem helper). Use sparingly; broad mocking hides design problems." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 73 | defined here | Defined as replacing a module-level dependency or import at test time. |

## Consumes
Module-level dependencies, imported client libraries, or filesystem utilities.

## Produces
Test-time module or import substitution enabling isolated execution.

## When applied
Applied when isolating module-level collaborators where object parameter injection is unavailable; used sparingly to avoid masking design flaws.

## Sub-concepts
none

## Part of
working-with-legacy-code

## Implementation status
clean

## Design notes
A seam technique replacing module-level imports or libraries at test time, recommended only sparingly because broad module mocking can obscure architectural coupling.
