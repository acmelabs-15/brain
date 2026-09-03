---
package: addy
path: skills/observability-and-instrumentation/SKILL.md
type: skill
bytes: 11053
unit: inv-addy-17
---

# skills/observability-and-instrumentation/SKILL.md

## Purpose — required, verbatim
> "Code you can't observe is code you can't operate. Observability is the ability to answer \"what is the system doing and why?\" from the outside, using the telemetry the code emits. Instrumentation is not a post-launch add-on — it's written alongside the feature, the same way tests are. If a feature ships without telemetry, the first user-reported bug becomes archaeology instead of a query." — skills/observability-and-instrumentation/SKILL.md:10

## Design intent — required
Mandates and standardizes the co-development of observability telemetry alongside feature code, preventing unobservable production deployments where failure investigation degrades into guesswork. It establishes an on-call-driven methodology requiring engineers to define 2–4 diagnostic questions before writing telemetry, maps those questions to the appropriate signal types (metrics tell that something is wrong, traces tell where, logs tell why), and provides concrete rules for structured JSON logging with correlation IDs, RED/USE metrics with strict cardinality controls (avoiding user IDs, raw URLs, and error strings in labels), vendor-neutral OpenTelemetry distributed tracing with context propagation, and symptom-based alerting (page vs ticket) linking directly to actionable runbooks.

## Phase — required
addy:Ship

## Inputs — required
- Production feature specification, service endpoint, background job, queue, or external integration candidate for instrumentation (`skills/observability-and-instrumentation/SKILL.md:14-18`)
- Defined on-call questions specifying 2–4 critical questions on-call engineers need answered during an incident (`skills/observability-and-instrumentation/SKILL.md:27-40`)
- Operational references:
  - `skills/debugging-and-error-recovery/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:21`)
  - `skills/performance-optimization/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:22`)
  - `skills/shipping-and-launch/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:23`)
  - `skills/security-and-hardening/SKILL.md` (`skills/observability-and-instrumentation/SKILL.md:91`)
  - `../../references/observability-checklist.md` (`skills/observability-and-instrumentation/SKILL.md:203`)

## Outputs — required
- Documented on-call questions mapped to telemetry signals (`skills/observability-and-instrumentation/SKILL.md:27-48, 194`)
- Structured JSON logging implementation with standardized event names, log levels (error, warn, info, debug), allowlisted non-PII fields, and correlation/request ID propagation across system boundaries (`skills/observability-and-instrumentation/SKILL.md:52-92, 195-196`)
- Metric telemetry definitions: RED metrics (Rate, Errors, Duration histograms with p50/p95/p99) on endpoints/dependencies and USE metrics (Utilization, Saturation, Errors) on resources with low-cardinality label sets (`skills/observability-and-instrumentation/SKILL.md:93-118, 197-198`)
- Distributed tracing configuration using OpenTelemetry (e.g., `NodeSDK`, auto-instrumentation, context propagation across async boundaries, and custom spans with low-cardinality attributes) (`skills/observability-and-instrumentation/SKILL.md:119-136, 199`)
- Symptom-based alerting configurations (two tiers: page vs ticket) with justified thresholds and links to actionable runbooks (`skills/observability-and-instrumentation/SKILL.md:137-156, 200`)
- Staging telemetry verification evidence (trace traversal, metric emergence, correlation ID retrieval, alert test-fire verification) (`skills/observability-and-instrumentation/SKILL.md:157-165, 201`)

## Invokes — required
- skill skills/debugging-and-error-recovery/SKILL.md — skills/observability-and-instrumentation/SKILL.md:21
- skill skills/performance-optimization/SKILL.md — skills/observability-and-instrumentation/SKILL.md:22
- skill skills/shipping-and-launch/SKILL.md — skills/observability-and-instrumentation/SKILL.md:23
- skill skills/security-and-hardening/SKILL.md — skills/observability-and-instrumentation/SKILL.md:91
- reference ../../references/observability-checklist.md — skills/observability-and-instrumentation/SKILL.md:203

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:26
- skill skills/security-and-hardening/SKILL.md — skills/security-and-hardening/SKILL.md:369
- skill skills/shipping-and-launch/SKILL.md — skills/shipping-and-launch/SKILL.md:122
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:41, skills/using-agent-skills/SKILL.md:153, skills/using-agent-skills/SKILL.md:191
- doc docs/getting-started.md — docs/getting-started.md:138
- doc docs/adoption-guide.md — docs/adoption-guide.md:62, docs/adoption-guide.md:105
- doc README.md — README.md:281, README.md:375
- config evals/cases/incremental-implementation.json — evals/cases/incremental-implementation.json:21
- reference references/definition-of-done.md — references/definition-of-done.md:49
- config evals/cases/spec-driven-development.json — evals/cases/spec-driven-development.json:29
- config evals/cases/observability-and-instrumentation.json — evals/cases/observability-and-instrumentation.json:2, evals/cases/observability-and-instrumentation.json:34
- config evals/cases/ci-cd-and-automation.json — evals/cases/ci-cd-and-automation.json:25
- reference references/observability-checklist.md — references/observability-checklist.md:3
- external-doc sources/addy-external/observability-and-instrumentation.md — sources/addy-external/observability-and-instrumentation.md:1, sources/addy-external/observability-and-instrumentation.md:5, sources/addy-external/observability-and-instrumentation.md:12

