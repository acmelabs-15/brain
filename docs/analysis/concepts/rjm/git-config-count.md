---
package: rjm
name: GIT_CONFIG_COUNT
slug: git-config-count
kind: name-only
package_phase: none
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

# GIT_CONFIG_COUNT

## Definition — verbatim
(used, not defined)

> "| `GIT_CONFIG_COUNT` + `GIT_CONFIG_KEY_0`/`GIT_CONFIG_VALUE_0` | env vars (set by conftest) | Test session injects `commit.gpgsign=false` with command-line precedence so test repos never invoke the user's signing setup | Production test infra | Only sets index 0 when `GIT_CONFIG_COUNT` is unset, so an outer process's config is not clobbered | `tests/conftest.py:35-38` |" — .claude/skills/ai-agents-config-catalog/SKILL.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 60 | used here | Documented as a test session environment variable used by conftest to inject commit.gpgsign=false without clobbering outer process git configurations. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
GIT_CONFIG_COUNT is an environment variable identifier used in test harness infrastructure to inject git configurations without clobbering outer user configurations rather than a software lifecycle concept, classified as name-only per D-023.
