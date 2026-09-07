---
package: matt
name: Implementation
slug: implementation
kind: pattern
package_phase: matt:design
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Implementation

## Definition — verbatim
> "**Implementation**: what's inside a module, its body of code." — skills/engineering/codebase-design/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/SKILL.md | 18 | defined here | Core architectural noun defining the code body inside a module, distinguished from adapter. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Required architectural vocabulary word enforced in architecture improvement reports. |

## Consumes
A module boundary and interface specification.

## Produces
The internal code, private functions, and state implementing the interface's contract.

## When applied
When designing, discussing, or modifying the internal logic of a module behind its interface.

## Sub-concepts
none

## Part of
codebase-design

## Implementation status
clean

## Design notes
A fundamental architectural noun in Matt's design vocabulary representing the internal body of code within a module, as opposed to its public interface. The skill distinguishes "implementation" from "adapter": one speaks of an "adapter" when discussing the seam, and "implementation" when discussing what sits behind the interface.
