# 07 · Gemini 3.1 Pro (high) versus Gemini 3.8 Flash (high)

**Status:** decided 2026-09-04 — the project runs on **Gemini 3.8 Flash at effort high**; the previous sessions (001–012) ran on 3.1 Pro high. Peter's question was capability only ("which model is actually more powerful"), not cost, and his standing constraint C1 rules out any lower-effort setting for reading or extraction. `Model: "inherit"` in the dispatch (D-017) carries the same model and effort to every Teamwork worker. The memo stamp on every card records the model and effort that produced it.

**Outcome to date.** 2,161 byte-exact citations, zero failures, across runs 01–02 on 3.8 Flash high (`../dynamic-batching-experiment.md` §7). The caveats in the verdict (closed-book hallucination rate, instruction-following on many-clause prompts) are the ones the fixed rubric, the templates and `quote-check.ts` were designed to make irrelevant: every fact is checked against its source, and the rules are read from disk, not remembered.

---

*The research as delivered on 2026-09-04 follows, unedited except for this preface. Section numbers inside it refer to the research bundle, not to METHOD.*

Researched 2026-09-04 from 35+ sources; every claim tagged and linked. The question was capability only, not cost.


# Gemini 3.1 Pro (high) vs Gemini 3.8 Flash (high) in Antigravity — as of 2026‑09‑04

Tags: **[DOC]** Google first‑party · **[EVAL]** independent measured · **[COMMUNITY]** anecdotal · **[?]** single‑source/unverified

## (A) Verdict

**Gemini 3.8 Flash at High effort is the more capable model for demanding agentic work, with high confidence for coding/tool‑use/long‑context retrieval and moderate confidence for your specific extraction‑and‑citation workload.** It rests on three facts: (1) Google's own eval tables, chained through the 3.5/3.6 Flash cards that carry a 3.1 Pro column, show every Flash since 3.6 beating 3.1 Pro on agentic coding (Terminal‑Bench 2.1: 3.1 Pro 73.8% → 3.8 Flash 89.4%; DeepSWE v1.1: 12% → 73.7%), knowledge work (GDPval‑AA Elo 965 → 1545) and long‑context recall (GDM‑MRCR v2 128k: 3.1 Pro 84.9% vs 3.6 Flash 91.8% vs 3.7 Flash 97.0%) [DOC]; (2) independent Artificial Analysis data puts 3.8 Flash (high) at Intelligence Index 59 vs 48 for 3.1 Pro, with wins on Terminal‑Bench 2.1 (87.6 vs 73.8), τ³‑Banking (44.9 vs 21.4), AA‑LCR long‑context (0.81 vs 0.79) and AA‑Briefcase document work (Elo 1208 vs 466) [EVAL]; (3) Context Arena's MRCR 8‑needle run shows 3.1 Pro (high) collapsing to 57.6% in the 64–128k bin where 3.7 Flash (high) holds 88.6% [EVAL]. The caveats that keep confidence from being "very high" for *your* task: 3.1 Pro still edges 3.8 Flash on AA‑Omniscience (hallucination rate 50.9% vs 55.2%, index 31.9 vs 29.6) and SciCode (58.9 vs 53.6) [EVAL]; IFBench has not yet been run on 3.8 Flash [EVAL]; several practitioners report 3.1 Pro following complex, many‑clause instructions better than 3.7 Flash [COMMUNITY]; and Google's own hardest Teamwork results (open math problems, Aug 27) were "obtained using Gemini 3.1 Pro", with only 3 of 7 reproduced by 3.7 Flash [DOC]. No first‑party head‑to‑head of 3.8 Flash vs 3.1 Pro exists; Google's 3.8 card compares only against 3.7 Flash, Claude Opus 5/Sonnet 5 and GPT‑5.6.

## (B) First‑party facts

