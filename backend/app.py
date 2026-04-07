from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import notes


app = FastAPI(
    title="Notes API",
    description="A simple notes backend built with FastAPI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://127.0.0.1:5173", "http://172.17.0.2"], # Add your frontend site address here including the port number if it is not running on port 80 or 443
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.include_router(notes.router)




