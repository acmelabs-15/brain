---
package: rjm
name: Ignoring transitive dependencies
slug: ignoring-transitive-dependencies
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ignoring transitive dependencies

## Definition — verbatim
> "- **Ignoring transitive dependencies.** `--include-transitive` on `dotnet list" — .claude/agents/dependency-auditor.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/dependency-auditor.md | 144 | defined here | Anti-pattern definition mandating the inclusion of transitive trees during vulnerability scanning. |

## Consumes
Package dependency graphs and vulnerability scanner command configurations.

## Produces
Comprehensive vulnerability scanning inclusive of indirect and transitive dependencies.

## When applied
When configuring and executing vulnerability audit commands.

## Sub-concepts
none

## Part of
dependency-auditor

## Implementation status
clean

## Design notes
An anti-pattern documented in rjm's dependency auditor. Neglecting transitive dependencies allows vulnerabilities in deeply nested dependencies to pass undetected, even when direct dependencies appear clean.
