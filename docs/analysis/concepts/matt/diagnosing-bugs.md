---
package: matt
name: diagnosing-bugs
slug: diagnosing-bugs
kind: technique
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/skill-tool-invocation-terminology.md, sha256: 3fb3ccf597c7975987c671483f337a9e4d2804bf595e4bec0d854fbaffc6c8c1}
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/prototype.md, sha256: 4d7b21d5e5fcc1bb55e3188ffd718697210668bb64a98fb006e1c97bd7e21628}
  - {path: external/resolving-merge-conflicts.md, sha256: e4874999d86017e11321cce352bec3d044adcae7eb387f70a9dd5b7d7ae66501}
  - {path: external/triage.md, sha256: bd49b07f6c31218aa530c2da770e0fe60f893e266a9d5363f0e8891e4a094fbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# diagnosing-bugs

## Definition — verbatim
> "runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — docs/engineering/diagnosing-bugs.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/skill-tool-invocation-terminology.md | 5 | used here | Updated to standardize cross-skill invocation via explicit Skill tool instructions. |
| .changeset/user-invoked-skill-invocation.md | 5 | used here | Corrected Phase 6 cleanup to avoid calling user-invoked improve-codebase-architecture. |
| docs/engineering/diagnosing-bugs.md | 3 | defined here | In-depth guide defining the six-phase bug diagnosis lifecycle and tight feedback loop requirement. |
| docs/engineering/improve-codebase-architecture.md | 26 | used here | Identifies diagnosing-bugs as the appropriate tool when facing specific failure symptoms. |
| external/code-review.md | 29 | used here | Links diagnosing-bugs for investigating root causes discovered during reviews. |
| external/diagnosing-bugs.md | 24 | defined here | External doc header introducing the diagnosing-bugs skill. |
| external/diagnosing-bugs.md | 28 | used here | Describes model invocation triggers for broken, failing, or slow systems. |
| external/improve-codebase-architecture.md | 36 | used here | Recommends diagnosing-bugs before architecture refactoring when defects are present. |
| external/prototype.md | 29 | used here | Contrasts prototyping design questions with diagnosing-bugs defect workflows. |
| external/resolving-merge-conflicts.md | 30 | used here | Distinguishes merge conflict debugging from deep defect diagnosis. |
| external/triage.md | 30 | used here | References handing off confirmed bug reports to diagnosing-bugs. |

## Consumes
A defect symptom, failing test, intermittent flake, or performance regression.

## Produces
A minimized reproduction script, verified hypothesis, passing regression test, and cleaned-up fix.

## When applied
When confronting difficult, non-obvious bugs, regressions, or timing flakes that resist initial inspection.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An engineering skill enforcing a rigorous six-phase scientific debugging discipline. It strictly prohibits speculative code modifications by gating hypothesis formation behind an executable, reproducible tight feedback loop (a single command that goes red on the failure and green on resolution).