**Gemini 3.1 Pro** [DOC]
- Model ID `gemini-3.1-pro-preview`; published Feb 19, 2026; still "Preview"; 1M input / 64K output; "No shutdown date announced". https://deepmind.google/models/model-cards/gemini-3-1-pro/ ; https://ai.google.dev/gemini-api/docs/deprecations
- Gemini API `thinking_level`: **low, medium, high**, default high. https://ai.google.dev/gemini-api/docs/thinking
- Antigravity model selector exposes only **Low, High** (default High) for 3.1 Pro — so the user's "Pro: low/high" is correct *for Antigravity*, though the API also has medium. https://antigravity.google/docs/models
- Positioning: "Advanced intelligence, complex problem-solving skills, and powerful agentic and vibe coding capabilities." https://ai.google.dev/gemini-api/docs/models
- Model‑card benchmarks were run at "Thinking (High)". https://deepmind.google/models/model-cards/gemini-3-1-pro/

**Gemini 3.8 Flash** [DOC]
- Model ID `gemini-3.8-flash`; GA Sept 2, 2026; 1,048,576 input / 65,536 output; knowledge cutoff March 2026 ("some domains… limited to January 2025"); "based on Gemini 3.7 Flash" (not a new base). https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash ; https://deepmind.google/models/model-cards/gemini-3-8-flash/
- `thinking_level`: **low, medium, high**, default medium; `minimal` returns an error. Google's guidance: Medium = "Best quality for most tasks. Recommended for complex code and agentic use cases"; High = "Maximizes the model's reasoning and tool orchestration capabilities. Best for deep reasoning, mathematics, and difficult multi-step tasks." https://ai.google.dev/gemini-api/docs/latest-model
- Antigravity selector: **Fast, Low, Medium, High** (default Medium) for 3.8/3.7/3.6 Flash — so the user's "Flash: low/medium/high" is right, plus an extra "Fast" tier. https://antigravity.google/docs/models
- Positioning: "our most intelligent Flash model, engineered for long-horizon software engineering, autonomous agents, and complex enterprise workflows"; launch post: "our best reasoning and coding model yet" and "exhibits greater diligence — executing extra reasoning steps, and calling tools iteratively." https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/
- Token behaviour: "Gemini 3.8 Flash can use more tokens on longer running and complex tasks, by design… Alternatively, Gemini 3.7 Flash remains fully supported." https://ai.google.dev/gemini-api/docs/latest-model
- Default for Google's own managed agents: "the Antigravity agent, now uses Gemini 3.8 Flash. The Antigravity SDK also uses Gemini 3.8 Flash by default." (same URL)
- **Explicit Google statement comparing a later Flash to 3.1 Pro: none found** in the 3.7 or 3.8 launch posts or cards. The only first‑party 3.1 Pro comparisons are the numeric columns in the 3.5 Flash and 3.6 Flash eval tables (below), and the Antigravity blog line "gains from 3.7 Flash, often approaching the performance of higher-cost frontier models." https://antigravity.google/blog/gemini-3-8-flash-in-google-antigravity

**Antigravity specifics** [DOC]
- Models offered (all plans): Gemini 3.8 Flash, 3.7 Flash, 3.6 Flash, 3.1 Pro; Claude Sonnet 4.6 / Opus 4.6 (thinking) and GPT‑OSS‑120b (not on Enterprise). https://antigravity.google/docs/models
- Changelog: per‑model effort levels added v2.5.0 (Jul 31); 3.8 Flash added to agy CLI catalog v1.1.25 (Sept 3); 3.1 Pro effort‑config fix v1.1.16 (Aug 20). https://antigravity.google/changelog
- Subagents: frontmatter `model: "inherit" | "flash" | "pro"` ("Model tier used when invoked"). No recommendation on which tier for orchestrator vs worker. https://antigravity.google/docs/subagents
- Teamwork: "Teamwork Long Proof is designed to get the most out of Flash models by coordinating many agents rather than relying on a single, larger model… Using Gemini 3.7 Flash together with 3.1 Pro, the Long Proof pattern achieves 71% on TCSBench… The ability to combine Flash and Pro models within the Long Proof pattern will be available in upcoming updates." The seven open‑problem results "are obtained using Gemini 3.1 Pro, three of them (Problems 1, 3, 4) are reproduced with Gemini 3.7 Flash." https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner
- Quota ratio between models: not published. Plans page only says limits "are correlated with the amount of work done by the agent." https://antigravity.google/docs/plans
- Gemini CLI stopped serving individual accounts June 18, 2026; replaced by Antigravity CLI (`agy`). https://github.com/google-gemini/gemini-cli/discussions/28017

