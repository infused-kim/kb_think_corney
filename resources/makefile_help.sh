#!/bin/sh

# This script outputs a help for all commented targets in the included
# makefiles.
#
# It is used within `help.mk`.

print_helpx() {
    echo "$1" | gawk '
        match($0, "(.*):.*## (.*)", m) {
            gsub("-default", "", m[1]);
            printf "  \033[36m%-30s\033[0m %s\n", m[1], m[2]
        }
    ' ;
};

if ! [ -x "$(command -v gawk)" ]; then
    echo "Please install gawk to display help."
    exit 1;
fi

MAKEFILE_LIST=$1;

# Get all targets with comments from all makefiles
MK_TARGETS_ALL=$(grep -E '^[a-zA-Z_-]+:.*?## .*$$' $MAKEFILE_LIST )

# Process target lines to generate help output
HELP=$(print_helpx "$MK_TARGETS_ALL");

echo "Commands:";
echo "$HELP";
