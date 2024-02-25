import http from 'k6/http';

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
  http.get('${__ENV.BASE_URL}/get');
  http.get("${__ENV.BASE_URL}/get/status/200");
  const params = {
    headers: {
      'Accept': 'image/png'
    },
  };
  http.get("${__ENV.BASE_URL}/get/image", params);
}
