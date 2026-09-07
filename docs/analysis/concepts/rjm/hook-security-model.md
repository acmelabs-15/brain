---
package: rjm
name: Hook Security Model
slug: hook-security-model
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/ADR-045-framework-extraction-security-review.md, sha256: 6c350b6780facde5089676879bbebc79c433b725b5505868a7c3b3ce1e14c57b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hook Security Model

## Definition — verbatim
> "### Hook Security Model" — .agents/security/ADR-045-framework-extraction-security-review.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/ADR-045-framework-extraction-security-review.md | 185 | defined here | Remediation section heading defining capability boundaries, filesystem access limits, and network restrictions for plugin hooks. |

## Consumes
Hook declarations in `plugin.json` and consumer runtime environment constraints.

## Produces
Restricted execution capability schemas and validation checks for hook invocations.

## When applied
Enforced during plugin loading and hook event execution.

## Sub-concepts
none

## Part of
security-model

## Implementation status
defects: missing-path

## Design notes
The `Hook Security Model` defines the boundary and privilege restrictions governing plugin hooks in rjm's architecture. Because Claude Code executes hooks in the user's host environment without native OS sandboxing, the Hook Security Model establishes a capability declaration system in `plugin.json` restricting hooks to declared filesystem paths, denying network access by default, and blocking access to credentials and secrets.
