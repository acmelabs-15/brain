---
id: RES-105
status: resolved # in-progress | resolved
outcome: answered
kind: research
from: IDEA-017#02
date: 2026-11-21
---
# RES-105: Survey: open-source tools that run research with agents

## Question
Survey, area 2 of 5: how do open-source research tools run research with agents, for the nine survey questions?

## Answer
This is a map of 15 open-source tools and 4 benchmarks or audits. It is not a design recommendation. Each cell is a short form of a line in Findings. "n.s." means not stated in the pages read.

### Map: questions 1 to 5

| Source | 1 Size | 2 Stages | 3 Briefs | 4 Evidence | 5 The human |
|---|---|---|---|---|---|
| LangChain Open Deep Research | Lead decides. Default 1 agent. Max 5 at one time. | Clarify, brief, supervise and research, compress, write one time. | Standalone sub-topic text. No acronyms. Sub-agent does not see the full brief. | One number per URL, kept through compression. Stop at 3+ sources. No claim check. | One clarifying question before the run. No plan review (legacy version had it). |
| GPT Researcher | Fixed. Deep mode: breadth 3 or 4, depth 2. Multi-agent mode: one researcher per outline section. | Plan questions, crawl, summarize, filter, write. Multi-agent mode adds outline, review, revise, publish. | Query plus research goal. Next level gets prior goal and follow-up questions. | Target "over 20 sources". URL kept with each learning. Optional source curation. Reviewer checks drafts against guidelines. No claim check. | Optional feedback flag. Decision of the human n.s. |
| Stanford STORM, Co-STORM | Fixed. Defaults: 3 perspectives, 3 turns, 3 queries per turn. | Perspectives, simulated conversations, outline, article, polish. | Each simulated writer gets one perspective. | Expert answers use retrieved sources. Top 3 results per query. No check step. | STORM: none. Co-STORM: human observes or steers at any turn. |
| dzhng deep-research | User sets breadth (4) and depth (2). Breadth halves per level. | Questions to user, queries, learnings, recursion, report. | Prior goal, follow-up directions, learnings so far. | URL list appended. No check. | Answers follow-up questions before the run. |
| Jina node-DeepResearch | One agent loop. | Search, read, reflect, answer. A separate evaluator judges each answer. | No sub-agents. Gap questions go in a queue. | Evaluator checks each answer on separate criteria. All must pass. | n.s. |
| Hugging Face open deep research | Fixed: 1 manager, 1 search agent. | Agent loop with a plan step each 4 steps. | Manager must send "a real sentence, not a google search". | n.s. | n.s. Search agent can ask its manager for clarification. |
| Together Open Deep Research | One pipeline. No sub-agents stated. | Plan, search, reflect, summarize and rank, write. | Planner gives search queries. | Sources ranked by relevance. No check step. | n.s. |
| ByteDance DeerFlow | 1.x: fixed roles, plan of max 3 steps. 2.0: lead decides, "fewest useful sub-agents". | 1.x: coordinate, plan, human review, research or code, report. | 2.0: delegated prompt only by default. | n.s. | 1.x: human accepts or edits the plan before the run, and edits the report after. |
| Salesforce Enterprise Deep Research | Lead classifies. Simple: 1 search. Complex: 3-5 parallel tasks, then 3-7 new tasks per loop. | Decompose, parallel search, reflect, loop, report. | Task with ID, priority and origin in a shared todo list. | Stop rule: coverage above 95%, and 80% of critical claims from tier 1-2 sources. | Human sends steering messages or edits the todo list between loops. |
| Tongyi DeepResearch | One agent. Heavy mode: several research agents plus one synthesis agent. Count n.s. | Research rounds. Each round rebuilds the workspace from a central report. | n.s. | n.s. | n.s. |
| PaperQA2 | One agent with tools, or a fixed path. | Paper search, gather evidence, answer. | No sub-agents. | Each chunk gets a scored summary. Defaults: 10 passages retrieved, 5 used. In-text citations. | n.s. |
| OpenScholar | One pipeline. No agents. | Retrieve, rerank, generate, self-feedback, citation attribution. | No sub-agents. | Citation attribution after generation. Top 10 passages, max 3 per paper. | n.s. |
| Google Gemini LangGraph quickstart | One graph. Parallel queries. | Queries, web research, reflection, refine, answer. | n.s. | Answer has citations from web sources. | None. |
| local-deep-research | One agent decides searches. | Modes: quick summary, detailed research, report. | n.s. | Citations. Check n.s. | n.s. |
| MiroFlow | Hierarchical sub-agents. Count n.s. | n.s. | n.s. | n.s. | n.s. |

