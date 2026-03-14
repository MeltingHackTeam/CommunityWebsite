export const guideData = {
    themeData: {
        title: 'The Hackathon Playbook',
        subtitle: 'Winning Strategies for the AI Era',
        description: 'World-class hackathon winners share their battle-tested strategies. From ideation to pitch, master the art of building something extraordinary in 48 hours.',
        keywords: 'hackathon, guide, strategy, AI tools, winning, tips, pitch, team'
    },

    sections: [
        {
            id: 'mindset',
            tag: '01',
            title: 'Mindset Shift',
            subtitle: 'It\'s not a coding competition.',
            lead: 'The biggest mistake first-timers make? Thinking hackathons are about writing code. They\'re about solving problems and telling stories.',
            points: [
                {
                    title: 'Think like a founder, not a developer',
                    text: 'Judges look for investable ideas, not clean code. Start with "who has this problem?" — not "what tech should I use?"'
                },
                {
                    title: 'Done beats perfect',
                    text: 'A working demo with 3 polished features beats a half-finished app with 10. Scope ruthlessly. Hard-code data, mock backends, fake what you can\'t build in time.'
                },
                {
                    title: 'The pitch is 50% of the score',
                    text: 'A mediocre project with a great pitch consistently beats a great project with a poor pitch. Start your presentation on Day One — not at the end.'
                }
            ]
        },
        {
            id: 'team',
            tag: '02',
            title: 'Team Formation',
            subtitle: 'You need 3 roles, not 5 coders.',
            lead: 'The ideal hackathon team isn\'t five engineers. It\'s a carefully balanced squad of complementary skills.',
            points: [
                {
                    title: 'The Architect',
                    text: 'Big-picture thinker. Decides what to build and — more importantly — what to cut. Manages scope, timeline, and keeps the team aligned on the core vision.'
                },
                {
                    title: 'The Builder',
                    text: 'Rapid prototyper and demo builder. In the AI era, this person orchestrates multiple AI tools to ship features at unprecedented speed.'
                },
                {
                    title: 'The Storyteller',
                    text: 'Dedicated to the pitch from hour one. Writes the narrative, designs the deck, rehearses the demo flow. This role is chronically undervalued — and it\'s what wins.'
                }
            ]
        },
        {
            id: 'ai-tools',
            tag: '03',
            title: 'AI Tool Arsenal',
            subtitle: 'Your unfair advantage in 2025.',
            lead: 'AI tools have fundamentally changed hackathons. Teams that master the AI stack build in hours what used to take days.',
            categories: [
                {
                    name: 'Ideation & Research',
                    tools: [
                        { name: 'Claude / ChatGPT', desc: 'Brainstorm ideas matching hackathon themes, refine problem statements, write documentation' },
                        { name: 'Perplexity', desc: 'Quick competitor analysis, market sizing, and technical feasibility research' }
                    ]
                },
                {
                    name: 'Development',
                    tools: [
                        { name: 'Cursor', desc: 'AI-native IDE for repo-wide reasoning, multi-file refactors, and code review' },
                        { name: 'Claude Code', desc: 'Autonomous coding agent — build features end-to-end from natural language' },
                        { name: 'GitHub Copilot', desc: 'Real-time code completion that speeds up routine coding by 30-50%' },
                        { name: 'Replit Agent', desc: 'Full-stack app generation with integrated testing and deployment' }
                    ]
                },
                {
                    name: 'Design & Frontend',
                    tools: [
                        { name: 'v0 (Vercel)', desc: 'Generate production-ready UI components and page layouts from text prompts' },
                        { name: 'Bolt / Lovable', desc: 'Spin up complete web apps from natural language descriptions' },
                        { name: 'Midjourney / DALL-E', desc: 'Generate logos, icons, hero images, and visual assets in minutes' }
                    ]
                },
                {
                    name: 'Presentation',
                    tools: [
                        { name: 'Gamma / Beautiful.ai', desc: 'AI-powered slide generation from outlines — skip the template struggle' },
                        { name: 'Claude', desc: 'Write pitch scripts that make complex technical concepts accessible to any audience' }
                    ]
                }
            ],
            workflow: {
                title: 'The Vibe Coding Loop',
                description: 'The dominant hackathon workflow in 2025. Repeat every 90 minutes:',
                steps: ['Prompt — describe what you want', 'Generate — let AI produce the code', 'Preview — test and inspect the output', 'Critique — refine and iterate']
            }
        },
        {
            id: 'execution',
            tag: '04',
            title: 'Execution Strategy',
            subtitle: '48 hours. Every minute counts.',
            lead: 'The best teams don\'t code more — they make better decisions about what to build and when to stop.',
            timeline: [
                { time: 'Hour 0-1', task: 'Finalize idea, assign roles, sketch architecture', phase: 'plan' },
                { time: 'Hour 1-3', task: 'Set up project skeleton, begin core feature', phase: 'plan' },
                { time: 'Hour 3-8', task: 'Build MVP with AI tools, iterate rapidly', phase: 'build' },
                { time: 'Hour 8-10', task: 'Start pitch deck, record draft demo', phase: 'build' },
                { time: 'Hour 10-16', task: 'Polish features, fix bugs, refine demo', phase: 'build' },
                { time: 'Hour 16-20', task: 'Feature freeze. Focus on demo and pitch', phase: 'polish' },
                { time: 'Hour 20-22', task: 'Full pitch rehearsals, gather feedback', phase: 'polish' },
                { time: 'Hour 22-24', task: 'Final polish, submit, rest before presenting', phase: 'polish' }
            ],
            rules: [
                'Limit yourself to 3 features maximum. Nail them.',
                'Prioritize polished UI over functional backend — judges evaluate what they can see.',
                'Test your demo flow 10 times before the pitch. A crash during demo is fatal.',
                'Take breaks, eat, sleep. Exhausted teams make bad decisions.'
            ]
        },
        {
            id: 'judging',
            tag: '05',
            title: 'What Judges Want',
            subtitle: 'Decode the scoring rubric.',
            lead: 'After interviewing dozens of hackathon judges, these are the criteria that consistently determine winners.',
            criteria: [
                {
                    name: 'Innovation',
                    weight: '25%',
                    description: 'Is the approach genuinely fresh? Judges penalize "the same project with a different label."'
                },
                {
                    name: 'Problem Relevance',
                    weight: '25%',
                    description: 'Does it solve a real, specific pain point? Narrow beats broad. "Help diabetic patients track medication interactions" beats "fix healthcare."'
                },
                {
                    name: 'Technical Execution',
                    weight: '20%',
                    description: 'Does the demo actually work? Did the team tackle a genuinely difficult technical challenge?'
                },
                {
                    name: 'Design & UX',
                    weight: '15%',
                    description: 'Is it intuitive and polished? First impressions are formed in the first 5 seconds of the demo.'
                },
                {
                    name: 'Storytelling',
                    weight: '15%',
                    description: 'Can the team articulate why this matters? The best pitches make judges feel the problem before showing the solution.'
                }
            ]
        },
        {
            id: 'pitch',
            tag: '06',
            title: 'The Winning Pitch',
            subtitle: 'Where hackathons are won or lost.',
            lead: 'You have 3-5 minutes to convince judges that your idea matters. Here\'s the proven structure that works.',
            slides: [
                {
                    name: 'Hook',
                    duration: '30 sec',
                    description: 'Open with a relatable story or striking statistic. Make the problem feel urgent and real. You have one chance to capture attention.'
                },
                {
                    name: 'Problem',
                    duration: '30 sec',
                    description: 'Define the specific pain point clearly. Use concrete examples. Make judges feel the frustration.'
                },
                {
                    name: 'Solution',
                    duration: '30 sec',
                    description: 'What your product does and why it\'s different. One sentence. No jargon. If you can\'t explain it simply, you don\'t understand it well enough.'
                },
                {
                    name: 'Live Demo',
                    duration: '90 sec',
                    description: 'The most important part. Show, don\'t tell. Walk through the core user journey. Have a backup video in case of technical issues.'
                },
                {
                    name: 'Impact',
                    duration: '30 sec',
                    description: 'Any validation, data, or user feedback. Who benefits and how much? Make the impact tangible.'
                },
                {
                    name: 'Vision',
                    duration: '30 sec',
                    description: 'Where this goes after the hackathon. End with a strong emotional closer that sticks in judges\' minds.'
                }
            ]
        },
        {
            id: 'mistakes',
            tag: '07',
            title: 'Fatal Mistakes',
            subtitle: 'Learn from others\' failures.',
            lead: 'These are the patterns that consistently sink hackathon teams. Every one of these comes from real post-mortems.',
            mistakes: [
                {
                    category: 'Planning',
                    items: [
                        'Jumping into code before aligning on the problem and approach',
                        'Trying to build too many features — the graveyard of hackathon projects',
                        'Picking problems too broad in scope to solve in 48 hours'
                    ]
                },
                {
                    category: 'Execution',
                    items: [
                        'Over-engineering when a working prototype is all you need',
                        'Leaving testing to the last minute — bugs during demo are devastating',
                        'Ignoring judging criteria and building something impressive but off-theme'
                    ]
                },
                {
                    category: 'Presentation',
                    items: [
                        'Not preparing the pitch until the final hours',
                        'No working demo — slides with screenshots never win',
                        'Technical jargon overload — judges are often non-technical'
                    ]
                }
            ]
        }
    ]
};
