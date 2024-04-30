module.exports = {
    branches: ["main"],
    plugins: [
        "semantic-release-sfdx",
        [
            "@semantic-release/release-notes-generator",
            {
                preset: "conventionalcommits",
                presetConfig: {
                    types: [
                        {
                            type: "feat",
                            section: ":sparkles: New Features",
                            hidden: false
                        },
                        {
                            type: "fix",
                            section: ":bug: Fixes",
                            hidden: false
                        },
                        {
                            type: "docs",
                            section: ":memo: Documentation",
                            hidden: false
                        },
                        {
                            type: "style",
                            section: ":barber: Style Changes",
                            hidden: false
                        },
                        {
                            type: "refactor",
                            section: ":zap: Refactoring",
                            hidden: false
                        },
                        {
                            type: "perf",
                            section: ":fast_forward: Performance Improvements",
                            hidden: false
                        },
                        {
                            type: "test",
                            section: ":white_check_mark: Tests",
                            hidden: false
                        },
                        {
                            type: "ci",
                            section: ":repeat: CI",
                            hidden: false
                        },
                        {
                            type: "chore",
                            hidden: true
                        }
                    ]
                }
            }
        ],
        [
            "@semantic-release/git",
            {
                assets: [
                    "docs",
                    "package.json",
                    "sfdx-project.json",
                    "README.md"
                ],
                message:
                    "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "angular",
                releaseRules: [
                    { type: "feat", release: "minor" },
                    { type: "fix", release: "patch" },
                    { type: "docs", release: "patch" },
                    { type: "style", release: "patch" },
                    { type: "refactor", release: "patch" },
                    { type: "perf", release: "patch" },
                    { type: "test", release: "patch" },
                    { type: "build", release: "patch" },
                    { type: "ci", release: "patch" },
                    { type: "chore", release: "patch" }
                ]
            }
        ],
        [
            "@semantic-release/github",
            {
                draftRelease: true
            }
        ],
        [
            "semantic-release-jira-notes",
            {
                jiraHost: "tractorzoom.atlassian.net",
                preset: "conventionalcommits",
                presetConfig: {
                    types: [
                        { type: "feat", section: "Features" },
                        { type: "fix", section: "Bug Fixes" },
                        {
                            type: "build",
                            section: "Dependencies Updates",
                            hidden: false
                        }
                    ]
                },
                ticketPrefixes: ["ENG", "AP2"]
            }
        ],
        [
            "semantic-release-jira-releases",
            {
                projectId: "ENG",
                releaseNameTemplate: "Delete ME v${version}",
                jiraHost: "tractorzoom.atlassian.net",
                ticketPrefixes: ["ENG"],
                released: false
            }
        ]
    ]
};
