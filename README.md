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
estimate time = 500 ms * 1.000.000
estimate time = 500.000.000 ms
estimate time = 5,78703703704 days (6 days)
```
see time calculator: 
https://www.google.com/search?q=500000000+miliseconds+to+days
