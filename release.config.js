module.exports = {
    branches: ["main"],
    plugins: [
        "semantic-release-sfdx",
        [
            "@semantic-release/git",
            {
                assets: ["docs", "package.json", "sfdx-project.json"],
                message:
                    "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
            }
        ],
        "@semantic-release/release-notes-generator",
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "angular",
                releaseRules: [
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
        ]
    ]
};