## (C) First‑party benchmark table (best published effort)

No single Google table contains both 3.8 Flash and 3.1 Pro. Chain: 3.1 Pro card (Feb) → 3.5 Flash card (May, has 3.1 Pro column) → 3.6 Flash eval (Jul, has 3.1 Pro column) → 3.7 Flash card (Aug) → 3.8 Flash eval (Sept). Gemini numbers are pass@1 via the Gemini API; Flash cards state "highest scoring thinking level" (high for 3.6+ on DeepSWE); 3.1 Pro card = "Thinking (High)". Sources: P = https://deepmind.google/models/model-cards/gemini-3-1-pro/ ; F35 = https://deepmind.google/models/model-cards/gemini-3-5-flash/ ; F36 = https://storage.googleapis.com/deepmind-media/gemini/gemini_3-6_flash_model_evaluation.pdf ; F37 = https://deepmind.google/models/model-cards/gemini-3-7-flash/ ; F38 = https://storage.googleapis.com/deepmind-media/gemini/gemini_3-8_flash_model_evaluation.pdf

| Benchmark | 3.1 Pro (high) | 3.5 Flash | 3.6 Flash | 3.7 Flash | 3.8 Flash (high) |
|---|---|---|---|---|---|
| Terminal‑Bench 2.1 (Terminus‑2) | 73.8% (F36); 70.3% (F35) — conflict; card lists TB 2.0 68.5% (P) | 76.2% (F35) | 78.0% (F36) | 85.8% (F37) | **89.4%** (F38) |
| Terminal‑Bench 4.0 / 3.0 | not published | not published | 5.4% (3.0, F37) | 14.9% (3.0) | 19.1% (4.0, F38) |
| SWE‑Bench Verified | 80.6% (P) | not published | not published | not published | not published |
| SWE‑Bench Pro (public) | 54.2% (P, F36) | 55.1% (F35) | 58.7% (F36) | 60.4% [?] DataCamp | 61.6% [?] DataCamp — not in F38 table |
| DeepSWE v1.1 | 12% (F36) | 37% (F36) | 49% (F36) | 65.3% (F37) | **73.7%** (F38) |
| GDPval‑AA v2 (Elo) | 965 (F36); 1317 v1 (P) | 1349 (F36) | 1421 (F36) | 1525 (F37) | **1545** (F38) |
| MCP Atlas | 78.2% (F35); 69.2% (P) — conflict | 83.6% (F35) | n/p | n/p | n/p |
| τ²‑bench retail/telecom | 90.8 / 99.3 (P) | n/p | n/p | n/p | n/p (τ³‑Banking via AA, see D) |
| OSWorld‑Verified | 76.2% (F36) | 78.4% | 83.0% | — (OSWorld‑2.0: 47.9%) | — (OSWorld‑2.0: 59.0%) |
| MLE‑Bench | 42.6% (F36) | 49.7% | 63.9% | n/p | n/p |
| GDM‑MRCR v2 8‑needle, 128k (avg) | 84.9% (P, F36) | 77.3% (F35) | 91.8% (F36) | **97.0%** (F37) | not published in F38 |
| GDM‑MRCR v2 1M (pointwise) | 26.3% (P) | 26.6% (F35) | 54.0% (F36) | n/p | n/p |
| HLE no tools | 44.4% (P) | 40.2% (F35) | — | — | — |
| HLE‑Verified (different item set) | not published | n/p | 51.2% (F37) | 53.6% | 54.9% (F38) |
| ARC‑AGI‑2 | 77.1% (P) | 72.1% (F35) | n/p | n/p | n/p |
| GPQA Diamond | 94.3% (P) | n/p | n/p | n/p | n/p |
| MMMU‑Pro | 80.5% (P) | 83.6% (F35) | n/p | n/p | n/p |
| CharXiv Reasoning (no tools) | 83.3% (F36) | 84.2% | 85.2% | 84.5% | 86.2% (F38) |
| Vals Finance Agent v2 | 43.0% (F35) | 57.9% | n/p | 59.0% (F38) | **61.4%** (F38) |
| Harvey LAB‑AA (legal agent) | n/p | n/p | 85.1% (F37) | 90.7% (F37) | n/p (Harvey Legal Agent Benchmark 10.0% vs 8.8%, F38) |
| GDP.PDF (expert PDF comprehension) | n/p | n/p | 22.0% (F37) | 34.0% | 35.0% (F38) |
| LiveCodeBench Pro | Elo 2887 (P) | n/p | n/p | n/p | n/p |
| BrowseComp | 85.9% (P) | n/p | n/p | n/p | n/p |
| Aider Polyglot, IFBench, SimpleQA, FACTS, AIME | not published for either | | | | |

