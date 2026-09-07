---
package: rjm
name: Infrastructure Security
slug: infrastructure-security
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Infrastructure Security

## Definition — verbatim
(used, not defined)

> "### 4. Infrastructure Security" — .claude/skills/review/references/security.md:98

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/security.md | 98 | defined here | Focus area in security review checking workflow injection, shell script sanitization, and configuration permissions. |

## Consumes
Pull request changes touching CI workflows (`.github/workflows/*`), shell scripts (`*.sh`, `*.ps1`), or configuration files.

## Produces
Security review findings identifying untrusted input injection, unescaped shell variables, or overly permissive settings.

## When applied
Evaluated during security review whenever changes modify workflow files, shell scripts, or service configurations.

## Sub-concepts
none

## Part of
security

## Implementation status
defects: internal-contradiction

## Design notes
Infrastructure Security is an analysis focus area in rjm's security review rubric that scrutinizes workflow automation, shell scripts, and configuration files to prevent untrusted input injection and insecure execution defaults.
