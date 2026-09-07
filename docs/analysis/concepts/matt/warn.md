---
package: matt
name: warn
slug: warn
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/wizard/template.sh, sha256: 33cbe9dfb1d0e9185b60248a52aabed14bc64785a00cac695e302e739dd6c153}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# warn

## Definition — verbatim
> "warn() {" — skills/engineering/wizard/template.sh:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/wizard/template.sh | 63 | defined here | Helper function that prints formatted warning notices with yellow styling and a warning symbol. |

## Consumes
A warning message string.

## Produces
Formatted yellow alert text with a warning symbol printed to standard output.

## When applied
When an optional operation cannot be completed (such as gh not installed) or when an action requires user vigilance.

## Sub-concepts
none

## Part of
wizard

## Implementation status
clean

## Design notes
A terminal output formatting helper function in `template.sh` providing consistent visual highlighting and alert iconography for non-fatal errors, skipped actions, and cautionary guidance during wizard execution.
