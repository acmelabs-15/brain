# Routing

## Decision

**No skill invoked as a workflow.** Two Lineage A skills consulted as reference, in this order:

1. `security-and-hardening` — OWASP section only, while reading the error paths
2. `api-and-interface-design` — boundary/contract section only, when designing the limiter

Neither is executed end to end. Both are pulled at the point of use against real code.

## Why this shape

### The request is two jobs with opposite natures

"Sort out the rate limiting" is a build. "Make sure the error responses don't leak" is an audit of
code I have not read. Treating them as one task is the first mistake available here, because it
produces a single plan that pretends to know things about half of it.

### The error-leak half is evidence-gated

I have no repository. Anything I say about what the API currently leaks would be a list of what
payments APIs commonly leak, presented as if it were a finding. That is hypothesis-first reasoning
wearing a checklist for cover — the same failure `choosing-a-skill` calls out for performance work,
where reaching for `performance-optimization` at a symptom yields a list of things that are commonly
slow.

The correct move is to enumerate the actual error paths — handlers, the framework's default error
serialiser, and whatever the gateway adds on egress — and read what each returns. The framework
default gets named separately because nobody wrote it and nobody reviews it.

### The rate-limiting half is decision-gated, not effort-gated

The mechanism is trivial; the parameters are the work, and they are facts I do not have: the keying
dimension, per-tier vs shared ceilings, the over-limit response, and where the counter lives. That
last one is load-bearing — a per-instance limiter behind multiple processes is not a limit.

I ask about keying and the shared store because both change what I would write. I do not ask about
things I can determine by reading, per the "ask only when the answer changes what you would write"
rule.

### Ordering: errors first

The error-path read is a fixed, finite surface answerable concretely from code, and it enumerates the
endpoints and their structure — which is exactly the input the limiter design needs. So it is both
the safer and the cheaper first step. Not an arbitrary sequence.

## Skills considered and rejected

| Candidate | Why not |
| --- | --- |
| `security-and-hardening` as a workflow | Lineage A: encyclopedic checklist, strong on what to consider, weak on what to do next. Reading it end to end before touching a handler is a poor trade; its OWASP section is a good one. Consulted, not run. |
| `api-and-interface-design` as a workflow | Same lineage, same treatment. One section, at the point the limiter's contract is designed. |
| `security-review` (command) | Reviews *pending changes on the current branch*. There are no pending changes — the leak question is about existing shipped behaviour. Wrong scope. |
| `security-auditor` (persona) | Personas are fan-out targets for `/ship` and `/webperf`. Dispatching one before any error path is enumerated buys a second opinion on nothing. |
| `code-review` / `code-review:code-review` | Ambiguous by construction and both wrong here: local wants an originating spec (none exists), plugin resolves a named diff scope (no diff exists). Named both in qualified form to avoid resolving the easier question. |
| `spec-driven-development` → `/plan` → `/build` | The ceremony failure. Two scoped changes to an existing API do not need a spec, a ticket breakdown and a five-axis review. Skipping is a normal decision. |
| `grilling` → `to-spec` → `to-tickets` | Same. This is not a feature with an unclear spec; it is one audit plus one bounded design decision. |
| `interview-me` | One-question-at-a-time to ~95% confidence is disproportionate. Two named questions inline cover it. |
| `test-driven-development` | Genuinely applies — but *later*, once there is a limiter to build. Not the opening move, and naming it now would be a commitment I cannot yet honour. |
| `diagnosing-bugs` | Nothing is broken. No symptom, no red-capable loop to build. |

## Commitment discipline

The reply commits to exactly one thing: read the error paths. Everything downstream is marked
conditional on what that shows, and on the two answers requested. A numbered list of five skills
would read as five commitments; one action plus stated dependencies is a plan.

The reply also states in the user-facing text — not only here — that I have not read the code and
will not describe typical leaks as findings. The rule has to be visible where the user can see it,
since the failure mode is stating the rule in reasoning and breaking it in the first sentence.

## Scope flag raised

"Opening to third parties" usually lands auth/authz changes alongside. Surfaced as a question, not
assumed into scope — a limiter keyed on an identity that is not yet trustworthy is one you can spend
around.
