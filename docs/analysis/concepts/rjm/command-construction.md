---
package: rjm
name: Command Construction
slug: command-construction
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Command Construction

## Definition — verbatim
> "### 2. Command Construction (CWE-78)" — .claude/skills/review/references/agent-safety.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/agent-safety.md | 65 | defined here | Focus area auditing shell command construction for CWE-78 command injection risks. |

## Consumes
Shell invocation scripts, lifecycle hooks, and string interpolation patterns.

## Produces
Findings and recommendations on shell command parameterization and argument separation.

## When applied
Applied when a PR introduces or alters scripts or hooks that execute system shell commands.

## Sub-concepts
none

## Part of
agent-safety

## Implementation status
defects: doc-drift, other

## Design notes
An agent safety review focus area in rjm inspecting skill scripts and lifecycle hooks to ensure commands are executed with separated arguments rather than unescaped string interpolation, mitigating CWE-78 command injection vulnerabilities.
