---
package: rjm
name: AI Output Validation
slug: ai-output-validation
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/steering/security-practices.md, sha256: de8c639a9cd6f34b9f787dc4c2b581ca5a1d314e8956cf87d6c0412e430a0d84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI Output Validation

## Definition — verbatim
> "### AI Output Validation" — .agents/steering/security-practices.md:123

## Also called — verbatim
> "When parsing AI-generated output (labels, milestones, strings), use hardened regex:" — .agents/steering/security-practices.md:125

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/steering/security-practices.md | 123 | defined here | Section heading and rules specifying hardened regex and character blocklists for sanitizing model-generated strings. |

## Consumes
ai-generated-strings

## Produces
sanitized-output

## When applied
> "When parsing AI-generated output (labels, milestones, strings), use hardened regex:" — .agents/steering/security-practices.md:125

## Sub-concepts
none

## Part of
security-practices

## Implementation status
defects: doc-drift, missing-path

## Design notes
A defensive input sanitization practice mandating that all text emitted by AI models (such as issue labels, milestones, and command parameters) be treated as untrusted and validated against strict allowlists or hardened regular expressions before execution in shells or scripts.
