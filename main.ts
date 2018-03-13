#!/usr/bin/env node

import * as program from 'commander';
import * as path from 'path';
import * as updateNotifier from 'update-notifier';
import * as readPkgUp from 'read-pkg-up';
import { execute, version } from 'ng-packagr';
import { ParsedConfiguration } from '@angular/compiler-cli';

const DEFAULT_PROJECT_PATH = path.resolve(process.cwd(), 'ng-package.json');

function parseProjectPath(parsed: string): string {
    return parsed || DEFAULT_PROJECT_PATH;
}

program
    .name('ng-packagr')
    .option('-V, --version', 'Prints version info')
    .option(
        '-p, --project [path]',
        "Path to the 'ng-package.json' or 'package.json' file.",
        parseProjectPath,
        DEFAULT_PROJECT_PATH
    );

const dir = path.dirname(module.filename);
const pkg = readPkgUp.sync({ cwd: dir }).pkg;
updateNotifier({ pkg }).notify();

program.on('option:version', () => {
    version(pkg);
    process.exit(0);
});

program.parse(process.argv);
import { ngPackagr } from 'ng-packagr/lib/ng-v5/packagr';
import { Command } from 'ng-packagr/lib/commands/command';
export interface CliArguments {
    /** Path to the project file 'package.json', 'ng-package.json', or 'ng-package.js'. */
    project: string;
}
export const build: Command<CliArguments, void> = (opts) => {
    const ngPack = ngPackagr().forProject(opts.project);
    console.log(ngPack);
    return ngPack
        .build();
}

Promise.resolve(build({ project: program.opts().project }));