## Concepts named — required, verbatim
- `observability-and-instrumentation` — skills/observability-and-instrumentation/SKILL.md:2 — defined here
- `logging` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `metrics` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `tracing` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `alerting` — skills/observability-and-instrumentation/SKILL.md:3 — defined here
- `Observability` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `telemetry` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `Instrumentation` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `debugging-and-error-recovery` — skills/observability-and-instrumentation/SKILL.md:21 — used here
- `performance-optimization` — skills/observability-and-instrumentation/SKILL.md:22 — used here
- `shipping-and-launch` — skills/observability-and-instrumentation/SKILL.md:23 — used here
- `Process` — skills/observability-and-instrumentation/SKILL.md:25 — defined here
- `Define "working" before instrumenting` — skills/observability-and-instrumentation/SKILL.md:27 — defined here
- `on-call questions` — skills/observability-and-instrumentation/SKILL.md:29 — defined here
- `Pick the right signal for each question` — skills/observability-and-instrumentation/SKILL.md:42 — defined here
- `Structured log` — skills/observability-and-instrumentation/SKILL.md:46 — defined here
- `Metric` — skills/observability-and-instrumentation/SKILL.md:47 — defined here
- `Trace` — skills/observability-and-instrumentation/SKILL.md:48 — defined here
- `Structured logging` — skills/observability-and-instrumentation/SKILL.md:52 — defined here
- `Log levels` — skills/observability-and-instrumentation/SKILL.md:70 — defined here
- `error` — skills/observability-and-instrumentation/SKILL.md:74 — defined here
- `warn` — skills/observability-and-instrumentation/SKILL.md:75 — defined here
- `info` — skills/observability-and-instrumentation/SKILL.md:76 — defined here
- `debug` — skills/observability-and-instrumentation/SKILL.md:77 — defined here
- `Correlation IDs` — skills/observability-and-instrumentation/SKILL.md:79 — defined here
- `request ID` — skills/observability-and-instrumentation/SKILL.md:79 — defined here
- `x-request-id` — skills/observability-and-instrumentation/SKILL.md:84 — used here
- `security-and-hardening` — skills/observability-and-instrumentation/SKILL.md:91 — used here
- `PII` — skills/observability-and-instrumentation/SKILL.md:91 — used here
- `Metrics` — skills/observability-and-instrumentation/SKILL.md:93 — defined here
- `RED` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Rate` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Errors` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Duration` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `USE` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Utilization` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Saturation` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `OpenTelemetry metrics API` — skills/observability-and-instrumentation/SKILL.md:97 — used here
- `OpenTelemetry` — skills/observability-and-instrumentation/SKILL.md:97 — used here
- `Prometheus` — skills/observability-and-instrumentation/SKILL.md:98 — used here
- `prom-client` — skills/observability-and-instrumentation/SKILL.md:98 — used here
- `Histogram` — skills/observability-and-instrumentation/SKILL.md:100 — used here
- `Cardinality` — skills/observability-and-instrumentation/SKILL.md:110 — defined here
- `percentiles` — skills/observability-and-instrumentation/SKILL.md:117 — defined here
- `p50/p95/p99` — skills/observability-and-instrumentation/SKILL.md:117 — defined here
- `Distributed tracing` — skills/observability-and-instrumentation/SKILL.md:119 — defined here
- `auto-instrumentation` — skills/observability-and-instrumentation/SKILL.md:121 — used here
- `NodeSDK` — skills/observability-and-instrumentation/SKILL.md:125 — used here
- `getNodeAutoInstrumentations` — skills/observability-and-instrumentation/SKILL.md:126 — used here
- `manual spans` — skills/observability-and-instrumentation/SKILL.md:134 — defined here
- `head-based sampling` — skills/observability-and-instrumentation/SKILL.md:135 — defined here
- `tail sampling` — skills/observability-and-instrumentation/SKILL.md:136 — defined here
- `Alerting` — skills/observability-and-instrumentation/SKILL.md:137 — defined here
- `symptoms users feel` — skills/observability-and-instrumentation/SKILL.md:139 — defined here
- `Symptom-based alerts` — skills/observability-and-instrumentation/SKILL.md:148 — defined here
- `Cause-based alerts` — skills/observability-and-instrumentation/SKILL.md:148 — defined here
- `runbook` — skills/observability-and-instrumentation/SKILL.md:152 — defined here
- `SLO` — skills/observability-and-instrumentation/SKILL.md:154 — used here
- `page` — skills/observability-and-instrumentation/SKILL.md:155 — defined here
- `ticket` — skills/observability-and-instrumentation/SKILL.md:155 — defined here
- `Verify the telemetry itself` — skills/observability-and-instrumentation/SKILL.md:157 — defined here
- `Common Rationalizations` — skills/observability-and-instrumentation/SKILL.md:166 — defined here
- `Red Flags` — skills/observability-and-instrumentation/SKILL.md:178 — defined here
- `Verification` — skills/observability-and-instrumentation/SKILL.md:190 — defined here
- `observability-checklist.md` — skills/observability-and-instrumentation/SKILL.md:203 — used here
- `pre-launch instrumentation gate` — skills/observability-and-instrumentation/SKILL.md:204 — used here

## Structure
- Observability and Instrumentation (line 6)
- Overview (line 8)
- When to Use (line 12)
- Process (line 25)
  - 1. Define "working" before instrumenting (line 27)
  - 2. Pick the right signal for each question (line 42)
  - 3. Structured logging (line 52)
  - 4. Metrics (line 93)
  - 5. Distributed tracing (line 119)
  - 6. Alerting (line 137)
  - 7. Verify the telemetry itself (line 157)
- Common Rationalizations (line 166)
- Red Flags (line 178)
- Verification (line 190)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — AGENTS.md:24-32, 40-45 omits observability-and-instrumentation from both the Intent → Skill Mapping and the Lifecycle Mapping (Implicit Commands), where only shipping-and-launch represents the SHIP phase.
- doc-drift — sources/addy-external/observability-and-instrumentation.md:12 associates the skill with command /ship in the sidebar (<code class="mono">/ship</code>), but commands/ship.toml runs shipping-and-launch via parallel fan-out to reviewer/security/test personas with zero mention of telemetry, logging, metrics, tracing, or alerting instrumentation.
- doc-drift — skills/observability-and-instrumentation/SKILL.md:204 refers to "the pre-launch instrumentation gate" in references/observability-checklist.md, but the verbatim section heading in references/observability-checklist.md:81 is "## Pre-Launch Gate".
- doc-drift — skills/observability-and-instrumentation/SKILL.md:3 frontmatter description lists: "Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting. Use when shipping any feature that runs in production and you need evidence it works. Use when production issues are reported but you can't tell what happened from the available data." whereas README.md:281 describes it as "Structured logging, RED metrics, OpenTelemetry tracing, symptom-based alerting - instrument as you build", and sources/addy-external/observability-and-instrumentation.md:1 appends ", not after an incident."

## Observations
- Clean, highly actionable rule of thumb on telemetry signals: "metrics tell you that something is wrong, traces tell you where, logs tell you why" (line 50).
- Explicit anti-cardinality-bomb instruction (lines 110–116) preventing metric store outages from high-cardinality identifiers (user IDs, full URLs, error message text).
- Strict separation between symptom-based alerts (paging humans on user-visible degradation) and cause-based dashboards (CPU/memory), with runbook requirements.
- Companion eval fixture `evals/fixtures/observability-and-instrumentation/payment-retry.js` directly replicates the console.log string-interpolation anti-pattern to test the agent's refactoring capability.

## Context cost
11,053 bytes (~2,800 tokens) for SKILL.md alone. When loading the primary companion checklist `references/observability-checklist.md` (4,931 bytes), combined context is 15,984 bytes (~4,050 tokens).
