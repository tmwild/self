export default [
    {
        name: 'Senior Developer',
        id: 'senior',
        deadline: 'No deadline',
        description: 'Progress to a senior position within Booking.com',
        foundationStones: [
            {
                id: 'senior-help',
                title: 'Helpfulness',
                description: 'Helps other FE devs with bugs, experiments and rollouts.',
                status: 40
            }, {
                id: 'senior-own',
                title: 'Ownership',
                description: 'Involved in out of scope projects, does regular rollouts.',
                status: 60
            }, {
                id: 'senior-comm',
                title: 'Community Contributer',
                description: 'Regular contributer to community channels and sometimes presenter. Is known amongst the craft community.',
                status: 5
            }, {
                id: 'senior-velo',
                title: 'Solid Team Velocity',
                description: 'Prioritises team work and manages workload well, with high quality.',
                status: 70
            }, {
                id: 'senior-craft',
                title: 'Craft Excellence',
                description: 'Contributes toward improving the codebase, rarely causes bugs or errors and has a great understanding of craft.',
                status: 60
            }
        ],
        tasks: [{
                description: 'Build a NextJS app',
                reward: 'Nice meal out',
                stone: 'senior-craft',
                status: 1
            },{
                description: 'Help out 5 times per week',
                reward: 'Get a new backpack',
                stone: 'senior-comm',
                status: 0
            }, {
                description: 'Finish weekly tasks early for 1 month',
                reward: 'New boxing gloves',
                stone: 'senior-velo',
                status: 0
            }, ],
        status: 'open'

    },
    {
        name: 'Run 10k',
        id: 'running',
        deadline: '25-12-2018',
        description: 'Run 10k without any walk breaks before Christmas',
        foundationStones: [
            {
                id: 'run-reg',
                title: 'Regular Runs',
                description: 'Helps other FE devs with bugs, experiments and rollouts.',
                status: 60
            }, {
                id: 'run-diet',
                title: 'Diet',
                description: 'Involved in out of scope projects, does regular rollouts.',
                status: 70
            }, {
                id: 'run-sprint',
                title: 'Sprints',
                description: 'Regular contributer to community channels and sometimes presenter. Is known amongst the craft community.',
                status: 20
            }, {
                id: 'run-log',
                title: 'Log Progress',
                description: 'Prioritises team work and manages workload well, with high quality.',
                status: 100
            }
        ],
        tasks: [{
                description: 'Run 3k',
                reward: 'One cheat meal',
                stone: 'run-reg',
                status: 1
            },{
                description: 'Run 5k',
                reward: 'Get a new backpack',
                stone: 'run-reg',
                status: 0
            }, {
                description: 'Run 7.5k',
                reward: 'New boxing gloves',
                stone: 'run-reg',
                status: 0
            }, ],
        status: 'open'

    }
]