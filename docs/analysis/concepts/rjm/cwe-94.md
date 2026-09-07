---
package: rjm
name: CWE-94
slug: cwe-94
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CWE-94

## Definition — verbatim
(used, not defined)

> "## Code Execution (CWE-94, CWE-95)" — .claude/agents/security/references/powershell-security-checklist.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/powershell-security-checklist.md | 137 | used here | Cited in section heading regarding code injection and execution vulnerabilities. |
| .claude/skills/skillforge/scripts/validate-skill.py | 490 | used here | Cited in comment explaining character validation as a mitigation against code injection. |
| scripts/security/invoke_security_retrospective.py | 359 | used here | Critical CWE set entry in security retrospective vulnerability analysis. |

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
defects: script-bug, doc-drift, exit-code-mismatch, orphan

## Design notes
CWE-94 is a Common Weakness Enumeration identifier for Improper Control of Generation of Code ('Code Injection') rather than an operational lifecycle concept.
