---
package: rjm
name: Overview
slug: overview
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/API.template.md, sha256: 3492d04b69ed7d24618b208ea66caf4b3009d49c3df7a87bd16bcf81d4e3bdc3}
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Overview

## Definition — verbatim
(used, not defined)

> "## Overview" — .claude/skills/codebase-documenter/assets/templates/API.template.md:3

## Also called — verbatim
> "## Overview" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/API.template.md | 3 | defined here | Opening section of API documentation describing API scope, protocol, and base URL. |
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 3 | defined here | Opening section of architecture documentation summarizing system purpose, major components, and boundaries. |

## Consumes
High-level system architecture, service purpose, exposed interfaces, and protocol definitions.

## Produces
Introductory executive summary paragraph orienting the reader to the system or API scope.

## When applied
Mandatory introductory section rendered at the top of both API.md and ARCHITECTURE.md.

## Sub-concepts
none

## Part of
api-reference, architecture

## Implementation status
clean

## Design notes
Overview serves as the initial orientation section across rjm's technical documentation templates. Following the progressive disclosure principle, it restricts introductory text to two or three concise paragraphs so that readers quickly understand the system's purpose, core moving parts, protocols, and boundaries without needing to wade through deep implementation mechanics upfront.
