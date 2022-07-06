function cleanup {
  echo "cleaning up ..."
}

# call cleanup on CRTL+C
trap cleanup EXIT

cd nextjs
bun dev
