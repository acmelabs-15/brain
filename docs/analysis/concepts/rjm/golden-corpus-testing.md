---
package: rjm
name: Golden corpus testing
slug: golden-corpus-testing
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Golden corpus testing

## Definition — verbatim
> "3. **Golden corpus testing** - No known-vulnerable samples for AI response validation" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:138

## Also called — verbatim
> "### Option 2: Golden Corpus Testing" — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:186

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 138 | used here | Identified as out-of-scope future work for validating AI responses against known-vulnerable samples. |
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 186 | used here | Evaluated as an alternative option for behavioral prompt validation; deferred as premature for current scale. |

## Consumes
Curated library of historical test cases and benchmark inputs with known-correct outputs.

## Produces
Regression detection metrics and accuracy scores for prompt evaluation.

## When applied
Considered when benchmarking prompt revisions against regression baselines.

## Sub-concepts
none

## Part of
runtime-ai-response-tests

## Implementation status
defects: missing-path, doc-drift

## Design notes
An evaluation technique comparing LLM outputs against a curated, version-controlled collection of known inputs and ideal responses. While recognized as the gold standard for prompt regression detection, both ADR-023 and ADR-057 deemed it too costly to build and maintain for initial repository scale.
