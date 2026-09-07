---
package: rjm
name: Result Dataclass
slug: result-dataclass
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-patterns-catalog.md, sha256: ac036d192b627a7bda2c87286360e16e693123d268f4af6aacc98c5ea7a21733}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Result Dataclass

## Definition — verbatim
> "Standard result object for all script operations." — .claude/skills/skillforge/references/script-patterns-catalog.md:11

## Also called — verbatim
> "class Result:" — .claude/skills/skillforge/references/script-patterns-catalog.md:19

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-patterns-catalog.md | 9 | defines | Defines the standard Result dataclass pattern returning success, message, data, errors, and warnings. |

## Consumes
Operation success status, human-readable summary, output dictionary, and error/warning lists.

## Produces
An instantiated `Result` object serializable to JSON via `to_dict()`.

## When applied
In every script operation that returns a structured status.

## Sub-concepts
none

## Part of
script-patterns-catalog

## Implementation status
clean

## Design notes
Encapsulates script execution outcomes into a uniform Python dataclass with boolean evaluation and dictionary serialization, ensuring predictable return values across all skill automation scripts.