### Map: questions 6 to 9

| Source | 6 The loop | 7 Past work | 8 Model and effort | 9 Limits |
|---|---|---|---|---|
| LangChain Open Deep Research | Supervisor reflects and sends more research. Max 6 iterations. | n.s. | Small model summarizes. Larger model researches, compresses, writes. | Archived 2026-08. Parallel writing failed. RACE 0.43-0.49. $46-$187 per 100 tasks. |
| GPT Researcher | Tree recursion. Reviewer and revisor loop "until satisfactory", no cap stated. | Local documents as a source. Past research n.s. | Three tiers: fast, smart, strategic. Effort medium by default, high in deep mode. | About 5 minutes and $0.4 per deep run. Docs and code disagree on defaults. |
| Stanford STORM, Co-STORM | Fixed turns. No loop on poor results stated. | A run can load the saved research log of an earlier run. | Cheap model for conversation and questions. Stronger model for outline, article, polish. | Not publication-ready. Source bias transfer. Over-association of unrelated facts. |
| dzhng deep-research | Follow-up directions drive the next level. A failed branch returns empty. | n.s. | One reasoning model. | Minimal by design. No stated results. |
| Jina node-DeepResearch | Rejected answer forces search or reflect. Failed attempts are stored. Budget end forces an answer. | n.s. In-run memory only. | One model with structured output. | Targets answers, not reports. An earlier report prototype was "useless". |
| Hugging Face open deep research | n.s. | n.s. | One model, o1 at high effort. | GAIA 55% against 67%. Text-only browser. JSON actions drop score to 33%. |
| Together Open Deep Research | Reflection finds gaps and adds searches. Loop count n.s. | n.s. Search cache only. | Four roles, four models. | Errors cascade through iterations. Search cost. Cache without expiry. |
| ByteDance DeerFlow | 1.x: planner decides if more research is necessary. 2.0: lead re-evaluates before each later batch. | 2.0: long-term memory of user facts. Research results n.s. | 1.x: "multi-tier LLM", detail n.s. 2.0: sub-agent keeps its own model. | n.s. |
| Salesforce Enterprise Deep Research | Reflection finds gaps, misalignment, quality problems. Adds or cancels tasks. Max 2-10 loops. | n.s. | One model per run, not per role. | RACE 50.62 but citation accuracy 72.5. "85% failures" in citations on one benchmark. $117 per benchmark run. |
| Tongyi DeepResearch | Each round decides: more information or final answer. | n.s. | One fine-tuned 30B model. | 128K context "still insufficient" for the hardest tasks. Scores self-reported. |
| PaperQA2 | Agent can search again or rephrase in any order. | Reuses the built index of a document folder. | Separate models for summary, answer, agent. | Open code lacks internal tools, so results can differ from the paper. |
| OpenScholar | Self-feedback loop. Count n.s. | Fixed datastore of 45 million papers. | Fine-tuned 8B model or GPT-4o. | Retrieval was offline in the main experiments. |
| Google Gemini LangGraph quickstart | Follow-up queries until a configured maximum. | n.s. | Gemini models. Per-step model n.s. | n.s. |
| local-deep-research | Agent decides when to synthesize. | Library of downloaded sources is indexed. Past sessions are saved and searchable. Automatic use n.s. | Local models. | SimpleQA about 95% with small samples and possible contamination. |
| MiroFlow | n.s. | n.s. | Many providers. Per role n.s. | README gives two different GAIA scores. "#1" claim not checkable from the page. |

### Benchmarks and audits

- DeepResearch Bench scores reports (RACE) and citations (FACT) on 100 tasks. It evaluated four closed products, no open-source tool.
- FutureSearch Deep Research Bench scores answers on 89 tasks with a frozen web copy. Its best agent scored 0.51 against an estimated ceiling of about 0.8.
- DeepTRACE audits statements and citations. It found citation accuracy from 40% to 80%.
- FINDER and its failure taxonomy DEFT classify about 1,000 reports into 14 failure modes.

### Where the sources agree

- Research and writing are separate. One model call writes the report at the end. LangChain tried parallel section writers and removed them.
- A reflection step looks for gaps after each search round and makes new queries. A hard cap stops the loop: iterations, tool calls, depth, or a token budget.
- Each search step or sub-agent gets a goal, not only a query. LangChain, GPT Researcher and dzhng all pass a goal with the query.
- A cheaper model summarizes raw pages. A stronger model plans and writes. Five tools state this split.
- Raw results are compressed before they go back to the lead. The URL stays attached to each learning.
- Most tools cite sources but do not check claims against them. The exceptions are Jina, PaperQA2, OpenScholar and Salesforce.
- Almost no tool looks at stored research before it starts. Only PaperQA2, STORM and local-deep-research reuse stored material, and none decides "this is already answered".
- The human acts mostly before the run, with a clarifying question. Few tools show the human a plan or an interim result.

