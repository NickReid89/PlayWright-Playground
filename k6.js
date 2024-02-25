import http from 'k6/http';
import { Rate, Trend } from 'k6/metrics';
import { check } from 'k6';

const failRate = new Rate('failed_requests');
const requestDuration = new Trend('request_duration');
const params = {
  headers: {
    'Accept': 'image/png'
  },
};

export let options = {
  scenarios: {
    stress_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '2m', target: 100 }, // ramp up to 100 VUs in 2 minutes
        { duration: '5m', target: 100 }, // stay at 100 VUs for 5 minutes
        { duration: '2m', target: 0 },   // ramp down to 0 VUs in 2 minutes
      ],
      gracefulRampDown: '1m',
    },
  },
};

export default function () {

let result = http.get('http://httpbin/get');
requestDuration.add(result.timings.duration);
check(result, {
  'http response status code is 200': result.status === 200,
});
failRate.add(result.status !== 200);

result = http.get("http://httpbin/status/200");
requestDuration.add(result.timings.duration);
check(result, {
  'http response status code is 200': result.status === 200,
});
failRate.add(result.status !== 200);

result = http.get("http://httpbin/image", params);
requestDuration.add(result.timings.duration);
check(result, {
  'http response status code is 200': result.status === 200,
});
failRate.add(result.status !== 200);

}
