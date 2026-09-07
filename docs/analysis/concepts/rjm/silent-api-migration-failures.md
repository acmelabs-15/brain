---
package: rjm
name: Silent API Migration Failures
slug: silent-api-migration-failures
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Silent API Migration Failures

## Definition — verbatim
> "## Silent API Migration Failures" — .claude/skills/software-engineering-library/references/release-it.md:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/release-it.md | 175 | defined here | Core pattern section detailing failures where deprecated APIs pass static checks but fail to execute side effects at runtime. |

## Consumes
External and host-provided APIs, hook registration points, and SDK version migrations.

## Produces
Behavioral smoke tests, empirical contract verification, and granular telemetry on side-effect execution.

## When applied
Applied when upgrading dependencies, migrating APIs, or implementing fire-and-forget hooks and callbacks.

## Sub-concepts
- behavioral-smoke-test

## Part of
release-it

## Implementation status
defects: missing-path

## Design notes
A insidious integration failure mode where calls to deprecated or altered APIs load and validate cleanly without exceptions, but do nothing at runtime. Defending against silent migration failures requires behavioral smoke tests that verify actual runtime execution rather than static schema validity.