### Where the sources disagree

- Who decides the size. LangChain, DeerFlow 2.0 and Salesforce let the lead agent decide. GPT Researcher, dzhng and STORM use fixed parameters. Jina, PaperQA2 and Tongyi (base mode) use one agent.
- One agent or many. LangChain reports that one agent does worse on a request with many topics. Jina reaches its goal with one agent and no framework. DeerFlow 2.0 says sub-agents are "not the default response to a complex request".
- Evidence against "a research product beats a plain strong model". FutureSearch found that a plain chat model with search beat the deep research product of the same maker in two of four cases.
- Evidence against "more citations means better evidence". On DeepResearch Bench the product with 111 effective citations per task had 81% citation accuracy. The product with 31 had 90%.
- Evidence against "a high report score means sound evidence". Salesforce ties for the top report score that its paper lists, with citation accuracy of 72.5.
- Where the human enters. LangChain moved from plan approval to one clarifying question. DeerFlow 1.x keeps plan approval. Salesforce and Co-STORM let the human steer during the run.
- Recursion or queue. dzhng and GPT Researcher recurse in a tree. Jina dropped recursion because a budget was hard to apply.
- What success means. GAIA, SimpleQA and FutureSearch score short answers. DeepResearch Bench scores long reports. Scores from different benchmarks do not compare.
- Docs against code. GPT Researcher states breadth 4 on one page and 3 on a second page, and concurrency 4 in docs but 2 in code. The Jina article and its code disagree on the queue order.

### Worth a deep run

1. LangChain Open Deep Research: prompts, blog and legacy versions. It is the only source with written rules for size, briefs and stop conditions, plus cost numbers for three designs. The archive makes it stable to study.
2. Salesforce Enterprise Deep Research: paper and steering code. It is the only source with human steering during a run, a shared task list with priorities, and numeric completeness rules.
3. Jina node-DeepResearch: evaluator and budget code. It is the clearest check step in the survey, and the strongest case for one agent.
4. Topic, claim checks: PaperQA2 and OpenScholar with the audits DeepTRACE and FINDER. Most tools lack a check step, and the audits show the cost of that gap.
5. Topic, when many agents pay off: FutureSearch Deep Research Bench with the LangChain and DeerFlow 2.0 rules. The benchmark gives failure data (forgetting, early stop) that the tool makers do not give.

### Not reached

- The public leaderboard of DeepResearch Bench with open-source entries. Scores for open-source tools come only from the tools' own pages.
- Benchmark numbers of Together and Tongyi (repository) that exist only as images.
- NVIDIA Universal Deep Research and Skywork DeepResearchAgent. The repositories exist, but the pages read do not describe the mechanism.
- The MiroFlow architecture (image only) and the DeerFlow 2.0 context guide.
- One GPT Researcher docs page returned an HTTP 404 error.
- UNVERIFIED, from search result text only: per-system unsupported-statement rates in DeepTRACE; a GAIA score of 69.09% for the OWL framework; the papers DeepHalluBench (arXiv 2601.22984), DRIFT (arXiv 2606.02060) and a reference hallucination study (arXiv 2604.03173).
- Open-source research prompts that model makers publish are left to the survey area for makers.

## Findings