Notes: the 3.8 table's comparison set is 3.7 Flash, Claude Opus 5/Sonnet 5, GPT‑5.6 Sol/Terra only. DataCamp's Terminal‑Bench 2.1 "90.8%" conflicts with the card's 89.4% — use the card. https://www.datacamp.com/blog/gemini-3-8-flash-cyber

## (D) Independent evaluations

**Artificial Analysis** (data embedded in https://artificialanalysis.ai/models/comparisons/gemini-3-8-flash-vs-gemini-3-1-pro-preview , read 2026‑09‑04; 3.8 Flash evaluated at `high`, 3.1 Pro at its default high) [EVAL]

| Metric | 3.8 Flash (high) | 3.1 Pro Preview |
|---|---|---|
| Intelligence Index v4.1.1 | 58.7 (59; medium 57, low 52) | 47.7 (48) |
| Terminal‑Bench 2.1 | 87.6% | 73.8% |
| Terminal‑Bench Hard | not run | 53.8% |
| τ³‑Banking | 44.9% | 21.4% (τ²: 95.6%) |
| GDPval‑AA v2 Elo | 1545 | 965 |
| AA‑LCR long‑context reasoning | 0.81 (medium 0.82 = #3 overall) | 0.79 |
| AA‑Omniscience index / accuracy / hallucination rate | 29.6 / 54.6% / **55.2%** | **31.9** / 54.9% / **50.9%** |
| SciCode | 53.6% | **58.9%** |
| HLE | 47.8% | 47.0% |
| GPQA Diamond | 95.3% | 94.1% |
| CritPt | 18.3% | 17.7% |
| MMMU‑Pro | 85.6% | 82.4% |
| IFBench | not run yet | 77.1% |
| AutomationBench (partial) | 50.7% | 37.5% |
| AA‑Briefcase Elo (multi‑file knowledge‑work deliverables) | 1208 | 466 |
| APEX‑Agents | not run | 32.0% |
| Output tokens per Index task | 48.3k (19.5k answer + 28.8k reasoning) | 13.7k |
| Output speed / TTFT | 352 tok/s / 12.9s | 116 tok/s / 29.1s |

AA article: 3.8 Flash high "costs $0.58 per Intelligence Index task, making it the cheapest model at its level of intelligence"; τ³‑Banking +12 pts over 3.7 Flash. https://artificialanalysis.ai/articles/gemini-3-8-flash . AA‑LCR leaderboard: https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning

**Context Arena — MRCR v2, 8‑needle, avg score per context bin** (https://contextarena.ai/api/leaderboard?needles=8&mode=full , read 2026‑09‑04; 3.8 Flash not yet listed) [EVAL]

| Model (mode) | 32–64k | 64–128k | 128–256k | 256–512k | 512k–1M | overall |
|---|---|---|---|---|---|---|
| Gemini 3.7 Flash (high) | 93.1 | **88.6** | 89.0 | 77.7 | 63.5 | 83.0 |
| Gemini 3.6 Flash (high) | 80.6 | 77.3 | 73.9 | 61.1 | 58.3 | 73.3 |
| **Gemini 3.1 Pro (high)** | 74.9 | **57.6** | 47.4 | 31.1 | 25.9 | 53.8 |
| Gemini 3.5 Flash (high) | 61.2 | 57.5 | 54.6 | 38.8 | 26.0 | 53.2 |

**LMArena** (https://arena.ai/leaderboard/text , updated Sept 2, 2026) [EVAL]: Text — gemini‑3.8‑flash‑high #8, 1494±9; gemini‑3.7‑flash‑high #11, 1491±8; gemini‑3.1‑pro‑preview #15, 1487±3 (CIs overlap). WebDev/Code Arena (https://arena.ai/leaderboard/code , Sept 2): 3.7‑flash‑high #15, 1587; **3.8‑flash‑high #19, 1567**; 3.1‑pro‑preview #54, 1446. Agent Arena: 3.8 Flash (High) debuted #14 per Arena's X post [?] (post not fetchable). https://x.com/arena/status/2095179977805517149

**Vals.ai** (https://www.vals.ai/models/google_gemini-3.8-flash , https://www.vals.ai/models/google_gemini-3.1-pro-preview) [EVAL]: Vals Index 3.8 Flash **62.25% (#6/53)** vs 3.1 Pro **41.90% (#33/53)**; Finance Agent v2 rank #1/56 vs #37/56; per‑benchmark values are client‑rendered and could not be extracted. Vals SWE‑bench (https://www.vals.ai/benchmarks/swebench , 9/1/2026): 3.8 Flash 90% (#20), 3.1 Pro 89% (#18) — effectively tied.

Not obtained: LiveBench, Aider leaderboard, official SWE‑bench site, Scale SEAL, Epoch AI (see G).

## (E) Evidence on extraction fidelity, long context, instruction adherence, orchestration

**Measured**
- Long‑context degradation: strongest evidence favours Flash. Google's own MRCR 128k: 3.1 Pro 84.9% vs 3.7 Flash 97.0% [DOC]; Context Arena 64–128k bin: 57.6% vs 88.6% [EVAL]; AA‑LCR 0.79 vs 0.81 (small) [EVAL]. 3.8 Flash's own MRCR number is not yet published anywhere; 3.8 is "based on 3.7 Flash" [DOC] so regression is unlikely but unproven.
- Grounded document work: AA‑Briefcase (rubric asks whether the model used "the correct evidence" hidden across thousands of files) Elo 1208 vs 466 [EVAL] https://artificialanalysis.ai/evaluations/aa-briefcase ; Harvey legal‑agent benchmarks: 3.7 Flash 90.7% (Harvey LAB‑AA) vs 3.1 Pro 58.9% (AA harveyLab) [DOC/EVAL]; GDP.PDF 35.0% for 3.8 Flash, 3.1 Pro not published [DOC].
- Hallucination/knowledge: the one place 3.1 Pro measurably wins — AA‑Omniscience hallucination rate 50.9% vs 55.2% for 3.8 Flash high [EVAL]. This is closed‑book factual recall, not grounded quotation; no benchmark of verbatim‑quotation fidelity for either model was found. FACTS Grounding leaderboard could not be read (Kaggle page is JS‑only). https://www.kaggle.com/benchmarks/google/facts
- Instruction following: IFBench 77.1% for 3.1 Pro; 3.8 Flash not yet run [EVAL].
- Orchestrator vs worker: Google's Teamwork post says the framework "is designed to get the most out of Flash models by coordinating many agents rather than relying on a single, larger model", yet its flagship open‑math results were "obtained using Gemini 3.1 Pro" with 3/7 reproduced by 3.7 Flash, and its best TCSBench score used "3.7 Flash together with 3.1 Pro" [DOC]. https://antigravity.google/blog/teamwork-when-ai-becomes-a-research-partner

**Anecdotal** (all from https://news.ycombinator.com/item?id=49537553 , Sept 2–3, 2026) [COMMUNITY]
- exacube: "IME 3.1 Pro still has better system-instruction following than Flash 3.7, esp. when there're many conditions and clauses. 3.1 also writes better prose for technical material… Once the system prompt complexity goes up, Flash starts to write very dense english… I haven't tested 3.8 on my workload yet."
- maxnevermind: 3.8 Flash in the Gemini app failed to carry context across two related prompts — "Gemini 3.1 Pro model works fine in this case btw."
- dismalaf: "With 3.7 I felt I could just not use 3.1 Pro at all and 3.8 seems even better."
- wwind123 (uses agy CLI as a reviewer alongside Opus 5 / GPT‑5.6): Gemini catches ~10x fewer problems than the others; "Gemini is much less effective in acting as a guardrail" — Flash vs other vendors, not vs 3.1 Pro. https://news.ycombinator.com/item?id=49546418
- panarky: "I've been using 3.7 Flash to audit the work of Opus High, and Flash finds lots of subtle and insidious defects… blazing fast in Antigravity CLI."
- zuzululu: "would not trust it for long agentic tasks… agy cli still has a lot of issues not sure if its due to the underlying model hallucinating or the harness or both."
- keytalker: switched a subagent‑swarm skill to 3.8 and reports it "driving the swarm to produce steady outcome" with "crystal clear" exec communication.
- Medium (Google Cloud community, Aug 2026): Teamwork run "2+ hours" on 3.7 Flash alone; no Pro comparison. https://medium.com/google-cloud/antigravity-teamwork-for-long-running-tasks-de74825a6ae9
- No relevant posts found on discuss.ai.google.dev or Reddit comparing 3.8/3.7 Flash to 3.1 Pro in Antigravity.

## (F) Regressions, quirks, deprecation status

- 3.8 Flash uses far more tokens: 48.3k output tokens/task vs 13.7k for 3.1 Pro on the AA index; +30% vs 3.7 Flash; Google: "may use more tokens… especially at higher effort levels" [EVAL][DOC]. In Antigravity this means faster quota burn per turn, not lower quality.
- 3.8 Flash lags Pro‑class competitors on the hardest open‑ended agent benchmark: Terminal‑Bench 4.0 19.1% vs Opus 5 51.8% [DOC]. No 3.1 Pro number.
- WebDev Arena: 3.8 Flash (1567) currently *below* 3.7 Flash (1587) — early votes, overlapping CIs [EVAL].
- HLE essentially flat vs 3.7 (DataCamp: 45.4 vs 45.7 on standard HLE) [?]. https://www.datacamp.com/blog/gemini-3-8-flash-cyber
- Model card: "Safety performance across non-English languages regressed slightly relative to 3.7 Flash" (+5.4pp, lower is better) [DOC].
- `minimal` thinking removed in 3.7/3.8 Flash; `temperature/top_p/top_k` deprecated; "Pre-tool text can cause Malformed_Function_Call errors" [DOC]. https://ai.google.dev/gemini-api/docs/latest-model
- Harness complaints (approval prompts, sandboxing) are about agy/Antigravity, not the model [COMMUNITY] (mythz, dudeinhawaii, onlyrealcuzzo in the HN thread).
- **3.1 Pro status:** still Preview (since Feb 19), "No shutdown date announced" [DOC]. **There is no newer Pro.** TechCrunch (Jul 21): three new models "but no 3.5 Pro"; Google had said in May a Pro was "already being used internally… next month"; Bloomberg reported it "struggled to meet internal performance goals"; Logan Kilpatrick said it is being tested with partners, hopes to "land soon", and Google "started its most ambitious pre-training run yet for Gemini 4." https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/ Axios (Aug 13): 3.7 Flash "arrives before Gemini 3.5 Pro"; speculates 3.5 Pro may be scrapped for Gemini 4 Pro. https://www.axios.com/2026/08/13/google-gemini-37-flash — Antigravity therefore still offers 3.1 Pro because it is the only Pro‑tier Gemini that exists; Google continues to use it (Teamwork Long Proof, subagent `pro` tier).

## (G) Not found

- Any Google statement directly comparing 3.8 (or 3.7) Flash to 3.1 Pro; any 3.8 Flash MRCR/long‑context number; SWE‑bench Verified, GPQA, ARC‑AGI‑2, τ²‑bench, LiveCodeBench, BrowseComp for any Flash ≥3.6 in Google cards; Aider Polyglot, IFBench, SimpleQA, FACTS for either model from Google.
- IFBench, Terminal‑Bench Hard, APEX‑Agents for 3.8 Flash on AA (not yet run); 3.8 Flash on Context Arena.
- Antigravity per‑model quota multiplier; any Antigravity doc recommending Pro vs Flash for Teamwork/orchestrator/worker; anything on discuss.ai.google.dev.
- LiveBench, Aider leaderboard, swebench.com, Scale SEAL, Epoch AI entries (not fetched/rendered).
- Any measured benchmark of verbatim quotation fidelity or hallucinated citations for these two models specifically.
