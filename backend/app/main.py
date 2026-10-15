from fastapi import FastAPI

app = FastAPI(title="Flippy API")


@app.get("/")
def root():
    return {"message": "Flippy API работает"}