### LangChain Open Deep Research
- The repository exists and its page says the owner archived it on 2026-08-21; it is read-only. Source: https://github.com/langchain-ai/open_deep_research, checked 2026-11-21.
- The README gives no reason for the archive and names no successor. Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/README.md, checked 2026-11-21.
- A run has three phases: scope (user clarification, then a research brief), research (a supervisor delegates sub-topics to sub-agents), and write (one model call writes the report from the brief and the findings). Source: https://www.langchain.com/blog/open-deep-research, checked 2026-11-21.
- The supervisor prompt sets one agent as the default: "Use single agent for simplicity unless the user request has clear opportunity for parallelization". Its examples give 1 sub-agent for a list request and 3 sub-agents for a comparison of three subjects. Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/src/open_deep_research/prompts.py, checked 2026-11-21.
- The defaults cap a run at 5 concurrent research units, 6 supervisor iterations and 10 tool calls for each researcher step; clarification is on by default. Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/src/open_deep_research/configuration.py, checked 2026-11-21.
- The supervisor must give each sub-agent "complete standalone instructions - sub-agents can't see other agents' work" and must not use acronyms or abbreviations. Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/src/open_deep_research/prompts.py, checked 2026-11-21.
- Each sub-agent gets one sub-topic and a separate context; it does not see the full brief. Source: https://www.langchain.com/blog/open-deep-research, checked 2026-11-21.
- The researcher prompt limits searches to 2-3 calls for a simple query and 5 for a complex query, and tells the agent to stop when it has 3 or more relevant sources or when the last 2 searches returned similar information. Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/src/open_deep_research/prompts.py, checked 2026-11-21.
- A separate model call cleans each sub-agent's findings before they return to the supervisor; the compression prompt says "It's really important not to lose any sources" and gives each unique URL one citation number. The prompts read contain no step that verifies a claim against its source. Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/src/open_deep_research/prompts.py, checked 2026-11-21.
- The supervisor reviews the sub-agent results and can start more research to fill gaps, up to the iteration limit. Source: https://www.langchain.com/blog/open-deep-research, checked 2026-11-21.
- The clarification prompt tells the model to ask a second question only "if ABSOLUTELY NECESSARY". Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/src/open_deep_research/prompts.py, checked 2026-11-21.
- Plan approval by the human exists only in the legacy workflow version. Source: https://github.com/langchain-ai/open_deep_research, checked 2026-11-21.
- Model defaults differ by role: gpt-4.1-mini summarizes search results; gpt-4.1 does research, compression and the final report. Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/src/open_deep_research/configuration.py, checked 2026-11-21.
- The team stopped writing report sections in parallel because "the reports were disjoint"; its stated lesson is "Only use multi-agent for easily parallelized tasks". Source: https://www.langchain.com/blog/open-deep-research, checked 2026-11-21.
- The team reports that one agent does worse on a request with many topics, because one context must hold the tool results for all sub-topics. Source: https://www.langchain.com/blog/open-deep-research, checked 2026-11-21.
- The README reports Deep Research Bench RACE scores from 0.4309 (defaults, $45.98, 58 million tokens for 100 tasks) to 0.4943 (gpt-5 as research model, 204 million tokens); a run with Claude Sonnet 4 as research model cost $187.09 for 0.4401. Source: https://github.com/langchain-ai/open_deep_research, checked 2026-11-21.
- The README says the two legacy designs "are less performant than the current implementation". Source: https://raw.githubusercontent.com/langchain-ai/open_deep_research/main/README.md, checked 2026-11-21.

