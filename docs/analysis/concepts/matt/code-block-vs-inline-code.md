---
package: matt
name: Code block vs. inline code
slug: code-block-vs-inline-code
kind: pattern
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Code block vs. inline code

## Definition — verbatim
> "- **Code block vs. inline code.** Multi-line, runnable, or illustrative → block. Single token or identifier → inline." — skills/in-progress/writing-shape/SKILL.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-shape/SKILL.md | 67 | defined here | Format tradeoff guideline directing multi-line, runnable, or illustrative snippets into code blocks and isolated tokens into inline code. |

## Consumes
Code examples, identifiers, configuration values, or syntax snippets.

## Produces
A deliberate formatting choice rendering code either as fenced multi-line blocks (with syntax highlighting) or backticked inline spans.

## When applied
When technical syntax, code snippets, or identifiers appear during article drafting.

## Sub-concepts
none

## Part of
format-arguments-to-actually-have

## Implementation status
clean

## Design notes
Code block vs. inline code governs the visual density of technical prose: multi-line snippets that illustrate execution or architecture demand dedicated fenced code blocks, whereas individual variable names, commands, and identifiers remain inline to preserve paragraph readability.
