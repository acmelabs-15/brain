---
package: rjm
name: Backward compatible
slug: backward-compatible
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Backward compatible

## Definition — verbatim
> "new code reads old data." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 19 | defined here | Defined in core vocabulary as the property where upgraded code successfully reads data written by older versions. |

## Consumes
Historical persisted data files, schema evolution defaults, tolerant parsers.

## Produces
Schema migrations and readers capable of processing historical records without error.

## When applied
When updating persisted object schemas, telemetry event structures, or configuration file formats.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Backward compatibility ensures that newly deployed agent skills and scripts can parse historical session logs, telemetry events, and configuration files without requiring immediate historical data migrations. It enforces that new fields supply default values and older stored formats remain readable across version upgrades.
