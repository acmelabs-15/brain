---
package: rjm
name: Exception Documentation Format
slug: exception-documentation-format
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-055-github-actions-runner-selection.md, sha256: b0d91063c2a7f1f750321ec14eff5781d442bef1a96c64b78d5c1cf0b640ac82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Exception Documentation Format

## Definition — verbatim
> "### Exception Documentation Format" — .agents/architecture/ADR-055-github-actions-runner-selection.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 71 | defined here | Prescribes YAML comment format required above runs-on when non-ARM runners are used. |

## Consumes
Valid architectural justifications for x64 or Windows runner selection.

## Produces
Standardized workflow comment annotations documenting approved exceptions.

## When applied
When configuring GitHub Actions workflow jobs requiring x64 or Windows runners.

## Sub-concepts
adr-055-exception

## Part of
github-actions-runner-selection

## Implementation status
clean

## Design notes
A standardized comment template in ADR-055 placed directly preceding `runs-on` directives in workflow YAML files to document approved exceptions to the ARM-first runner policy.
