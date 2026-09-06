---
package: matt
name: prompt-quality
slug: prompt-quality
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/question-limits.md, sha256: a4c7ab33523e8f88b75be6549f657cf086b86d77be48b87d48276311e368cc9d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# prompt-quality

## Definition — verbatim
> "The fix for the latter belongs in the skill prompt, not in a counter." — .out-of-scope/question-limits.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/question-limits.md | 14 | defined here | Highlights skill prompt engineering as the remedy for low-value questioning rather than mechanical counters. |

## Consumes
Feedback on agent question relevance, efficiency, and conversational tone.

## Produces
Sharpened skill prompt instructions that elicit high-value information without redundancy.

## When applied
When refining skill definitions and instructions to eliminate repetitive or unproductive model behavior.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Prompt-quality emphasizes that conversational precision and relevance must be engineered into the skill prompt itself rather than handled through arbitrary external throttling mechanisms.
