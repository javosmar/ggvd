#! /bin/bash

docker run \
    --publish=7474:7474 --publish=7687:7687 \
    --volume="$PWD"/data:/data \
    --name="neo4j_container" \
    --env=NEO4J_AUTH=none \
    --env=NEO4J_ACCEPT_LICENSE_AGREEMENT=yes \
    neo4j:4.0.0-enterprise