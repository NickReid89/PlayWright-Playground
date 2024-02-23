from locust import HttpUser, task, between

class MyUser(HttpUser):
    wait_time = between(1, 2)

    @task
    def get(self):
        self.client.get("/")

    @task
    def status_codes(self):
        self.client.get("/status/200")

    @task
    def get_images(self):
        headers = {'Accept': 'image/png'}
        self.client.get("/image", headers=headers)