### GPT Researcher
- The standard mode has a planner that generates research questions, execution agents that gather information for each question, and a publisher that merges the summaries into one report. Source: https://github.com/assafelovic/gpt-researcher, checked 2026-11-21.
- The README states a source target: "Aggregate over 20 sources for objective conclusions". Source: https://github.com/assafelovic/gpt-researcher, checked 2026-11-21.
- Deep research mode is a recursive tree with fixed size parameters, not a decision by the lead. The deep research page gives breadth 4, depth 2, concurrency 4. Source: https://docs.gptr.dev/docs/gpt-researcher/gptr/deep_research, checked 2026-11-21.
- The configuration page gives breadth 3 for the same mode, which disagrees with the deep research page. Source: https://docs.gptr.dev/docs/gpt-researcher/gptr/config, checked 2026-11-21.
- The code falls back to breadth 4, depth 2 and concurrency 2; on recursion it sets breadth to max(2, breadth // 2) and depth to depth - 1. Source: https://raw.githubusercontent.com/assafelovic/gpt-researcher/master/gpt_researcher/skills/deep_research.py, checked 2026-11-21.
- Each query has a research goal; the next level gets the text "Previous research goal:" and "Follow-up questions:"; each query yields at most 3 learnings and 3 follow-up questions, and each learning keeps its source URL. Source: https://raw.githubusercontent.com/assafelovic/gpt-researcher/master/gpt_researcher/skills/deep_research.py, checked 2026-11-21.
- The deep research code generates clarifying questions but answers them itself with "Automatically proceeding with research"; it has no verification step. Source: https://raw.githubusercontent.com/assafelovic/gpt-researcher/master/gpt_researcher/skills/deep_research.py, checked 2026-11-21.
- A deep research run takes about 5 minutes and costs about $0.4 with o3-mini at high reasoning effort. Source: https://docs.gptr.dev/docs/gpt-researcher/gptr/deep_research, checked 2026-11-21.
- The multi-agent mode has seven fixed roles (chief editor, researcher, editor, reviewer, revisor, writer, publisher) plus a human; for each outline topic, in parallel, a researcher writes a draft, a reviewer gives feedback and a revisor revises. Source: https://docs.gptr.dev/docs/gpt-researcher/multi_agents/langgraph, checked 2026-11-21.
- The reviewer checks a draft against a set of criteria; the revisor revises "until it is satisfactory"; the page gives no maximum number of rounds. Source: https://docs.gptr.dev/docs/gpt-researcher/multi_agents/langgraph, checked 2026-11-21.
- Human feedback is an option (include_human_feedback); the page does not state what the human decides. Source: https://docs.gptr.dev/docs/gpt-researcher/multi_agents/langgraph, checked 2026-11-21.
- The multi-agent mode says it was inspired by the STORM paper. Source: https://docs.gptr.dev/docs/gpt-researcher/multi_agents/langgraph, checked 2026-11-21.
- Three model tiers map to task types: FAST_LLM for summaries, SMART_LLM for reports and reasoning, STRATEGIC_LLM for plans; REASONING_EFFORT (default medium) applies to the strategic model. Source: https://docs.gptr.dev/docs/gpt-researcher/gptr/config, checked 2026-11-21.
- Source curation is an optional extra model run (CURATE_SOURCES, default False); the page lists no option that verifies claims. Source: https://docs.gptr.dev/docs/gpt-researcher/gptr/config, checked 2026-11-21.
- The tool can research local documents in place of the web (REPORT_SOURCE or DOC_PATH); the pages read do not describe a check for past research. Source: https://docs.gptr.dev/docs/gpt-researcher/gptr/config, checked 2026-11-21.

### Stanford STORM and Co-STORM
- STORM has two stages: pre-writing (internet research to collect references, then an outline) and writing (the article with citations from the outline and references). Source: https://github.com/stanford-oval/storm, checked 2026-11-21.
- STORM finds perspectives from existing articles on similar topics, then simulates a conversation between a writer and a topic expert grounded in internet sources. Source: https://github.com/stanford-oval/storm, checked 2026-11-21.
- The size is fixed by defaults: 3 perspectives, 3 questions per conversation, 3 search queries per turn, top 3 search results per query. Source: https://raw.githubusercontent.com/stanford-oval/storm/main/knowledge_storm/storm_wiki/engine.py, checked 2026-11-21.
- The run has four stages that can run separately (research, outline, article, polish); a later stage loads the saved conversation log of an earlier run from disk. Source: https://raw.githubusercontent.com/stanford-oval/storm/main/knowledge_storm/storm_wiki/engine.py, checked 2026-11-21.
- Co-STORM adds a human: the user can observe, or inject utterances to steer the discussion; a moderator agent raises questions and a mind map organizes the collected information. Source: https://github.com/stanford-oval/storm, checked 2026-11-21.
- The README assigns models by component: a cheaper, faster model for the conversation simulator and a more powerful model for article generation, to "generate verifiable text with citations". Source: https://github.com/stanford-oval/storm, checked 2026-11-21.
- The code defaults follow that split: a small model for the conversation simulator and question asker, a larger model for outline, article and polish. Source: https://raw.githubusercontent.com/stanford-oval/storm/main/knowledge_storm/storm_wiki/engine.py, checked 2026-11-21.
- The README states a limit: the system "cannot produce publication-ready articles that often require a significant number of edits". Source: https://github.com/stanford-oval/storm, checked 2026-11-21.
- The STORM paper reports a 25% absolute increase in articles judged organized and 10% in breadth against an outline-driven baseline; Wikipedia editors named "source bias transfer and over-association of unrelated facts" as problems. Source: https://arxiv.org/abs/2402.14207, checked 2026-11-21.
- In the Co-STORM human evaluation, 70% of participants preferred it to a search engine and 78% preferred it to a retrieval chatbot. Source: https://arxiv.org/abs/2408.15232, checked 2026-11-21.

### dzhng deep-research
- The repository exists; it calls itself "the simplest implementation of a deep research agent" and aims to stay under 500 lines. Source: https://github.com/dzhng/deep-research, checked 2026-11-21.
- Size comes from two user parameters (breadth, default 4; depth, default 2); the code halves breadth at each level (Math.ceil(breadth / 2)) and reduces depth by 1. Source: https://raw.githubusercontent.com/dzhng/deep-research/main/src/deep-research.ts, checked 2026-11-21.
- Before research, the tool asks the user follow-up questions to refine the direction. Source: https://github.com/dzhng/deep-research, checked 2026-11-21.
- Each recursive step gets the previous research goal, the follow-up directions and the learnings so far; each search query carries its own researchGoal field. Source: https://raw.githubusercontent.com/dzhng/deep-research/main/src/deep-research.ts, checked 2026-11-21.
- The prompt asks for learnings that are information dense and include entities, exact metrics, numbers and dates. Source: https://raw.githubusercontent.com/dzhng/deep-research/main/src/deep-research.ts, checked 2026-11-21.
- The code has no verification and no source quality check; it appends the visited URLs as a Sources list. A failed branch returns empty and the run continues. Source: https://raw.githubusercontent.com/dzhng/deep-research/main/src/deep-research.ts, checked 2026-11-21.

### Jina node-DeepResearch
- One loop searches, reads and reasons "until an answer is found (or the token budget is exceeded)"; the README does not describe many agents. Source: https://github.com/jina-ai/node-DeepResearch, checked 2026-11-21.
- The project targets short correct answers, not reports: "We don't optimize for long-form articles, that's a completely different problem". Source: https://github.com/jina-ai/node-DeepResearch, checked 2026-11-21.
- A separate evaluator judges each answer on the criteria that apply to the question, and all criteria must pass; the maker's rule is that "answer generation and evaluation should not be in the same prompt". Source: https://jina.ai/news/a-practical-guide-to-implementing-deepsearch-deepresearch, checked 2026-11-21.
- After a rejected answer, the agent must search or reflect before it answers again, and the failed attempt is stored with a learned strategy; when the budget ends, "beast mode" forces an answer. Source: https://jina.ai/news/a-practical-guide-to-implementing-deepsearch-deepresearch, checked 2026-11-21.
- Open sub-questions go in a queue and the original question is always put back, because recursion was "very hard to apply budget-forcing to". Source: https://jina.ai/news/a-practical-guide-to-implementing-deepsearch-deepresearch, checked 2026-11-21.
- The article says new gap questions go to the front of the queue, but its code sample appends them to the back. Source: https://jina.ai/news/a-practical-guide-to-implementing-deepsearch-deepresearch, checked 2026-11-21.
- The maker judged an agent framework unnecessary and used no vector database; knowledge stays in the prompt context. Source: https://jina.ai/news/a-practical-guide-to-implementing-deepsearch-deepresearch, checked 2026-11-21.
- The maker calls its 2024 report-writing prototype "useless" because the report quality did not meet its standards. Source: https://jina.ai/news/a-practical-guide-to-implementing-deepsearch-deepresearch, checked 2026-11-21.

### Hugging Face smolagents open deep research
- The example reaches 55% pass@1 on the GAIA validation set, against 67% for OpenAI Deep Research; the default model is o1. Source: https://github.com/huggingface/smolagents/tree/main/examples/open_deep_research, checked 2026-11-21.
- The code has a fixed structure: one manager agent that writes code (max 12 steps) and one managed search agent (max 20 steps), each with a plan step each 4 steps. Source: https://raw.githubusercontent.com/huggingface/smolagents/main/examples/open_deep_research/run.py, checked 2026-11-21.
- The search agent's description tells the manager: "Your request must be a real sentence, not a google search!"; the search agent can return a request for clarification to the manager. Source: https://raw.githubusercontent.com/huggingface/smolagents/main/examples/open_deep_research/run.py, checked 2026-11-21.
- The two agents use the same model; reasoning effort is set to high only when the model is o1. Source: https://raw.githubusercontent.com/huggingface/smolagents/main/examples/open_deep_research/run.py, checked 2026-11-21.
- The team attributes most of its gain to actions written as code; a switch to JSON actions dropped the score to 33%. Source: https://huggingface.co/blog/open-deep-research, checked 2026-11-21.
- The blog names limits: the browser is text-only, and parity needs better browser use. Source: https://huggingface.co/blog/open-deep-research, checked 2026-11-21.

### Together Open Deep Research
- The workflow is plan, search, self-reflect, write: a model checks for knowledge gaps after each search and the loop continues until the information is enough. Source: https://www.together.ai/blog/open-deep-research, checked 2026-11-21.
- Four roles use four models: a planner with strong reasoning, a long-context summarizer, a JSON extractor for robustness, and a strong report writer. Source: https://www.together.ai/blog/open-deep-research, checked 2026-11-21.
- The makers state a limit: "Initial misinterpretations can cascade through subsequent search iterations, amplifying inaccuracies". Source: https://www.together.ai/blog/open-deep-research, checked 2026-11-21.
- The makers report that web search is very expensive in a multi-step process at scale, and that a cache without expiry blocks fresh information. Source: https://www.together.ai/blog/open-deep-research, checked 2026-11-21.
- The README tells the user to "Always verify important information from generated reports with primary sources". Source: https://github.com/togethercomputer/open_deep_research, checked 2026-11-21.

### ByteDance DeerFlow
- DeerFlow 1.x is a deep research framework with a coordinator, a planner, a research team (researcher, coder) and a reporter; the planner decides if the context is enough or more research is necessary. Source: https://github.com/bytedance/deer-flow/tree/main-1.x, checked 2026-11-21.
- In 1.x the human can review the plan before execution: the reply "[ACCEPTED]" starts the run and "[EDIT PLAN] ..." changes the plan; auto_accepted_plan skips the review. Defaults are 1 plan iteration and 3 plan steps. Source: https://github.com/bytedance/deer-flow/tree/main-1.x, checked 2026-11-21.
- DeerFlow 2.0 is a rewrite that shares no code with 1.x and is a general agent harness, not only a research tool. Source: https://github.com/bytedance/deer-flow, checked 2026-11-21.
- The 2.0 guide says "Sub-agents are an optimization, not the default response to a complex request"; the lead delegates only for a clear net benefit from parallel latency, specialist capability or context isolation, and uses the fewest useful sub-agents. Source: https://github.com/bytedance/deer-flow/blob/main/docs/guide/subagents.md, checked 2026-11-21.
- In 2.0 a sub-agent gets only its delegated prompt by default (isolated mode); a snapshot mode adds the parent conversation as background; the lead verifies and synthesizes the results. Source: https://github.com/bytedance/deer-flow/blob/main/docs/guide/subagents.md, checked 2026-11-21.
- The 2.0 long-term memory stores durable facts about the user with a confidence score; the page does not say that it stores research results. Source: https://github.com/bytedance/deer-flow/blob/main/docs/guide/memory.md, checked 2026-11-21.

### Salesforce Enterprise Deep Research
- The repository exists (Apache-2.0); it lists a master planning agent, four search agents (general, academic, GitHub, LinkedIn), a reflection mechanism and real-time steering; the default maximum is 10 research loops. Source: https://github.com/SalesforceAIResearch/enterprise-deep-research, checked 2026-11-21.
- The lead agent classifies a query as simple (one targeted search) or complex (3-5 parallel tasks at the start, then 3-7 new tasks per iteration). Source: https://arxiv.org/html/2510.17797v2, checked 2026-11-21.
- A shared todo list holds each task with an ID, a priority, a status and its origin; steering tasks get priority 10, tasks from the original query 9, knowledge-gap tasks 7. Source: https://arxiv.org/html/2510.17797v2, checked 2026-11-21.
- Human steering messages wait in a queue and are processed between iterations, in the reflection phase; they become new tasks, cancelled tasks, filters or priority changes. Source: https://arxiv.org/html/2510.17797v2, checked 2026-11-21.
- Reflection looks for knowledge gaps, task misalignment and quality inconsistencies; research is complete when average coverage is above 95%, no critical sub-topic is below 85%, and at least 80% of critical assertions have tier 1-2 sources. Source: https://arxiv.org/html/2510.17797v2, checked 2026-11-21.
- The paper reports a DeepResearch Bench score of 50.62 with citation accuracy 72.50, at about 53.9 million tokens and $117.48 for the benchmark run; these numbers are self-reported. Source: https://arxiv.org/html/2510.17797v2, checked 2026-11-21.
- The authors report "severe weaknesses in citations (85% failures)" on the ResearchQA benchmark, and steering was off in all benchmark runs, so its effect is not measured. Source: https://arxiv.org/html/2510.17797v2, checked 2026-11-21.

### Tongyi DeepResearch
- The repository exists (Apache-2.0); it ships a 30.5 billion parameter agent model with a ReAct mode and a "Heavy" mode. Source: https://github.com/Alibaba-NLP/DeepResearch, checked 2026-11-21.
- Heavy mode splits a task into research rounds; each round rebuilds a small workspace from a central report that grows, to avoid one context that fills with noise; each round decides to gather more or to answer. Source: https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/, checked 2026-11-21.
- In Heavy mode several research agents run in parallel and one synthesis agent merges their reports; the number of agents is not stated. Source: https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/, checked 2026-11-21.
- The makers state that the 128K context is "still insufficient for the most complex long-horizon tasks"; the benchmark scores are self-reported. Source: https://tongyi-agent.github.io/blog/introducing-tongyi-deep-research/, checked 2026-11-21.

### PaperQA2 and OpenScholar
- PaperQA2 runs three phases: paper search, gather evidence (rank chunks, write a scored summary of each, select by score) and generate the answer from the best summaries; an agent can call these tools in any order. Source: https://github.com/Future-House/paper-qa, checked 2026-11-21.
- PaperQA2 defaults retrieve 10 passages and use at most 5 sources in the answer; it has separate settings for the summary model, the answer model and the agent model. Source: https://github.com/Future-House/paper-qa, checked 2026-11-21.
- PaperQA2 reuses the built index of a document folder on the next query. Source: https://github.com/Future-House/paper-qa, checked 2026-11-21.
- The PaperQA2 README warns that results can differ from the paper, because internal tools and paper access are not in the open repository. Source: https://github.com/Future-House/paper-qa, checked 2026-11-21.
- The PaperQA2 paper claims that it matches or exceeds experts on three literature tasks, and that experts validated 70% of the contradictions it found. Source: https://arxiv.org/abs/2409.13740, checked 2026-11-21.
- OpenScholar is a pipeline without agents: retrieval, reranking, generation, an optional self-feedback loop and optional citation attribution after generation. Source: https://github.com/AkariAsai/OpenScholar, checked 2026-11-21.
- The OpenScholar paper reports that GPT-4o fabricated citations 78% to 90% of the time on its benchmark, and that OpenScholar's citation accuracy is on par with human experts. Source: https://arxiv.org/abs/2411.14199, checked 2026-11-21.

### Other tools
- The Google Gemini LangGraph quickstart generates queries, searches, reflects on knowledge gaps and repeats up to a configured maximum number of loops; it has no human step. Source: https://github.com/google-gemini/gemini-fullstack-langgraph-quickstart, checked 2026-11-21.
- local-deep-research keeps downloaded sources in an indexed library and saves past sessions that the user can search; the page does not say that new research reads past sessions automatically. Source: https://github.com/LearningCircuit/local-deep-research, checked 2026-11-21.
- local-deep-research reports about 95% on SimpleQA with a local model and states caveats: small samples, grader noise and possible contamination; the page gives both n=500 and 287/300 for that result. Source: https://github.com/LearningCircuit/local-deep-research, checked 2026-11-21.
- MiroFlow describes hierarchical sub-agent orchestration; its README table gives GAIA validation 82.4% and a news item gives 73.94%. Source: https://github.com/MiroMindAI/MiroFlow, checked 2026-11-21.
- NVIDIA Universal Deep Research exists as a research prototype; its paper says each existing agent is "hard-coded to carry out a particular research strategy" and lets the user define the strategy. Source: https://arxiv.org/abs/2509.00244, checked 2026-11-21.
- A 2025 survey paper (secondary source) classifies deep research agents by static or dynamic workflow and by single-agent or multi-agent composition. Source: https://arxiv.org/abs/2506.18096, checked 2026-11-21.

### Benchmarks and audits
- DeepResearch Bench has 100 PhD-level tasks in 22 fields; it scores report quality with a reference-based method and scores retrieval by effective citation count and citation accuracy. Source: https://arxiv.org/abs/2506.11763, checked 2026-11-21.
- DeepResearch Bench evaluated four closed products and no open-source tool; the product with the most effective citations (111.21 per task) had 81.44% citation accuracy, and the product with 31.26 had 90.24%. Source: https://arxiv.org/html/2506.11763, checked 2026-11-21.
- FutureSearch Deep Research Bench has 89 multi-step web research tasks in 8 categories and a frozen web copy. Source: https://arxiv.org/abs/2506.06287, checked 2026-11-21.
- In that benchmark the best agent scored 0.51 against an estimated ceiling of about 0.8; a plain chat model with search beat the deep research product of the same maker in two cases, and the product won in two other cases; each product ran only once. Source: https://arxiv.org/html/2506.06287, checked 2026-11-21.
- In that benchmark, forgetting information was the strongest predictor of a low score, before hallucination; the authors also saw models finish "at the earliest opportunity"; the failure modes explain little of the score variation. Source: https://arxiv.org/html/2506.06287, checked 2026-11-21.
- DeepTRACE audited search engines and deep research configurations: citation accuracy ranged from 40% to 80%, and large fractions of statements had no support in the listed sources. Source: https://arxiv.org/abs/2509.04499, checked 2026-11-21.
- FINDER and the DEFT taxonomy (14 failure modes from about 1,000 reports) find that agents struggle with evidence integration, verification and planning more than with task comprehension. Source: https://arxiv.org/abs/2512.01948, checked 2026-11-21.

## Follow-ups
- Which claim check is cheap enough for each run: a separate evaluator, a scored evidence summary, or citation attribution after the write-up?
- Which signals let a lead agent decide between one agent and many, and do benchmark results support the written rules?
- No surveyed tool checks stored research before it starts. Does a source outside this area do so, and how?
- Is a shared task list that the human can edit during a run better than plan approval before the run?
- Should the skill separate "find one answer" from "write a report"? The tools and the benchmarks treat them as different problems.

## Next action
None.
