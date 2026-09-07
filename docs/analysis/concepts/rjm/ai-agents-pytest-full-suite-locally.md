---
package: rjm
name: AI_AGENTS_PYTEST_FULL_SUITE_LOCALLY
slug: ai-agents-pytest-full-suite-locally
kind: gate
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

# AI_AGENTS_PYTEST_FULL_SUITE_LOCALLY

## Definition — verbatim
(used, not defined)

> "Controls what `python-tests` runs pre-push. Unset: the import graph narrows the diff, and where it cannot, the fallback collects instead of executing, so a broken import and a syntax error still block the push and everything else is CI's. `1`: import-graph selection is skipped entirely and every partition executes locally, announced on stderr. Any other value raises rather than quietly doing less" — .claude/skills/ai-agents-config-catalog/SKILL.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 65 | used here | Cataloged as a production opt-in environment variable controlling whether pre-push runs the entire pytest suite locally. |

## Consumes
Test partitions and import-graph test selection configuration.

## Produces
Execution of the full local pytest test suite during pre-push validation instead of an import-graph narrowed subset.

## When applied
Set to 1 when an author or CI simulation wishes to force full local test execution before pushing.

## Sub-concepts
none

## Part of
config-catalog

## Implementation status
clean

## Design notes
An opt-in configuration flag in rjm that makes the pre-push test gate stricter, not weaker. By bypassing import-graph partition narrowing and executing the full test suite locally, it allows thorough pre-push regression testing while failing loudly on invalid values to prevent quiet degradation of test coverage.
