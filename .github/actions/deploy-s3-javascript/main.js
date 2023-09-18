const core = require('@actions/core');
// useful for communicating with github APIs, e.g. github.Octokit(), github.context
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
    // 1) Get some input values
    const bucket = core.getInput('bucket', { required: true });
    const bucketRegion = core.getInput('bucket-region', { required: true });
    const distFolder = core.getInput('dist-folder', { required: true });

    // 2) Upload files
    // exec.exec(`aws s3 sync <local-folder> <s3-bucket>`);
    // const s3Uri = `s3://${bucket}`
    // below command looks for access key environment variables automatically...
    // exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);
    core.notice("Hello from my custom JavaScript action.");
    core.notice(`bucket: ${bucket}`);
    core.notice(`bucketRegion: ${bucketRegion}`);
    core.notice(`distFolder: ${distFolder}`);
}

run();
