module.exports = {
    branches: ["main"],
    plugins: [
        "semantic-release-sfdx",
        "@semantic-release/git",
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
