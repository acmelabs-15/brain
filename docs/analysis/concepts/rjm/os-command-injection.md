---
package: rjm
name: OS Command Injection
slug: os-command-injection
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OS Command Injection

## Definition — verbatim
> "Improper neutralization of special elements used in an OS command." — .agents/security/static-analysis-checklist.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 9 | defined here | Priority vulnerability section detailing detection patterns in shell/languages and parameterization fixes. |

## Consumes
Shell scripts, subprocess invocations, command construction logic, user-supplied parameters.

## Produces
Command injection vulnerability findings, safe array expansion patterns, and parameterized API remediations.

## When applied
Applied during static analysis, security code review, and automated pre-push checks whenever shell or system commands are executed.

## Sub-concepts
none

## Part of
static-analysis-checklist

## Implementation status
clean

## Design notes
A critical vulnerability pattern where untrusted input is passed to an operating system shell without neutralization or quoting, enabling arbitrary command execution on the host environment.
