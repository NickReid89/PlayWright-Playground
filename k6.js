import http from 'k6/http';

export default function () {
  http.get(`http://127.0.0.1/get`);
  // http.get(`http://localhost/get/status/200`);
  // const params = {
  //   headers: {
  //     'Accept': 'image/png'
  //   },
  // };
  // http.get(`http://localhost/get/image`, params);
}
