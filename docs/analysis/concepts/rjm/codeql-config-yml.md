---
package: rjm
name: codeql-config.yml
slug: codeql-config-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# codeql-config.yml

## Definition — verbatim
(used, not defined)

> "**CWE-22 (path traversal) is delegated to CodeQL.** The CodeQL workflow runs `python-security-extended.qls` and `actions-security-extended.qls` on every PR, authoritatively detecting CWE-22 across **Python and GitHub Actions** code (the two languages CodeQL supports for this repo per `codeql-config.yml`)." — .claude/skills/security-scan/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/SKILL.md | 19 | used here | Configuration file cited as defining supported languages for CodeQL analysis in CI. |

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
defects: doc-drift, orphan

## Design notes
codeql-config.yml is a configuration file path identifier defining CodeQL repository settings rather than a software lifecycle concept.
