---
package: rjm
name: AI_AGENTS_PYTEST_WORKERS
slug: ai-agents-pytest-workers
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# AI_AGENTS_PYTEST_WORKERS

## Definition — verbatim
(used, not defined)

> "Overrides the xdist worker count pre-push pytest runs with. Unset or blank: the policy picks the count. Any other value it cannot parse raises rather than falling back to a default the caller did not ask for" — .claude/skills/ai-agents-config-catalog/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 66 | used here | Cataloged as an environment variable overriding pytest-xdist worker count during pre-push test execution. |

## Consumes
Local hardware thread count and xdist execution parameters.

## Produces
Explicit pytest xdist worker allocation for parallel test execution.

## When applied
When tuning local pre-push test execution parallelism or debugging test runner contention.

## Sub-concepts
none

## Part of
config-catalog

## Implementation status
clean

## Design notes
A configuration environment variable in rjm that controls pytest-xdist worker concurrency during pre-push test runs. It enforces a strict fail-loud contract, raising an error on unparseable values rather than silently falling back to a default, ensuring deterministic test execution across varying development environments.
