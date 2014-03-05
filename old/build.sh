#!/bin/sh

function failIfFound {
    if [ -n "`grep -E \"$1\" build.out`" ]; then
        buildFail "$2"
    fi
}

function failIfNotFound {
    if [ -z "`grep -E \"$1\" build.out`" ]; then
        buildFail "$2"
    fi
}

function buildFail {
    echo "$1"
    echo "Build output below"
    cat build.out
    rm build.out
    exit 2
}

function verifyBuildOutput {
    failIfFound "failed to" "BUILD FAILED"
    failIfFound "FileNotFoundException" "BUILD FAILED"
    failIfFound "^-save.*\(0\)$" "BUILD FAILED : resource probably not found (saved with zero size)"
    failIfFound "TypeError" "BUILD FAILED"
    failIfNotFound "Nice\!"
}

function build {
    echo BUILDING JMVC APP $1
    export LC_ALL=en_US.UTF-8
    export LANG=en_US.UTF-8
    mkdir -p out/$1
    sh ./steal/js "$1/build.js" > build.out
    verifyBuildOutput
    rm build.out
}

rm -rf out
build lwt

echo BUILD SUCCESSFUL