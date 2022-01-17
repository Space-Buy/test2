from fastapi import FastAPI

app=FastAPI()
origins=["http://localhost:3000"]

from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins= origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

@app.get("/get")
def get():
    return {"data":"Hello World"}