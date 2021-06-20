# One Million Push Notification

a Nodejs project for simulation push notification data to over 1 million data users

## Usage

```bash
# Start docker build & compose
bash start.sh
# Stop
bash stop.sh
```

## How to count Estimation time

Queue running with recursive function and run in event loop via `setTimeout`, so for estimation finish time we can calculate `delay time` in parameter `setTimeout` with `total of jobs`, example simulation

```
estimate time = delay time (in miliseconds) * total of jobs
estimate time = 10 ms * 1.000.000
estimate time = 10.000.000 ms
estimate time = 2,777778 hours (3 hours)
```

see time calculator:
https://www.google.com/search?q=500000000+miliseconds+to+hours
