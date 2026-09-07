---
package: rjm
name: Parameter Handling
slug: parameter-handling
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Parameter Handling

## Definition — verbatim
> "Parameter Handling" — .agents/guides/python-cicd-patterns.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 92 | defined here | Section heading mandating argparse for all script parameter handling and demonstrating workflow integration. |

## Consumes
Command-line arguments, workflow inputs, and flag specifications.

## Produces
Validated, strongly-typed argument namespaces for script execution.

## When applied
Whenever authoring Python scripts that accept inputs or parameters from CI/CD workflows or users.

## Sub-concepts
none

## Part of
python-ci-cd-patterns

## Implementation status
defects: missing-path

## Design notes
Standardized CLI parameter parsing pattern enforcing `argparse` across all repository Python scripts. It guarantees clear option definitions, automatic `--help` generation, required argument validation, and consistent parameter passing from GitHub Actions YAML.
