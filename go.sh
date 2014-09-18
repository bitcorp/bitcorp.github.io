kill -9 `cat server.pid`
python -m SimpleHTTPServer &
echo $! > server.pid
some_pid=$!
google-chrome http://localhost:8000
