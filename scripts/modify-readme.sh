#!/usr/bin/env bash

# One time use 
# sed -i -r 's|\../img|./docs/img|g' README.md


# sed -i "s|<img src=\"\(.*\)\" height=\"\(.*\)\" width=\"\(.*\)\" align=\"\(.*\)\" />|<img src={require('\1').default} height=\"\2\" width=\"\3\" align=\"\4\" />|g" example.html
