---
package: rjm
name: taint analysis
slug: taint-analysis
kind: technique
package_phase: rjm:review
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

# taint analysis

## Definition — verbatim
(used, not defined)

> "This skill detects **CWE-78 (command injection)** patterns only. The regex patterns target unambiguous shapes (`subprocess.run(..., shell=True)`, `eval(user_input)`, backtick command substitution, etc.) that produce reliable signal without taint analysis." — .claude/skills/security-scan/SKILL.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/SKILL.md | 17 | used here | Contrasted against regex pattern matching to justify the scanner scope boundaries. |

## Consumes
Source code abstract syntax trees, data flow models, and input-to-sink execution paths.

## Produces
Data flow tracking traces identifying whether untrusted user inputs reach sensitive execution sinks.

## When applied
Applied during full static application security testing (SAST) when deep flow tracing is required beyond pattern matching.

## Sub-concepts
none

## Part of
sast

## Implementation status
defects: doc-drift, orphan

## Design notes
A static analysis technique tracking tainted data flows from sources to execution sinks, contrasted in rjm with lightweight regex pattern matching.
